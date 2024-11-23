"use client";
import { AssignmentOptions } from "@/Shared/typings";
import { useRouter } from "next/navigation";

const Assignment = (Props: AssignmentOptions) => {

    const router = useRouter();

    const status = Props.Status === "Pending" ? "pending" :
    Props.Status === "Turned-in" ? "done_all" : "done";

    return (
        <div className="note" onClick={() => router.push('/assignments' + Props.Redirect)}>
            <div>
                <h2>{Props.Name}</h2>
                <div className="flag">
                    <p>{Props.Status}</p>
                    <span className="material-symbols-outlined">{status}</span>
                </div>
            </div>
            {Props.Description}
            <p>Due date: {Props.DueDate}</p>
        </div>
    )
}

export default Assignment;