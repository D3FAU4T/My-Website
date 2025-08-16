"use client";

import '@material/web/list/list';
import '@material/web/list/list-item';

import OnrizonSVG from "@/SVG/Onrizon";
import WordlesSVG from "@/SVG/Wordle";

import { useRouter } from 'next/navigation';
import { useRef, useEffect, useLayoutEffect } from "react";

interface Options {
    IsActive: boolean;
}

const NavBar = (Props: Options) => {

    const router = useRouter();

    const bar = useRef<HTMLElement | null>(null);

    const closeSidebar = () => bar.current!.classList.remove('open');
    const openSidebar = () => bar.current!.classList.add('open');

    useLayoutEffect(() => {
        const el = bar.current;
        if (!el) return;
        const prev = el.style.transition;
        el.style.transition = 'none';
        if (Props.IsActive) openSidebar(); else closeSidebar();
        void el.offsetHeight;
        el.style.transition = prev;
    }, []);

    useEffect(() => {
        if (Props.IsActive)
            openSidebar();
        else closeSidebar();
    }, [Props.IsActive]);

    return (
        <aside className="navbar" ref={bar}>
            {/* @ts-ignore */}
            <md-list className="scrollbar-wrapper" role="menubar" suppressHydrationWarning>
                {/* @ts-ignore */}
                <md-item role="menuitem" suppressHydrationWarning>
                    <div slot="headline">Study Materials</div>
                    <span slot="end" className="material-symbols-outlined">collections_bookmark</span>
                    {/* @ts-ignore */}
                </md-item>
                {/* @ts-ignore */}
                <md-list-item type="button" id="Syllabus" onClick={() => router.push('/syllabus')} suppressHydrationWarning>
                    <p>Syllabus</p>
                    <span slot="start" className="material-symbols-outlined">description</span>
                    {/* @ts-ignore */}
                </md-list-item>
                {/* @ts-ignore */}
                <md-list-item type="button" id="MAR" onClick={() => router.push('/marpts')} suppressHydrationWarning>
                    <p>MAR Points</p>
                    <span slot="start" className="material-symbols-outlined">event_note</span>
                    {/* @ts-ignore */}
                </md-list-item>
                {/* @ts-ignore */}
                <md-item suppressHydrationWarning>
                    <div slot="headline">Games</div>
                    <span slot="end" className="material-symbols-outlined">Stadia_Controller</span>
                    {/* @ts-ignore */}
                </md-item>
                {/* @ts-ignore */}
                <md-list-item type="button" id="Onrizon Games" onClick={() => router.push('/onrizongames')} suppressHydrationWarning>
                    <p>Onrizon Games</p>
                    <OnrizonSVG />
                    {/* @ts-ignore */}
                </md-list-item>
                {/* @ts-ignore */}
                <md-list-item type="button" id="Wordles" onClick={() => router.push('/wordles')} suppressHydrationWarning>
                    <p>Wordles</p>
                    <WordlesSVG />
                    {/* @ts-ignore */}
                </md-list-item>
                {/* @ts-ignore */}
                <md-list-item type="button" id="Community Games" onClick={() => router.push('/communitygames')} suppressHydrationWarning>
                    <p>Community Games</p>
                    <span slot="start" className="material-symbols-outlined">games</span>
                    {/* @ts-ignore */}
                </md-list-item>
                {/* @ts-ignore */}
            </md-list>
        </aside>
    )
}

export default NavBar;