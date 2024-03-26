import HeaderHome from "../../components/HeaderHome";
import { Button } from "../../components/ui/button";

export const Home = (): JSX.Element => {
  return (
    <div className=" bg-[#F2F4FF]">
      <div className="w-full relative min-h-screen overflow-hidden">
        <HeaderHome />
        <div className="w-full relative h-full">
          <div className="w-full absolute top-0 left-0 z-10">
            <img src="img/bg-initial.svg" className="h-full w-full object-cover" alt="" />
          </div>
          <div className="z-30 relative h-screen w-full flex items-center justify-center">
            <img src="img/Logotipo1.svg" className="w-1/3 absolute left-0" alt="" />
            <img src="img/bg-text-initial.svg" className="w-1/2 absolute right-0 object-cover" alt="" />
            <div className="absolute right-24 w-[600px] mt-20 flex flex-col gap-4 text-[#0E0E12]">
              <h1 style={{ fontFamily: "Adam, sans-serif" }} className=" font-bold text-3xl ">
                There are many variations of passages of Lorem Ipsum available
              </h1>
              <p style={{ fontFamily: "Mulish, sans-serif" }}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
              </p>
              <div>




                <Button className="" size={"lg"}>
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="flex gap-2 absolute bottom-4">
              <img src="img/icon-whatsapp.png" alt="" />
              <img src="img/icon-instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center relative">
        <div className="w-full flex absolute left-0">
          <h1 className="uppercase text-[#2F2E59] font-bold text-6xl flex flex-col leading-10 justify-center items-center  " style={{ fontFamily: "Adam, sans-serif" }}>
            <span>S</span><br />
            <span>O</span><br />
            <span>B</span><br />
            <span>R</span><br />
            <span>E</span><br /><br />
            <span>N</span><br />
            <span>O</span><br />
            <span>S</span>
          </h1>
        </div>
        <div className="w-full h-full  flex items-center justify-center">
          <img src="img/Img-escritorio.png" className="z-30 pr-96" alt="" />
          <img src="img/bg-sobre.svg" className="w-2/5 absolute right-0 top-1/4" alt="" />
          <p>There are many variations of passages of Lorem Ipsum available There are many variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
    </div>
  );
};
