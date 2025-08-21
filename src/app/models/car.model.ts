export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}
