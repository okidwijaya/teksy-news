export interface ProductPosType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: 'all' | 'foods' | 'beverage' | 'other';
}

export interface CartItemPosType extends ProductPosType {
  quantity: number;
}