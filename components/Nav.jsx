"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import Container from "./Container";
import { TabItem, Tabs } from "./Tabs";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="w-full flex items-center justify-between py-4 border-b border-gray-800">
      <Container variant="row" className="justify-between">
        <h1 className="text-4xl font-semibold text-white">Ad AI</h1>

        <Tabs className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <TabItem onClick={() => router.push("/")}>Home</TabItem>
          <TabItem onClick={() => router.push("/suggestions")}>
            Suggestions
          </TabItem>
        </Tabs>

        <Button onClick={() => alert("clicked")} size="lg">
          Get started
        </Button>
      </Container>
      ;
    </nav>
  );
}
