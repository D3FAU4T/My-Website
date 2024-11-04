export type Summaries = {
    Name: string;
    Link: string;
    IsAnId: boolean;
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

export interface AssignmentOptions {
    Name: string;
    Subject: string;
    SubjectIcon: string;
    Description: string;
    DueDate: string;
    Status: string;
}