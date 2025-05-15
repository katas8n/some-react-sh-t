import { useState } from "react";
import { Button, Form, Input } from "../components";
import { inputs } from "../constants/inputs";

interface PropTypes {
    
}

interface ICard {
    cardNumber: string,
    date: Date,
    cvv: string,
    owner: string
}

export const Home = () => {
    const [formState, setFormState] = useState<ICard>(
        {
            cardNumber: "",
            date: new Date(),
            cvv: "",
            owner: ""
        }
    )

    const onInputHandler = (key: string, value: string) => {
        setFormState((prevForm) => {
            return {
                ...prevForm,
                [key]: value
            }
        })
        // console.log("[LOG_STATE]",formState);
    }

    const onSendNewWallet = async () => {        
        const resp = await fetch("http://localhost:3000/wallets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
        })

        const wallets = await resp.json(); 

        console.log("[wallets]",wallets);
    }
    
    return ( 
        <section className="w-full flex justify-center">
            <Form className="flex flex-col bg-stone-700 w-1/2 px-5 py-2">
                {
                    inputs.map(input => (
                        <Input key={input.id} {...input} onInputHandler={onInputHandler}/>
                    ))
                }

                <div className="flex mt-9 justify-end">
                    <Button onClickHandler={onSendNewWallet} className="border-2 rounded-md px-5">Send</Button>
                </div>
            </Form>
        </section>
     );
}
