import ProductPreview from "@/components/ProductPreview";
import { getCategory } from "@/utils/fetchData";

export default function Category({ params }){
  const category = params.category;
  const products = getCategory(category);

  const productsElements = products.map(product => {
    return <ProductPreview key={product.id} id={product.id} category={category} name={product.name} price={product.price} image={product.image} />
  });

  return(
    <main className="flex flex-col items-center">
      <div className="border-b-[1px] border-b-slate-800 w-full justify-center flex">
        <h1 className=" text-5xl capitalize font-bold my-6">{category}</h1>
      </div>
      <div className="flex flex-col w-full tablet:grid tablet:grid-cols-4">
        {productsElements}
      </div>
    </main>
  );
}