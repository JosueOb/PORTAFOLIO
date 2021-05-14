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
            links.forEach((section) => {
                var hash = section.getAttribute('href').replace('#', '');
                if (hash !== '') {
                    validSections.push(hash);
                }
            })
            validSections.forEach((section) => {
                if (section === window.location.hash.replace('#', '')) {
                    this.section = section;
                    //console.log(section);
                }
            });
            window.onhashchange = () => this.defaultSection();
            window.onscroll = () => this.scrollspy();
            window.onload = () => this.scrollspy();
            window.onresize = () => this.scrollspy();
        },
        scrollspy: function () {
            const sections = document.querySelectorAll(".section");
            const links = document.querySelectorAll(".navbar-link");

            const pageYPosition =
                document.documentElement.scrollTop || document.body.scrollTop;
            //console.log('page '+ pageYPosition);
            sections.forEach((section) => {
                const sectionYPosition = section.offsetTop;
                //console.log('section '+sectionYPosition);
                if (pageYPosition > sectionYPosition - 60) {
                    links.forEach((link) => {
                        if (link.getAttribute('href').replace('#', '') === section.id) {
                            this.section = section.id;
                            //console.log('ingresó a ' + section.id);
                        }
                    });
                }
            });
        }
    };
}