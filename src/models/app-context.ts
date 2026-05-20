import Database from "../database";

export default class AppContext {
    constructor(public database: Database){}
}