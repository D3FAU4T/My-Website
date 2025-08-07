'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import type { SemesterData, SummaryType, SyllabusMetadata } from "@/Shared/typings";
import { cachedFetch } from "@/lib/cache";

const renderSemesterTable = (semester: SemesterData) => (
    <div key={semester.id}>
        <h2 id={semester.id}>{semester.title}</h2>
        <table>
            <thead>
                <tr>
                    <th>Subject code</th>
                    <th>Subject Name</th>
                    <th>Syllabus</th>
                </tr>
            </thead>
            <tbody>
                {semester.subjects.map((subject, index) => (
                    <tr key={index}>
                        <td>{subject.code}</td>
                        <td>{subject.name}</td>
                        <td>{
                            subject.syllabusPath ?
                                <Link href={`/api/syllabus/pdf/${subject.syllabusPath.split('/').pop()}`}>Download</Link>
                                : "Not Available"
                        }</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br />
        <br />
    </div>
);

const Syllabus = () => {
    const [syllabusData, setSyllabusData] = useState<SyllabusMetadata | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSyllabusData = async () => {
            try {
                const data = await cachedFetch('/api/syllabus', undefined, 5 * 60 * 1000); // Cache for 5 minutes
                setSyllabusData(data);
            }
            
            catch (err) { setError(err instanceof Error ? err.message : 'An error occurred'); }            
            finally { setLoading(false); }
        };

        fetchSyllabusData();
    }, []);

    if (loading)
        return (
            <PageLayout>
                <main>
                    <h1 className="page-title">Syllabus</h1>
                    <p>Loading syllabus data...</p>
                </main>
            </PageLayout>
        );

    if (error || !syllabusData)
        return (
            <PageLayout>
                <main>
                    <h1 className="page-title">Syllabus</h1>
                    <p>Error loading syllabus: {error}</p>
                </main>
            </PageLayout>
        );

    const semesterData = syllabusData.semesters;
    const summaries: SummaryType[] = semesterData.map(semester => ({
        Name: semester.title,
        Link: semester.id,
        IsAnId: true
    }));

    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Syllabus</h1>
                <p>This page contains the entire Syllabus for the Sec. B (2023-2027) batch of <Link href="https://maps.app.goo.gl/xNeDn9rBmRkqmcJV9" target="_blank" rel="noopener">Techno India Institute of Technology, Sector-V, Salt lake, Webel More</Link></p>
                <br />
                {semesterData.map(semester => renderSemesterTable(semester))}
            </main>
            <Summary PageName="Syllabus" Elements={summaries} />
        </PageLayout>
    )
}

export default Syllabus;