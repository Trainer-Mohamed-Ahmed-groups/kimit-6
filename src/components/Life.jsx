import { useEffect, useState } from "react"

export default function Life() {

    const [courseName, setCourseName] = useState("");

    let handleCourse = (ev) => {
        setCourseName(ev.target.value)
    }

    useEffect(() => {
        console.log("Rendered")
    }, [])

    useEffect(() => {
        if (courseName === "") return;
        console.log("Edited")

    }, [courseName])

    useEffect(() => {
        return () => {
            console.log("Bye")
        }
    }, [])

    return (
        <div>
            <h2>Life</h2>
            <input type="text" onChange={handleCourse} value={courseName} />
            <p>{courseName}</p>
        </div>
    )
}
