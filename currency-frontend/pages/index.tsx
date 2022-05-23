import React from "react";
import Navigation from "./common/navigation/navigationComponent";
import { WELCOME_MESSAGE } from "./constants/labels";

// component
const Index: React.FC = () => {
  return(
    <div className="flex-container">
      <div className='flex-item-full-column'>
        <Navigation/>
      </div>
      <div className="flex-item-full-column">
        <span className="label-40">{WELCOME_MESSAGE}</span>
      </div>    
    </div>
  );
}

export default Index;
