module.exports.Command = class Command {
    constructor(query, description, utility, action){
        this.query = query;
        this.description = description;
        this.utility = utility;
        this.action = action;
    }

    getQuery(){
        return this.query;
    }

    getDescription(){
        return this.description;
    }

    getUtility(){
        return this.utility;
    }

    getAction(){
        return this.action;
    }

    changeQuery(query){
        this.query = query;
    }
}
