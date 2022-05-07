import classNames from "classnames";
import { useState } from "react";

export interface AccordionItemProps {
  label: string;
  iconLeft?: JSX.Element | null;
  iconRight?: JSX.Element | null;
}

const AccordionItem = ({ label, iconLeft, iconRight }: AccordionItemProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="text-white rounded bg-transparent px-3 py-2 text-center flex w-full hover:bg-primary-highlight"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={"text-left lg:w-5 xl:w-5 sm:w-5 flex"}>{iconLeft}</div>
      <div className="w-full text-left lg:w-10/12 xl:w-10/12 sm:w-10/12 flex-1 justify-center">
        <h3 className="ml-3">{label}</h3>
      </div>
      <div
        className={classNames(
          "text-left",
          "lg:w-5",
          "xl:w-5",
          "sm:w-5",
          "flex",
          !isHover && "hidden"
        )}
      >
        {iconRight}
      </div>
    </div>
  );
};

export default AccordionItem;
