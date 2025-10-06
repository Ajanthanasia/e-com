"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      router.push('/user/dashboard');
    } else {
      router.push('/login');
    }
  }, [router]);

  return null;
}

