import React from "react";
import NavigationComp from "./navigationComponent";
import BodyComp from "./bodyComponent";

const App = (props) => {

  return (
    <div className={'bg-white px-5 text-black'}>
      <div className='min-h-screen'>
        <NavigationComp />
        <BodyComp />
      </div>
    </div>
  )
}

export default App;