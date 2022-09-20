const Persons = ({ notesToShow }) => {
    return (
        <div>
            {notesToShow.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
        </div>
    )

}

export default Persons

