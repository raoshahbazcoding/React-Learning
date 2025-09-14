import { useState } from "react"


function App() {

  const username = 'Rao Shahbaz'

  let [counter , setcounter] = useState(15)

  function add(){
    if(counter === 20){
      return alert('We cannot add mor Values Now')
    }
    setcounter ( counter +1 )
  }
  function subtract(){
    if (counter === 0){
      return alert('Value Cannot be decrece From Here')
    }
    setcounter ( counter - 1 )
  }

  return (
    <>
      <h1>
        This Is JSX Syntax || THis IS Evluated Expression
      </h1>
      <h2>
        This Is UserName : {username}  
      </h2>

      <button onClick={add}>
        Add {counter}
      </button>
      <button onClick={subtract}>
        Subrtract {counter}
      </button>

    </>
  )
}

export default App
