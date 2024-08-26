import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <Header course={course} />
      <Header course={course} />
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App