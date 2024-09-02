import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-full flex justify-between absolute z-10 p-2">
      <div className="text-4xl font-semibold">Corp Router</div>
      <ul className="flex justify-between items-center gap-2 ">
        <Link href="/">
          <li className="text-xl font-bold">Home</li>
        </Link>
        <Link href="/performance">
          <li className="text-xl font-bold">Performance</li>
        </Link>
        <Link href="/scalability">
          <li className="text-xl font-bold">Scalability</li>
        </Link>
        <Link href="/reliability">
          <li className="text-xl font-bold">Reliability</li>
        </Link>
      </ul>
    </div>
  );
}
