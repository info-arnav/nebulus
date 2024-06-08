import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0a0b10",
        padding: 10,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link href="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%",
                backgroundColor: "#d9d9d9",
                padding: 5,
                height: 50,
                width: 50,
              }}
            >
              <Image
                src="/assets/logo-192x192.svg"
                height={40}
                width={40}
                alt="logo of Nebulus, consists of a N with space graphic within"
              ></Image>
            </div>
          </Link>
          <p
            className={orbitron.className}
            style={{ color: "var(--light)", fontWeight: 600, fontSize: 18 }}
          >
            Nebulus
          </p>
          <p
            className={orbitron.className}
            style={{ margin: 0, color: "var(--light)", fontSize: 14 }}
          >
            Unleashing Innovation with Nebulus AI.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              href="/about"
              style={{ color: "var(--light)", marginBottom: 30, fontSize: 14 }}
            >
              About
            </Link>
            <Link
              href="/docs"
              style={{ color: "var(--light)", marginBottom: 30, fontSize: 14 }}
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              style={{ color: "var(--light)", marginBottom: 30, fontSize: 14 }}
            >
              Pricing
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              href="/tools/AI-SEO-Optimizer"
              style={{ color: "var(--light)", marginBottom: 30, fontSize: 14 }}
            >
              AI SEO Optimizer
            </Link>
            <Link
              href="/terms-and-conditions"
              style={{ color: "var(--light)", marginBottom: 30, fontSize: 14 }}
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy-policy"
              style={{ color: "var(--light)", marginBottom: 30, fontSize: 14 }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: 12, color: "#8D8A97" }}>
        Copyright Nebulus @ 2024
      </div>
    </footer>
  );
}
