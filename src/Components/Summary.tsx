import { CSSProperties } from "react";
import { SummaryType } from "../Shared/typings";

type Options = {
    PageName: string;
    Elements: SummaryType[];
    style?: CSSProperties;
}

const Summary = (Props: Options) => {
    const renderSubSummaries = (subSummaries: SummaryType[]) => {
        return (
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "7px" }}>
                {
                    subSummaries.map((SubElem, SubIndex) => (
                        <li key={`SubSummaryItem-${SubIndex}`}>
                            <a
                                href={SubElem.IsAnId ? '#' + SubElem.Link : SubElem.Link}
                                target={SubElem.IsAnId ? "" : "_blank"}
                                rel={SubElem.IsAnId ? "" : "noopener"}
                            >{SubElem.Name}</a>
                        </li>
                    ))
                }
            </ul>
        )
    }

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
                            {
                                Elem.SubSummaries && renderSubSummaries(Elem.SubSummaries)
                            }
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
};

export default Summary;
