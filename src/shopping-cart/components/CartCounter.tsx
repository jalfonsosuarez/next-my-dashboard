"use client";

import { useState } from "react";

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {

  const [count, SetCount] = useState(value)

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => SetCount(count - 1)}
          className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
        <button
          onClick={() => SetCount(count + 1)}
          className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
      </div>
    </>
  )
}
