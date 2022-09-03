const Total = ({ parts }) => {
    const initial = 0;
    const total =
        parts.reduce((total, b) => total + b.exercises, 0)

    return (
        <>
            <b>Number of exercises {total}</b>
        </>
    )
}

export default Total