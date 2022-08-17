import Part from "./Part"

const Content = (props) => {
    return(
        <>
        <Part parts={props.part1} exercises={props.exercises1}/>
        <Part parts={props.part2} exercises={props.exercises2}/>
        <Part parts={props.part3} exercises={props.exercises3}/>
        </>
    )
}

export default Content