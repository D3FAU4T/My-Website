import { CSSProperties } from "react";
import { SummaryType } from "../Shared/typings";

type Options = {
    PageName: string;
    Elements: SummaryType[];
    style?: CSSProperties;
}

const Summary = (Props: Options) => {
    return (
        <aside className="overview" id="overview">
            <p>On this page:</p>
            <h2>{Props.PageName}</h2>

            <ul style={Props.style ?? { display: "flex", flexDirection: "column", gap: "10px" }}>
                {
                    Props.Elements.map((Elem, Index) => (
                        <li key={`SummaryItem-${Index}`}>
                            <a
                                href={Elem.IsAnId ? '#' + Elem.Link : Elem.Link}
                                target={Elem.IsAnId ? "" : "_blank"}
                                rel={Elem.IsAnId ? "" : "noopener"}
                            >{Elem.Name}</a>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
};

export default Summary;