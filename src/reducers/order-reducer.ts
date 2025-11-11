import type { MenuItem, OrderItem } from "../types";
import { toast } from "sonner";

export type OrderActions =
    { type: 'addItem', payload: { item: MenuItem } } |
    { type: 'removeItem', payload: { id: MenuItem['id'] } } |
    { type: 'sendOrder' } |
    { type: ' add-tip', payload: { value: number } }


export type OrderState = {
    order: OrderItem[]
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}




export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {


    if (action.type === 'addItem') {
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id);

        let order: OrderItem[] = [];

        if (itemExist) {
            order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
            toast.success(`Se ha agregado ${action.payload.item.name} nuevamente a la orden`)
        } else {
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
            toast.success(`${action.payload.item.name} se ha agregado a la orden correctamente`)
            order = [...state.order, newItem]
        }

        return {
            ...state,
            order
        }
    }

    if (action.type === 'removeItem') {

        //El nuevo arreglo se almacena en una variable para obtener su valor actualizado despues de usar el filter
        const newOrder: OrderItem[] = state.order.filter(order => order.id !== action.payload.id)

        let tip = state.tip;

        //Ya con el arreglo actualizado se puede obtener su cantidad
        if (newOrder.length === 0) {
            tip = 0 //Se resetea el estado de la propina
        }

        toast.success('Producto eliminado correctamente de la orden')

        return {
            ...state,
            order: newOrder,
            tip
        }
    }


    if (action.type === 'sendOrder') {

        toast.success('Orden registrada correctamente')

        return {
            ...state,
            order: [],
            tip: 0
        }
    }

    if (action.type === ' add-tip') {

        return {
            ...state,
            tip: action.payload.value
        }
    }

    return state;

}