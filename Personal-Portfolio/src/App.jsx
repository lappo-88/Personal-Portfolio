import{Screen} from "./components/sections/Screen.jsx";
import './App.css'
import"./index.css"
import {useState} from "react";



function App() {
const [isLoading, setIsLoading] = useState(false)
  return (
    <>{!isLoading && <Screen onComplete={() => setIsLoading(true)} />}{" "}


    </>
  )
}

export default App
