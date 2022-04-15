import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
const ProfileForm = () => {
  const enteredPassword = useRef();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const history = useHistory();
  const changePasswordHandler = (event) => {
    event.preventDefault();
    const passwordValue = enteredPassword.current.value;
    //add validation here
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCGxtkp7XHD72eo6Jp-QZ_KldREFMmpN9c",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: passwordValue,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          let errorMessage = "Change password failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then((data)=>{
      console.log(data);
      history.replace('./');
      //Changing the password worked
    })
    .catch((error) => {
      alert(error.message);
    })
  };
  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength='5' ref={enteredPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
