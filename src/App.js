import {useState} from "react"

const App = ()=>{
  const [allValue,setValue] = useState({counter:0})

  const onChangeValue=()=>{
    let newValue = 0
    newValue = allValue.counter+1
    setValue({...allValue,counter:newValue})
  }

  const onDecValue=()=>{
    let newValue = 0
    newValue = allValue.counter-1
    setValue({...allValue,counter:newValue})
  }

return(
  <div className="bg-container">
      <h1 className="heading">{allValue.counter}</h1>
      <button type="button" onClick={onChangeValue}>Increment</button>
      <button type="button" onClick={onDecValue}>Decrement</button>
  </div>
)
}
export default App
/*
import {Routes,Route} from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import ContactUs from './component/ContactUs'

const App = ()=>{
  <Routes>
      <Route path="/"element={}
  </Routes>
  }

export default App;*/