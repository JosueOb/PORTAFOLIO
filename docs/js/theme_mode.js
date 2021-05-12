//Script para cambiar el tema/modo de forma manual
function ThemeMode() {
    return {
        dark: false,
        setTheme: function () {
            var htmlSelector = document.querySelector('html').classList;
            if ('theme' in localStorage) {
                if (localStorage.theme == 'dark') {
                    // Whenever the user explicitly chooses light mode
                    htmlSelector.remove('dark');
                    localStorage.theme = 'light'
                    this.dark = false;
                } else {
                    // Whenever the user explicitly chooses dark mode
                    htmlSelector.add('dark');
                    localStorage.theme = 'dark'
                    this.dark = true;
                }
                
            } else {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    htmlSelector.remove('dark');
                    localStorage.theme = 'light'
                    this.dark = false;
                } else {
                    htmlSelector.add('dark');
                    localStorage.theme = 'dark'
                    this.dark = true;
                }
            }

        },
        setIcon: function () {
            if ('theme' in localStorage) {
                if (localStorage.theme === 'dark') {
                    this.dark = true;
                } else {
                    this.dark = false;
                }
            } else {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    this.dark = true;
                } else {
                    this.dark = false;
                }
            }
        }
    }
}