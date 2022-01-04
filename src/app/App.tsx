import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (true) {
      // validate the token?
      setIsAuthenticated(true);
    } else {
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
