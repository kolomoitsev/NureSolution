import React from "react";
import axios from "axios";

export default class CreateUser extends React.Component{

    constructor(props)
    {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          username : '',
        };


    }



    componentDidMount() {
        this.setState({
            username : "Pavlo",
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value,
        })
    }

    onSubmit(e){

        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        console.log(user);

        window.location = "/users";

        this.setState({
            username : '',
        });
    }

    render() {
        return(
            <div>
                <form className="themeioan-form-contact form" id="contact-us-form" onSubmit={this.onSubmit}>

                    <div className="input-text required-field">
                        <input type="text" value = {this.state.username} placeholder="username" onChange={this.onChangeUsername}/>
                    </div>

                    <div className="input-text required-field">
                        <input type="submit" value = "Create exercise log"/>
                    </div>

                </form>
            </div>
        )
    }
}