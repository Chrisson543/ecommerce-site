import { getCategory } from "@/utils/fetchData"
import Image from "next/image";
import Link from "next/link";

export default function Categories(){
  const tops = getCategory('tops');
  const bottoms = getCategory('bottoms');
  const accessories = getCategory('accessories');
  return(
    <main className="flex flex-col h-[75vh] space-y-1 justify-center px-2">
      <div className="flex hover:scale-95 relative flex-row items-center h-[30%] rounded-3xl overflow-hidden">
        <Link href={"/categories/tops"}>
          <Image
            className=" opacity-80"
            src={tops[0].image}
            alt={'shirt'}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">Tops</h1>
        </Link>
        
      </div>
      <div className="flex hover:scale-95 relative flex-row items-center h-[30%] rounded-3xl overflow-hidden">
        <Link href={"/categories/bottoms"}>
          <Image
            className=" opacity-80"
            src={bottoms[0].image}
            alt={'bottom'}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">Bottoms</h1>
        </Link>
        
      </div>
      <div className="flex hover:scale-95 relative flex-row items-center h-[30%] rounded-3xl overflow-hidden">
        <Link href={"/categories/accessories"}>
          <Image
            className=" opacity-80"
            src={accessories[0].image}
            alt={'accessories'}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">Accessories</h1>
        </Link>
        
      </div>
    </main>
  )
}