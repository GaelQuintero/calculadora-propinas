/*
Otra alertaniva de useMemo es el uso de useCallback
Es lo mismo que useMemo pero en useCallback se tienen que llamar las propiedades como funcion usando ()
Lo unico que cambia es la sintaxis
*/
import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  sendOrder: () => void;
};
const OrdenTotals = ({ order, tip, sendOrder }: OrderTotalsProps) => {
  //Reduce para acumular las propiedades del arreglo que desees
  const subtotalAmount = useMemo(
    () =>
      order.reduce((total, order) => total + order.quantity * order.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className=" font-bold text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a Pagar:{" "}
          <span className="font-mono">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Propina:{" "}
          <span className="font-mono">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar:{" "}
          <span className="font-mono">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        onClick={() => sendOrder()}
        className="bg-indigo-500 text-white  dark:bg-green-500 font-bold px-5 py-2 rounded-md text-xl w-full hover:bg-indigo-600 hover:dark:bg-green-600 cursor-pointer"
      >
        Guardar orden
      </button>
    </>
  );
};

export default OrdenTotals;
