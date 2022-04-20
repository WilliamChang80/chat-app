import AccordionItem from './accordion-item'
import PlusIcon from 'components/icons/PlusIcon';
import ChevronDown from 'components/icons/ChevronDown';

export interface AccordionProps {
    items?: typeof AccordionItem[];
    label: string;
}

const Accordion = ({ label }: AccordionProps) => {
    return (<>
        <button id="dropdownDividerButton" className="text-white bg-transparent p-3 text-center flex w-full">
            <div className="w-full text-left lg:w-1/12 xl:w-1/12"><ChevronDown /></div>
            <div className="w-full text-left lg:w-10/12 xl:w-10/12"><h2 className="ml-3">{label}</h2></div>
            <div className="w-full text-right lg:w-1/12 xl:w-1/12"><PlusIcon /></div>
        </button>
    </>)
}

export default Accordion;