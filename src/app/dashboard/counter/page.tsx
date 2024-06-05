import { Metadata } from "next";
import { CartCounter } from "@/app/components/shopping-cart";


export const metadata: Metadata = {
  title: 'Mi contador',
  description: 'Un contador',
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={0} />
    </div>
  );
}