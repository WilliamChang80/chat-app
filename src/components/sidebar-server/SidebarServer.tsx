import logo from 'assets/logo.png'

const SidebarServer = () => {
    return (
        <aside className="w-1/4" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-primary h-screen" >
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            Server Name
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SidebarServer