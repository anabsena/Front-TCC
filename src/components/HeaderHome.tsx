import { useState, useEffect } from 'react';
import { Button } from "./ui/button";

const HeaderHome = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full z-50 ${scrolled ? 'backdrop-filter backdrop-blur-xl bg-[#2F2E59] bg-opacity-30' : 'bg-transparent'}`}>
      <div className={`w-full flex justify-between px-4 py-2 bg-[#2F2E59]`} style={{ fontFamily: "Mulish, sans-serif" }}>
        <h1 className="text-white">(43)99999-9999</h1>
        <h1 className="uppercase text-white">projetarmais@gmail.com</h1>
      </div>
      <div className="flex w-full justify-between items-center">
        <img src="img/Logo.png" className="h-24 w-24" alt="" />
        <div className="flex gap-2 text-[#22222B] w-1/3 justify-around items-center text-xl">
          <h1 className="">Home</h1>
          <h1 className="">Sobre nós</h1>
          <h1 className="">Projetos</h1>
          <Button variant={"inverseTwo"} size={"lg"}>Contato</Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
