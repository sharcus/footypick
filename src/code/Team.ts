export default class Team {
    public name: string;
    public id: string;
    public logoSmallUrl: string;
    public logoBigUrl: string;

    public constructor(name: string, id: string, smallUrl: string, bigUrl: string) {
        this.name = name;
        this.id = id;
        this.logoSmallUrl = smallUrl;
        this.logoBigUrl = bigUrl;
    }
}