import { CustomPage } from "./DOM/Page.js";

export class CustomBlogAlterne extends CustomPage {
    constructor(cat, alias, style=null){
        super(cat, alias);
        document.getElementById('contenu').classList.add('blog');
        
        this.setStyle(1, 0, style);
        // Créer les infos des catégories
        this.setCat(cat, this.cols[0]);
    }
}