import PageLayout from "@/Components/PageLayout";
import { readFileSync } from "fs";
import path from "path";
import * as cheerio from 'cheerio';
import React, { ReactElement } from "react";
import Script from "next/script";

const AssignmentContent = async ({ params }: { params: Promise<{ assignmentName: string; }> }) => {
    const { assignmentName } = await params;
    const data = readFileSync(path.join(process.cwd(), "public", "Assignments", assignmentName + '.html'), 'utf-8');
    const $ = cheerio.load(data);
    
    const pageTitle = $('.page-title').text();
    const summary: ReactElement[] = [];

    $('.summary').each((i, el) => {
        const data = $(el);
        const id = data.attr('id');
        const summaryText = data.attr('data-summary');
        if (id && summaryText)
            summary.push(
                <li key={"summary-" + id}><a href={'#' + id}>{summaryText}</a></li>
            );
    });

    return (
        <PageLayout>
            <main>
                <section className="scrollbar-wrapper" id="section" dangerouslySetInnerHTML={{ __html: data }} suppressHydrationWarning>
                </section>
                <Script>{`hljs.highlightAll();`}</Script>
            </main>
            <aside className="overview" id="overview">
                <p>On this page:</p>
                <h2>{pageTitle}</h2>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{summary}</ul>
            </aside>
        </PageLayout>
    );
}

export default AssignmentContent;