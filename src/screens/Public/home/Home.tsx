import { HiArrowSmRight } from "react-icons/hi";
import HeaderHome from "../../../components/HeaderHome";
import { Button } from "../../../components/ui/button";

export const Home = (): JSX.Element => {
  return (
    <div className=" bg-[#F2F4FF]">
      <div className="w-full relative min-h-screen overflow-hidden">
        <HeaderHome />
        <div className="w-full relative hidden lg:flex h-full">
          <div className="w-full absolute top-0 left-0 z-10">
            <img src="img/bg-initial.svg" className="h-full w-full object-cover" alt="" />
          </div>
          <div className="z-30 relative h-screen w-full flex items-center justify-between">
            <img src="img/Logotipo1.svg" className="w-1/3 " alt="" />
            <img src="img/bg-text-initial.svg" className="w-1/2 absolute right-0 object-cover" alt="" />
            <div className=" w-96 xl:w-[500px] 2xl:w-[600px] mt-20 flex flex-col gap-4 z-30 pr-4 2xl:pr-36 text-[#0E0E12]">
              <h1 style={{ fontFamily: "Adam, sans-serif" }} className=" font-bold text-xl xl:text-2xl 2xl:text-3xl ">
                There are many variations of passages of Lorem Ipsum available
              </h1>
              <p style={{ fontFamily: "Mulish, sans-serif" }} className="text-md ">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
              </p>
              <div>
                <Button className="" size={"lg"}>
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="w-full absolute flex justify-center bottom-8">
              <div className="flex gap-2 ">
                <img src="img/icon-whatsapp.png" alt="" />
                <img src="img/icon-instagram.png" alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className="w-full relative lg:hidden flex flex-col min-h-screen justify-center items-center px-4 sm:gap-12 ">
          <div className="w-full h-full flex justify-center items-center absolute z-20">

            <img src="img/bg-initial-mobile.svg" className="h-3/4 w-full object-cover" alt="" />
          </div>

          <div className="flex flex-col w-full items-center sm:-mt-20">
            <div className="w-full z-30 flex justify-start ">
              <div className="w-2/3 h-full flex justify-center items-center z-30">
                <img src="img/Logotipo-mobile.png" className="w-full  object-cover" alt="" />
              </div>
              <div className="flex gap-2 ">
                <img src="img/icon-whatsapp.png" className="w-10 h-10" alt="" />
                <img src="img/icon-instagram.png" className="w-10 h-10" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full flex z-30 justify-end mt-8">
            <div className="w-2/3 z-30 text-[#0E0E12] flex flex-col sm:gap-8">
              <h1 style={{ fontFamily: "Adam, sans-serif" }} className=" font-bold text-xl sm:text-3xl">
                There are many variations of passages of Lorem Ipsum available
              </h1>
              <p style={{ fontFamily: "Mulish, sans-serif" }} className="text-[12px] sm:text-lg">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
              </p>

            </div>
          </div>
          <div className="z-30 absolute bottom-20">
            <Button className="px-12 flex items-center gap-2" size={"lg"}>
              <span> Saiba mais</span> <HiArrowSmRight />
            </Button>
          </div>
          <div className="absolute opacity-45 -bottom-20">
            <img src="img/bg-predio.svg" className="w-3/4 " alt="" />
          </div>
        </div>



      </div>
      {/* <div className="w-full min-h-screen flex items-center justify-center relative">
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
      </div> */}
    </div>
  );
};
