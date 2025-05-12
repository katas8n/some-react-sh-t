import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation, type INavigation } from "../../constants/navigation";

interface PropTypes {
    
}

export const Navigation = () => {
    const [tabs, setTabs] = useState<INavigation[]>(navigation);
    const [activeTab, setActiveTab] = useState(tabs[0])

    return ( 
        <nav className="w-full">
            <ul className="flex justify-between">
                {
                    tabs.map((navigation, i) => (
                         <NavLink
                            onClick={() => setActiveTab(navigation)} 
                            className={`
                                ${activeTab === navigation
                                    ? "text-cyan-200" 
                                    : "text-cyan-500"
                                }`
                            }
                            to={navigation.url}
                            key={i}
                        >
                            {navigation.title}
                        </NavLink>
                    ))
                }
            </ul>
        </nav>
     );
}
