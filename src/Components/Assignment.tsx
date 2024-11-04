import { AssignmentOptions } from "@/Shared/typings";

const Assignment = (Props: AssignmentOptions) => {

    const status = Props.Status === "Pending" ? "pending" :
    Props.Status === "Turned-in" ? "done_all" : "done";

    return (
        <div className="note">
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