import Image from "next/image";

const Footer = () => {
  return(
    <footer className="flex flex-col text-sm space-y-5 w-full items-center py-6 px-5 tablet:flex-row tablet:space-y-0 tablet:justify-between">
      <div>
        <h2 className="text-slate-300 font-bold text-xl">CHRISSTORE</h2>
      </div>
      <div className="flex flex-col items-center tablet:flex-row">
        <p className="px-3 py-5">Privacy Policy</p>
        <p className="px-3 py-5">Terms & Conditions</p>
        <p className="px-3 py-5">Shipping</p>
        <p className="px-3 py-5">Returns</p>
      </div>
      <div className="flex flex-row space-x-5">
        <Image src={'/images/facebook.svg'} 
          width={20}
          height={20}
        />
        <Image src={'/images/twitter.svg'} 
          width={20}
          height={20}
        />
        <Image src={'/images/instagram.svg'} 
          width={20}
          height={20}
        />
      </div>
    </footer>
  );
};

export default Footer;