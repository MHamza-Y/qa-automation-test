class MovieCastPage {

    /**
     * get names of all cast member
     */
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

    /**
     * get stage names of all cast members
     */
    get allStageNames() {
        stageNames = $$('.character> :not([class])');


    }

    /**
     * get appearances of all cast members
     */
    get allAppearances() {
        $$('.toggle-episodes')
    }
}

module.exports = new MovieCastPage();