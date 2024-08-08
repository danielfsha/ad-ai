"use client";

import {
  Dropdown,
  DropdownBody,
  DropdownItem,
  DropdownTrigger,
} from "@/components/Dropdown";
import { useState } from "react";

export default function NicheDrpopdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Dropdown>
      <DropdownTrigger isOpen={isOpen} onClick={toggle}>
        Select Your Niche
      </DropdownTrigger>
      {isOpen && (
        <DropdownBody>
          <DropdownItem onClick={() => alert("Design")}>Design</DropdownItem>
          <DropdownItem isActive={true} onClick={() => alert("Development")}>
            Development
          </DropdownItem>
          <DropdownItem onClick={() => alert("Marketing")}>
            Marketing
          </DropdownItem>
          <DropdownItem onClick={() => alert("Business")}>
            Business
          </DropdownItem>
          <DropdownItem onClick={() => alert("Finance")}>Finance</DropdownItem>
        </DropdownBody>
      )}
    </Dropdown>
  );
}
