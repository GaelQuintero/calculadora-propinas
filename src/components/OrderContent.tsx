import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
type OrderContentProps = {
  order: OrderItem[];
};
const OrderContent = ({ order }: OrderContentProps) => {
  return (
    <>
      <h2 className=" text-2xl font-bold mb-2 text-center">Consumo</h2>

      <div className="space-y-3 mt-5">
        {order.length > 0 ? (
          order.map((order) => {
            return (
              <div key={order.id} className="flex justify-between">
                <p className="font-sans">{order.name} - <span className="font-mono">{formatCurrency(order.price)}</span></p>
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
