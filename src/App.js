import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exerciseslist.component";
import UsersList from "./components/userslist.component";
import EditExercise from "./components/editexercise.component";
import CreateExercise from "./components/createexercise.component";
import CreateUser from "./components/createuser.component";
import Register from "./components/register.component";
import Login from "./components/login.component";
import ProjectPool from './components/projectpool.component'
import AddProject from "./components/addproject.component";
import Logout from './components/logout.component'

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="container">

                <Route path="/" exact component = {ExercisesList} />
                <Route path="/users" component = {UsersList} />
                <Route path="/edit/:id" component = {EditExercise} />
                <Route path="/create" component = {CreateExercise} />
                <Route path="/user" component = {CreateUser} />
                <Route path="/logout" component={Logout} />
                <Route path="/register" component = {Register} />
                <Route path="/login" component = {Login} />
                <Route exact path ="/projects" component={ProjectPool} />
                <Route path ="/projects/add" component={AddProject} />


            </div>
        </Router>
    );
}

export default App;
