"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import Container from "./Container";
import { TabItem, Tabs } from "./Tabs";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

export default function Nav() {
  const pathname = usePathname();

  const router = useRouter();
  return (
    <nav className="w-full flex items-center justify-between py-4 border-b border-gray-800">
      <Container className="justify-between space-y-2 lg:space-y-0">
        <div className="flex items-center justify-between space-x-4 ">
          <h1 className="text-4xl font-semibold text-white">Ad AI</h1>

          <Link href="/create">
            <Button size="lg">Get started</Button>
          </Link>
        </div>

        <Tabs className="w-full lg:max-w-[450px] lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%]">
          {navLinks.map((link, index) => (
            <TabItem
              key={index}
              variant={pathname === link.href ? "active" : ""}
              onClick={() => router.push(link.href)}
            >
              {link.label}
            </TabItem>
          ))}
        </Tabs>
      </Container>
    </nav>
  );
}
