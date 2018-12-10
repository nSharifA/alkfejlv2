import { Projection } from "./projection";

export class Movie {
    id: number;
    name:string;
    director: string;
    mainActors: string;
   

    constructor(id: number,
        name:string,
        director: string,
        mainActors: string,
        ){
            this.id=id;
            this.name=name;
            this.director=director;
            this.mainActors=mainActors;
            
    }
}
