import { CustomPage } from "./DOM/Page.js";

export class CustomBlogAlterne extends CustomPage {

    contenu;

    constructor(cat, alias, style=null){
        super(cat, alias);
        // Créer les infos des catégories
        this.setMainCat(cat);
    }
}