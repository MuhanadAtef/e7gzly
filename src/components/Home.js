import React, { Component } from "react";
import MatchCard from "./MatchCard";

class Home extends Component {
  state = {
    requestMatchNumber: 0,
    matches: [
      {
        id: 1,
        time: "2021-05-21 21:15:00",
        home: "al ahly sc",
        away: "el gouna fc",
        referee: "reda abo sree3",
        lineman1: "Haredy",
        lineman2: "Abd Elrheem",
      },
      {
        id: 2,
        time: "2021-05-21 21:15:00",
        home: "zamalek sc",
        away: "smouha sc",
        referee: "reda abo sree3",
        lineman1: "Haredy",
        lineman2: "Abd Elrheem",
      },
      {
        id: 3,
        time: "2021-05-21 21:15:00",
        home: "al masry sc",
        away: "enppi sc",
        referee: "reda abo sree3",
        lineman1: "Haredy",
        lineman2: "Abd Elrheem",
      },
      {
        id: 4,
        time: "2021-05-21 21:15:00",
        home: "tala'ea el gaish sc",
        away: "al mokawloon al arab sc",
        referee: "reda abo sree3",
        lineman1: "Haredy",
        lineman2: "Abd Elrheem",
      },
    ],
  };

  render() {
      return (
          <div>
          {this.state.matches.map(match => { return (
              <MatchCard key={match.id} match={match} />)
          })}
          </div>
      )
  }
}

export default Home;
