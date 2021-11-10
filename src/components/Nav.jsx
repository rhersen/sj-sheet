export default function Nav({ announcements, setAnnouncements }) {
  return (
    <button
      onClick={async () => {
        const response = await fetch(
          `/.netlify/functions/node-fetch?direction=n&locations=Cst,Ke,Tmö,So,Udl,Hel,Kmy,Sol,Nvk,R,Upv,Skby,Rs,Bra,Mr,Myn,Kn,Eby,Säy,U`
        );
        const json = await response.json();
        setAnnouncements(json.TrainAnnouncement);
      }}
    >
      Uppsala–Stockholm {announcements.length}
    </button>
  );
}
