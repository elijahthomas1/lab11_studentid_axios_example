import { render } from '@testing-library/react'
import axios from 'axios'
import React, { Component } from 'react'
//Elijah Thomas 100904475

export default class PersonList extends Component {
    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <div>
                {this.state.persons.map((person) => (
                    <div>
                        <h3>{person.name.title + " " + person.name.first + " " + person.name.last}</h3>
                        <img src={person.picture.medium} />
                        <h5>User Name:      {person.login.username}</h5>
                        <h5>Gender:     {person.gender}</h5>
                        <h5>Time Zone Description:      {person.location.timezone.description}</h5>
                        <h5>Address:        {person.location.street.number + " "+ person.location.street.name}</h5>
                        <h5>Email:      {person.email}</h5>
                        <h5>Birth Date and Age      {person.dob.date + " " + person.dob.age}</h5>
                        <h5>Register Date:      {person.registered.date}</h5>
                        <h5>Phone:      {person.phone}</h5>
                        <h5>Cell:      {person.cell}</h5>
                    </div>
                ))}
            </div>
        )
    }
}
