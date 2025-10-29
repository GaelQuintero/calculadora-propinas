import type { MenuItem as MenuItemT } from "../types";

type MenuItemProps = {
  comida: MenuItemT
  addItem : (item : MenuItemT) => void
};

const MenuItem = ({ comida, addItem }: MenuItemProps) => {
  const { name, price } = comida;
  return (
    <>
      <button onClick={() => addItem(comida)} className="border-2 border-indigo-300 dark:border-zinc-700 dark:hover:bg-gray-800 cursor-pointer hover:bg-gray-200 w-full p-3 flex justify-between rounded-md mb-3">
        <p>{name}</p>
        <p className="font-mono font-bold">${price}</p>
      </button>
    </>
  );
};

export default MenuItem;
