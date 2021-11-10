import { useState } from "react";
import Nav from "./Nav.jsx";
import Sheet from "./Sheet.jsx";
import location from "../location.js";

export default function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [direction, setDirection] = useState("s");
  const [branch, setBranch] = useState("u");

  return (
    <div className="App">
      <Nav announcements={announcements} setAnnouncements={setAnnouncements} />
      <Sheet
        announcements={announcements}
        locations={
          direction === "n" && branch
            ? location[branch].slice().reverse()
            : location[branch]
        }
      />
    </div>
  );
}
