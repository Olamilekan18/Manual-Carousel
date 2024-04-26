import './App.css'
import ImageSlider from "./index"
// import data from "./data"
// import {  useState  } from "react";

function App() {
  
  
  return (
    <>
      <div>
       <ImageSlider url = {"https://picsum.photos/v2/list"} limit = {4} page={1}/>
      </div>
    </>
  )
}

export default App
