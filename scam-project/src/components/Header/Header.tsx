import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation";

export const Header = () => {
    return ( 
        <header className="flex justify-center text-xl items-center">
            <div className="logo-wrapper w-1/6">
                <Logo 
                    size={{ h: 2, w: 2 }}
                    src="https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png"
                    alt="Something went wrong, try again later!"
                    // className={""}
                />
            </div>
            <Navigation />
        </header>
     );
}
