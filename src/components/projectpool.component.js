import React from "react";
import axios from 'axios';
import {Link}  from "react-router-dom";

export default class ProjectPool extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user_id: sessionStorage.getItem('user_id'),
            project_admin : [],
            project_dev: [],
            project_customer: [],

        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/projects', {
            headers:{
                'Authorization' : 'Bearer ' + sessionStorage.getItem('token'),
            }
        })
            .then(res => {
                console.log(res.data)
                let project_admin = res.data.filter( x =>
                    x.project_administrator._id === this.state.user_id
                );
                let project_dev = res.data.filter( x =>
                    x.developers._id === this.state.user_id
                );
                let project_customer = res.data.filter( x =>
                    x.project_customer._id === this.state.user_id
                );

                this.setState({
                    project_admin : project_admin,
                    project_dev: project_dev,
                    project_customer: project_customer,
                })

                console.log(this.state)
            })
            .catch(err => console.log(err))


    }

    render() {
        return(
            <div>
                <h1>All Projects</h1>

                <p><Link to="/projects/add">New Project</Link></p>


                <h1>User is admin here: </h1><br/>
                <ul>
                {
                    this.state.project_admin.map(function (project) {

                            return (
                                <li key={project._id}> project name: {project.project_name}
                                    <div className="col-lg-4">description : {project.project_description}</div>
                                    <Link to={"/projects/" + project._id}>Search project</Link>
                                </li>
                            )

                    })
                }
                </ul>
                <h1>User is dev. here: </h1><br/>
                <ul>
                    {
                        this.state.project_dev.map(function (project) {
                            return (
                                <li key = {project._id} > project name: {project.project_name}
                                    <div className="col-lg-4">description : {project.project_description}</div>
                                </li>
                            )
                        })
                    }
                </ul>

                <h1>User is customer here: </h1><br/>

                <ul>

                    {

                        this.state.project_customer.map(function (project) {
                            return (
                                <li key = {project._id} > project name: {project.project_name}
                                    <div className="col-lg-4">description : {project.project_description}</div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}