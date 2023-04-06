import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Components/MainPage";

function App() {
  const state = {
    headerText: "We can suggest you names",
  };
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
