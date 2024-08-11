"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import usePasswordStrength from "@/hooks/usePasswordStrength";
import PasswordChecker from "@/components/PasswordChecker";

export default function SignupPage() {
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
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 2000); // 2000 milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [error]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        `http://7d97-102-213-69-138.ngrok-free.app/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await res.json();

      if (res.status === 200) {
        router.push("/login");
      }
    } catch (err) {
      setError(err.message);
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
