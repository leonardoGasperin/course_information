import { Header, Contents, Total } from "./Components";

function App() {
  const course = "FullstackOpen course application development";
  return(
    <div>
      <Header course={course}/>
      <Contents/>
      <Total/>
    </div>
  );
}

export default App;

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