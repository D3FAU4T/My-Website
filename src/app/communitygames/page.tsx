import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";
import Link from "next/link";

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
            { Name: "Connections", Link: "connections", IsAnId: true }
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
    return (
        <PageLayout>
            <main>
                <section className="scrollbar-wrapper" id="section">
                    <h1>Community Games</h1>

                    <p>Enjoy a wide range of community games from word to geography to musical. All enlisted in a single place to access for
                        convenience.</p>

                    <div className="iconed-heading">
                        <span slot="start" className="material-symbols-outlined">abc</span>
                        <h2 id="wrdGames">Word games:</h2>
                    </div>

                    <div className="card-container">
                        <Link className="card" href="https://jklm.fun/" target="_blank" rel="noopener" id="jklm">
                            <div className="img-wrapper">
                                <img src="/Assets/BombParty.jpeg" alt="Wordle" />
                            </div>
                            <div className="img-desc">
                                <h2>Bombparty</h2>
                                <p>Type a word that contains the prompt. Be quick! If the bomb explodes during your turn, you lose a life.
                                    The last player standing wins the game.</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://semantle.com/" id="semantle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Semantle.jpeg" alt="Semantle" />
                            </div>
                            <div className="img-desc">
                                <h2>Semantle</h2>
                                <p>Semantle is a word-guessing game where you try to find a hidden word based on semantic similarity. Unlike
                                    traditional word games, it uses a neural network to gauge how close your guesses are to the target word.
                                    The game challenges your vocabulary and lateral thinking skills.</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://wafflegame.net/" id="waffle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Waffle.jpeg" alt="Waffle" />
                            </div>
                            <div className="img-desc">
                                <h2>Waffle</h2>
                                <p>Rearrange letters in a grid to form valid words horizontally and vertically. Each swap counts as a move,
                                    and you have a limited number to solve the puzzle. It's like Wordle, but with more twists and turns!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://wordwormdormdork.com/" id="weaver" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Weaver.jpeg" alt="Weaver" />
                            </div>
                            <div className="img-desc">
                                <h2>Weaver</h2>
                                <p>Transform one word into another by changing one letter at a time. Each step must form a valid word,
                                    challenging your vocabulary and strategic thinking. It's a classic word ladder game brought to digital
                                    life.</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://redactle.anybrowser.org/" id="redactle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Redactle.jpeg" alt="Redactle" />
                            </div>
                            <div className="img-desc">
                                <h2>Redactle</h2>
                                <p>Guess the hidden words in a redacted Wikipedia article. Use your knowledge and inference skills to
                                    uncover the document bit by bit. It's a mix of trivia, strategy, and a whole lot of guessing!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://phrasle.com/" id="phrasle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Phrasle.jpeg" alt="Phrasle" />
                            </div>
                            <div className="img-desc">
                                <h2>Phrasle</h2>
                                <p>Guess the phrase with the help of given letters, similar to Hangman but with entire phrases. It tests
                                    your ability to recognize common sayings and idioms with limited clues. Perfect for phrase-solving
                                    enthusiasts!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://squaredle.app/" id="squaredle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Squaredle.jpeg" alt="Squaredle" />
                            </div>
                            <div className="img-desc">
                                <h2>Squaredle</h2>
                                <p>Find as many words as possible in a grid of letters by connecting adjacent tiles. Longer words and rare
                                    letters score higher points, challenging both your vocabulary and pattern recognition. It's a word
                                    search with a twist!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://semantle.pimanrul.es/" id="pimantle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Pimantle.jpeg" alt="Pimantle" />
                            </div>
                            <div className="img-desc">
                                <h2>Pimantle</h2>
                                <p>Guess a secret word based on how semantically similar your guesses are to it. The game provides feedback
                                    on how "hot" or "cold" your guesses are, helping you inch closer to the target. It's a mind-bending word
                                    game that tests your language intuition.</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://www.nytimes.com/games/connections" id="connections" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Connections.jpeg" alt="Connections" />
                            </div>
                            <div className="img-desc">
                                <h2>Connections</h2>
                                <p>Identify groups of related words from a list and categorize them correctly. It's a game of finding hidden
                                    connections and patterns, challenging your lateral thinking and vocabulary. Think of it as a fun
                                    brain-teasing puzzle from The New York Times!</p>
                            </div>
                        </Link>
                    </div>

                    <br /><br />

                    <div className="iconed-heading">
                        <span slot="start" className="material-symbols-outlined">globe</span>
                        <h2 id="grGames">Geography games:</h2>
                    </div>

                    <br />

                    <div className="card-container">
                        <Link className="card" href="https://www.geoguessr.com/" id="geoguessr" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Geoguessr.jpeg" alt="Geoguessr" />
                            </div>
                            <div className="img-desc">
                                <h2>Geoguessr</h2>
                                <p>Explore the world using Google Street View and guess the location based on the surroundings. It's a
                                    thrilling journey of geography and deduction!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://www.flaggle.net/" id="flaggle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Flaggle.jpeg" alt="Flaggle" />
                            </div>
                            <div className="img-desc">
                                <h2>Flaggle</h2>
                                <p>Test your knowledge of flags from around the world in a fun and challenging visual game. See how you can
                                    identify!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://globle-game.com/" id="globle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Globle.jpeg" alt="Globle" />
                            </div>
                            <div className="img-desc">
                                <h2>Globle</h2>
                                <p>Embark on a global adventure to guess which country it is using the fewest number of guesses. Everyday,
                                    there's a new country!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://worldle.teuteuf.fr/" id="worldle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Worldle.jpeg" alt="Worldle" />
                            </div>
                            <div className="img-desc">
                                <h2>Worldle</h2>
                                <p>Guess the country based on its shape on a world map and given clues. Sharpen your geography skills and
                                    challenge yourself to guess quickly and accurately!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://www.countryle.com/" id="countryle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Countryle.jpeg" alt="Countryle" />
                            </div>
                            <div className="img-desc">
                                <h2>Countryle</h2>
                                <p>Guess the country based on clues such as latitude, longitude, directions and continent. It's a fun and
                                    educational game to test your knowledge of countries around the world!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://tradle.net/" id="tradle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Tradle.jpeg" alt="Tradle" />
                            </div>
                            <div className="img-desc">
                                <h2>Tradle</h2>
                                <p>Explore the world of trade interactively, enhancing your understanding without extensive research. Guess
                                    which country exports the given goods in 6 guesses</p>
                            </div>
                        </Link>
                    </div>

                    <br /><br />

                    <div className="iconed-heading">
                        <span slot="start" className="material-symbols-outlined">calculate</span>
                        <h2 id="mtGames">Mathematical games:</h2>
                    </div>

                    <br />

                    <div className="card-container">
                        <Link className="card" href="https://numble.wtf/" id="numble" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Numble.jpeg" alt="Numble" />
                            </div>
                            <div className="img-desc">
                                <h2>Numble</h2>
                                <p>Solve challenging number puzzles by arranging digits to match target values. It's a fun test of your
                                    mathematical skills and logical thinking!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://numberle.org/" id="numberle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Numberle.jpeg" alt="Numberle" />
                            </div>
                            <div className="img-desc">
                                <h2>Numberle</h2>
                                <p>Guess the hidden numerical equation in a limited number of tries. Use logical deduction and mathematical
                                    operations to crack the code!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://nerdlegame.com/" id="nerdle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Nerdle.jpeg" alt="Nerdle" />
                            </div>
                            <div className="img-desc">
                                <h2>Nerdle</h2>
                                <p>Uncover the hidden equation by guessing numbers and operations. This daily math puzzle challenges your
                                    numerical prowess and problem-solving skills!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://www.mathler.com/" id="mather" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Mather.jpeg" alt="Mather" />
                            </div>
                            <div className="img-desc">
                                <h2>Mather</h2>
                                <p>Find the correct equation that matches the given result using a set of numbers and operators. It’s a
                                    fast-paced math puzzle for quick thinkers!</p>
                            </div>
                        </Link>
                    </div>

                    <br /><br />

                    <div className="iconed-heading">
                        <span slot="start" className="material-symbols-outlined">crossword</span>
                        <h2 id="qzGames">Quiz & Crossword games:</h2>
                    </div>

                    <br />

                    <div className="card-container">
                        <Link className="card" href="https://www.jetpunk.com/" id="jetpunk" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Jetpunk.jpeg" alt="Jetpunk" />
                            </div>
                            <div className="img-desc">
                                <h2>Jetpunk</h2>
                                <p>Test your knowledge with thousands of quizzes on various topics. From geography to pop culture, see how
                                    many you can ace!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://hovercats.gg/" id="planetcrosswords" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Planet Crosswords.jpeg" alt="Planet Crosswords" />
                            </div>
                            <div className="img-desc">
                                <h2>Planet Crosswords</h2>
                                <p>Solve crosswords made by Hovercats, challenging your knowledge. It's a planetary twist on the classic
                                    crossword puzzle!</p>
                            </div>
                        </Link>
                    </div>

                    <br /><br />

                    <div className="iconed-heading">
                        <span slot="start" className="material-symbols-outlined">subscriptions</span>
                        <h2 id="mdGames">Medias:</h2>
                    </div>

                    <br />

                    <div className="card-container">
                        <Link className="card" href="https://actorle.com/" id="actorle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Actorle.jpeg" alt="Actorle" />
                            </div>
                            <div className="img-desc">
                                <h2>Actorle</h2>
                                <p>Guess the actor based on their movies and age. Test your filmography knowledge and see how many actors
                                    you can identify!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://www.lyricle.app/" id="lyricle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Lyricle.jpeg" alt="Lyricle" />
                            </div>
                            <div className="img-desc">
                                <h2>Lyricle</h2>
                                <p>Identify the song based on a snippet of its lyrics. Perfect for music lovers, it’s a fun way to test your
                                    lyrical knowledge!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://musicle.app/" id="musicle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Musicle.jpeg" alt="Musicle" />
                            </div>
                            <div className="img-desc">
                                <h2>Musicle</h2>
                                <p>Guess the song from a short audio clip. Challenge your musical ear and see how quickly you can name that
                                    tune!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://likewisetv.com/arcade/moviedle" id="moviedle" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Moviedle.jpeg" alt="Moviedle" />
                            </div>
                            <div className="img-desc">
                                <h2>Moviedle</h2>
                                <p>Guess the movie from a fast-paced compilation of scenes. Test your film knowledge and quick thinking with
                                    this exciting movie quiz!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://framed.wtf/" id="framed" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Framed.jpeg" alt="Framed" />
                            </div>
                            <div className="img-desc">
                                <h2>Framed</h2>
                                <p>Identify the movie based on a single frame. It's a challenging game for cinephiles who can recognize
                                    films from just one shot!</p>
                            </div>
                        </Link>

                        <Link className="card" href="https://www.chronophoto.app/" id="chronophoto" target="_blank" rel="noopener">
                            <div className="img-wrapper">
                                <img src="/Assets/Chronophoto.jpeg" alt="Chronophoto" />
                            </div>
                            <div className="img-desc">
                                <h2>Chronophoto</h2>
                                <p>Guess the year a photo was taken by analyzing visual clues. Sharpen your historical and observational
                                    skills in this unique guessing game!</p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
            <Summary PageName="Community Games" Elements={summaries} />
        </PageLayout>
    );
}

export default CommunityGames;