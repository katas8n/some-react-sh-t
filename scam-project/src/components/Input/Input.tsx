import { useRef } from "react";

interface PropTypes {
    name: string; 
    value: string;
    id: string; 
    placeholder: string;
    className: string;
    type: string;
    onInputHandler?: (key: string, value: string) => void
    // onChangeHandler: (inputValue: string) => void
}

export const Input = ({ name, value, id, type, placeholder, className, onInputHandler }: PropTypes) => {

    // const [inputValue, setInputValue] = useState<string>(""); 
    console.log("INPUT HAS BEEN RENDERED!");
    
    const inputRef = useRef<string>(""); 

    const onChangeHandler = () => {
        console.log(inputRef.current.value);
        
        // setInputValue(inputValue)
    }

    // const onChangeHandler = (inputValue: string, name: string) => {
    //     setInputValue(inputValue)
    //     // console.log(inputValue);

    //     onInputHandler(name, inputValue)
    // }

    return ( 
        <fieldset>
            <label htmlFor={id}></label>

            <input 
                id={id}
                name={name}
                className={`${className} border-b-1 border-b-fuchsia-200 border-solid mt-4`}
                placeholder={placeholder}
                type={type} 
                onChange={(e) => onChangeHandler(e.target.value, name)}
                // value={inputValue}
                ref={inputRef}
            /> 
        </fieldset>
     );
}
