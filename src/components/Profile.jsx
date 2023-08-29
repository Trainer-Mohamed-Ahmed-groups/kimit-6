const Profile = () => {
    let courseName = "React"
    let person = {
        name: "Sayed",
        age: 21
    }
    return (
        <div>
            <h2>This is profile :</h2> 
            <div>{courseName}</div>
            <div>{person.name}</div>
            <div>{person.age}</div>
        </div>
    );
}

export default Profile;

// Stateless function component