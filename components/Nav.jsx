"use client";

import Button from "./Button";
import Container from "./Container";
import { TabItem, Tabs } from "./Tabs";

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between py-4 border">
      <Container variant="row" className="justify-between">
        <h1>Ad AI</h1>

        <Tabs>
          <TabItem onClick={() => alert("clicked")}>Home</TabItem>
          <TabItem onClick={() => alert("clicked")}>Suggestion</TabItem>
        </Tabs>

        <Button onClick={() => alert("clicked")} size="lg">
          Get started
        </Button>
      </Container>
      ;
    </nav>
  );
}
