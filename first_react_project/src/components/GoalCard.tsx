// interface

import { type ReactNode } from "react";

interface ImagePropTypes {
    src: string, 
    alt: string 
}

interface GoalCardPropTypes {
    title: string;
    children: ReactNode;
    id?: number,
    img?: ImagePropTypes
}

// export const GoalCard = (props) => {
export const GoalCard = ({ title, id, children, img }: GoalCardPropTypes) => {
    // console.log(props);
    // arrtibutes and children

    return ( 
        <article className='card h1-bold' id={id}>
            <img src={img?.src} alt={img?.alt} />
            <span>{title}</span>
            <p>{children}</p>

            <button>Delete</button>
        </article>
    )
}