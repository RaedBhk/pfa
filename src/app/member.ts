import {Article} from "./article";
export class Member {
    constructor(public firstname:string, public lastname:string, public resume:string, public phone:string, public homepage:string, public grade:string, public articles:Article[] ){};
}
