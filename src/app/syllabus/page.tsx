import Link from "next/link";
import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";

const summaries: SummaryType[] = [
    { Name: "1st Semester", Link: "1st", IsAnId: true },
    { Name: "2nd Semester", Link: "2nd", IsAnId: true },
    { Name: "3rd Semester", Link: "3rd", IsAnId: true },
    { Name: "4th Semester", Link: "4th", IsAnId: true },
    { Name: "5th Semester", Link: "5th", IsAnId: true },
    { Name: "6th Semester", Link: "6th", IsAnId: true },
]

const Syllabus = () => {
    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Syllabus</h1>
                <p>This page contains the entire Syllabus for the Sec. B (2023-2027) batch of <Link href="https://maps.app.goo.gl/xNeDn9rBmRkqmcJV9" target="_blank" rel="noopener">Techno India Institute of Technology, Sector-V, Salt lake, Webel More</Link></p>

                <h2 id="1st">1st Semester:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Subject code</th>
                            <th>Subject Name</th>
                            <th>Syllabus</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>BCAC101</td>
                            <td>Digital Electronics</td>
                            <td><Link href={`../Syllabus/Sem-1/DELab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC191</td>
                            <td>Digital Electronics Lab</td>
                            <td><Link href={`../Syllabus/Sem-1/DELab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC102</td>
                            <td>Programming for Problem Solving through C</td>
                            <td><Link href={`../Syllabus/Sem-1/CLab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC192</td>
                            <td>Programming for Problem Solving Lab</td>
                            <td><Link href={`../Syllabus/Sem-1/CLab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>MIM101</td>
                            <td>Principles of Management</td>
                            <td><Link href="../Syllabus/Sem-1/Management.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>GE2B-06</td>
                            <td>The Language of Graphic design: Basics and Beyond</td>
                            <td><Link href="../Syllabus/Sem-1/Graphics-Design.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>AECC101</td>
                            <td>English & Professional Communication</td>
                            <td><Link href="../Syllabus/Sem-1/English.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>SEC181</td>
                            <td>Life Skills & Personality Development</td>
                            <td><Link href="../Syllabus/Sem-1/Life-Skills.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>VAC181A</td>
                            <td>Yoga</td>
                            <td><Link href="../Syllabus/Sem-1/Yoga.pdf">Download</Link></td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <br />

                <h2 id="2nd">2nd Semester:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Subject code</th>
                            <th>Subject Name</th>
                            <th>Syllabus</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>BCAC201</td>
                            <td>Computer Architecture</td>
                            <td><Link href={`../Syllabus/Sem-2/CALab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC291</td>
                            <td>Computer Architecture Lab</td>
                            <td><Link href={`../Syllabus/Sem-2/CALab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC202</td>
                            <td>Basics of Web Design Using HTML, CSS, JavaScript</td>
                            <td><Link href={`../Syllabus/Sem-2/HTMLLab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC292</td>
                            <td>Basics of Web Design Using HTML, CSS, JavaScript Lab</td>
                            <td><Link href={`../Syllabus/Sem-2/HTMLLab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>MIM201A</td>
                            <td>Organization Behaviour</td>
                            <td><Link href="../Syllabus/Sem-2/OB.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>GE3B-02</td>
                            <td>Basic Mathematics & Statistics</td>
                            <td><Link href="../Syllabus/Sem-2/Math.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>AECC201</td>
                            <td>Modern Indian Languages and Literature</td>
                            <td><Link href="../Syllabus/Sem-2/English.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>SEC281</td>
                            <td>IT Skills</td>
                            <td><Link href="../Syllabus/Sem-2/IT-Skills.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>VAC281D</td>
                            <td>Environmental Studies</td>
                            <td><Link href="../Syllabus/Sem-2/EVS.pdf">Download</Link></td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <br />

                <h2 id="3rd">3rd Semester</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Subject code</th>
                            <th>Subject Name</th>
                            <th>Syllabus</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>BCAC301</td>
                            <td>Python Programming</td>
                            <td><Link href="../Syllabus/Sem-3/Hissss.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC391</td>
                            <td>Python Programming Lab</td>
                            <td><Link href="../Syllabus/Sem-3/Hissss-Lab.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC302</td>
                            <td>Data Structure through C</td>
                            <td><Link href={`../Syllabus/Sem-3/DSCLab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC392</td>
                            <td>Data Structure Lab</td>
                            <td><Link href={`../Syllabus/Sem-3/DSCLab.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>MIM301A</td>
                            <td>Principles of Marketing</td>
                            <td><Link href="../Syllabus/Sem-3/Marketing.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>GE6B-06</td>
                            <td>Value & Ethics</td>
                            <td><Link href={`../Syllabus/Sem-3/Value-and-Ethics.pdf`}>Download</Link></td>
                        </tr>

                        <tr>
                            <td>SEC381</td>
                            <td>Understanding basics of Cyber Security</td>
                            <td><Link href="../Syllabus/Sem-3/Cyber-Security.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>AECC301</td>
                            <td>The Constitution, Human Rights and Law</td>
                            <td><Link href="../Syllabus/Sem-3/Law.pdf">Download</Link></td>

                        </tr>
                    </tbody>
                </table>

                <br />
                <br />

                <h2 id="4th">4th Semester</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Subject code</th>
                            <th>Subject Name</th>
                            <th>Syllabus</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>BCAC401</td>
                            <td>Data Base Management System</td>
                            <td><Link href="../Syllabus/Sem-4/DBMS.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC491</td>
                            <td>DBMS Lab</td>
                            <td><Link href="../Syllabus/Sem-4/DBMSLab.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC402</td>
                            <td>Operating System</td>
                            <td><Link href="../Syllabus/Sem-4/OS.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>BCAC403</td>
                            <td>Software Engineering</td>
                            <td><Link href="../Syllabus/Sem-4/Software-Engineering.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>MIM401A</td>
                            <td>Human Resource Management</td>
                            <td><Link href="../Syllabus/Sem-4/Human-Resource-Management.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>MIM402B</td>
                            <td>E-commerce</td>
                            <td><Link href="../Syllabus/Sem-4/E-commerce.pdf">Download</Link></td>
                        </tr>

                        <tr>
                            <td>AECC401A</td>
                            <td>Society Culture and Human Behaviour</td>
                            <td><Link href="../Syllabus/Sem-4/Society.pdf">Download</Link></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />

                <h2 id="5th">5th Semester:</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Subject code</th>
                            <th>Subject Name</th>
                            <th>Syllabus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BCAC501</td>
                            <td>PHP with MYSQL</td>
                            <td><Link href="../Syllabus/Sem-5/PHPLab.pdf">Download</Link></td>
                        </tr>
                        <tr>
                            <td>BCAC591</td>
                            <td>PHP with MYSQL Lab</td>
                            <td><Link href="../Syllabus/Sem-5/PHPLab.pdf">Download</Link></td>
                        </tr>
                        <tr>
                            <td>BCAC502</td>
                            <td>Object Oriented Programming with Java</td>
                            <td><Link href="../Syllabus/Sem-5/Java.pdf">Download</Link></td>
                        </tr>
                        <tr>
                            <td>BCAC592</td>
                            <td>Object Oriented Programming with Java Lab</td>
                            <td><Link href="../Syllabus/Sem-5/JavaLab.pdf">Download</Link></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />

                <h2 id="6th">6th Semester:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Subject code</th>
                            <th>Subject Name</th>
                            <th>Syllabus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BCAC601</td>
                            <td>Advanced Java with Web Application</td>
                            <td><Link href="../Syllabus/Sem-6/Advanced-JavaLab.pdf">Download</Link></td>
                        </tr>
                        <tr>
                            <td>BCAC691</td>
                            <td>Advanced Java with Web Application Lab</td>
                            <td><Link href="../Syllabus/Sem-6/Advanced-JavaLab.pdf">Download</Link></td>
                        </tr>
                        <tr>
                            <td>BCAC602</td>
                            <td>Unix and Shell Programming</td>
                            <td><Link href="../Syllabus/Sem-6/UnixLab.pdf">Download</Link></td>
                        </tr>
                        <tr>
                            <td>BCAC692</td>
                            <td>Unix and Shell Programming Lab</td>
                            <td><Link href="../Syllabus/Sem-6/UnixLab.pdf">Download</Link></td>
                        </tr>
                        <tr>
                            <td>BCAC603</td>
                            <td>Networking</td>
                            <td><Link href="../Syllabus/Sem-6/Networking.pdf">Download</Link></td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <Summary PageName="Syllabus" Elements={summaries} />
        </PageLayout>
    )
}

export default Syllabus;