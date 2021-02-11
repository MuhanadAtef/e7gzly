import React, { Component } from 'react'
import SeatPicker from 'react-seat-picker'
import "./MatchReservation.css";
import MatchCard from "./MatchCard";
import { authAxios, unAuthAxios } from "./AxiosConfig";
import Swal from 'sweetalert2'
class MatchReservation extends Component {


  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      selectedSeat: -1,
      rows: [],
      match: {
        id: 1,
        time: Date().toLocaleString(),
        home: "Home",
        away: "Away",
        stadium: "Stadium",
        referee: "Ref",
        lineman1: 1,
        lineman2: 1
      }
    }

  }

  componentDidMount() {
    this.fetchData()
  }

  generateSeats = (x, y) => {
    console.log("d5lt generate seats")
    var id = 1
    var rows = []
    for (let i = 0; i < x; i++) {
      var row = []
      var number = 1
      for (let j = 0; j < y; j++) {
        var seat = {
          id: (i + 10).toString(36).toUpperCase() + number,
          number: number,
          isReserved: false
        }
        row.push(seat)
        id += 1
        number += 1
      }
      rows.push(row)

    }
    return rows
  }

  reserve = async () => {
    //here send the request to the backend
    this.setState(
      {
        loading: true
      }, async() => {
        if (this.state.selectedSeat === -1) {
          Swal.fire(
            'Please select a seat!',
            '',
            'warning'
          )
          this.setState({
            loading: false,
          });
        }
        else {
          Swal.fire({
            title: 'Are you sure you want to reserve This Seat -> ' + this.state.selectedSeat + ' ? ',
            showCancelButton: true,
            confirmButtonText: `Reserve`,
          }).then(async (result) => {
            if (result.isConfirmed) {
              console.log(this.state.match.id, this.state.selectedSeat)
              const { value: creditCard } =  await Swal.fire({
                title: 'Please enter your payment details here',
                html:
                  '<input id="card" class="swal2-input" placeholder="Card number">' +
                  '<input id="pin" class="swal2-input" placeholder="Pin number">',
                preConfirm: () => {
                  return [
                    document.getElementById('card').value,
                    document.getElementById('pin').value
                  ]
                }
              });

              if (creditCard) {
                console.log("hb3t el request aho")
                authAxios
                  .post("/reservations/", {
                    match_id: this.state.match.id,
                    seat_id: this.state.selectedSeat
                  })
                  .then(response => {
                    Swal.fire('Seats Reserved Successfully!', '', 'success')
                    var reservedseats = []
                    reservedseats.push(this.state.selectedSeat)
                    this.updateSeats(reservedseats)
                    this.setState({
                      loading: false,
                      selectedSeat: -1
                    });
                  }).catch(error => {
                    var errorMsg = error.response;
                    Swal.fire(
                      'Failed!',
                      errorMsg,
                      'error'
                    )
                    this.setState(
                      {
                        loading: false
                      });
                  });
              }
              else  {
                this.setState({
                  loading: false,
                });
              }
            }
            else {
              this.setState({
                loading: false,
              });
            }
          })

        }
      });

  }

  fetchData = () => {
    var thePath = window.location.href
    const match_id = thePath.substring(thePath.lastIndexOf(':') + 1)
    console.log(match_id)
    unAuthAxios
      .get("/match/", {
        params: {
          id: match_id
        },
      })
      .then(response => {
        var matchInfo = JSON.parse(JSON.stringify(response.data));
        var date = matchInfo.date.replace('Z', '')
        date = date.replace('T', ' ')
        var match = {
          id: matchInfo.match_id,
          time: date,
          home: matchInfo.home_team,
          away: matchInfo.away_team,
          stadium: matchInfo.match_venue.name,
          referee: matchInfo.referee,
          lineman1: matchInfo.linesmen[0],
          lineman2: matchInfo.linesmen[1]
        };
        console.log(match)
        console.log(this.state.match)
        let reserved = matchInfo.seats.map(a => a.seat_id);
        console.log(reserved)
        this.setState(
          {
            loading: true,
            rows: this.generateSeats(matchInfo.match_venue.vip_rows, matchInfo.match_venue.vip_seats_per_row)
          }, () => {
            this.updateSeats(reserved)
            this.setState({
              match: match,
            }
            )
            console.log(this.state.rows)
            this.setState({ loading: false });
          });
        console.log("fetchData finished")
      })


  }

  updateSeats = (reserved) => {
    var newSeats = this.state.rows
    console.log("hena fe update seats")
    console.log(this.state.rows)
    if (this.state.rows.length === 0) {
      console.log("gwa el if")
    }
    else {
      console.log(newSeats)
      reserved.forEach(seat => {
        var a = seat.substr(0, 1)
        var b = seat.substr(1)
        var x = parseInt(a.toLowerCase().charCodeAt(0) - 97, 10)
        var y = parseInt(b, 10) - 1
        console.log("here" + reserved)
        console.log(x, y)
        newSeats[x][y].isReserved = true
        newSeats[x][y].isSelected = false
      })
      this.setState(
        {
          rows: newSeats
        },
        console.log(this.state.rows))
    }
  }

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        var seat = { row: row, number: number, id: id };
        const newTooltip = '';
        addCb(row, number, id, newTooltip);
        this.setState({
          selectedSeat: seat.id
        })
        console.log("check state of selectedSeat")
        console.log(this.state.selectedSeat)
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
        this.setState({
          selectedSeat: -1
        })
        console.log(this.state.selectedSeat)
        this.setState({ loading: false });
      }
    );
  };


  render() {
    // const rows = [
    //   [
    //     { id: 1, number: 1, isSelected: false, tooltip: "Reserved by you" },
    //     { id: 2, number: 2, tooltip: "Cost: 15$" },
    //     null,
    //     {
    //       id: 3,
    //       number: "3",
    //       isReserved: true,
    //       orientation: "east",
    //       tooltip: "Reserved by Rogger"
    //     },
    //     { id: 4, number: "4", orientation: "west" },
    //     null,
    //     { id: 5, number: 5 },
    //     { id: 6, number: 6 }
    //   ],
    //   [
    //     {
    //       id: 7,
    //       number: 1,
    //       isReserved: true,
    //       tooltip: "Reserved by Matthias Nadler"
    //     },
    //     { id: 8, number: 2, isReserved: true },
    //     null,
    //     { id: 9, number: "3", isReserved: true, orientation: "east" },
    //     { id: 10, number: "4", orientation: "west" },
    //     null,
    //     { id: 11, number: 5 },
    //     { id: 12, number: 6 }
    //   ],
    //   [
    //     { id: 13, number: 1 },
    //     { id: 14, number: 2 },
    //     null,
    //     { id: 15, number: 3, isReserved: true, orientation: "east" },
    //     { id: 16, number: "4", orientation: "west" },
    //     null,
    //     { id: 17, number: 5 },
    //     { id: 18, number: 6 }
    //   ],
    //   [
    //     { id: 19, number: 1, tooltip: "Cost: 25$" },
    //     { id: 20, number: 2 },
    //     null,
    //     { id: 21, number: 3, orientation: "east" },
    //     { id: 22, number: "4", orientation: "west" },
    //     null,
    //     { id: 23, number: 5 },
    //     { id: 24, number: 6 }
    //   ],
    //   [
    //     { id: 25, number: 1, isReserved: true },
    //     { id: 26, number: 2, orientation: "east" },
    //     null,
    //     { id: 27, number: "3", isReserved: true },
    //     { id: 28, number: "4", orientation: "west" },
    //     null,
    //     { id: 29, number: 5, tooltip: "Cost: 11$" },
    //     { id: 30, number: 6, isReserved: true }
    //   ]
    // ];
    const { loading } = this.state;
    // if (this.state.loading) {
    //   return <FontAwesomeIcon id="loading-icon" icon={faSpinner} spin />;
    // }

    return (
      <div className='all'>
        <div className='bg-dim full-bg-size'></div>
        {/* <h1 className='text'>Seat Picker</h1> */}
        <MatchCard key={this.state.match.id} match={this.state.match} />
        <div className='container-of-seats' /*style={{ marginTop: "100px" }}*/>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={this.state.rows}
            maxReservableSeats={1}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
          <button type="button" className="btn btn-success" onClick={this.reserve}>Reserve</button>
        </div>
      </div>
    );
  }
}

export default MatchReservation
