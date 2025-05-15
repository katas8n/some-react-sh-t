interface FormInput {
    name: string; 
    value?: string;
    id: string; 
    placeholder: string;
    type?: string;
    className?: string;
    onChangeHandler?: () => void
}

export const inputs: FormInput[] = [
    {
        id: "cardNumber",
        name: "cardNumber",
        placeholder: "Card number",
        type: "text"
    },
    {
        id: "date",
        name: "date",
        placeholder: "Date",
        type: "date"
    },
    {
        id: "owner",
        name: "owner",
        placeholder: "Owner Name",
        type: "text"
    },
    {
        id: "cvv",
        name: "cvv",
        placeholder: "CVV",
        type: "text"
    },
]