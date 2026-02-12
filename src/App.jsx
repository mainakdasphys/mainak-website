import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/research" element={<Layout><Research /></Layout>} />
        <Route path="/teaching" element={<Layout><Teaching /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;