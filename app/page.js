'use client'

import { useEffect, useState } from "react";

import ImageInput from "@/components/ImageInput";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import CommandWindow from "@/components/CommandWindow";

import { NICHES } from "@/utils/constants";
import useFilterSearch from "@/hooks/useFilterSearch";

import { HiMiniXMark } from "react-icons/hi2";


export default function Home() {
  const { filterItems } = useFilterSearch();

  const [isOpen, setIsOpen] = useState(false)
  const [niches, setNiches] = useState(NICHES)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedNiche, setSelectedNiche] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [file, setFile] = useState(null)

  useEffect(() => {
    const filtered = filterItems(niches, searchInput)
    setFilteredItems(filtered)
    console.log(filtered)
  }, [searchInput]);

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="h-full flex-[4] flex items-center justify-center">
        <ImageInput file={file} setFile={setFile} />
      </div>
      <div className="h-full flex-[2] border-l p-4 space-y-2">
        <CommandWindow searchInput={searchInput} setSearchInput={setSearchInput} isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} options={niches} filteredItems={filteredItems} selectedoptions={selectedNiche} setSelectedoptions={setSelectedNiche} />
        <div className="flex flex-col">
          <Button variant='outline' className='w-full justify-start' onClick={() => setIsOpen(true)} >selecte niches</Button>
          <div className="flex flex-wrap gap-1 mt-2">
            {
              selectedNiche && selectedNiche.map((niche, index) => (
                <Button variant='outline' onClick={() => {
                  setSelectedNiche(selectedNiche.filter((item) => item !== niche))
                }} className='inline-flex'>
                  {niche.logo}
                  {niche.label}
                  <HiMiniXMark />
                </Button>
              ))
            }
          </div>
        </div>
        <Input className='w-full' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter the name of your brand" />
        <TextArea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your brand here" />
        <Button className='w-full'>Create</Button>
      </div>
    </div>
  );
}
