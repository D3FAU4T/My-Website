export const setColors = (hueValue: number) => {
    const primaryColor = `hsl(${hueValue}, 100%, 70%)`;
    document.documentElement.style.setProperty('--md-sys-color-primary', primaryColor);
};

export const setThemeMode = (mode: "white" | "dark") => {
    const root = document.documentElement;
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
        // (document.querySelector('#wordleIcon > g') as SVGGElement).style.fill = '#ffffff';
        localStorage.setItem('theme', 'dark');
    }
}