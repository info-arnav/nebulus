import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LogoText() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/assets/logo-192x192.svg"
        height={30}
        width={30}
        style={{ marginBottom: 10 }}
        alt="logo of Nebulus, consists of a N with space graphic within"
      ></Image>
      <h1 className={orbitron.className}>ebulus</h1>
    </div>
  );
}
