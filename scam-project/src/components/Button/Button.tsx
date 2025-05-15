interface PropTypes {
    children: string;
    className: string;
    onClickHandler: () => void
}

export const Button = ({ children, className, onClickHandler }: PropTypes) => {
    return ( 
        <button onClick={onClickHandler} className={className}>{children}</button>
     );
}
