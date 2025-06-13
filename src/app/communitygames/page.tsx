"use client";
import Game from "@/Components/Game";
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { GameOptions, SummaryType } from "@/Shared/typings";
import { useEffect, useState } from "react";

const summaries: SummaryType[] = [
    {
        Name: "Word Games",
        Link: "wrdGames",
        IsAnId: true,
        SubSummaries: [
            { Name: "Bombparty", Link: "jklm", IsAnId: true },
            { Name: "Semantle", Link: "semantle", IsAnId: true },
            { Name: "Waffle", Link: "waffle", IsAnId: true },
            { Name: "Weaver", Link: "weaver", IsAnId: true },
            { Name: "Redactle", Link: "redactle", IsAnId: true },
            { Name: "Phrasle", Link: "phrasle", IsAnId: true },
            { Name: "Squaredle", Link: "squaredle", IsAnId: true },
            { Name: "Pimantle", Link: "pimantle", IsAnId: true },
            { Name: "Connections", Link: "connections", IsAnId: true },
            { Name: "Decipher", Link: "decipher", IsAnId: true },
        ]
    },
    {
        Name: "Geography Games",
        Link: "grGames",
        IsAnId: true,
        SubSummaries: [
            { Name: "Geoguessr", Link: "geoguessr", IsAnId: true },
            { Name: "Flaggle", Link: "flaggle", IsAnId: true },
            { Name: "Globle", Link: "globle", IsAnId: true },
            { Name: "Worldle", Link: "worldle", IsAnId: true },
            { Name: "Countryle", Link: "countryle", IsAnId: true },
            { Name: "Tradle", Link: "tradle", IsAnId: true }
        ]
    },
    {
        Name: "Mathematical Games",
        Link: "mtGames",
        IsAnId: true,
        SubSummaries: [
            { Name: "Numble", Link: "numble", IsAnId: true },
            { Name: "Numberle", Link: "numberle", IsAnId: true },
            { Name: "Nerdle", Link: "nerdle", IsAnId: true },
            { Name: "Mather", Link: "mather", IsAnId: true }
        ]
    },
    {
        Name: "Quiz & Crossword Games",
        Link: "qzGames",
        IsAnId: true,
        SubSummaries: [
            { Name: "JetPunk", Link: "jetpunk", IsAnId: true },
            { Name: "Planet Crosswords", Link: "planetcrosswords", IsAnId: true }
        ]
    },
    {
        Name: "Medias",
        Link: "mdGames",
        IsAnId: true,
        SubSummaries: [
            { Name: "Actorle", Link: "actorle", IsAnId: true },
            { Name: "Lyricle", Link: "lyricle", IsAnId: true },
            { Name: "Musicle", Link: "musicle", IsAnId: true },
            { Name: "Moviedle", Link: "moviedle", IsAnId: true },
            { Name: "Framed", Link: "framed", IsAnId: true },
            { Name: "Chronophoto", Link: "chronophoto", IsAnId: true }
        ]
    }
];

const CommunityGames = () => {

    const [data, setData] = useState<Record<string, GameOptions[]> | null>(null);

    useEffect(() => {
        fetch(window.location.origin + '/Data/CommunityGames.json')
            .then(res => res.json())
            .then(response => setData(response))
            .catch(err => setData({}));
    }, []);

    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Community Games</h1>

                <p>Enjoy a wide range of community games from word to geography to musical. All enlisted in a single place to access for
                    convenience.</p>

                <div className="iconed-heading">
                    <span slot="start" className="material-symbols-outlined">abc</span>
                    <h2 id="wrdGames">Word games:</h2>
                </div>

                <div className="card-container">{
                    data?.word.map(game => <Game key={game.ID} Name={game.Name} ID={game.ID} Image={game.Image} Link={game.Link} Description={game.Description} />)
                }</div>

                <br /><br />

                <div className="iconed-heading">
                    <span slot="start" className="material-symbols-outlined">globe</span>
                    <h2 id="grGames">Geography games:</h2>
                </div>

                <br />

                <div className="card-container">{
                    data?.geography.map(game => <Game key={game.ID} Name={game.Name} ID={game.ID} Image={game.Image} Link={game.Link} Description={game.Description} />)
                }</div>

                <br /><br />

                <div className="iconed-heading">
                    <span slot="start" className="material-symbols-outlined">calculate</span>
                    <h2 id="mtGames">Mathematical games:</h2>
                </div>

                <br />

                <div className="card-container">{
                    data?.math.map(game => <Game key={game.ID} Name={game.Name} ID={game.ID} Image={game.Image} Link={game.Link} Description={game.Description} />)
                }</div>

                <br /><br />

                <div className="iconed-heading">
                    <span slot="start" className="material-symbols-outlined">crossword</span>
                    <h2 id="qzGames">Quiz & Crossword games:</h2>
                </div>

                <br />

                <div className="card-container">{
                    data?.quiz.map(game => <Game key={game.ID} Name={game.Name} ID={game.ID} Image={game.Image} Link={game.Link} Description={game.Description} />)
                }</div>

                <br />
                <br />

                <div className="iconed-heading">
                    <span slot="start" className="material-symbols-outlined">subscriptions</span>
                    <h2 id="mdGames">Medias:</h2>
                </div>

                <br />

                <div className="card-container">{
                    data?.medias.map(game => <Game key={game.ID} Name={game.Name} ID={game.ID} Image={game.Image} Link={game.Link} Description={game.Description} />)
                }</div>
            </main>
            <Summary PageName="Community Games" Elements={summaries} />
        </PageLayout>
    );
}

export default CommunityGames;