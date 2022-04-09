import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

 
function App() {
  const isLoggedin = useSelector(state => state.login.loggedIn)

  return (
    <Fragment>
      <Header />
      {!isLoggedin && <Auth />}
      {isLoggedin && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
