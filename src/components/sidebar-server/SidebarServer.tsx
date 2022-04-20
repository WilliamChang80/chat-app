import logo from 'assets/images/logo.png'
import Accordion from 'components/accordion'

const SidebarServer = () => {
    return (
        <aside className="w-1/4">
            <div className="bg-primary h-screen flex flex-col divide-y-2 divide-black/25">
                <ul className="space-y-2 py-3 px-3 bg-primary-dark hover:bg-primary-highlight">
                    <li>
                        <a href="#" className="text-white">
                            <h1>Server Name</h1>
                        </a>
                    </li>
                </ul>
                <ul className="overflow-y-scroll ">
                    <Accordion label="Channel A" />
                </ul>
            </div>
        </aside>
    )
}

export default SidebarServer