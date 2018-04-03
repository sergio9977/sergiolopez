import { Pictures } from "./pictures";
import { Locations } from "./locations";
import { Names } from "./names";

export class Clients {
    public id : string;
    public gender: string;
    public name = new Names();
    //public last =  new Names();
    public email: string;
    public location = new Locations();
    public picture = new Pictures();

     constructor(){}
}
