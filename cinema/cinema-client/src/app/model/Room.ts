import { Chair } from "./chair";
import { Projection } from "./projection";

export class Room {
    id: number;
    name: string;
    headCount: number;
    chair: Chair[];
    projection:Projection;
}

