import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";
import Link from "next/link";

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
    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Wordle games</h1>
                <p>Wordle games are word-based puzzles or games that challenge players to guess a hidden word based on clues or limited
                    attempts. Below are some popular Wordle games enlisted for easier access and convenience.</p>
                <br />
                <h2>Games:</h2>

                <div className="card-container">
                    <Link href="https://powerlanguage-wordle.github.io/" id="w1" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Wordle.jpeg" alt="Wordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Wordle</h2>
                                <h1>1</h1>
                            </div>
                            <p>The classic game where you guess a five-letter word in six tries or less by receiving feedback on correct
                                letters and their positions.</p>
                        </div>
                    </Link>

                    <Link href="https://dordlewordle.com/" id="w2" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Dordle.jpeg" alt="Dordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Dordle</h2>
                                <h1>2</h1>
                            </div>
                            <p>You can do 1 Wordle. But can you do 2 Wordles simultaneously?</p>
                        </div>
                    </Link>

                    <Link href="https://hexordle.com/?mode=freeT" id="w3" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Trodle.jpeg" alt="Trodle" />
                        </div>
                        <div>
                            <div>
                                <h2>Trodle</h2>
                                <h1>3</h1>
                            </div>
                            <p>Inspired from the other Wordle games, Trodle is a combination of 3 Wordles simultaneously</p>
                        </div>
                    </Link>

                    <Link href="https://quordlegame.com/" id="w4" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Quordle.jpeg" alt="Quordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Quordle</h2>
                                <h1>4</h1>
                            </div>
                            <p>Same as Wordle except you've to do 4 different Wordles simultaneously.</p>
                        </div>
                    </Link>

                    <Link href="https://hexordle.com/?mode=free" id="w6" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Hexordle.jpeg" alt="Hexordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Hexordle</h2>
                                <h1>6</h1>
                            </div>
                            <p>Made by Jeffrey Chen in 2022, Hexordle is 6 different Wordles at the same time.</p>
                        </div>
                    </Link>

                    <Link href="https://octordle.org/" id="w8" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Octordle.jpeg" alt="Octordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Octordle</h2>
                                <h1>8</h1>
                            </div>
                            <p>Same as Wordle except you've to do 8 different Wordles simultaneously.</p>
                        </div>
                    </Link>

                    <Link href="https://sedecordlegame.org/" id="w16" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Sedecordle.jpeg" alt="Sedecordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Sedecordle</h2>
                                <h1>16</h1>
                            </div>
                            <p>Same as Wordle except you've to do 16 different Wordles simultaneously.</p>
                        </div>
                    </Link>

                    <Link href="https://duotrigordle.com/" id="w32" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Duotrigordle.jpeg" alt="Duotrigordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Duotrigordle</h2>
                                <h1>32</h1>
                            </div>
                            <p>Same as Wordle except you've to do 32 different Wordles simultaneously because why not '-'</p>
                        </div>
                    </Link>

                    <Link href="https://64ordle.au/" id="w64" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Sexagintaquattuordle.jpeg" alt="Sexagintaquattuordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Sexaginta-Quattuordle</h2>
                                <h1>64</h1>
                            </div>
                            <p>Same as Wordle except you've to do 64 different Wordles simultaneously. You can do it 🤌</p>
                        </div>
                    </Link>

                    <Link href="https://jonesnxt.github.io/kilordle/" id="w1000" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Kilordle.jpeg" alt="Kilordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Kilordle</h2>
                                <h1>1000</h1>
                            </div>
                            <p>Wordle is fun. How about a thousand of them at the same time. How does that feel?</p>
                        </div>
                    </Link>

                    <Link href="https://myriadle.semrai.com/" id="w10000" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Myriadle.jpeg" alt="Myriadle" />
                        </div>
                        <div>
                            <div>
                                <h2>Myriadle</h2>
                                <h1>10000</h1>
                            </div>
                            <p>No, there is no extra zero by mistake. That is ten thousand, yes you read it right. 10k Wordles.</p>
                        </div>
                    </Link>

                    <Link href="https://qwordle.bhat.ca/" id="wq" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/QWordle.jpeg" alt="QWordle" />
                        </div>
                        <div>
                            <div>
                                <h2>QWordle</h2>
                                <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                                    <h1>Quantum</h1>
                                    <span className="material-symbols-outlined" style={{ paddingTop: "23px" }}>science</span>
                                </div>
                            </div>
                            <p>The Q in Wordle stands for "Quantum" where there are 2 different Wordles merged into an entangled-pair.</p>
                        </div>
                    </Link>

                    <Link href="https://polygonle.com/" id="plygn" target="_blank" rel="noopener">
                        <div>
                            <img src="/Assets/Polygonle.jpeg" alt="QWordle" />
                        </div>
                        <div>
                            <div>
                                <h2>Polygonle</h2>
                                <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                                    <h1>Shape</h1>
                                    <span className="material-symbols-outlined" style={{ paddingTop: "23px" }}>shapes</span>
                                </div>
                            </div>
                            <p>Polygonle features a character cursor for visualizing words without filling every letter. Click a tile to fill it and navigate the cursor with spacebar or arrow keys instead of typing.</p>
                        </div>
                    </Link>
                </div>
            </main>
            <Summary Elements={summaries} PageName="Wordles" style={{ display: "flex", flexDirection: "column", gap: "15px", paddingTop: "10px" }} />
        </PageLayout>
    )
}

export default Wordles;