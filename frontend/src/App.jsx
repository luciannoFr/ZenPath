import { useReducer } from "react";
import { UserContext } from "./context/UserContext";
import AppRouter from "./routes/AppRouter";
import { userReducer } from "./context/userReducer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const obtenerToken = () =>
    JSON.parse(localStorage.getItem("userData")) || { isLogged: false };

  const [state, stateDispatch] = useReducer(userReducer, {}, obtenerToken);

  return (
    <>
      <UserContext.Provider value={{ state, stateDispatch }}>
        <AppRouter />
      </UserContext.Provider>
    </>
  );
}

export default App;
