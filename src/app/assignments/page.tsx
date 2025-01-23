import Link from "next/link";
import Assignment from "@/Components/Assignment";
import PageLayout from "@/Components/PageLayout";
import PythonSVG from "@/SVG/Python";

const Assignments = () => {
    return (
        <PageLayout>
            <main>
                <h1 className="page-title">Assignments</h1>
                <div className="iconed-heading">
                    <span className="material-symbols-outlined">eco</span>
                    <h2 id="evs">Environmental Science:</h2>
                </div>
                <div className="card-container">
                    <Assignment Name="Types of pollution" DueDate="3rd June 2024" Status="Turned-in"
                        Redirect="/evs-Pollution" key={"evs::3rd June 2024"}
                        Description={[
                            <p>Make a report on any one of the following:</p>,
                            <ul>
                                <li>Water pollution</li>
                                <li>Air pollution</li>
                                <li>Soil pollution</li>
                                <li>Noise pollution</li>
                            </ul>
                        ]} />

                    <Assignment Name="Ecosystem" DueDate="15th May 2024" Status="Turned-in"
                        Redirect="/evs-Ecosystem" key={"evs::15th May 2024"}
                        Description={[
                            <p>Answer any 5 questions from the given quetions in <Link className="link"
                                href="https://classroom.google.com/c/Njc4MzAzMjI4MTIw/m/Njc4OTAzNTU1Mjc0/details" rel="noopener" target="_blank">Google
                                Classroom</Link>
                            </p>
                        ]} />
                </div>
                <br /><br />
                <div className="iconed-heading">
                    <PythonSVG />
                    <h2 id="py">Python:</h2>
                </div>
                <div className="card-container">
                    <Assignment Name="Loops and Lists" DueDate="11th September 2024" Status="Turned-in"
                        Redirect="/py-loop" key={"py::11th September 2024"}
                        Description={[
                            <p>Solve the given theoretical questions in google classroom</p>
                        ]} />

                    <Assignment Name="Basics of Python" DueDate="26th July 2024" Status="Turned-in"
                        Redirect="/py-basic" key={"py::26th July 2024"}
                        Description={[
                            <p>Solve the given questions and upload in <Link href="https://classroom.google.com/c/NzAxMjAwNDQ1MDQy/a/NzAxMzgxNzgxNDc2/details" rel="noopener" target="_blank">Google Classroom</Link> as well as submit Hard-Copy</p>,
                            <p>Total questions to solve: 9</p>
                        ]} />
                </div>
            </main>
        </PageLayout>
    );
}

export default Assignments;