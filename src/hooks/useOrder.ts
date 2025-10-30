import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";
import { toast } from "sonner";

const useOrder = () => {
    //Viene bien usar generics cuando se busca poner el type de que es un obj o array, no con valores primitivos
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0)


    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updatedOrder)
            toast.success(`Se ha agregado ${item.name} nuevamente a la orden`)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
            toast.success(`${item.name} se ha agregado a la orden correctamente`)
        }

    }

    const removeItem = (id: MenuItem['id']) => {
        //El nuevo arreglo se almacena en una variable para obtener su valor actualizado despues de usar el filter
        const newOrder = order.filter(order => order.id !== id)
        setOrder(newOrder)
        //Ya con el arreglo actualizado se puede obtener su cantidad
        if (newOrder.length === 0) {
            setTip(0) //Se resetea el estado de la propina
        }

        toast.success('Producto eliminado correctamente de la orden')
    }

    const sendOrder = () => {
        setOrder([])
        setTip(0)
        toast.success('Orden registrada correctamente')
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        sendOrder
    }
}


export default useOrder;