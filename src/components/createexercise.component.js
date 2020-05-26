import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker/es";
import axios from 'axios';



export default class CreateExercise extends React.Component{

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: [],
        }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/users')
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username,
                    })
                }
            })

        // this.setState({
        //     users: ["test user", "pavlo kolomoitsev", "hello man"],
        //     username: 'pavlo',
        // });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value,
        });
    }
    onChangeDescription(e){
        this.setState({
           description: e.target.value,
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value,
        })
    }
    onChangeDate(date){
        this.setState({
            date: date,
        })
    }
    onSubmit(e){
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));


        console.log(exercise);
        window.location = '/';
    }


    render() {
        return(
            <div>
                <form className="themeioan-form-contact form" id="contact-us-form" onSubmit={this.onSubmit}>
                    <div className="input-text required-field">
                        <select value = {this.state.username} onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option key={user} value={user} > {user}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="input-text required-field">
                        <input required placeholder="Description" type="text" name = "description" value = {this.state.description} onChange={this.onChangeDescription}/>
                    </div>

                    <div className="input-text required-field">
                        <input required placeholder="Duration" type="text" name = "duration" value = {this.state.duration} onChange={this.onChangeDuration}/>
                    </div>



                    <div className="input-text required-field">
                        <DatePicker
                            selected = {this.state.date}
                            onChange = {this.onChangeDate}
                        />
                    </div>

                    <div className="input-text required-field">
                        <input type="submit" value = "Create exercise log"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}