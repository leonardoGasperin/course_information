function App() {
  const course = "FullstackOpen course application development";
  const part1 = "Introduction to React";
  const exercicie1 = 10;
  const part2 = "Comunication with a server";
  const exercicie2 = 7;
  const part3 = "Programming a server with nodeJS and Express";
  const exercicie3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1} {exercicie1}</p>
      <p>{part2} {exercicie2}</p>
      <p>{part3} {exercicie3}</p>
      <p>Number of exercicies {exercicie1 + exercicie2 + exercicie3}</p>
    </div>
  );
}

export default App;
