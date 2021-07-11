import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import KegContent from "./Kegs/KegContent";

function App() {
  return (
    <div className="App">
      <Header />
      <KegContent />
    </div>
  );
}

export default App;
