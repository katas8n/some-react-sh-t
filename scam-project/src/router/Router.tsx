import { Route, Routes } from "react-router-dom";
import { Home, Login, Profile, Wallet } from "../screens";

export const Router = () => {

    return (
      <section className="h-full w-full flex justify-center items-center">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </section>
    );
}
