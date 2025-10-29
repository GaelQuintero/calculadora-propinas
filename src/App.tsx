import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import { Toaster } from "sonner";

function App() {
  const { order, addItem } = useOrder();
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-2xl font-bold mb-2 text-center">Menú</h2>
          {menuItems.map((comida) => {
            return <MenuItem key={comida.id} comida={comida} addItem={addItem} />;
          })}
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 shadow-md">
            <OrderContent  order={order}/>
        </div>
      </main>

      <Toaster position="top-right" expand={false} richColors />
    </>
  );
}

export default App;
