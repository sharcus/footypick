export default class Score {
    public homeGoals: number;
    public awayGoals: number;

    public constructor(home: number, away: number) {
        this.homeGoals = home;
        this.awayGoals = away;
    }
}