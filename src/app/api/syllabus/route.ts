import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');
        const semester = searchParams.get('semester');

        const { db } = await connectToDatabase();
        const collection = db.collection('Syllabus');

        if (type === 'subjects' && semester) {
            const subjects = await collection.find({ semesterId: semester }).toArray();
            const response = NextResponse.json(subjects);
            response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300');
            response.headers.set('CDN-Cache-Control', 'public, max-age=300');
            response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=300');
            return response;
        }
        
        else if (type === 'subjects') {
            const subjects = await collection.find({}).toArray();
            const response = NextResponse.json(subjects);
            response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300');
            response.headers.set('CDN-Cache-Control', 'public, max-age=300');
            response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=300');
            return response;
        }
        
        else {
            const allSubjects = await collection.find({}).toArray();

            const semesterMap = new Map();

            allSubjects.forEach(subject => {
                if (!semesterMap.has(subject.semesterId)) {
                    semesterMap.set(subject.semesterId, {
                        id: subject.semesterId,
                        title: subject.semesterTitle,
                        subjects: []
                    });
                }

                semesterMap.get(subject.semesterId).subjects.push({
                    code: subject.subjectCode,
                    name: subject.subjectName,
                    syllabusPath: subject.originalPath
                });
            });

            const semesters = Array.from(semesterMap.values()).sort((a, b) => {
                const semesterOrder = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
                return semesterOrder.indexOf(a.id) - semesterOrder.indexOf(b.id);
            });

            const response = NextResponse.json({ semesters });
            response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300');
            response.headers.set('CDN-Cache-Control', 'public, max-age=300');
            response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=300');
            return response;
        }
    }
    
    catch (error) {
        console.error('Error fetching syllabus:', error);
        return NextResponse.json(
            { error: 'Failed to fetch syllabus' },
            { status: 500 }
        );
    }
}
