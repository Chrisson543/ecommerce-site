import Image from "next/image";
import ProductPreview from "../components/ProductPreview";
import { getCategory } from "@/utils/fetchData";
import Link from "next/link";

export default async function Home() {

  const bottoms = await getCategory('bottoms');

  const productsElements = bottoms.map(product => {
    return <ProductPreview key={product.id} category={'bottoms'} id={product.id} name={product.name} price={product.price} image={product.image} />
  })

  return (
    <main className="flex h-full flex-col items-center justify-between">
      <section className="min-h-[75vh] flex flex-col items-center laptop:grid laptop:grid-cols-2">
        <div className="relative w-full h-[360px] laptop:h-full overflow-hidden">
          <Image 
          src={'/images/model1.jpg'}
          alt="model1"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center px-6 pt-8 pb-[60px]">
          <p className="font-bold text-lg">NOW IN STORES</p>
          <h1 className="font-bold text-4xl sm:text-5xl tablet:text-6xl laptop:text-7xl] mb-6 text-center">New SS19<br/> Collection</h1>
          <p className="text-center">Discover the new Coats, Shirt, Pants, Shorts and Accessories <span className="font-bold">CHRISSTORE</span> has to offer</p>
          <Link href={"/categories"}>
            <button className=" mt-7 px-5 py-3 text-white bg-[#333]">See Collection</button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center pt-10 pb-[60px] px-[16%] text-center text-sm">
        <h1 className=" text-4xl font-bold pb-6 mt-5">About CHRISSTORE</h1>
        <p className=" mb-8">We are a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. Founded in 1970 in a small space across the street from the University of Pennsylvania.</p>
        <p>Modular now operates over 200 stores in the United States, Canada and Europe, offering experiential retail environments and a well-curated mix men's product assortments.</p>
      </section>
      <section className="flex flex-col items-center w-full tablet:grid tablet:grid-cols-4">
        {productsElements.slice(0, 8)}
      </section>
    </main>
  );
}
