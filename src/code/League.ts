import Match from "./Match";
import Team from "./team";

export default class League {
    public name: string;
    public teams: Team[];
    public matches: Match[];

    public constructor(name: string) {
        this.name = name;
        this.matches = [];
        this.teams = [];
    }

    public setTeams(teams: Team[]) {
        this.teams = teams;
    }

    public setMatches(matches: Match[]) {
        this.matches = matches;
    }
}