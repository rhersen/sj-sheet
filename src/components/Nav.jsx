import { useState } from "react";

export default function Nav() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={async () => {
        const response = await fetch(
          `/.netlify/functions/node-fetch?direction=s&locations=G%C3%A4,Bom,Fvk,Sur,%C3%84kb,Maa,Mrm,Meh,Os,Tip,Tip,S%C3%A4p,Tbo,%C3%96h,Jlo,Syt,Sas,Vha,Srv,Sam,U`
        );
        const json = await response.json();
        setCount(json.TrainAnnouncement.length);
      }}
    >
      Gävle {count}
    </button>
  );
}
