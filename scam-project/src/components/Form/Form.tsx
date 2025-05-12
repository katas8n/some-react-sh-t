import type { ReactNode } from "react";

interface PropTypes {
    children: ReactNode;
    className: string;
}

export const Form = ({ children, className }: PropTypes) => {
    return ( 
        <form className={className}>
            {children}
        </form>
     );
}
