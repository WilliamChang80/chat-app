import PlusIcon from "components/icons/PlusIcon";
import ChevronDown from "components/icons/ChevronDown";
import { useState } from "react";
import ChevronRight from "components/icons/ChevronRight";

export interface AccordionProps {
  items: JSX.Element[];
  label: string;
}

const Accordion = ({ label, items }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        id="dropdownDividerButton"
        className="text-white bg-transparent p-3 text-center flex w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full text-left lg:w-1/12 xl:w-1/12 sm:w-1/12">
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </div>
        <div className="w-full text-left lg:w-10/12 xl:w-10/12 sm:w-10/12">
          <h2 className="ml-3">{label}</h2>
        </div>
        <div className="w-full text-right lg:w-1/12 xl:w-1/12 sm:w-1/12">
          <PlusIcon />
        </div>
      </button>
      {isOpen && items.map((i, idx) => <div key={idx}>{i}</div>)}
    </>
  );
};

export default Accordion;
