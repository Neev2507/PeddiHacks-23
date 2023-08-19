const theme = document.querySelector('.theme');
const themes = {
    light: ['#0097B2', '#7ED957', '#ffffff', '#000000'],
    dark: ['#7ED957', '#0097B2', '#000000', '#ffffff']
}
const themeChange = () => {
    const theme = window.localStorage.getItem('theme');
    const newTheme = theme ? (theme === 'dark' ? 'light' : 'dark') : 'light';
    window.localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
        document.documentElement.style.setProperty('--primary-color', themes.light[0]);
        document.documentElement.style.setProperty('--secondary-color', themes.light[1]);
        document.documentElement.style.setProperty('--text-color', themes.light[2]);
        document.documentElement.style.setProperty('--bg-color', themes.light[3]);
    }
    else {
        document.documentElement.style.setProperty('--primary-color', themes.dark[0]);
        document.documentElement.style.setProperty('--secondary-color', themes.dark[1]);
        document.documentElement.style.setProperty('--text-color', themes.dark[2]);
        document.documentElement.style.setProperty('--bg-color', themes.dark[3]);
    }
}
theme.onclick = themeChange;
themeChange();
themeChange();