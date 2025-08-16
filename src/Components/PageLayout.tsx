"use client";

import '@material/web/list/list';
import '@material/web/list/list-item';

import NavBar from './NavBar';
import ThemeChanger from '@/Components/ThemeChanger';

import { useState, useEffect, Children, isValidElement, cloneElement } from "react";
import type { CSSProperties, ReactElement } from "react";
import { isMobileDevice, setColors, setThemeMode } from '@/Shared/functions';

import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const [themeChangerVisibility, setThemeChangerVisibility] = useState(false);
    const [hamburgerState, setHamburgerState] = useState(true);
    const [hueVal, setHueVal] = useState(0);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    const themeChangerClick = () => setThemeChangerVisibility(!themeChangerVisibility);
    const hamburgerClick = () => setHamburgerState(!hamburgerState);

    useEffect(() => {
        if (typescaleStyles.styleSheet)
            document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

        const hueLocal = parseInt(localStorage.getItem('hueValue') || '289');
        setHueVal(hueLocal);
        setThemeMode(localStorage.getItem('theme') as 'white' | 'dark' | null || 'dark');
        setColors(hueLocal);
        const mobile = isMobileDevice();
        setIsMobile(mobile);
        setHamburgerState(!mobile);
    }, []);

    return (
        <>
            <header>
                <div>
                    {/* @ts-ignore */}
                    <md-list-item type="button" id="hamBtn" onClick={hamburgerClick} suppressHydrationWarning>
                        <span className="material-symbols-outlined">{hamburgerState ? 'Menu_Open' : 'Menu'}</span>
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

            <div className={`container ${hamburgerState ? 'navbar-open' : ''}`}>
                <NavBar IsActive={hamburgerState} />
                {Children.map(children, (child) => {
                    if (!isValidElement(child)) return child;
                    if (typeof child.type === 'string' && child.type === 'main') {
                        // Avoid injecting dynamic styles on mobile devices.
                        // Also avoid SSR/client mismatch by waiting until isMobile is known.
                        if (isMobile === null || isMobile === true) return child;
                        const mainEl = child as ReactElement<{ style?: CSSProperties }>;
                        const existingStyle = (mainEl.props?.style ?? {}) as CSSProperties;
                        return cloneElement(mainEl, {
                            style: {
                                ...existingStyle,
                                marginLeft: hamburgerState ? '0rem' : '2rem',
                            } as CSSProperties,
                        });
                    }
                    return child;
                })}
            </div>
        </>
    );
}

export default PageLayout;