import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import store, { loginActions } from "./store/index";
import { useSelector } from "react-redux";

 
function App() {
  const isLoggedin = useSelector(state => state.login.loggedIn)

  return (
    <Fragment>
      <Header />
      {!isLoggedin && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
