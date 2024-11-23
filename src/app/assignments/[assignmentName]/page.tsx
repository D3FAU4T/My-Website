import PageLayout from "@/Components/PageLayout";
import { readFileSync } from "fs";
import path from "path";

const AssignmentContent = async ({ params }: { params: Promise<{ assignmentName: string; }> } ) => {
    const { assignmentName } = await params;
    const data = readFileSync(path.join(process.cwd(), "src", "assignments", "Content", assignmentName + '.html'), 'utf-8');
    const context = readFileSync(path.join(process.cwd(), "src", "assignments", "Context", assignmentName + '.html'), 'utf-8');

    return (
        <PageLayout>
            <main>
                <section className="scrollbar-wrapper" id="section" dangerouslySetInnerHTML={{ __html: data }} suppressHydrationWarning>
                </section>
            </main>
            <aside className="overview" id="overview" dangerouslySetInnerHTML={{ __html: context }}>
            </aside>
        </PageLayout>
    );
}

export default AssignmentContent;