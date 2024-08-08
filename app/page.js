'use client'

import ImagePreview from "@/components/ImagePreview";
import Nav from "@/components/Nav";
import NicheDrpopdown from "@/components/NicheDropdown";
import TextArea from "@/components/TextArea";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Nav />
      <div className="flex-1 flex items-center justify-center">
        <div className="h-full flex-[1]">1</div>
        <div className="h-full flex-[4] flex items-center justify-center">
          <ImagePreview alt="image" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg" />
        </div>
        <div className="h-full flex-[2] border-l p-4 space-y-2">
          <NicheDrpopdown />
          <TextArea placeholder="Describe your brand here" />
        </div>
      </div>
    </div>
  );
}
