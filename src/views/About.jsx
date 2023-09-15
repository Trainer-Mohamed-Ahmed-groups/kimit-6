import { useState } from "react";
import Life from "../components/Life";

function About() {

    var [username, setUsername] = useState("Mohamed");
    const [show, setShow] = useState(true);
    const [showLife, setShowLife] = useState(true)

    let handleUsername = (ev) => {
        setUsername(ev.target.value)
    }

    let handleShow = () => {
        setShow(!show)
    }
    let handleLife = () => {
        setShowLife(!showLife)
    }
    return (
        <div>
            <h2>About</h2>
            <input type="text" onChange={handleUsername} /> <br />
            <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
            {show && <div>{username}</div>}

            <hr />
            <button onClick={handleLife}>{showLife ? "Hide" : "Show"} life</button>
            {showLife && <Life />}
        </div>
    );
}

export default About;