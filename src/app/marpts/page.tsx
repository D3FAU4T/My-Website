import PageLayout from "@/Components/PageLayout";
import Summary from "@/Components/Summary";
import { SummaryType } from "@/Shared/typings";
import Link from "next/link";

const summaries: SummaryType[] = [
    { Name: "What is MAR Point?", Link: "mardesc", IsAnId: true },
    { Name: "MAKAUT Notice", Link: "https://makautwb.ac.in/datas/users/0-mar%20notice%20vc%20final.pdf", IsAnId: false },
    { Name: "Data table", Link: "martable", IsAnId: true }
];


const MarPoints = () => {
    return (
        <PageLayout>
            <main>
                <h1 className="page-title">MAR Points</h1>
                <p id="mardesc">The Mandatory Additional Requirements (MAR) at <abbr
                    title="Maulana Abul Kalam Azad University of Technology">MAKAUT</abbr>, West Bengal, are essential for students
                    to earn their undergraduate degrees as they encourage holistic development, ensuring students engage in
                    co-curricular and extra-curricular activities alongside their academic pursuits.</p>

                <p id="marnotice">For more information, read the <Link href="https://makautwb.ac.in/datas/users/0-mar%20notice%20vc%20final.pdf" target="_blank" rel="noopener">Notice</Link></p>

                <p>Here are the points you can earn by participating in the following activities:</p>
                <table id="martable">
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Activity</th>
                            <th>Points per Activity</th>
                            <th>Permissible Points (max)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>1</td>
                            <td colSpan={3}>MOOCs (SWAYAM/NPTEL/Spoken Tutorial/any technical, non-technical course) (per course)</td>
                        </tr>
                        <tr>
                            <td>For 12 weeks duration/40 Hours</td>
                            <td>20</td>
                            <td rowSpan={4}>40</td>
                        </tr>
                        <tr>
                            <td>For 8 weeks duration/30 Hours</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>For 4 weeks duration/20 Hours</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>For 2 weeks duration/10 Hours</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>2</td>
                            <td colSpan={3}>Tech Fest/Fest/Teachers Day/Fresher’s Welcome</td>
                        </tr>
                        <tr>
                            <td>Organizer</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Participant</td>
                            <td>3</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Rural Reporting</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Tree plantation and Up-keeping (per tree)</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>5</td>
                            <td colSpan={3}>Relief/Charitable Activities</td>
                        </tr>
                        <tr>
                            <td>Collection of fund/materials for the Relief Camp or Charitable Trusts</td>
                            <td>5</td>
                            <td rowSpan={2}>40</td>
                        </tr>
                        <tr>
                            <td>To be a part of the Relief Work Team</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Participation in Debate/Group Discussion/Workshop/Tech
                                quiz/Music/Dance/Drama/Elocution/Quiz/Seminar/Painting/any Performing Arts/Photography/FilmMaking</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Publication in News Paper, Magazine, Wall Magazine & Blogs</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Research Publication (per publication)</td>
                            <td>15</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Innovative Projects (other than course curriculum)</td>
                            <td>30</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>10</td>
                            <td>Blood donation</td>
                            <td>8</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Blood Donation Camp Organization</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td rowSpan={7}>11</td>
                            <td colSpan={3}>Sports/Games/Adventure Sports/Trekking/Yoga Camp</td>
                        </tr>
                        <tr>
                            <td>Personal Level</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>College Level</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>University Level</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>District Level</td>
                            <td>12</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>State Level</td>
                            <td>15</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>National/International Level</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Activities in a Professional Society/Student Chapter</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Relevant Industry Visit & Report/Hotel-Event Management Training & Report (Minimum 3 days with submitted
                                report)</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Community Service & Allied Activities like: Caring for the Senior Citizens, Under-privileged/Street
                                Children/Animal Care etc/Training to Differently Able</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td rowSpan={6} style={{ borderBottomLeftRadius: "1em" }}>15</td>
                            <td colSpan={3}>Self-Entrepreneurship Programme</td>
                        </tr>
                        <tr>
                            <td>To organise entrepreneurship programmes and workshops</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>To take part in entrepreneurship workshop and get certificate</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Video film making on entrepreneurship</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Submit business plan on any project</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottomLeftRadius: "0px" }}>To work for start-up/as entrepreneur</td>
                            <td>20</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <Summary PageName="MAR Points" Elements={summaries} />
        </PageLayout>
    );
}

export default MarPoints;