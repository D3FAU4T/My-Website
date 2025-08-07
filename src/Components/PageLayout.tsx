"use client";

// Material Web component registrations (import only what you need)
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

import NavBar from './NavBar';
import ThemeChanger from '@/Components/ThemeChanger';

import { useState, useEffect } from 'react';
import { setColors, setThemeMode } from '@/Shared/functions';

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
                    <md-list-item
                        type="button"
                        id="hamBtn"
                        onClick={hamburgerClick}
                    >
                        <span className="material-symbols-outlined">Menu</span>
                    </md-list-item>
                </div>

                <a href="/">D3FAU4T&apos;s Space</a>

                <div>
                    <md-list-item type="button" id="paletteBtn" onClick={themeChangerClick}>
                        <span className="material-symbols-outlined">Palette</span>
                    </md-list-item>
                </div>

                <ThemeChanger IsActive={themeChangerVisibility} Hue={hueVal} />
            </header>

            <div className={`container ${hamburgerState ? 'navbar-open' : ''}`}>
                <NavBar IsActive={hamburgerState} />
                {children}
            </div>
        </>
    );
}

export default PageLayout;