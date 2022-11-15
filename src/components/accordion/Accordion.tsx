import { useState, ReactNode, FC } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import classNames from "classnames";

export interface AccordionProps {
  items: ReactNode[];
  label: string;
}

const Accordion: FC<AccordionProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure>
      <Disclosure.Button
        className="text-white bg-transparent -3 pbp-1 text-center flex w-full content-center"
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
        <div className="w-full h-full text-left content-center lg:w-10/12 xl:w-10/12 sm:w-10/12">
          <h2 className="ml-3 mt-1">{label}</h2>
        </div>
        <div className="w-full text-sm text-right lg:w-1/12 xl:w-1/12 sm:w-1/12">
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
