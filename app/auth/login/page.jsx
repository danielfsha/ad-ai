"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/authContext";

import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";

export default function LoginPage() {
  const { login } = useAuth();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 2000); // 2000 milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [error]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const res = await login({
      userData: {
        email,
        password,
      },
    });

    if (res.status === 200) {
      router.push("/dashboard");
    }
  }

  return (
    <Container size={"sm"} className="items-center justify-center space-y-4">
      <div className=" text-center py-4">
        <p className="text-4xl font-semibold tracking-tighter ">Login</p>
        <p className="mt-2 text-base text-gray-300 font-medium opacity-80">
          Continue with your email and password to log in to your account.
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full">Login</Button>

        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-gray-300 font-medium opacity-80">
            {"Don't have an account? "}
            <Link href="/auth/signup" className="text-[#FF5733] underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
