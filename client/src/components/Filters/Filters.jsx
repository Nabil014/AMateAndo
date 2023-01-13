import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {byOrder} from '../../Redux/Actions/index'
import { getProduct } from "../../Redux/Actions/index";


const order = [
  { name: "Relevancia" },
  { name: "Nombre, de A a Z" },
  { name: "Nombre, de Z a A" },
  { name: "Precio, de más alto a más bajo" },
  { name: "Precio, de más bajo a más alto" },
];

export default function Filters(props) {
  const [selected, setSelected] = useState(order[0]);
  const dispatch = useDispatch()

  const handleSelection = (selected)=>{
    setSelected(selected)
    props.orderBy(selected)
  }

  return (
    <div className="relative flex justify-end right-10 gap-4 top-2 mb-3">
      <div className="flex items-center"><span className="text-gray-500 opacity-90 text-base">Ordenar por:</span></div>
      <div >
        <Listbox
          value={selected}
          onChange={handleSelection}
          defaultValue={"selected[0]"}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-60 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className=" absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {order.map((order, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={order}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {order.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
