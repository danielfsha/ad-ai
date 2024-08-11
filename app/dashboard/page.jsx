"use client";

import { useRouter } from "next/navigation";

import NavLayout from "@/components/NavLayout";
import { useAuth } from "@/context/authContext";

export default function DashboardPage() {
  const { user } = useAuth();

  const router = useRouter();

  if (!user) {
    router.push("/auth/login");
  }
  return (
    <NavLayout>
      <div className="flex-1 flex items-center justify-center flex-col lg:flex-row">
        hello
      </div>
    </NavLayout>
  );
}
