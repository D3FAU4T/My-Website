"use client";

import Summary from "@/Components/Summary";
import { Summaries } from "@/Shared/typings";
import dynamic from "next/dynamic";

const PageLayout = dynamic(() => import('@/Components/PageLayout'), { ssr: false });

const summaries: Summaries[] = [
    { Name: "Github", Link: "https://github.com/D3FAU4T", IsAnId: false },
    { Name: "Replit", Link: "https://replit.com/@D3FAU4TBOT", IsAnId: false },
];

export default function Home() {
    return (
        <PageLayout>
            <main>
                <section className="scrollbar-wrapper" id="section">
                    <h1>Welcome to D3FAU4T's Space</h1>
                    <h3>This is a practice project made by D3FAU4T (14542723127) to showcase the beauty of Web Designing
                        through HTML, CSS and JS. This website includes some shortcuts for important informations related to
                        my institute as well as fun stuff to explore. This website is responsive, static (Might change to
                        dynamic in future) and it uses <a href="https://m3.material.io/" target="_blank"
                            rel="noopener">Material Design</a> Framework.</h3>

                    <h4>Use the menu button to get started (Hamburger icon)</h4>

                    <h4>Curious about my work? Inspect the webpage or visit my <a href="https://github.com/D3FAU4T"
                        target="_blank" rel="noopener">Github</a></h4>
                </section>
            </main>
            <Summary PageName="Socials" Elements={summaries} />
        </PageLayout>
    );
}