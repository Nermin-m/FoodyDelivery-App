import React from 'react';
import MainPage from "./mainPage";
import Features from "./features";
import HomeProducts from "./homeProducts";
import Papularfoods from "./papularfoods";


function HomePage() {
    return (
        <div>
          <MainPage></MainPage>
           <Features></Features>
           <HomeProducts></HomeProducts>
            <Papularfoods></Papularfoods>
        </div>
    );
}

export default HomePage;
