import logo from "./logo.svg";
import "./App.scss";
import { Paper } from "@mui/material";
import LoginComponent from "./Auth/LoginComponent";
import { navigate, Route, Routes, useNavigate } from "react-router-dom";
import UseAuth from "./hooks/UseAuth";
import { PageComponent } from "./Pages/PageComponent";


function App() {
  const navigate = useNavigate();
  // const isAuthenticated = UseAuth()
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<navigate to={"/login"} replace={true} />}
        ></Route>
        <Route path="login" element={<LoginComponent />}>
          Login
        </Route>
    <Route path="pages/*" element={<PageComponent></PageComponent>}>Pages</Route>
      </Routes>

      {/* <Paper elevation={3} >  Admin Panel Portal</Paper> */}
    </div>
  );
}

export default App;
