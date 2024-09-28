import Image from "next/image";
import Link from "next/link";

const ProductPreview = ({category, id, name, price, image}) => {
  return(
    <Link href={`/categories/${category}/${id}`}>
      <div className=" border-b-[1px] hover:scale-95 border-b-slate-200  border-t-[1px] border-t-slate-200 tablet:border-r-[1px] tablet:border-r-grey">
        <div className="relative flex flex-row justify-center w-full h-auto overflow-hidden border-b-[1px] border-b-slate-200">
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="text-[#333] p-5">
          <h2 className=" text-xl mb-3">{name}</h2>
          <p className=" text-sm">$ {price} USD</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductPreview;