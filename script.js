const linkElements = document.querySelectorAll('.link');
for (let i of linkElements) {
    i.onclick = () => {
        let linkName = i.getAttribute('aria-roledescription');
        window.location.href = links[linkName];
    }
}

const theme = document.querySelector('.theme');
const themes = {
    light: ['#112d38', '#ffffff', '#9bc3dd'],
    dark: ['#9bc3dd', '#ffffff', '#112d38']
}
const themeChange = () => {
    const theme = window.localStorage.getItem('theme');
    const newTheme = theme ? (theme === 'dark' ? 'light' : 'dark') : 'light';
    window.localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
        document.documentElement.style.setProperty('--primary-color', themes.light[0]);
        document.documentElement.style.setProperty('--text-color', themes.light[1]);
        document.documentElement.style.setProperty('--bg-color', themes.light[2]);
    }
    else {
        document.documentElement.style.setProperty('--primary-color', themes.dark[0]);
        document.documentElement.style.setProperty('--text-color', themes.dark[1]);
        document.documentElement.style.setProperty('--bg-color', themes.dark[2]);
    }
}
theme.onclick = themeChange;
themeChange();
themeChange();