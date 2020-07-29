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
     * Get character stage name and appearances
     */
    get character() {
        browser.waitUntil(()=>{
            return $('.character').isExisting();
        },5000,'character element failed to load');
        return $$('.character');
     }

      /**
     * get stage names of all cast members
     */
    get allStageNames() {
        return this.sliceStageNameOrAppearance(0);
        
    }

    /**
     * get appearances of all cast members
     */
    get allAppearances() {
        return this.sliceStageNameOrAppearance(1);
    }

    
    /**
     * Return object with with name,stagename and appearances for each character
     */
    get characterObject() {
        let appearances = this.allAppearances;
        let names = this.allNames;
        let stageNames = this.allStageNames;
        let charObj = [];

        for(let i=0;i<names.length;i++) {
            charObj[i] = {
                Name : names[i],
                StageName : stageNames[i],
                Appearances : appearances[i]
            }  
        }
        return charObj;
    }

    
    /**
     * slice the character string to get stage name or appearances
     * @param  {boolean} option 0 for stage names 1 for appearances
     */
    sliceStageNameOrAppearance(option) {
        let choosenElem = [];
        let index = option 
        this.character.forEach( char => {
            choosenElem.push(char.getAttribute('innerText').split('\n')[index]);
        })
        return choosenElem;
    }
}

module.exports = new MovieCastPage();