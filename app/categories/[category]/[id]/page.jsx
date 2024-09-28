import ProductDescription from "@/components/ProductDescription";
import { getCategory } from "@/utils/fetchData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductView({ params }){
  const { id, category } = params;

  const products = getCategory(category);
  const product = products.find(product => product.id == id);
  
  if(product == undefined){
    notFound();
  }
  const { name, price, image } = product;

  return(
    <main className="flex">
      <div className="flex flex-col tablet:flex-row pt-[77px]">
        <div className="flex flex-row justify-center tablet:w-[40%]">
          <Image
              src={image}
              alt={name}
              width={600}  
              height={600}
              className="object-contain object-center"
            />
        </div>
        <ProductDescription image={image} name={name} price={price} category={category} id={id} />
      </div>
    </main>
  );
};