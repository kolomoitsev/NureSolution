import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            login: "",
            password: "",
        }

    }

    componentDidMount() {
        this.setState({
            login: "",
            password: "",
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
    onSubmit(e){

        e.preventDefault();

        const newAuthUser = {
            login: this.state.login,
            password: this.state.password,
        }

        axios.post('http://localhost:5000/users/login', newAuthUser)
            .then(res => {
                if(res.data.token){
                    sessionStorage.setItem('token', res.data.token)
                    sessionStorage.setItem('user_id', res.data.id)
                    console.log(sessionStorage)
                }
            })
            .catch(err => console.log(err))

        window.location = '/projects';
    }

    render() {
        return(
            <section className="shop  ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="register" >
                            <div className="title-add">
                                <h4>Login page</h4>
                            </div>
                            <form className="form" onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" value = {this.state.login} onChange={this.onChangeLogin} className="form-control" name="login"
                                                   placeholder="Login"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" value = {this.state.password} onChange={this.onChangePassword} name="password" placeholder="Your password"/>
                                        </div>

                                    </div>

                                    <div className="col-md-12 mb-0">
                                        <input type="submit" value = "Sign in"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}