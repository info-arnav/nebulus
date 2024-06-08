import Link from "next/link";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function NavLink({ title, link }) {
  return (
    <div>
      <Link
        className={`nav-link ${orbitron.className}`}
        href={link}
        style={{
          textDecoration: "none",
          textDecoration: "none",
          fontWeight: "500",
          fontSize: 15,
        }}
      >
        {title}
      </Link>
    </div>
  );
}
