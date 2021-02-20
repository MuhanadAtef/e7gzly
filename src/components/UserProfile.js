import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import "bootstrap/dist/css/bootstrap.css";
import "./MatchCard.css";
import "./UserProfile.css"
import {authAxios} from "./AxiosConfig";
import MatchCard from "./MatchCard";
import Swal from 'sweetalert2';
import ChangePass from "./ChangePass";
const USERNAME_MAX_LENGTH = 50;
class UserProfile extends Component {
    state = {
        
        login: false, // Open login modal
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthdate: "",
        gender: "",
        city: "",
        address: "",
        role: "",
        authorized: false,
        tickets:[]
    };
    fetchUserData = () => {
        authAxios
          .get("user/")
          .then(response => {
          this.setState({
            username: response.data.username,
            email: response.data.email,
            password: response.data.password,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            birthdate: response.data.birthdate,
            gender: response.data.gender,
            city: response.data.city,
            address: response.data.address,
            role: response.data.role,
            authorized: response.data.authorized
          });
          });
      };
      fetchReservationsData = () => {

        this.setState({                 
            tickets:[]
        });
        authAxios
          .get("reservations/")
          .then(response => {
            for(var i=0;i<response.data.length;i++){
                var date = response.data[i].match.date.replace('Z','')
                date = date.replace('T',' ')
                var ticket= {
                    ticket_id:response.data[i].ticket_id,
                    seat_id:response.data[i].seat_id,
                    match: {
                        id: response.data[i].match.match_id,
                        time: date,
                        home: response.data[i].match.home_team,
                        away: response.data[i].match.away_team,
                        stadium: response.data[i].match.match_venue,
                        referee: response.data[i].match.referee,
                        lineman1: response.data[i].match.linesmen[0],
                        lineman2: response.data[i].match.linesmen[1]                      
                    }
                }
                console.log(ticket)
                this.setState({
                    
                    tickets:this.state.tickets.concat(ticket)
                });
               }  
          });
      };
    componentDidMount() {
        this.fetchUserData();
        this.fetchReservationsData();
    }   
    handleChangeusername=({ target }) => {
        this.setState({
            username: target.value,          
        });
    }
    handleChangeemail=({ target }) => {
        this.setState({
            email: target.value,     
        });
    }
    handleChangefirst_name=({ target }) => {
        this.setState({
            first_name: target.value,      
        });
    }
    handleChangelast_name=({ target }) => {
        this.setState({
            last_name: target.value,           
        });
    }
    handleChangebirthdate=({ target }) => {
        this.setState({
            birthdate: target.value,            
        });
    }
    handleChangegender=({ target }) => {
        this.setState({
            gender: target.value,            
        });
    }
    handleChangecity=({ target }) => {
        this.setState({
            city: target.value,           
        });
    }
    handleChangeaddress=({ target }) => {
        this.setState({
            address: target.value,           
        });
    }
    openLoginModal = () => {
        this.setState({ login: true });
      };
      
    colseLoginModal = () => {
        this.setState({ login: false });
      };
    changUserData=(e)=>{
        e.preventDefault();
        if(
            this.state.first_name=== "" ||
            this.state.last_name==="" ||
            this.state.birthdate==="" ||
            this.state.gender===""||
            this.state.city===""||
            this.state.address==="" 
            )
            {
                Swal.fire("please choose and enter valid data")
                return
            }
        Swal.fire({
            title: 'Do you want to edit your profile data?',
            showDenyButton: true,
            confirmButtonText: `Edit`,
            denyButtonText: `Cancel`,
          }).then((result) => {
            if (result.isConfirmed) {
              
              authAxios.put("user/", {   
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                birthdate:this.state.birthdate,
                gender:this.state.gender,
                city:this.state.city,
                address:this.state.address
            })
            .then(response => {    
             console.log(response) 
             Swal.fire("Profile edited successfully ", '', 'success')
             this.fetchUserData()
            });
            } else if (result.isDenied) {
              Swal.fire("no edit done", '', 'info')
            }
          })
     
    
    }
 
  render() {    
    return (
       
        <>
        <div className="all ">
            <div className=" photo">
                <div className='  justify-content-md-center match-card-row container-fluid'>
                    <div className="react-tabs ">
                        <form onSubmit={this.changUserData} id="form">
                            <h2>UserProfile</h2>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                  <label for="username">username:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                   <h5>{this.state.username}</h5>                         
                                </div>
                                <div className="d-inline col"></div>
                            </div>
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                    <label for="email">email:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                    <input type="text" name="email" value={this.state.email}  ></input>                          
                                </div>
                                <div className="d-inline col"></div>
                            </div>
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                     <label for="first_name">first_name:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                     <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChangefirst_name} ></input>                        
                                </div>
                                <div className="d-inline col"></div>
                            </div>
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                      <label for="first_name">first_name:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                       <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChangefirst_name} ></input>                      
                                </div>
                                <div className="d-inline col"></div>
                            </div>                                        
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                <label for="last_name">last_name:</label> 
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChangelast_name}></input>
                                </div>
                                <div className="d-inline col"></div>
                            </div>     
                            
                           
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                <label for="birthdate">birthdate:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                <input type="text" name="birthdate" value={this.state.birthdate} onChange={this.handleChangebirthdate}></input>      
                                </div>
                                <div className="d-inline col"></div>
                            </div>      
                          
                           
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                <label for="gender">gender:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                <input type="text" name="gender" value={this.state.gender} onChange={this.handleChangegender}></input>
                                </div>
                                <div className="d-inline col"></div>
                            </div>  
                          
                           
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                <label for="city">city:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                <input type="text" name="city" value={this.state.city} onChange={this.handleChangecity}></input>
                                </div>
                                <div className="d-inline col"></div>
                            </div>  
                          
                            
                            <br/>
                            <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                <label for="address">address:</label>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                <input type="text" name="address" value={this.state.address} onChange={this.handleChangeaddress}></input>
                                </div>
                                <div className="d-inline col"></div>
                            </div>  
                           
                          
                            <br/>
                            <input  className="btn-primary btn-sm" type="submit" value="Change Your Data" />    
                        </form>
                        <br/>
                        <div>
                             <div className="row" >
                                <div className="d-inline col"></div>
                                <div className="d-inline col d-flex justify-content-end">
                                     <h6>To change your password click here</h6>
                                </div>
                                <div className="d-inline col  d-flex justify-content-start"> 
                                      <button type="button" class=" btn-primary btn-sm" onClick={this.openLoginModal}>Change Password</button>
                                </div>
                                <div className="d-inline col"></div>
                            </div>                                                      
                        </div>
                        <br/>
                        <ChangePass openLoginModal={this.state.login} colseLoginModal={this.colseLoginModal} usernameMaxLength={USERNAME_MAX_LENGTH}/>
                    </div>
                    <div className="react-tabs ">
                        <h2>Your Reserved Tickets</h2>
                        {this.state.tickets.map(ticket => {
                                return <MatchCard key={ticket.match.match_id} seat_id={ticket.seat_id} ticket_id={ticket.ticket_id}
                                match={ticket.match} fetchReservationsData={this.fetchReservationsData} />;
                            })}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }
}

export default UserProfile;
