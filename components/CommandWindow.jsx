import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";
import Input from "./Input";

import { IoIosCheckbox } from "react-icons/io";

export default function CommandWindow({
  isOpen,
  toggle,
  searchInput,
  filteredItems,
  setSearchInput,
  selectedoptions,
  setSelectedoptions,
}) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center overflow-hidden z-[20000]">
      <div
        onClick={toggle}
        className="absolute w-screen h-screen top-0 left-0 flex flex-col bg-black bg-opacity-50"
      ></div>

      {/* box */}
      <div className="bg-[#242323] rounded-lg shadow w-screen max-w-[500px] z-50 overflow-hidden">
        <div className="flex items-center justify-between space-x-1 p-2">
          <Input
            autoFocus
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full"
            placeholder="Search"
          />
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setSearchInput("");
            }}
          >
            <HiMiniXMark size={24} />
          </Button>
          <Button onClick={toggle}>Cancel</Button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Select the niches that best describe your brand
        </p>

        <div className="flex items-center justify-center flex-col mt-4">
          {filteredItems.map((option, index) => (
            <Button
              key={index}
              className="w-full justify-start space-x-3 rounded-none bg-[#333232] border-gray-800 text-white"
              variant={selectedoptions.includes(option) && "outline"}
              onClick={() =>
                setSelectedoptions((prev) =>
                  selectedoptions.includes(option)
                    ? prev.filter((item) => item !== option)
                    : [...prev, option],
                )
              }
            >
              {selectedoptions.includes(option) && (
                <IoIosCheckbox className="text-[#FF5733]" />
              )}
              <span className="mr-2">{option.logo}</span>
              {option.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
