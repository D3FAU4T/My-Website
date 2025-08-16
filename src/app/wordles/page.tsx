"use client";
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WordleItem {
    id: string;
    name: string;
    image: string;
    link: string;
    description: string;
    badgeLabel?: string;
    badgeIconName?: string;
}

type WordlesData = WordleItem[];

const Wordles = () => {
    const [data, setData] = useState<WordlesData | null>(null);

    useEffect(() => {
        fetch('/Data/Wordles.json')
            .then((res) => res.json())
            .then((json: WordlesData) => setData(json))
            .catch(() => setData([]));
    }, []);

    const summaries: SummaryType[] = (data ?? []).map((item) => ({
        Name: item.name,
        Link: item.id,
        IsAnId: true,
    }));

    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Wordle games</h1>
                <p>
                    Wordle games are word-based puzzles or games that challenge players to guess a hidden word based on clues or
                    limited attempts. Below are some popular Wordle games enlisted for easier access and convenience.
                </p>
                <br />
                <h2>Games:</h2>

                <div className="card-container">
                    {(data ?? []).map((item) => (
                        <Link key={item.id} href={item.link} id={item.id} target="_blank" rel="noopener">
                            <div>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div>
                                <div>
                                    <h2>{item.name}</h2>
                                    {item.badgeIconName ? (
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                                            <h2>{item.badgeLabel}</h2>
                                            <span className="material-symbols-outlined" style={{ paddingTop: '23px' }}>
                                                {item.badgeIconName}
                                            </span>
                                        </div>
                                    ) : item.badgeLabel ? (
                                        <h2>{item.badgeLabel}</h2>
                                    ) : null}
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Summary
                Elements={summaries}
                PageName="Wordles"
                style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '10px' }}
            />
        </PageLayout>
    );
};

export default Wordles;