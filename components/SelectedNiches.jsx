import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";

export default function SelectedNiches({ selectedNiches, setSelectedNiches }) {
  return (
    <div className="flex flex-wrap gap-1">
      {selectedNiches.map((niche, index) => (
        <Button
          key={index}
          variant="outline"
          onClick={() => {
            setSelectedNiches(selectedNiches.filter((item) => item !== niche));
          }}
          className="inline-flex"
        >
          {niche.logo}
          {niche.label}
          <HiMiniXMark />
        </Button>
      ))}
    </div>
  );
}
