import type { OrderItem, MenuItem } from "../types";
import { formatCurrency } from "../helpers";
type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void
};
const OrderContent = ({ order , removeItem }: OrderContentProps) => {
  return (
    <>
      <h2 className=" text-2xl font-bold mb-2 text-center">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.length > 0 ? (
          order.map((order) => {
            return (
              <div key={order.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                <div>
                  <p className="font-light text-lg">
                    {order.name} -{" "}
                    <span className="font-mono">
                      {formatCurrency(order.price)}
                    </span>
                  </p>

                  <p className="font-bold text-lg">
                    Cantidad:{" "}
                    <span className="font-mono">
                      {order.quantity} -{" "}
                      {formatCurrency(order.price * order.quantity)}
                    </span>
                  </p>
                </div>

                <div>
                  <button onClick={() => removeItem(order.id)} className="bg-red-600 text-white px-5 py-1 rounded-md font-bold cursor-pointer hover:bg-red-700">Eliminar</button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-xl">La orden esta vacia</p>
        )}
      </div>
    </>
  );
};

export default OrderContent;
