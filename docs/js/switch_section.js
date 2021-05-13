function switchSection() {
    return {
        section: 'home',
        setSection: function (sectionName) {
            this.section = sectionName;
        },
        isSelectedSection: function (sectionName) {
            if (this.section === sectionName) {
                return true;
            }
            return false;
        },
        defaultSection: function () {
            var links = document.querySelectorAll('#navbar-links > .navbar-link');
            var validSections = [];
            links.forEach((section, validaSection) => {
                var hash = section.getAttribute('href').replace('#', '');
                if (hash !== '') {
                    validSections.push(hash);
                }
            })
            validSections.forEach((section) => {
                if (section === window.location.hash.replace('#', '')) {
                    this.section = section;
                    console.log(section);
                }
            });
            window.onhashchange = () => this.defaultSection();
        }
    };
}