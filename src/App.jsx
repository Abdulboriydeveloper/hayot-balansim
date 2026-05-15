import Registration from "./Registration";
import SupermiyaAI from "./UmidHudoyberdievVSL";

export default function App() {
  if (window.location.pathname === "/registration") {
    return <Registration />;
  }

  return <SupermiyaAI />;
}
