"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    alert(email);
  }

  return (
    <Container size={"sm"} className="items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>

      <div className=" text-center py-8">
        <p className="text-4xl font-semibold tracking-tighter ">Login</p>
        <p className="mt-2 text-base text-gray-300 font-medium opacity-80">
          Continue with your email and password to log in to your account.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-2"
      >
        <Input
          className="w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full">Login</Button>

        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-gray-300 font-medium opacity-80">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-[#FF5733] underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
