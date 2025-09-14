import { useState } from "react"

import Card from "./components/Card"

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
      <h1 className="bg-red-400 text-center text-white font-extrabold py-5">
        This Is JSX Syntax || THis IS Evluated Expression
      </h1>
      <h2 className="text-center py-5" >
        This Is UserName : {username}  
      </h2>
<div className="flex justify-center gap-2">
  
      <button onClick={add} className="bg-black text-white px-5 py-2 rounded-2xl" >
        Add {counter}
      </button>
      <button onClick={subtract} className="bg-black text-white px-5 py-2 rounded-2xl">
        Subrtract {counter}
      </button>
</div>

<Card  username = "Rao Shahabz"/>

    </>
  )
}

export default App
