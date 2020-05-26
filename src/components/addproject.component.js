import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class AddProject extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            project_name: '',
            project_description: '',
            project_administrator: '',
            project_customer: '',
            developers: [],
        }
    }

    componentDidMount() {

        let user_id = sessionStorage.getItem('user_id');

        this.setState({
            project_name: 'First project',
            project_description: 'first project description',
            project_administrator: '',
            project_customer: '',
            developers: [],
        });

        axios.get('http://localhost:5000/users/' + user_id)
            .then(res => {
                this.setState({
                    project_administrator : res.data,
                })
            })
            .catch(err => console.log(err))

    }


    onChangeName(e) {
        this.setState({
            project_name: e.target.value,
        })
    }

    onChangeDescription(e) {
        this.setState({
            project_description: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const newProject = {
            project_name: this.state.project_name,
            project_description: this.state.project_description,
            project_administrator: this.state.project_administrator,
            project_customer: this.state.project_customer,
            developers: this.state.developers,
        }


        axios.post('http://localhost:5000/projects/add', newProject, {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem('token'),
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        window.location = '/projects';

        console.log(newProject)

    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" onChange={this.onChangeName} name="name" className="form-control"
                               id="projectname"
                               aria-describedby="project name" placeholder="Project name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.onChangeDescription} name="description"
                               className="form-control" id="projectdescription"
                               aria-describedby="project desciprion" placeholder="Project description"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}