import React, { Component } from 'react'
import SeatPicker from 'react-seat-picker'
import "./MatchReservation.css";
class MatchReservation extends Component {

  state = {
    loading: false,
    reservedSeats: []
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        var seat = { row: row, number: number, id: id };
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setState((prevState) => ({
          reservedSeats: prevState.reservedSeats.concat(seat)
        }))
        
        console.log(this.state.reservedSeats)
        this.setState({ loading: false });
      }
    );
  };


  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState((prevState) => ({
          reservedSeats: prevState.reservedSeats.filter(seat => seat.row !== row && seat.number !== number && seat.id !== id)
        }))
        console.log(this.state.reservedSeats)
        this.setState({ loading: false });
      }
    );
  };


  render() {
    const seats =[
      {
        "ticket_id": "e415e8a1b8c34482b498f1948b4f936a",
        "seat_id": "A6",
        "match": {
          "_id": "211d75a398e3473ea2bd063b680066dc",
          "home_team": "al ahly sc",
          "away_team": "zamalek sc",
          "date": "2021-03-19T07:00:00.000Z",
          "referee": "Lauree Ollerhead",
          "linesmen": [
            "Peirce Ritzman",
            "Maurie Probey"
          ]
        },
        "user": {
          "_id": "3fa85f6457174562b3fc2c963f66afa6",
          "username": "muhanadAtef23",
          "email": "muhanad96@yahoo.com",
          "password": "$5fka#J3h2",
          "first_name": "Muhanad",
          "last_name": "Atef",
          "birthdate": "1998-02-28T00:00:00.000Z",
          "gender": "male",
          "city": "cairo",
          "address": "Maadi 9th St.",
          "role": "fan",
          "authorized": false
        }
      },     {
        "ticket_id": "e415e8a1b8c34482b498f1948b4f936a",
        "seat_id": "A4",
        "match": {
          "_id": "211d75a398e3473ea2bd063b680066dc",
          "home_team": "al ahly sc",
          "away_team": "zamalek sc",
          "date": "2021-03-19T07:00:00.000Z",
          "referee": "Lauree Ollerhead",
          "linesmen": [
            "Peirce Ritzman",
            "Maurie Probey"
          ]
        },
        "user": {
          "_id": "3fa85f6457174562b3fc2c963f66afa6",
          "username": "muhanadAtef23",
          "email": "muhanad96@yahoo.com",
          "password": "$5fka#J3h2",
          "first_name": "Muhanad",
          "last_name": "Atef",
          "birthdate": "1998-02-28T00:00:00.000Z",
          "gender": "male",
          "city": "cairo",
          "address": "Maadi 9th St.",
          "role": "fan",
          "authorized": false
        }
      },
    ]
    let result = seats.map(a => a.seat_id);
    console.log(result);
    const rows = [
      [
        { id: 1, number: 1, isSelected: false, tooltip: "Reserved by you" },
        { id: 2, number: 2, tooltip: "Cost: 15$" },
        null,
        {
          id: 3,
          number: "3",
          isReserved: true,
          orientation: "east",
          tooltip: "Reserved by Rogger"
        },
        { id: 4, number: "4", orientation: "west" },
        null,
        { id: 5, number: 5 },
        { id: 6, number: 6 }
      ],
      [
        {
          id: 7,
          number: 1,
          isReserved: true,
          tooltip: "Reserved by Matthias Nadler"
        },
        { id: 8, number: 2, isReserved: true },
        null,
        { id: 9, number: "3", isReserved: true, orientation: "east" },
        { id: 10, number: "4", orientation: "west" },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 }
      ],
      [
        { id: 13, number: 1 },
        { id: 14, number: 2 },
        null,
        { id: 15, number: 3, isReserved: true, orientation: "east" },
        { id: 16, number: "4", orientation: "west" },
        null,
        { id: 17, number: 5 },
        { id: 18, number: 6 }
      ],
      [
        { id: 19, number: 1, tooltip: "Cost: 25$" },
        { id: 20, number: 2 },
        null,
        { id: 21, number: 3, orientation: "east" },
        { id: 22, number: "4", orientation: "west" },
        null,
        { id: 23, number: 5 },
        { id: 24, number: 6 }
      ],
      [
        { id: 25, number: 1, isReserved: true },
        { id: 26, number: 2, orientation: "east" },
        null,
        { id: 27, number: "3", isReserved: true },
        { id: 28, number: "4", orientation: "west" },
        null,
        { id: 29, number: 5, tooltip: "Cost: 11$" },
        { id: 30, number: 6, isReserved: true }
      ]
    ];
    const { loading } = this.state;
    return (
      <div className='all'>
        <div className='bg-dim full-bg-size'></div>
        {/* <h1 className='text'>Seat Picker</h1> */}
        <div className='container-of-seats' /*style={{ marginTop: "100px" }}*/>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
          <button type="button" className="btn btn-success">Reserve</button>
        </div>
      </div>
    );
  }
}

export default MatchReservation
