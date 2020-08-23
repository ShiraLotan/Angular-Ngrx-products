export interface AppState {
    productsList: Product[],
}

export interface Product {
    id: number,
    name: string,
    storeName: string,
    price: number,
    isRecieved: boolean,
    deliveryDate: Date | number
}

export interface ProductStore {
    name: string,
    sum: number 
}