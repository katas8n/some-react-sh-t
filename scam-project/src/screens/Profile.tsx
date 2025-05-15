import { useLocation } from "react-router-dom"; 

interface PropTypes {
    
}

export const Profile = () => {
    const location = useLocation(); 

    console.log("[LOCATION]", location);
    
    return ( 
        <section>
            <h1>Profile</h1>
        </section>
     );
}
