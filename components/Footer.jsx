import Image from "next/image";

const Footer = () => {
  return(
    <footer className="flex bg-[#181A20] flex-col text-sm space-y-5 w-full items-center py-6 px-5 tablet:flex-row tablet:space-y-0 tablet:justify-between">
      <div>
        <h2 className="text-slate-300 font-bold text-xl">CHRISSTORE</h2>
      </div>
      <div className="flex flex-col items-center tablet:flex-row">
        <p className="px-3 py-5 hover:cursor-pointer hover:underline">Privacy Policy</p>
        <p className="px-3 py-5 hover:cursor-pointer hover:underline">Terms & Conditions</p>
        <p className="px-3 py-5 hover:cursor-pointer hover:underline">Shipping</p>
        <p className="px-3 py-5 hover:cursor-pointer hover:underline">Returns</p>
      </div>
      <div className="flex flex-row space-x-5">
        <Image src={'/images/facebook.svg'} 
          width={20}
          height={20}
          className="hover:cursor-pointer"
          alt="social-media"
        />
        <Image src={'/images/twitter.svg'} 
          width={20}
          height={20}
          className="hover:cursor-pointer"
          alt="social-media"
        />
        <Image src={'/images/instagram.svg'} 
          width={20}
          height={20}
          className="hover:cursor-pointer"
          alt="social-media"
        />
      </div>
    </footer>
  );
};

export default Footer;