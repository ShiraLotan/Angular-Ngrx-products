export interface AppState {
    productsList: Product[],
}

export interface Product {
    id: number,
    name: string,
    storeName: string,
    price: number,
    isRecieved: boolean,
    deliveryDate: Date
}

export interface ProductStore {
    name: string,
    sum: number 
}