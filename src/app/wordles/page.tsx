'use client';

import { useEffect, useState } from 'react';
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";
import Link from "next/link";
import { cachedFetch } from "@/lib/cache";

interface WordleGame {
    _id: string;
    id: string;
    name: string;
    link: string;
    image: string;
    imageData?: string;
    count: number | null;
    displayCount: string;
    description: string;
    specialType: string | null;
    icon?: string;
}

const summaries: SummaryType[] = [
    { Name: "Wordle", Link: "w1", IsAnId: true },
    { Name: "Dordle", Link: "w2", IsAnId: true },
    { Name: "Trodle", Link: "w3", IsAnId: true },
    { Name: "Quordle", Link: "w4", IsAnId: true },
    { Name: "Hexordle", Link: "w6", IsAnId: true },
    { Name: "Octordle", Link: "w8", IsAnId: true },
    { Name: "Sedecordle", Link: "w16", IsAnId: true },
    { Name: "Duotrigordle", Link: "w32", IsAnId: true },
    { Name: "Sexaginta-Quattuordle", Link: "w64", IsAnId: true },
    { Name: "Kilordle", Link: "w1000", IsAnId: true },
    { Name: "Myriadle", Link: "w10000", IsAnId: true },
    { Name: "QWordle", Link: "wq", IsAnId: true },
    { Name: "Polygonle", Link: "plygn", IsAnId: true }
];


const Wordles = () => {
    const [games, setGames] = useState<WordleGame[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const data = await cachedFetch('/api/wordle-games?sortBy=count&order=asc', undefined, 5 * 60 * 1000); // Cache for 5 minutes
                setGames(data);
            }

            catch (err) { setError(err instanceof Error ? err.message : 'An error occurred'); }
            finally { setLoading(false); }
        };

        fetchGames();
    }, []);

    const renderGameCard = (game: WordleGame) => {
        const isSpecialType = game.specialType === 'quantum' || game.specialType === 'shape';

        return (
            <Link href={game.link} id={game.id} target="_blank" rel="noopener" key={game._id}>
                <div>
                    <img
                        src={game.imageData || game.image}
                        alt={game.name}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div>
                    <div>
                        <h2>{game.name}</h2>
                        {isSpecialType ? (
                            <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                                <h1>{game.displayCount}</h1>
                                {game.icon && (
                                    <span className="material-symbols-outlined" style={{ paddingTop: "23px" }}>
                                        {game.icon}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <h1>{game.displayCount}</h1>
                        )}
                    </div>
                    <p>{game.description}</p>
                </div>
            </Link>
        );
    };

    if (loading)
        return (
            <PageLayout>
                <main>
                    <h1 className="page-title">Wordle games</h1>
                    <p>Loading games...</p>
                </main>
            </PageLayout>
        );

    if (error)
        return (
            <PageLayout>
                <main>
                    <h1 className="page-title">Wordle games</h1>
                    <p>Error loading games: {error}</p>
                </main>
            </PageLayout>
        );

    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Wordle games</h1>
                <p>Wordle games are word-based puzzles or games that challenge players to guess a hidden word based on clues or limited
                    attempts. Below are some popular Wordle games enlisted for easier access and convenience.</p>
                <br />
                <h2>Games:</h2>

                <div className="card-container">
                    {games.map(renderGameCard)}
                </div>
            </main>
            <Summary Elements={summaries} PageName="Wordles" style={{ display: "flex", flexDirection: "column", gap: "15px", paddingTop: "10px" }} />
        </PageLayout>
    );
};

export default Wordles;