import { signIn } from "@/auth";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className={`nav-button ${orbitron.className}`}
        style={{ fontWeight: "bold" }}
      >
        Sign in
      </button>
    </form>
  );
}
