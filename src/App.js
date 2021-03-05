import React,{useState} from "react";
import Banner from "./components/Banner/Banner";
import LoginMenu from "./components/LoginMenu/LoginMenu";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { Route, Switch} from "react-router-dom";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import SetSessionId from './helper/setSessionId';

const App = () => {
  const [session, setSession] = useState('');
  return (
    <>
    {/* Saving the session ID if it is not available in cookie */}
    {document.cookie ? (null) : <SetSessionId setSession={setSession}/>}
      <Banner />
      <LoginMenu />
      <Menu />
      <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
