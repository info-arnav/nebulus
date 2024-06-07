import { signIn, signOut, auth } from "@/auth";

export async function SignIn() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session?.user)}
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>{" "}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
