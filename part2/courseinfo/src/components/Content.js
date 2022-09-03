import Part from "./Part"

const Content = ({ parts }) => {
    console.log(parts)
    return (
        <div>
            {parts.map(part =>
                <p key={part.id}>
                    <Part parts={part.name} exercises={part.exercises} />
                </p>
            )}
        </div>
    )
}

export default Content