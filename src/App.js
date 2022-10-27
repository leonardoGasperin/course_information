function App() {
  const course = "FullstackOpen course application development";
  const part1 = "Introduction to React";
  const exercicie1 = 10;
  const part2 = "Comunication with a server";
  const exercicie2 = 7;
  const part3 = "Programming a server with nodeJS and Express";
  const exercicie3 = 14;

  const Header = (props) => {
    return(
      <h1>{props.course}</h1>
    );
  }

  const Part = (props) => {
    return(
      <p>{props.part} {props.exercicie}</p>
    );
  }

  const Contents =  () => {
    return (
      <>
        <Part part={part1} exercicie={exercicie1}/>
        <Part part={part2} exercicie={exercicie2}/>
        <Part part={part3} exercicie={exercicie3}/>
      </>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercicies {props.exercicie}</p>
   );
  }

  return(
    <div>
      <Header course={course}/>
      <Contents/>
      <Total exercicie={exercicie1 + exercicie2 + exercicie3}/>
    </div>
  );

  //return of exercicie 1.1
  // return (
  //   <div>
  //     <Header course={course}/>
  //     <Contents part={part1} exercicie={exercicie1} />
  //     <Contents part={part1} exercicie={exercicie1} />
  //     <Contents part={part1} exercicie={exercicie1} />
  //     <Total exercicie={exercicie1 + exercicie2 + exercicie3}/>
  //   </div>
  // );
}

export default App;
