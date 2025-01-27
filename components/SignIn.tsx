import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
        console.log("sign IN!!!");
      }}
    >
      <button type="submit" className="hover:underline">
        Sign in
      </button>
    </form>
  );
}
