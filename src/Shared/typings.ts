export type SummaryType = {
    Name: string;
    Link: string;
    IsAnId: boolean;
    SubSummaries?: SummaryType[];
}

export type NavBarButton = {
    Name: string;
    Icon: string | null;
    Id?: string;
    SVG?: string;
    // SVG?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    //     title?: string;
    // }> | null;
}

export type GameOptions = {
    Name: string;
    Description: string;
    Image: string;
    Link: string;
    ID: string;
}

export interface WordleOptions extends GameOptions {
    Quantity: number | null;
    Type?: string;
    Icon?: string;
}

export interface Subject {
    code: string;
    name: string;
    syllabusPath: string | null;
}

export interface SemesterData {
    id: string;
    title: string;
    subjects: Subject[];
}

export interface SyllabusMetadata {
    semesters: SemesterData[];
}
