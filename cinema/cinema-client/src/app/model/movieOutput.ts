import { Projection } from "./projection";

export class MovieOutput {
    name:string;
    director: string;
    mainActors: string;
    constructor(name:string,director: string,mainActors: string){
        this.name=name;
        this.director=director;
        this.mainActors=mainActors;
    }
}
