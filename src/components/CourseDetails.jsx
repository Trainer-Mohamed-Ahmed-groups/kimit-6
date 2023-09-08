export default function CourseDetails({ courseName, courseDesc, test = "Nooooo" , children }) {

    return (
        <div>
            <h2>{courseName}</h2>
            {children}
            <p>{courseDesc}</p>
            <h3>{test}</h3>
            <hr />
        </div>
    )
}
