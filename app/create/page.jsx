"use client";

import { useRouter } from "next/navigation";

import NavLayout from "@/components/NavLayout";
import { useAuth } from "@/context/authContext";
import { useForm } from "@/context/formContext";

import ImageInput from "@/components/ImageInput";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import { useEffect } from "react";

export default function CreatePage() {
  const router = useRouter();
  const { user } = useAuth();
  const { state, handleInputChange } = useForm();

  if (!user) {
    router.push("/auth/login");
  }

  const handleSubmit = async () => {
    if (!state.file) {
      handleInputChange("error", "Please select an image");
      return;
    }

    handleInputChange("status", "loading");

    try {
      const formData = new FormData();
      formData.append("form name", state.name);
      formData.append("description", state.description);
      formData.append("image", state.file);

      const response = await fetch(
        "https://7d97-102-213-69-138.ngrok-free.app/create",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      console.log("data", data);

      if (data.status === "failed") {
        handleInputChange("error", data.message);
      }

      handleInputChange("status", "success");
    } catch (err) {
      handleInputChange("error", err.error);
    }
  };

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

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
          <Button onClick={handleSubmit} className="w-full">
            Create
          </Button>
        </div>
      </div>
    </NavLayout>
  );
}
