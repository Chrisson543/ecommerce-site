import Link from "next/link";

export default function NotFound(){
  return(
    <main className="text-center min-h-[75vh] flex flex-col justify-center">
        <h2 className="text-3xl font-bold">There was a problem.</h2>
        <p>We could not find the page you were looking for.</p>
        <p>Go back to the <Link className="font-bold underline text-red-600" href={'/'}>Home Page</Link>.</p>
    </main>
  );
};