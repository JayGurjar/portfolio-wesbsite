import React from "react";
import NavigationComp from "./navigationComponent";
import BodyComp from "./bodyComponent";

const App = (props) => {


    return (
        <div className='min-h-screen'>
          <NavigationComp />
          <BodyComp />
        </div>
    )
}

export default App;