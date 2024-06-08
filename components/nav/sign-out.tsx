import { signOut } from "@/auth";

export async function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="nav-button">
        Sign Out
      </button>
    </form>
  );
}
