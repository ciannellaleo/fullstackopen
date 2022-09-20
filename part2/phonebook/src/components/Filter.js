

const Filter = (props) => {

    return (
        <p>filter shown with
            <input
                value={props.filter}
                onChange={props.handler}
            />
        </p>
    )

}

export default Filter