"use client";

import '@material/web/list/list';
import '@material/web/list/list-item';

import NavBar from './NavBar';
import ThemeChanger from '@/Components/ThemeChanger';

import { useState, useEffect } from "react";
import { setColors, setThemeMode } from '@/Shared/functions';

import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const [themeChangerVisibility, setThemeChangerVisibility] = useState(false);
    const [hamburgerState, setHamburgerState] = useState(false);
    const [hueVal, setHueVal] = useState(0);

    const themeChangerClick = () => setThemeChangerVisibility(!themeChangerVisibility);
    const hamburgerClick = () => setHamburgerState(!hamburgerState);

    useEffect(() => {
        if (typescaleStyles.styleSheet)
            document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

        const hueLocal = parseInt(localStorage.getItem('hueValue') || '289');
        setHueVal(hueLocal);
        setThemeMode(localStorage.getItem('theme') as 'white' | 'dark' | null || 'dark');
        setColors(hueLocal);
    }, []);

    return (
        <>
            <header>
                <div>
                    {/* @ts-ignore */}
                    <md-list-item type="button" id="hamBtn" onClick={hamburgerClick} suppressHydrationWarning>
                        <span className="material-symbols-outlined">Menu</span>
                    {/* @ts-ignore */}
                    </md-list-item>
                </div>

                <a href="/">D3FAU4T's Space</a>

                <div>
                    {/* @ts-ignore */}
                    <md-list-item type="button" id="paletteBtn" onClick={themeChangerClick} suppressHydrationWarning>
                        <span className="material-symbols-outlined">Palette</span>
                    {/* @ts-ignore */}
                    </md-list-item>
                </div>

                <ThemeChanger IsActive={themeChangerVisibility} Hue={hueVal} />
            </header>

            <div className='container'>
                <NavBar IsActive={hamburgerState} />
                {children}
            </div>
        </>
    );
}

export default PageLayout;