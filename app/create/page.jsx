'use client'

import { useEffect, useState } from "react";

import ImageInput from "@/components/ImageInput";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button, { buttonVariants } from "@/components/Button";
import CommandWindow from "@/components/CommandWindow";

import { NICHES } from "@/utils/constants";
import useFilterSearch from "@/hooks/useFilterSearch";

import SelectedNiches from "@/components/SelectedNiches";
import cn from "@/utils/lib";


export default function CreatePage() {
  const { filterItems } = useFilterSearch();

  const [isOpen, setIsOpen] = useState(false)
  const [niches, setNiches] = useState(NICHES)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedNiches, setSelectedNiches] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [file, setFile] = useState(null)

  useEffect(() => {
    const filtered = filterItems(niches, searchInput)
    setFilteredItems(filtered)
    console.log(filtered)
  }, [searchInput]);

  return (
    <div className="flex-1 flex items-center justify-center flex-col lg:flex-row">
      <div className="h-full flex-[4] flex items-center justify-center p-4">
        <ImageInput file={file} setFile={setFile} />
      </div>


      <div className="h-full flex-[2]  p-4 space-y-2 lg:border-l lg:border-gray-800">
        <CommandWindow searchInput={searchInput} setSearchInput={setSearchInput} isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} options={niches} filteredItems={filteredItems} selectedoptions={selectedNiches} setSelectedoptions={setSelectedNiches} />
        <div className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start bg-[#242323] border-gray-800 text-white -mb-2")} onClick={() => setIsOpen(true)} >selecte niches</div>
        {
          selectedNiches && (
            <SelectedNiches selectedNiches={selectedNiches} setSelectedNiches={setSelectedNiches} />
          )
        }
        <Input className='w-full' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter the name of your brand" />
        <TextArea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your brand here" />
        <Button className='w-full'>Create</Button>
      </div>
    </div>
  );
}
