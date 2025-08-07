"use client";

import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

import OnrizonSVG from "@/SVG/Onrizon";
import WordlesSVG from "@/SVG/Wordle";

import { useRouter } from 'next/navigation';
import { useRef, useEffect } from "react";

interface Options {
    IsActive: boolean;
}

const NavBar = (Props: Options) => {

    const router = useRouter();

    const bar = useRef<HTMLElement | null>(null);

    const closeSidebar = () => bar.current!.classList.remove('open');
    const openSidebar = () => bar.current!.classList.add('open');

    useEffect(() => {
        if (Props.IsActive)
            openSidebar();
        else
            closeSidebar();
    }, [Props.IsActive]);

    return (
        <aside className="navbar" ref={bar}>
            <md-list className="scrollbar-wrapper" role="menubar">
                <md-list-item>
                    <div slot="headline">Study Materials</div>
                    <span slot="end" className="material-symbols-outlined">collections_bookmark</span>
                </md-list-item>
                <md-list-item type="button" id="Syllabus" onClick={() => router.push('/syllabus')}>
                    <p>Study Materials</p>
                    <span slot="start" className="material-symbols-outlined">description</span>
                </md-list-item>
                <md-list-item type="button" id="MAR" onClick={() => router.push('/marpts')}>
                    <p>MAR Points</p>
                    <span slot="start" className="material-symbols-outlined">event_note</span>
                </md-list-item>
                <md-list-item>
                    <div slot="headline">Games</div>
                    <span slot="end" className="material-symbols-outlined">stadia_controller</span>
                </md-list-item>
                <md-list-item type="button" id="Onrizon Games" onClick={() => router.push('/onrizongames')}>
                    <p>Onrizon Games</p>
                    <OnrizonSVG />
                </md-list-item>
                <md-list-item type="button" id="Wordles" onClick={() => router.push('/wordles')}>
                    <p>Wordles</p>
                    <WordlesSVG />
                </md-list-item>
                <md-list-item type="button" id="Community Games" onClick={() => router.push('/communitygames')}>
                    <p>Community Games</p>
                    <span slot="start" className="material-symbols-outlined">games</span>
                </md-list-item>
            </md-list>
        </aside>
    )
}

export default NavBar;