import path from 'path';
import Link from "next/link";
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { readFile } from 'fs/promises';
import type { SemesterData, SummaryType, SyllabusMetadata } from "@/Shared/typings";

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
                                <Link href={subject.syllabusPath}>Open</Link>
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

const Syllabus = async () => {
    const filePath = path.join(process.cwd(), 'public', 'Data', 'Syllabus.json');
    const fileContents = await readFile(filePath, 'utf8');
    const syllabusData: SyllabusMetadata = JSON.parse(fileContents);
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