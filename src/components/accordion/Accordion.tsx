import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import classNames from "classnames";

export interface AccordionProps {
  items: JSX.Element[];
  label: string;
}

const Accordion = ({ label, items }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure>
      <Disclosure.Button
        className="text-white bg-transparent p-3 pb-1 text-center flex w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronDownIcon
          className={classNames(
            isOpen && "-rotate-90",
            "transform",
            "duration-100",
            "w-full",
            "text-left",
            "lg:w-1/12",
            "xl:w-1/12",
            "sm:w-1/12"
          )}
        />
        <div className="w-full text-left lg:w-10/12 xl:w-10/12 sm:w-10/12">
          <h2 className="ml-3">{label}</h2>
        </div>
        <div className="w-full text-right lg:w-1/12 xl:w-1/12 sm:w-1/12">
          <PlusIcon />
        </div>
      </Disclosure.Button>
      {isOpen && (
        <Disclosure.Panel>
          {items.map((i, idx) => (
            <div key={idx}>{i}</div>
          ))}
        </Disclosure.Panel>
      )}
    </Disclosure>
  );
};

export default Accordion;
