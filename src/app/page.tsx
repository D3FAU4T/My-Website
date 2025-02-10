"use client";

import Link from "next/link";
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";

const summaries: SummaryType[] = [
    { Name: "Github", Link: "https://github.com/D3FAU4T", IsAnId: false },
    { Name: "Replit", Link: "https://replit.com/@D3FAU4TBOT", IsAnId: false },
];

export default function Home() {
    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Welcome to D3FAU4T's Space</h1>
                <h3>This is a practice project made by D3FAU4T (14542723127) to showcase the beauty of Web Designing
                    through <Link target="_blank" rel="noopener" href="https://nextjs.org/">NextJS</Link>. This website includes some shortcuts for important informations related to
                    my institute as well as fun stuff to explore. This website is responsive, static and it uses <Link href="https://m3.material.io/" target="_blank"
                        rel="noopener">Material Design</Link> Framework.</h3>

                <h4>Use the menu button to get started (Hamburger icon)</h4>

                <h4>Curious about my work? Inspect the webpage or visit my <Link href="https://github.com/D3FAU4T"
                    target="_blank" rel="noopener">Github</Link></h4>
            </main>
            <Summary PageName="Socials" Elements={summaries} />
        </PageLayout>
    );
}