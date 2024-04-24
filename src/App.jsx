import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OthelloGame from './components/OthelloGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/othello" element={<OthelloGame />} />
      </Routes>
    </Router>
  );
}

export default App;
