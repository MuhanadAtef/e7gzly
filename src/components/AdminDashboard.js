import React, { Component } from 'react'
import ExistingUser from './ExistingUser'
import UserToBeApproved from './UserToBeApproved'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css"; // import css
// import 'react-tabs/style/react-tabs.css';
import "./AdminDashboard.css";
class AdminDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 1,
            usersToBeApproved: [
                {
                    id: 1,
                    name: 'Bruce Wayne',
                    Authority: 'Fan',
                },
                {
                    id: 2,
                    name: 'Clark',
                    Authority: 'Manager',
                },
                {
                    id: 3,
                    name: 'Diana',
                    Authority: 'Fan',
                }, {
                    id: 4,
                    name: 'Bruce',
                    Authority: 'Fan',
                },
                {
                    id: 5,
                    name: 'Clark',
                    Authority: 'Fan',
                },
                {
                    id: 6,
                    name: 'Diana',
                    Authority: 'Fan',
                }, {
                    id: 7,
                    name: 'Bruce',
                    Authority: 'Fan',
                },
                {
                    id: 8,
                    name: 'Clark',
                    Authority: 'Fan',
                },
                {
                    id: 9,
                    name: 'Diana',
                    Authority: 'Fan',
                }
            ],
            existingUsers: [
                {
                    id: 1,
                    name: 'Bruce Wayne',
                    Authority: 'Fan',
                },
                {
                    id: 2,
                    name: 'Clark',
                    Authority: 'Manager',
                },
                {
                    id: 3,
                    name: 'Diana',
                    Authority: 'Fan',
                }, {
                    id: 4,
                    name: 'Bruce',
                    Authority: 'Fan',
                },
                {
                    id: 5,
                    name: 'Clark',
                    Authority: 'Fan',
                },
                {
                    id: 6,
                    name: 'Diana',
                    Authority: 'Fan',
                }, {
                    id: 7,
                    name: 'Bruce',
                    Authority: 'Fan',
                },
                {
                    id: 8,
                    name: 'Clark',
                    Authority: 'Fan',
                },
                {
                    id: 9,
                    name: 'Diana',
                    Authority: 'Fan',
                }
            ]
        }
    }
    changeCurrentPage = numPage => {
        if (numPage == 2) {
            this.setState({
                currentPage: numPage, usersToBeApproved: [
                    {
                        id: 1,
                        name: 'Mahmoud Mohamed',
                        Authority: 'Fan',
                    }
                ], existingUsers: [
                    {
                        id: 1,
                        name: 'Ibrahim Wayne',
                        Authority: 'Fan',
                    }
                ]
            });
        }
        else {
            this.setState({
                currentPage: numPage, usersToBeApproved: [
                    {
                        id: 1,
                        name: 'Bruce Wayne',
                        Authority: 'Fan',
                    },
                    {
                        id: 2,
                        name: 'Clark',
                        Authority: 'Manager',
                    },
                    {
                        id: 3,
                        name: 'Diana',
                        Authority: 'Fan',
                    }, {
                        id: 4,
                        name: 'Bruce',
                        Authority: 'Fan',
                    },
                    {
                        id: 5,
                        name: 'Clark',
                        Authority: 'Fan',
                    },
                    {
                        id: 6,
                        name: 'Diana',
                        Authority: 'Fan',
                    }, {
                        id: 7,
                        name: 'Bruce',
                        Authority: 'Fan',
                    },
                    {
                        id: 8,
                        name: 'Clark',
                        Authority: 'Fan',
                    },
                    {
                        id: 9,
                        name: 'Diana',
                        Authority: 'Fan',
                    }
                ], existingUsers: [
                    {
                        id: 1,
                        name: 'Bruce Wayne',
                        Authority: 'Fan',
                    },
                    {
                        id: 2,
                        name: 'Clark',
                        Authority: 'Manager',
                    },
                    {
                        id: 3,
                        name: 'Diana',
                        Authority: 'Fan',
                    }, {
                        id: 4,
                        name: 'Bruce',
                        Authority: 'Fan',
                    },
                    {
                        id: 5,
                        name: 'Clark',
                        Authority: 'Fan',
                    },
                    {
                        id: 6,
                        name: 'Diana',
                        Authority: 'Fan',
                    }, {
                        id: 7,
                        name: 'Bruce',
                        Authority: 'Fan',
                    },
                    {
                        id: 8,
                        name: 'Clark',
                        Authority: 'Fan',
                    },
                    {
                        id: 9,
                        name: 'Diana',
                        Authority: 'Fan',
                    }
                ]
            })
        };
        //fetch a data
        //or update a query to get data
    };
    render() {
        return (
            <div className='AdminDashboard'>
                <div className='wrapper'>
                    <Tabs>
                        <TabList>
                            <Tab>Users Requests</Tab>
                            <Tab>Users</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='admindashboard-title' >
                                <UserToBeApproved users={this.state.usersToBeApproved}  ></UserToBeApproved>
                                <Pagination
                                    currentPage={this.state.currentPage}
                                    totalSize={100}
                                    sizePerPage={10}
                                    changeCurrentPage={this.changeCurrentPage}
                                    theme="bootstrap"
                                />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='admindashboard-title'>
                                <ExistingUser users={this.state.existingUsers} ></ExistingUser>
                                <Pagination
                                    currentPage={this.state.currentPage}
                                    totalSize={100}
                                    sizePerPage={10}
                                    changeCurrentPage={this.changeCurrentPage}
                                    theme="bootstrap"
                                />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default AdminDashboard
