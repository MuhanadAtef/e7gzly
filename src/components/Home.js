import React, { Component } from "react";
import MatchCard from "./MatchCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

class Home extends Component {
  state = {
    requestMatchNumber: 0,
    hasMore: true,
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

  fetchData = () => {
    if (this.state.matches.length >= 20) {
        this.setState({hasMore: false})
        return
    }
    var matches = []
    for (var i=0; i<4; i++) {
        var match = {
            id: Math.random(),
            time: "2021-05-21 21:15:00",
            home: "tala'ea el gaish sc",
            away: "al mokawloon al arab sc",
            referee: "reda abo sree3",
            lineman1: "Haredy",
            lineman2: "Abd Elrheem",
        }
        matches.push(match)
    }
    this.setState({ 
        matches: this.state.matches.concat(matches)
      })    
  }

  render() {
    return (
        <InfiniteScroll
            className="home-page"
            dataLength={this.state.matches.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.hasMore}
            loader={<FontAwesomeIcon id="loading-icon" icon={faSpinner} spin/>}
            endMessage={<h3 id="no-more-matches" style={{marginTop: '25px'}}> No more matches posted yet !!!</h3>}
        >
            {this.state.matches.map(match => {
            return <MatchCard key={match.id} match={match} />;
            })}
      </InfiniteScroll>
    );
  }
}

export default Home;
