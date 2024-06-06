"use client";

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "../../store"


export const WidgestsGrid = () => {

  const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title="Contador"
        subTitle="Productos agrefados"
        label={`${isCart}`}
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
      <SimpleWidget
        title=""
        subTitle=""
        label=""
        icon=""
        href=""
      />
    </div>

  )
}
