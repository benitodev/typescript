import {  useRef, useState } from 'react'
import {AppState, Sub} from './types'

import './App.css'
import Form from './components/Form'
import List from './components/List'
import useGetAllSubs from './hooks/useGetAllSubs'

function App() {
  
  const {subs, setSubs} = useGetAllSubs()
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)
  
  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub])
    setNewSubsNumber(state => state + 1)
  }
  return (
    <div className="App" ref={divRef}>
      <h1>Subs:</h1>
    <List subs={subs}/>
    New Subs: {newSubsNumber}
    <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
