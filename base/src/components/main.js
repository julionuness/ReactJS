import { Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import Charts from "./charts";

const Main = () => (
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
)

export default Main;