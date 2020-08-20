export interface AppState {
    productsList: Product[],
    storesList: ProductStore[]
}

export interface Product {
    id: number,
    name: string,
    storeName: string,
    price: number,
    isRecieved: boolean,
    deliveryDate: number
}

export interface ProductStore {
    id: number,
    name: string,
    orders: number
}