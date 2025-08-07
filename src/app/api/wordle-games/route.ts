import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const sortBy = searchParams.get('sortBy') || 'count';
        const order = searchParams.get('order') || 'asc';

        const { db } = await connectToDatabase();
        const collection = db.collection('Wordle Games');

        // Build sort criteria
        let sortCriteria: any = {};
        if (sortBy === 'count')
            sortCriteria = { count: order === 'desc' ? -1 : 1 };
        
        else if (sortBy === 'name')
            sortCriteria = { name: order === 'desc' ? -1 : 1 };

        const games = await collection.find({}).sort(sortCriteria).toArray();

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
    }
    
    catch (error) {
        console.error('Error fetching Wordle games:', error);
        return NextResponse.json(
            { error: 'Failed to fetch Wordle games' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const gameData = await request.json();

        const { db } = await connectToDatabase();
        const collection = db.collection('Wordle Games');

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
    }
    
    catch (error) {
        console.error('Error creating Wordle game:', error);
        return NextResponse.json(
            { error: 'Failed to create Wordle game' },
            { status: 500 }
        );
    }
}
