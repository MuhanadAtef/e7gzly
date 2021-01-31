import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered, faMale, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./MatchCard.css";

const TEAMS = {
  "al ahly sc": require("../assets/teams/al ahly sc.png").default,
  "zamalek sc": require("../assets/teams/zamalek sc.png").default,
  "el gouna fc": require("../assets/teams/el gouna fc.png").default,
  "al masry sc": require("../assets/teams/al masry sc.png").default,
  "pyramids fc": require("../assets/teams/pyramids fc.png").default,
  "enppi sc": require("../assets/teams/enppi sc.png").default,
  "misr lel makkasa sc": require("../assets/teams/misr lel makkasa sc.png")
    .default,
  "ceramica cleopatra fc": require("../assets/teams/ceramica cleopatra fc.png")
    .default,
  "smouha sc": require("../assets/teams/smouha sc.png").default,
  "national bank of egypt sc": require("../assets/teams/national bank of egypt sc.png")
    .default,
  "ghazl el mahalla sc": require("../assets/teams/ghazl el mahalla sc.png")
    .default,
  "al ittihad alexandria club": require("../assets/teams/al ittihad alexandria club.png")
    .default,
  "aswan sc": require("../assets/teams/aswan sc.png").default,
  "tala'ea el gaish sc": require("../assets/teams/tala'ea el gaish sc.png")
    .default,
  "ismaily sc": require("../assets/teams/ismaily sc.png").default,
  "al mokawloon al arab sc": require("../assets/teams/al mokawloon al arab sc.png")
    .default,
  "wadi degla sc": require("../assets/teams/wadi degla sc.png").default,
  "el entag el harby sc": require("../assets/teams/el entag el harby sc.png")
    .default,
};

class MatchCard extends Component {
  state = {
    user: 0, // 0 for Guest, 1 for Customer, 2 for EFA manager, 4 for Adminstrator
    id: 5,
    time: "2021-05-21 21:15:00",
    home: "al ahly sc",
    away: "el gouna fc",
    referee: "reda abo sree3",
    lineman1: "Haredy",
    lineman2: "Abd Elrheem",
  };

  deleteMatch = (e) => {
      e.stopPropagation();
      var x = window.confirm("Are you sure you want to delete this match?");
      console.log(x, this.props.match.id);
  }

  reserveMatch = () => {
      console.log("Reserve Match");
  }

  editMatch = (e) => {
    e.stopPropagation();
    console.log("Edit Match");
  }

  render() {
    var dateTime = this.props.match.time.split(" ");
    var homeTeam = TEAMS[this.props.match.home];
    var awayTeam = TEAMS[this.props.match.away];
    return (
        <>
          <div className="container match-card" onClick={this.reserveMatch}>
            <div className="row justify-content-md-center match-card-row">
              <div className="col-md">
                <h5>Home</h5>
                <img src={homeTeam} alt="Home Team" height="70px"></img>
                <label className="team-name">{this.props.match.home}</label>
              </div>
              <div className="col-md">
                <label className="small-text">{dateTime[0]}</label>
                <label className="small-text">{dateTime[1]}</label>
                <br />
                <h5>Borg Al Arab</h5>
                <br />
                <label className="small-text"><FontAwesomeIcon icon={faMale} size="1x" /> {this.props.match.referee}</label>
                <label className="small-text"><FontAwesomeIcon icon={faFlagCheckered} size="1x" /> {this.props.match.lineman1}, {this.props.match.lineman2}</label>
              </div>
              <div className="col-md">
                <h5>Away</h5>
                <img src={awayTeam} alt="Away Team" height="70px"></img>
                <label className="team-name">{this.props.match.away}</label>
              </div>
              {this.state.user === 2 ? <div className="col-2 edit-delete">
              <FontAwesomeIcon id="edit-btn" icon={faEdit} size="1x" title="Edit" onClick={this.editMatch}/>
              <FontAwesomeIcon id="delete-btn" icon={faTrashAlt} size="1x" title="Delete" onClick={this.deleteMatch}/>
              </div> : null}
            </div>
          </div>
          
        </>
    );
  }
}

export default MatchCard;
