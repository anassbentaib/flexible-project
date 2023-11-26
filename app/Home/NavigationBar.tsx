"use client";

import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import { getCurrentUser } from "@/lib/session";

import AuthProviders from "../../components/AuthProviders";
import ProfileMenu from "../../components/ProfileMenu";
import { useEffect, useState } from "react";
import { SessionInterface } from "@/common.types";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const router = useRouter();
  const [session, setSession] = useState<SessionInterface | null>(null);
  console.log("session", session);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      console.log(user);
  
      setSession(user);
        if (user && user.user) {
        router.push(`/profile/${user.user.id}`);
      }
    };
  
    fetchUser();
  }, []);
  

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
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

export default NavigationBar;
