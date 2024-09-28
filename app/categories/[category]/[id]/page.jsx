import ProductDescription from "@/components/ProductDescription";
import { getCategory } from "@/utils/fetchData";
import Image from "next/image";

export default async function ProductView({ params }){
  const { id, category } = params;

  const products = await getCategory(category);
  const product = products.find(product => product.id == id);
  const { name, price, image } = product;

  return(
    <main className="flex flex-col tablet:flex-row">
      <div className="flex flex-row justify-center tablet:w-[40%]">
        <Image
            src={image}
            alt={name}
            width={600}  
            height={600}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
      </div>
      <ProductDescription image={image} name={name} price={price} category={category} id={id} />
    </main>
  );
};