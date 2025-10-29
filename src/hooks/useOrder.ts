import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";
import { toast } from "sonner";

const useOrder = () => {
    //Viene bien usar generics cuando se busca poner el type de que es un obj o array, no con valores primitivos
    const [order, setOrder] = useState<OrderItem[]>([]);


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


    return {
        order,
        addItem
    }
}


export default useOrder;