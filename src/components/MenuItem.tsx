import type { OrderActions } from "../reducers/order-reducer";
import type { MenuItem as MenuItemT } from "../types";

type MenuItemProps = {
  comida: MenuItemT;
  dispatch: React.ActionDispatch<[action: OrderActions]>;
};

const MenuItem = ({ comida, dispatch }: MenuItemProps) => {
  return (
    <>
      <button
        onClick={() => dispatch({ type: "addItem", payload: { item: comida } })}
        className="border-2 border-indigo-300 dark:border-zinc-700 dark:hover:bg-gray-800 cursor-pointer hover:bg-gray-200 w-full p-3 flex justify-between rounded-md mb-3"
      >
        <p>{comida.name}</p>
        <p className="font-mono font-bold">${comida.price}</p>
      </button>
    </>
  );
};

export default MenuItem;
