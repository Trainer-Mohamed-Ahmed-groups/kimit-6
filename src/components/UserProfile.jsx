import { Component } from 'react'

export class UserProfile extends Component {

    courseName = "React";

    state = {
        name: "Ahmed",
        age: 21
    }
    render() {
        return (
            <div>
                <h2>UserProfile :</h2>
                <div>{this.courseName}</div>
                <div>{this.state.name}</div>
            </div>
        )
    }
}
// Class based component