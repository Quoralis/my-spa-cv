import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-5xl mx-auto p-6">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
