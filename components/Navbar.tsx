import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b shadow-sm border-white px-4 sm:px-6 lg:px-8 py-3">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex gap-2">
          <Image src="/bulb.svg" alt="bulb" width={40} height={40} />
          <h1 className="text-4xl font-bold">Investopia</h1>
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create" className="hover:underline">
                Create
              </Link>
              <Link
                href={`/user/${session.user.id}`}
                className="hover:underline"
              >
                {session.user.name}
              </Link>
              <SignOut />
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    </header>
  );
}
