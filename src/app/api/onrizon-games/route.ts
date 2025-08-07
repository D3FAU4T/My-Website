import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

export async function GET() {
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('Onrizon Games');

        const games = await collection.find({}).toArray();

        const gamesWithImages = games.map(game => ({
            ...game,
            imageData: game.image ? `data:image/jpeg;base64,${game.image.toString('base64')}` : null,
            image: game.imagePath
        }));

        const response = NextResponse.json(gamesWithImages);

        // Cache for 5 minutes
        response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300');
        response.headers.set('CDN-Cache-Control', 'public, max-age=300');
        response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=300');

        return response;
    } catch (error) {
        console.error('Error fetching Onrizon games:', error);
        return NextResponse.json(
            { error: 'Failed to fetch Onrizon games' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const gameData = await request.json();

        const { db } = await connectToDatabase();
        const collection = db.collection('Onrizon Games');

        // Add timestamps
        const newGame = {
            ...gameData,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await collection.insertOne(newGame);

        return NextResponse.json({
            success: true,
            insertedId: result.insertedId
        });
    } catch (error) {
        console.error('Error creating Onrizon game:', error);
        return NextResponse.json(
            { error: 'Failed to create Onrizon game' },
            { status: 500 }
        );
    }
}
