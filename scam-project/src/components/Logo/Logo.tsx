import { toStr } from "../../lib/toString";

interface PropTypes {
    src: string;
    alt: string;
    className: string;
    size?: {
        h?: number;
        w: number
    }
}

export const Logo = ({ src, alt, className, size }: PropTypes) => {
    return ( 
        <section className={className}>
            <img className={`w-[${toStr(size?.w)}rem]`} src={src} alt={alt}/>
        </section>
     );
}
