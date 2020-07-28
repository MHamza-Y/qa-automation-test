class MovieCastPage {
    get allNames() {
        browser.waitUntil(()=>{
            return $('.cast_list .primary_photo img').isExisting();
        },5000,'List failed to load');
        let imglinks = $$('.cast_list .primary_photo img');
        let names = [];
        imglinks.forEach(link => {
            names.push(link.getAttribute('Title'));
        });
        return names;
        
    }

    get allStageNames() {
        stageNames = $$('.character> :not([class])');


    }
    get allAppearances() {
        $$('.toggle-episodes')
    }
}

module.exports = new MovieCastPage();