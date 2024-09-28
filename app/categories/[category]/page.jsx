import { notFound } from "next/navigation";
import ProductPreview from "@/components/ProductPreview";

export async function getProducts(param){
  const response = await fetch(`http://localhost:4000/${param}`, {
    next: {
      revalidate: 0
    }
  });

  if(!response.ok){
    notFound();
  }
  
  const data = await response.json();
  return data;
};

export default async function Category({ params }){
  const category = params.category;
  const products = await getProducts(category);

  const productsElements = products.map(product => {
    return <ProductPreview key={product.id} id={product.id} category={category} name={product.name} price={product.price} image={product.image} />
  });

  return(
    <main className="flex flex-col items-center">
      <div className="border-b-[1px] border-b-slate-200 w-full justify-center flex">
        <h1 className=" text-5xl capitalize font-bold my-6">{category}</h1>
      </div>
      <div className="flex flex-col w-full tablet:grid tablet:grid-cols-4">
        {productsElements}
      </div>
    </main>
  );
}