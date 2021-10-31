import { useState } from "react";

export default function Nav() {
  const [announcements, setAnnouncements] = useState(0);

  return (
    <button
      onClick={async () => {
        const response = await fetch(
          `/.netlify/functions/node-fetch?direction=s&locations=U,S%C3%A4y,Eby,Kn,Myn,Arnc,Arnc,Arne,Bvr,Skby,Upv,R,Nvk,Hgv,Sol,Kmy,Hel,Udl,So,Tm%C3%B6,Ke,Cst`
        );
        const json = await response.json();
        setAnnouncements(json.TrainAnnouncement);
      }}
    >
      Uppsala–Stockholm {announcements.length}
    </button>
  );
}
