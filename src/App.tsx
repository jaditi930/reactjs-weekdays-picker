import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CircularDayPicker from './components/CircularSelector'
import CustomMenuSelector from './components/CustomMenuSelector'
import DefaultSelector from './components/DefaultSelector'
import DropdownSelector from './components/DropdownSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CircularDayPicker/>
      <CustomMenuSelector/>
      <DefaultSelector/>
      <DropdownSelector/>
    </>
  )
}

export default App
