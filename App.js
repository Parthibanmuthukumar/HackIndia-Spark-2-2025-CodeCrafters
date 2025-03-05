import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./SignIn";
import Signup from "./Register";
import HomePage from "./HomePage";
import Emailtodo from "./Emailtodo";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Email" element={<Emailtodo/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
