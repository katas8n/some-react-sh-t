import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
interface PropTypes {
    
}

export const Wallet = () => {
    const [wallets, setWallets] = useState([]); 
    const { pathname } = useLocation(); 
    const { search } = useLocation(); 
    const loc = useLocation(); 
    
    console.log(loc );
    
    useEffect(() => {
        (async function () {
            const response = await fetch(`http://localhost:3000${pathname}`);
            const wallets = await response.json(); 


            await setWallets(wallets);
        })();
    }, []);

    return ( 
        <section>
            <ul className="flex justify-between items-center">
                {
                    wallets.length > 0 && wallets.map((wallet) => (
                        <div className="border-1 border-cyan-200 p-2.5 ml-5">
                            <h2>{wallet.cardNumber}</h2>
                            <h2>{wallet.owner}</h2>
                            <h2>{wallet.cvv}</h2>
                            <h2>{wallet.date.toString()}</h2>
                        </div>
                    ))
                }
            </ul>
        </section>
     );
}
