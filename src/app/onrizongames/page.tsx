import PageLayout from "@/Components/PageLayout"
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";
import Link from "next/link";

const summaries: SummaryType[] = [
    { Name: "Words On Stream", Link: "wos", IsAnId: true },
    { Name: "Gartic On Stream", Link: "gos", IsAnId: true },
    { Name: "Gartic Show", Link: "gs", IsAnId: true },
    { Name: "Gartic Phone", Link: "gp", IsAnId: true },
    { Name: "Stream Pairs", Link: "sp", IsAnId: true },
    { Name: "Emote Search", Link: "es", IsAnId: true },
    { Name: "Save The Deal", Link: "std", IsAnId: true },
    { Name: "StopotS", Link: "ss", IsAnId: true },
];

const OnrizonGames = () => {
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
                    their dynamic team. Onrizon’s commitment to its products and people is evident in its approach to
                    game development and community engagement.
                </p>
                <br />
                <h2>Games:</h2>
                <br />
                <div className="card-container">
                    <Link id="wos" href="https://wos.gg" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/WOS.jpg" alt="Words on Stream" />
                        </div>
                        <div>
                            <h2>Words on Stream</h2>
                            <p>WOS is an interactive and innovative game where players challenge themselves to form words from mixed
                                letters displayed on the screen. Players play collaboratively to overcome challenges like hidden letters
                                and fake letters reaching new levels of difficulty.</p>
                        </div>
                    </Link>
                    <Link id="gos" href="https://gos.gg" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/GOS.jpg" alt="Gartic on Stream" />
                        </div>
                        <div>
                            <h2>Gartic on Stream</h2>
                            <p>Gartic gathers around players in an exciting experience of drawing and guessing. One gets a word and draws it while others try to guess it at all costs, at least until the turn's turn. Every guess leads to points rewards that promote a ranking competition, a rush to find the best player. </p>
                        </div>
                    </Link>
                    <Link id="gs" href="https://gartic.show/" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/GS.jpg" alt="Gartic Show" />
                        </div>
                        <div>
                            <h2>Gartic Show</h2>
                            <p>Gartic Show is a live interactive game where streamers can broadcast their drawing, with the audience guessing the drawings via twitch chat to earn points. Streamers have the option to use system words or their own custom words for drawing, and can adjust the round dynamics and number of rounds.</p>
                        </div>
                    </Link>
                    <Link id="gp" href="https://garticphone.com/" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/GP.jpg" alt="Gartic Phone" />
                        </div>
                        <div>
                            <h2>Gartic Phone</h2>
                            <p>Gartic Phone, a virtual version of the classic “Telephone Game” enhanced with drawing tools and voice chat capabilities for a more fun experience. The game combines traditional sentence interpretation with creative drawing challenges, resulting in unexpected and hilarious outcomes.</p>
                        </div>
                    </Link>
                    <Link id="sp" href="https://streampairs.com/" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/SP.jpg" alt="Stream Pairs" />
                        </div>
                        <div>
                            <h2>Stream Pairs</h2>
                            <p>Stream Pairs is an online evolution of the popular “Memory Matching Game”, entertainment that has gotten people together for decades. It evolved this traditional concept to allow streamers to join forces with their audience and play using their streaming platform chat.</p>
                        </div>
                    </Link>
                    <Link id="es" href="https://emotesearch.com/" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/ES.jpg" alt="Emote Search" />
                        </div>
                        <div>
                            <h2>Emote Search</h2>
                            <p>Emote Search is a streaming game in which the objective is to find the sequences of emotes previous listed on the screen table, just as in the famous game word search. Instead of the words, players need to find emote sequences. The streamer plays along with their audience, trying typing the coordinates of the sequences in the chat.
                                The term “emote” refers to the emoji pictures on Twitch.</p>
                        </div>
                    </Link>
                    <Link id="std" href="https://savethedeal.gg/" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/STD1.png" alt="Save The Deal" />
                        </div>
                        <div>
                            <h2>Save The Deal</h2>
                            <p>Save The Deal was created thinking of that familiar feeling of collecting stickers to trade it for a reward or a good promotion. </p>
                        </div>
                    </Link>
                    <Link id="ss" href="https://stopots.com/" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/StopotS.jpg" alt="StopotS" />
                        </div>
                        <div>
                            <h2>StopotS</h2>
                            <p>StopotS is the online version of Stop, a trendy worldwide game known as Scattergories and as "City, Country, River."</p>
                        </div>
                    </Link>
                </div>
            </main>
            <Summary PageName="Onrizon Games" Elements={summaries} style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "10px" }} />
        </PageLayout>
    )
}

export default OnrizonGames;