export interface AccordionItemProps {
  label: string;
  iconLeft: JSX.Element | null;
  iconRight: JSX.Element | null;
}

const AccordionItem = ({ label, iconLeft, iconRight }: AccordionItemProps) => {
  return (
    <>
      <span>
        {iconLeft}
        {label}
        {iconRight}
      </span>
    </>
  );
};

export default AccordionItem;
