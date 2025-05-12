interface PropTypes {
    children: string;
    className: string;
}

export const Button = ({ children, className }: PropTypes) => {
    return ( 
        <button className={className}>{children}</button>
     );
}
