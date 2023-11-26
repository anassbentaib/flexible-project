import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar ">
      <div className="flex-1 flexStart flex items-center gap-10">
        <Link href="/">
          <Image src="/logo.png" width={116} height={10} alt="logo" />
        </Link>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
