"use client";

import { useRouter } from "next/navigation";

import NavLayout from "@/components/NavLayout";
import { useAuth } from "@/context/authContext";
import { useForm } from "@/context/formContext";

import ImageInput from "@/components/ImageInput";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button, { buttonVariants } from "@/components/Button";
import CommandWindow from "@/components/CommandWindow";
import { useEffect } from "react";

export default function CreatePage() {
  const { user } = useAuth();
  const { state, handleInputChange } = useForm();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <NavLayout>
      <div className="flex-1 flex items-center justify-center flex-col lg:flex-row">
        <div className="h-full w-[100%] flex items-center justify-center p-4 lg:w-[66%]">
          <ImageInput />
        </div>

        <div className="h-full w-[100%] p-4 space-y-2 lg:border-l lg:border-gray-800 lg:w-[33%]">
          <Input
            className="w-full"
            value={state.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter the name of your brand"
          />
          <TextArea
            rows={4}
            value={state.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="Describe your brand here"
          />
          <Button className="w-full">Create</Button>
        </div>
      </div>
    </NavLayout>
  );
}
