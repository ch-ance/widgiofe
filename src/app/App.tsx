import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "./App.css";
// TODO: probably move these to the lowest component necessary.
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
