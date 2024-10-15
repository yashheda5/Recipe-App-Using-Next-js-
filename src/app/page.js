import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Welcome to Receipes</h1>
      <Link href={"/receipe-list"}>Explore Recipes</Link>
    </div>
  );
}
