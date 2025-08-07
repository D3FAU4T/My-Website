import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');

        const { db } = await connectToDatabase();
        const collection = db.collection('Community Games');

        let query = {};
        if (category && category !== 'all') {
            query = { category: category };
        }

        const games = await collection.find(query).toArray();

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
        console.error('Error fetching community games:', error);
        return NextResponse.json(
            { error: 'Failed to fetch community games' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const gameData = await request.json();

        const { db } = await connectToDatabase();
        const collection = db.collection('Community Games');

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
        console.error('Error creating community game:', error);
        return NextResponse.json(
            { error: 'Failed to create community game' },
            { status: 500 }
        );
    }
}
