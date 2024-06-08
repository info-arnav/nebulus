import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function NebulusHeading() {
  return (
    <h1 style={{ margin: 0 }} className={orbitron.className}>
      nebulus
    </h1>
  );
}
