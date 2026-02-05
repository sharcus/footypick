import Team from "./team"
import Score from "./Score"

export default class Match {
    public homeTeam: Team;
    public awayTeam: Team;

    public predictedScore: Score;
    public resultScore: Score;

    public constructor(home: Team, away: Team) {
        this.homeTeam = home;
        this.awayTeam = away;
        this.resultScore = new Score(0, 0);
        this.predictedScore = new Score(0, 0);
    }

}