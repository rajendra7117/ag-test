import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Templates from "./components/temps/Templates";
import Header from "./components/Navigation/Header";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        
          <Route path="/" element={<Templates />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
