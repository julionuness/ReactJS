import { Route, Routes } from "react-router-dom";
import Calendars from "./calendars";
import Charts from "./charts";
import Dash from "./dash";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Dash/>} />
        <Route exact path="/calendars" element={<Calendars/>} />
        <Route exact path="/charts" element={<Charts/>} />
    </Routes>
);

export default Main;