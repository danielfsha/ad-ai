"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/authContext";

import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import usePasswordStrength from "@/hooks/usePasswordStrength";
import PasswordChecker from "@/components/PasswordChecker";

export default function SignupPage() {
  const router = useRouter();
  const { signup, error } = useAuth();

  const [
    password,
    setPassword,
    strength,
    level,
    criteria,
    checkPasswordStrength,
  ] = usePasswordStrength();
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await signup({
      userData: {
        email,
        password,
        confirmPassword,
      },
    });

    if (res.status || res.status === "status") {
      router.push("/auth/login");
    }
  }

  return (
    <Container
      size={"sm"}
      className="items-center justify-center space-y-4 pb-4"
    >
      <div className=" text-center py-4">
        <p className="text-4xl font-semibold tracking-tighter ">
          Create Account
        </p>
        <p className="mt-2 text-base text-gray-300 font-medium opacity-80">
          Create an account to start generating ads with AI.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

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
          onChange={handlePasswordChange}
        />
        <Input
          className="w-full"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button className="w-full">Create Account</Button>

        <div className="flex items-center justify-center my-4">
          <p className="text-sm text-gray-300 font-medium opacity-80">
            {"Already have an account? "}
            <Link href="/auth/login" className="text-[#FF5733] underline">
              login
            </Link>
          </p>
        </div>
      </form>

      {password && (
        <PasswordChecker
          password={password}
          strength={strength}
          level={level}
          criteria={criteria}
        />
      )}
    </Container>
  );
}
