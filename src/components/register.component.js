import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class Register extends React.Component{
    constructor(props) {
        super(props);


        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            login: "",
            password: "",
            email: "",
        }
    }

    componentDidMount() {
        this.setState({
            username: "pavlo",
            login: "kolomoitsev",
            password: "password123",
            email: "pavlo.kolomoysev@nure.ua"
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value,
        });
    }

    onChangeLogin(e){
        this.setState({
            login: e.target.value,
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value,
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value,
        })
    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            login: this.state.login,
            password: this.state.password,
            email: this.state.email,
        }



        axios.post('http://localhost:5000/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))


        window.location = '/users/login';

    }

    render() {
        return (
            <section className="shop  ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="register" >
                            <div className="title-add">
                                <h4>Register New Account</h4>
                            </div>
                            <form className="form" onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" value = {this.state.username} onChange={this.onChangeUsername} className="form-control" name="username"
                                                   placeholder="Username"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" value = {this.state.login} onChange={this.onChangeLogin} name="login" placeholder="Your Login"/>
                                        </div>

                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="password" value = {this.state.password} onChange={this.onChangePassword} name="password" placeholder="Your password"/>
                                        </div>

                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="email" value = {this.state.email} onChange={this.onChangeEmail} name="email" placeholder="Your Email"/>
                                        </div>

                                    </div>

                                    <div className="col-md-12 mb-0">
                                        <input type="submit" value = "Register"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

    </section>
    );
    }
    }