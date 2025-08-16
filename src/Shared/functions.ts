export const setColors = (hueValue: number) => {
    const primaryColor = `hsl(${hueValue}, 100%, 70%)`;
    document.documentElement.style.setProperty('--md-sys-color-primary', primaryColor);
};

export const setThemeMode = (mode: "white" | "dark") => {
    const root = document.documentElement;
    const link = document.getElementById('theme-color') as HTMLLinkElement;

    if (mode == "white") {
        root.style.setProperty('--md-sys-color-background', '#f7f9ff');
        root.style.setProperty('--md-sys-color-surface', '#ebeef3');
        root.style.setProperty('--md-sys-color-text', '#000000');
        root.style.setProperty('--option-cover-color', '#dbe3ed');
        root.style.setProperty('--small-text-color', '#000000');
        root.style.setProperty('--selected', '#dbe3ed');
        root.style.setProperty('--hover-color', `var(--md-sys-color-primary)`);
        root.style.setProperty(`--link-color`, `#ffffff`);
        root.style.setProperty('--note-border-color-hover', `var(--md-sys-color-text)`);
        root.style.setProperty('--link-decoration', `underline`);
        (document.querySelector('#wordleIcon > g') as SVGGElement).style.fill = '#000000';
        link.href = link.href.replace('github-dark-dimmed', 'atom-one-light');
        localStorage.setItem('theme', 'white');
    } else {
        root.style.setProperty('--md-sys-color-background', '#10131b');
        root.style.setProperty('--md-sys-color-surface', '#1c1f28');
        root.style.setProperty('--md-sys-color-text', '#ffffff');
        root.style.setProperty('--option-cover-color', '#414755');
        root.style.setProperty('--small-text-color', '#e0e2ed');
        root.style.setProperty('--selected', '#33353a');
        root.style.setProperty('--hover-color', `#2c2f38`);
        root.style.setProperty(`--link-color`, `var(--md-sys-color-primary)`);
        root.style.setProperty('--note-border-color-hover', `var(--md-sys-color-primary)`);
        root.style.setProperty('--link-decoration', `none`);
        (document.querySelector('#wordleIcon > g') as SVGGElement).style.fill = '#ffffff';
        link.href = link.href.replace('atom-one-light', 'github-dark-dimmed');
        localStorage.setItem('theme', 'dark');
    }
}

export const isMobileDevice = () => {
    if (typeof window === 'undefined')
        return false;
    
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
        
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return mobileKeywords.test(userAgent) || isTouchDevice;
};