import { Sum } from "./Calculator";

const part1 = "Introduction to React";
const part2 = "Comunication with a server";
const part3 = "Programming a server with nodeJS and Express";
const exerciciePart1 = 10;
const exerciciePart2 = 7;
const exerciciePart3 = 14;

export const Header = (props) => {
    return(
    <h1>{props.course}</h1>
    );
}

const Part = (props) => {
    return(
    <p>{props.part} {props.exercicie}</p>
    );
}

export const Contents =  () => {
    return (
    <>
        <Part part={part1} exercicie={exerciciePart1}/>
        <Part part={part2} exercicie={exerciciePart2}/>
        <Part part={part3} exercicie={exerciciePart3}/>
    </>
    )
}

export const Total = () => {
    const totalExercicies = Sum(exerciciePart1, exerciciePart2, exerciciePart3);
    return (
    <p>Number of exercicies {totalExercicies}</p>
    );
}