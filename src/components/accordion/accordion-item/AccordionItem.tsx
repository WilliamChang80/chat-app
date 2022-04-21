export interface AccordionItemProps {
    label: string
}

const AccordionItem = ({ label }: AccordionItemProps) => {
    return (<div>{label}</div>)
}

export default AccordionItem;