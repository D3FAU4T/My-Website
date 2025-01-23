import PageLayout from "@/Components/PageLayout";
import Script from "next/script";
import path from "path";
import * as cheerio from 'cheerio';
import React, { ReactElement } from "react";
import { readFileSync } from "fs";
import { marked } from "marked";
import Link from "next/link";

const AssignmentContent = async ({ params }: { params: Promise<{ assignmentName: string; }> }) => {
    const { assignmentName } = await params;
    const data = await marked(readFileSync(path.join(process.cwd(), "public", "Assignments", assignmentName + '.md'), 'utf-8'));
    const $ = cheerio.load(data);
    
    const pageTitle = $('.page-title').text();
    const summary: ReactElement[] = [];

    $('.summary').each((i, el) => {
        const data = $(el);
        const id = data.attr('id');
        const summaryText = data.attr('data-summary');
        if (id && summaryText)
            summary.push(
                <li key={"summary-" + id}><Link href={'#' + id}>{summaryText}</Link></li>
            );
    });

    return (
        <PageLayout>
            <main>
                <section dangerouslySetInnerHTML={{ __html: data }} suppressHydrationWarning>
                </section>
            </main>
            <aside className="overview" id="overview">
                <p>On this page:</p>
                <h2>{pageTitle}</h2>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{summary}</ul>
            </aside>
            <Script>{`
                hljs.highlightAll();

                if (typeof langMap === 'undefined') {
                    var langMap = {
                        'language-py': 'Python',
                        'language-js': 'JavaScript',
                        'language-bash': 'Bash',
                        'language-c': 'C Programming',
                        'language-plaintext': 'Text',
                        'language-pseudo': 'Pseudo Code',
                    };
                }
                
                document.querySelectorAll('.language-pseudo')
                .forEach((pseudoCodeBlock) => pseudoCodeBlock.classList.add('hljs'));

                for (const codeBlock of document.querySelectorAll('pre > code')) {
                    const preTag = codeBlock.parentElement;
                    const classList = codeBlock.classList;
                    let language = '';

                    for (const className of classList) {
                        if (langMap[className])
                            language = langMap[className];
                    }

                    if (language) {
                        const newElement = document.createElement('div');
                        newElement.textContent = language;
                        newElement.classList.add('codelang');
                        preTag.insertAdjacentElement('beforebegin', newElement)
                    }
                }
                `}
                </Script>
        </PageLayout>
    );
}

export default AssignmentContent;