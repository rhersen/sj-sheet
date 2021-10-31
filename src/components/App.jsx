import { useState } from "react";
import Nav from "./Nav.jsx";

export default function App() {
  const [announcements, setAnnouncements] = useState([]);

  return (
    <Nav announcements={announcements} setAnnouncements={setAnnouncements} />
  );
}
