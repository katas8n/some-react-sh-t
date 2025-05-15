export interface INavigation {
    url: string;
    title: string; 
    isActive: boolean
}

export const navigation: INavigation[] = [
    {
        url: "/",
        title: "Home",
        isActive: true
    },
    {
        url: "/profile",
        title: "Profile",
        isActive: false
    },
    {
        url: "/wallets",
        title: "Wallet",
        isActive: false
    },
    {
        url: "/login",
        title: "Login",
        isActive: false
    },

]