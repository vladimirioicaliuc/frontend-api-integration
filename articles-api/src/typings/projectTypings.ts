export type TArticles = {
    id: string;
    imageUrl: string;
    price: number;
    title: string;
    quantity: number;
};

export const DefaultAdminForm: TArticles = {
    title: "",
    price: 0,
    imageUrl: "",
    quantity: 0,
    id: "",
};