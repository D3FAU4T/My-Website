"use client";
import Link from "next/link";
import PageLayout from "@/Components/PageLayout"
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";
import { useEffect, useState } from "react";

interface OnrizonGame {
    id: string;
    name: string;
    image: string;
    link: string;
    description: string;
}

interface OnrizonData extends Array<OnrizonGame> { }

const OnrizonGames = () => {
    const [data, setData] = useState<OnrizonData | null>(null);

    useEffect(() => {
        fetch(window.location.origin + '/Data/Onrizon.json')
            .then(res => res.json())
            .then(response => setData(response))
            .catch(err => setData([]));
    }, []);

    const summaries: SummaryType[] = data ? data.map(game => ({
        Name: game.name,
        Link: game.id,
        IsAnId: true
    })) : [];

    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Onrizon Games</h1>
                <p><Link href="https://onrizon.com/" rel="noopener" target="_blank">Onrizon Social Games</Link> is an innovative online game studio that
                    prides itself on blending tradition
                    with technology to craft immersive gaming experiences. Established in 2012, the company thrives on
                    creating a multitude of new stories by merging two distinct universes. With a focus on
                    multi-platform social games, Onrizon is dedicated to multiplying stories through fun and engaging
                    experiences. The team at Onrizon is lean, integrated, and multidisciplinary, striving to forge new
                    and improbable connections constantly. Their diverse team includes talents like Henrique Moreira, a
                    Full Stack Developer, and Samir Taiar, who specializes in Design and Illustration, among others.
                    They also have a Community Manager, Ana Nascimento, and a Translator, Marina Leroy, contributing to
                    their dynamic team. Onrizon's commitment to its products and people is evident in its approach to
                    game development and community engagement.
                </p>
                <br />
                <h2>Games:</h2>
                <br />
                <div className="card-container">
                    {data?.map(game => (
                        <Link key={game.id} id={game.id} href={game.link} target="_blank" rel="noopener">
                            <div>
                                <img src={game.image} alt={game.name} />
                            </div>
                            <div>
                                <h2>{game.name}</h2>
                                <p>{game.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Summary PageName="Onrizon Games" Elements={summaries} style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "10px" }} />
        </PageLayout>
    )
}

export default OnrizonGames;