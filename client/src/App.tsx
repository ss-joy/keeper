import "./App.css";
import MainHeader from "./components/UI/MainHeader";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <div>
      <MainHeader />
      <Login />
      <SignUp />
      <main></main>
    </div>
  );
}

export default App;
