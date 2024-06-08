import { auth } from "@/auth";
import NavLink from "@/components/nav/NavLink";
import { SignIn } from "@/components/nav/sign-in";
import { SignOut } from "@/components/nav/sign-out";
import Image from "next/image";
import Link from "next/link";

export default async function Navigation() {
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            backgroundColor: "#d9d9d9",
            padding: 2,
            height: 36,
            width: 36,
          }}
        >
          <Image
            src="/assets/logo-192x192.svg"
            height={26}
            width={26}
            alt="logo of Nebulus, consists of a N with space graphic within"
          ></Image>
        </div>
      </Link>
      {session ? (
        <>
          <div
            className="nav-links"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--light)",
            }}
          >
            Project Name
          </div>
          <div
            className="nav-actions"
            style={{
              justifyContent: "right",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="nav-dp"
              width={36}
              height={36}
              src={session.user.image}
              style={{
                borderRadius: "100%",
                padding: 2,
                margin: 10,
              }}
            ></img>
            <SignOut></SignOut>
          </div>
        </>
      ) : (
        <>
          <div
            className="nav-links"
            style={{
              marginLeft: 40,
              display: "flex",
              marginTop: 5,
              justifyContent: "center",
              flex: 1,
            }}
          >
            <NavLink link="/" title="Home"></NavLink>
            <NavLink link="/" title="Tools"></NavLink>
            <NavLink link="/" title="Docs"></NavLink>
            <NavLink link="/" title="Pricing"></NavLink>
          </div>
          <div
            className="nav-actions"
            style={{ justifyContent: "right", display: "flex" }}
          >
            <SignIn></SignIn>
          </div>
        </>
      )}
    </nav>
  );
}
