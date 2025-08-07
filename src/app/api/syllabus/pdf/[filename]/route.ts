import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../lib/mongodb';

export async function GET(request: NextRequest, { params }: { params: Promise<{ filename: string }> }) {
    try {
        const { filename } = await params;

        const { db } = await connectToDatabase();
        const collection = db.collection('Syllabus');

        const syllabusEntry = await collection.findOne({ pdfFileName: filename });

        if (!syllabusEntry || !syllabusEntry.pdfBuffer) {
            return NextResponse.json(
                { error: 'PDF not found' },
                { status: 404 }
            );
        }

        // Convert Buffer to Uint8Array for NextResponse
        const pdfData = new Uint8Array(syllabusEntry.pdfBuffer.buffer);

        return new NextResponse(pdfData, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="${filename}"`,
                'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
                'CDN-Cache-Control': 'public, max-age=86400',
                'Vercel-CDN-Cache-Control': 'public, max-age=86400',
            },
        });
    }
    
    catch (error) {
        console.error('Error serving PDF:', error);
        return NextResponse.json(
            { error: 'Failed to serve PDF' },
            { status: 500 }
        );
    }
}
