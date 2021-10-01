import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./styles.css";
export default function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          width="40px"
          src="http://www.edutic.pe/galeria/storage/cache/images/000/057/letra-MAYUS-azul-10,medium.2x.1532902910.png"
          alt="logo"
        />
        <div className="login__text">
          <h2>Iniciar sesión en Yango__Chat</h2>
        </div>
      </div>
      <Button onClick={signIn}>Iniciar sesión en Google</Button>
    </div>
  );
}
