"use client";
import Game from "@/Components/Game";
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { GameOptions, SummaryType } from "@/Shared/typings";
import { useEffect, useState } from "react";

// Configuration for categories with their display info
const categoryConfig = {
    word: {
        title: "Word games:",
        icon: "abc",
        id: "wrdGames"
    },
    geography: {
        title: "Geography games:",
        icon: "globe",
        id: "grGames"
    },
    math: {
        title: "Mathematical games:",
        icon: "calculate",
        id: "mtGames"
    },
    quiz: {
        title: "Quiz & Crossword games:",
        icon: "crossword",
        id: "qzGames"
    },
    medias: {
        title: "Medias:",
        icon: "subscriptions",
        id: "mdGames"
    }
};

const CommunityGames = () => {
    const [data, setData] = useState<Record<string, GameOptions[]> | null>(null);

    useEffect(() => {
        fetch(window.location.origin + '/Data/CommunityGames.json')
            .then(res => res.json())
            .then(response => setData(response))
            .catch(err => setData({}));
    }, []);

    const summaries: SummaryType[] = data ? Object.keys(categoryConfig).map(categoryKey => {
        const category = categoryConfig[categoryKey as keyof typeof categoryConfig];
        const games = data[categoryKey] || [];
        
        return {
            Name: category.title.replace(':', ''),
            Link: category.id,
            IsAnId: true,
            SubSummaries: games.map(game => ({
                Name: game.Name,
                Link: game.ID,
                IsAnId: true
            }))
        };
    }) : [];

    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Community Games</h1>

                <p>Enjoy a wide range of community games from word to geography to musical. All enlisted in a single place to access for
                    convenience.</p>

                {data && Object.keys(categoryConfig).map((categoryKey, index) => {
                    const category = categoryConfig[categoryKey as keyof typeof categoryConfig];
                    const games = data[categoryKey] || [];
                    
                    return (
                        <div key={categoryKey}>
                            <div className="iconed-heading">
                                <span slot="start" className="material-symbols-outlined">{category.icon}</span>
                                <h2 id={category.id}>{category.title}</h2>
                            </div>

                            <div className="card-container">
                                {games.map(game => (
                                    <Game 
                                        key={game.ID} 
                                        Name={game.Name} 
                                        ID={game.ID} 
                                        Image={game.Image} 
                                        Link={game.Link} 
                                        Description={game.Description} 
                                    />
                                ))}
                            </div>

                            {index < Object.keys(categoryConfig).length - 1 && (
                                <>
                                    <br />
                                    <br />
                                </>
                            )}
                        </div>
                    );
                })}
            </main>
            <Summary PageName="Community Games" Elements={summaries} />
        </PageLayout>
    );
}

export default CommunityGames;