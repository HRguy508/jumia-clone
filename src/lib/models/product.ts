import mongoose, { Schema, type Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  sku: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  quantity: number;
  images: string[];
  category: string;
  subCategory?: string;
  brand: string;
  features?: string[];
  specifications?: Record<string, string>;
  rating?: number;
  reviews?: number;
  isTopSeller: boolean;
  isNewArrival: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true, index: true },
    sku: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    discount: { type: Number },
    quantity: { type: Number, required: true, default: 0 },
    images: { type: [String], required: true },
    category: { type: String, required: true, index: true },
    subCategory: { type: String, index: true },
    brand: { type: String, required: true, index: true },
    features: { type: [String] },
    specifications: { type: Map, of: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    isTopSeller: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Calculate discount before saving if oldPrice exists
ProductSchema.pre('save', function(next) {
  const product = this as IProduct;
  if (product.oldPrice && product.oldPrice > product.price) {
    product.discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }
  next();
});

// Create the model
export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
