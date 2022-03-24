import React from "react";
import  {Switch , Route} from 'react-router-dom'

import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/sign-in" component={SignInAndSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
