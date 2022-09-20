
const PersonForm = (props) => {

    return (
        <form onSubmit={props.formFunction}>
            <div>
                name: <input
                    value={props.name}
                    onChange={props.handlerName}
                />
            </div>
            <div>
                number: <input
                    value={props.number}
                    onChange={props.handlerNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )

}

export default PersonForm
