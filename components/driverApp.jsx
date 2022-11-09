import React from "react";
import NavigationComp from "./navigationComponent";
import BodyComp from "./bodyComponent";

const App = (props) => {

  return (
    <div className={'dark'}>
      <div className={'bg-white px-10'}>
        <div className='min-h-screen'>
          <NavigationComp />
          <BodyComp />
        </div>
      </div>
    </div>
  )
}

export default App;