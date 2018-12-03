<<<<<<< Updated upstream
class Game {
    constructor (template) {
        this.template = template;
        this.character_ids = [];
        this.characters = { /* _id: new Character() */ };
        this.dice = new Dice(template.dice);
        this.currency = new Currency(template.currency);

        this.attributeNames = template.attributeNames;
        this.secondaryAttributes = template.secondaryAttributes;
        this.secondaryAttributesCount = template.secondaryAttributesCount;
        this.primaryAttributeCount = template.primaryAttributeCount;
        //TODO Labels 
    }
    
    addCharacter() {
        this.characters.push(new Character[this.template.characters]);
    }

    removeCharacter(id) {
        // Programmatic context
        // deinitialize character class
        delete this.characters[id];

        // Character data context: db.characters
        //TODO delete in MongoDB

        // Game data context: db.games[_id}
        // get index of character_id to be deleted
        const index = this.character_ids.indexOf(id);

        // ensure it exists (it always will)
        if (index !== -1) {
            this.character_ids.splice(index, 1);
        }

        // push game data changes to Mongo
        //TODO update game document
    }
=======
class Game {
    constructor (template) {
        this.template = template;
        this.character_ids = [];
        this.characters = { /* _id: new Character() */ };
        this.dice = new Dice(template.dice);
        this.currency = new Currency(template.currency);

        this.attributeNames = template.attributeNames;
        this.secondaryAttributes = template.secondaryAttributes;
        this.secondaryAttributesCount = template.secondaryAttributesCount;
        this.primaryAttributeCount = template.primaryAttributeCount;
        //TODO Labels 
    }
    
    addCharacter() {
        this.characters.push(new Character[this.template.characters]);
    }

    removeCharacter(id) {
        delete this.characters[id];

        //TODO delete in MongoDB

        this.character_ids.indexOf(id);

        //TODO update game document
    }
>>>>>>> Stashed changes
}