"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert(email);
  }

  return (
    <Container size={"sm"} className="items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>

      <div className=" text-center py-8">
        <p className="text-4xl font-semibold tracking-tighter ">
          Create Account
        </p>
        <p className="mt-2 text-base text-gray-300 font-medium opacity-80">
          Create an account to start generating ads with AI.
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
        <Input
          className="w-full"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button className="w-full">Create Account</Button>

        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-gray-300 font-medium opacity-80">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#FF5733] underline">
              login
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
