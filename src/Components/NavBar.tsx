"use client";

import '@material/web/list/list-item';
import '@material/web/list/list';

import OnrizonSVG from "../../public/onrizon.svg";
import WordlesSVG from "../../public/wordles.svg";

import { useRouter } from 'next/navigation';
import { useRef, useEffect } from "react";

interface Options {
    IsActive: boolean;
}

const NavBar = (Props: Options) => {

    const router = useRouter();

    const bar = useRef<HTMLElement | null>(null);

    const closeSidebar = () => {
        bar.current!.style.width = '0px';
        setTimeout(() => bar.current!.style.display = 'none', 300);
    }

    const openSidebar = () => {
        bar.current!.style.display = 'block';
        setTimeout(() => bar.current!.style.width = '13rem', 10);
    }

    useEffect(() => {
        if (Props.IsActive) openSidebar();
        else closeSidebar();
    }, [Props.IsActive]);

    return (
        <aside className="navbar" ref={bar}>
            <md-list className="scrollbar-wrapper" role="menubar">
                <md-item>
                    <div slot="headline">Study Materials</div>
                    <span slot="end" className="material-symbols-outlined">collections_bookmark</span>
                </md-item>
                <md-list-item type="button" id="Syllabus" onClick={() => router.push('/syllabus')}>
                    <p>Syllabus</p>
                    <span slot="start" className="material-symbols-outlined">description</span>
                </md-list-item>
                <md-list-item type="button" id="MAR">
                    <p>MAR Points</p>
                    <span slot="start" className="material-symbols-outlined">event_note</span>
                </md-list-item>
                <md-list-item type="button" id="Assignment">
                    <p>Assignments</p>
                    <span slot="start" className="material-symbols-outlined">assignment</span>
                </md-list-item>
                <md-item>
                    <div slot="headline">Games</div>
                    <span slot="end" className="material-symbols-outlined">Stadia_Controller</span>
                </md-item>
                <md-list-item type="button" id="Onrizon Games">
                    <p>Onrizon Games</p>
                    <OnrizonSVG slot="start" />
                </md-list-item>
                <md-list-item type="button" id="Wordles">
                    <p>Wordles</p>
                    <WordlesSVG slot="start" id="wordleIcon" />
                </md-list-item>
                <md-list-item type="button" id="Community Games">
                    <p>Community Games</p>
                    <span slot="start" className="material-symbols-outlined">games</span>
                </md-list-item>
            </md-list>
        </aside>
    )
}

export default NavBar;