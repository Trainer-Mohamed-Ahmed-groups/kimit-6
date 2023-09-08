export default function DisplayNames() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 3,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    let chemists = people.filter(person => person.profession === 'chemist')
    return (
        <div>
            <h2>DisplayNames</h2>
            <ol>
                {
                    people.map((person) =>
                        <li key={person.id}>
                            <h2>{person.name}</h2>
                            <h3>{person.profession}</h3>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}
