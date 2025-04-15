"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Share2,
  Star,
  Truck,
  ShieldCheck,
  ChevronRight,
  Minus,
  Plus,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock product data (in a real app, we would fetch from API)
const mockProduct = {
  id: "1",
  name: "Samsung Galaxy A15",
  brand: "Samsung",
  sku: "SA-A15-4GB-128GB",
  price: 699000,
  oldPrice: 799000,
  discount: 13,
  rating: 4.5,
  reviews: 120,
  stockStatus: "In Stock",
  quantity: 50,
  description: "Experience more with the new Samsung Galaxy A15. This smartphone features a 6.5\" Super AMOLED display, 50MP main camera, 4GB RAM, and 128GB storage. Powered by a 5000mAh battery with 25W fast charging and running on Android 13.",
  specifications: {
    "Display": "6.5\" Super AMOLED, 90Hz",
    "Processor": "MediaTek Helio G99",
    "RAM": "4GB",
    "Storage": "128GB expandable",
    "Main Camera": "50MP + 5MP + 2MP",
    "Selfie Camera": "13MP",
    "Battery": "5000mAh",
    "Charging": "25W Fast Charging",
    "OS": "Android 13",
    "Connectivity": "4G LTE, Dual SIM, Wi-Fi, Bluetooth 5.2",
    "Dimensions": "160.1 x 76.8 x 8.4 mm"
  },
  features: [
    "6.5\" Super AMOLED display",
    "50MP triple camera system",
    "5000mAh battery with 25W fast charging",
    "Android 13 with One UI",
    "4GB RAM + 128GB storage"
  ],
  images: [
    "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/5301612/1.jpg",
    "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/5301612/2.jpg",
    "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/5301612/3.jpg",
    "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/5301612/4.jpg"
  ],
  category: "Smartphones",
  relatedProducts: [
    {
      id: "2",
      name: "Tecno Spark 20",
      price: 599000,
      oldPrice: 679000,
      discount: 12,
      image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/5309002/1.jpg",
    },
    {
      id: "3",
      name: "Redmi A2+",
      price: 429000,
      oldPrice: 499000,
      discount: 14,
      image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/7279442/1.jpg",
    },
    {
      id: "4",
      name: "Samsung Galaxy A14",
      price: 649000,
      oldPrice: 729000,
      discount: 11,
      image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4560391/1.jpg",
    }
  ]
};

export default function ProductPage() {
  const [product, setProduct] = useState(mockProduct);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const id = params.id;

  // In a real app, we would fetch the product data from the API
  // Example:
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(`/api/products/${id}`);
  //       const data = await response.json();
  //       if (data.success) {
  //         setProduct(data.product);
  //         setMainImage(data.product.images[0]);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching product:', error);
  //     }
  //   };
  //
  //   fetchProduct();
  // }, [id]);

  // Format price with currency
  const formatPrice = (price: number) => {
    return `UGX ${price.toLocaleString()}`;
  };

  // Handle quantity change
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    // In a real app, we would add the product to the cart
    console.log(`Adding ${quantity} of ${product.name} to cart`);
    // Show toast notification
    alert(`${quantity} ${product.name} added to cart!`);
  };

  // Handle buy now
  const handleBuyNow = () => {
    // In a real app, we would add the product to the cart and redirect to checkout
    console.log(`Buying ${quantity} of ${product.name}`);
    // Redirect to checkout
    // window.location.href = '/checkout';
  };

  return (
    <MainLayout>
      <div className="jumia-container py-4">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/phones-tablets" className="hover:text-primary">Phones & Tablets</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/smartphones" className="hover:text-primary">Smartphones</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-primary">{product.name}</span>
        </nav>

        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Product Images */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-md border p-4">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary text-white text-xs px-2 py-1 rounded-sm">
                  -{product.discount}%
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center h-64 mb-4">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`border rounded-md p-2 cursor-pointer ${mainImage === image ? 'border-primary' : ''}`}
                    onClick={() => setMainImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="h-16 w-auto mx-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-md border p-4 mb-4">
              <div className="mb-4">
                <h1 className="text-xl font-semibold mb-1">{product.name}</h1>
                <div className="flex items-center text-sm">
                  <span className="flex items-center text-yellow-500 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 text-gray-300 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </span>
                  <span className="text-gray-500">({product.reviews} Reviews)</span>
                  <div className="mx-2">|</div>
                  <Link href="#" className="text-primary hover:underline">
                    Write a review
                  </Link>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-600">Brand: </span>
                  <Link href={`/brand/${product.brand}`} className="text-sm text-primary ml-1 hover:underline">
                    {product.brand}
                  </Link>
                  <div className="mx-2">|</div>
                  <span className="text-sm text-gray-600">SKU: {product.sku}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-bold text-primary">{formatPrice(product.price)}</div>
                {product.oldPrice && (
                  <div className="flex items-center">
                    <span className="text-gray-500 line-through mr-2">{formatPrice(product.oldPrice)}</span>
                    <span className="text-sm bg-primary/10 text-primary px-1">-{product.discount}%</span>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <div className="text-sm font-medium">Delivery</div>
                    <div className="text-xs text-gray-500">Kampala - 1 to 3 days</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <div className="text-sm font-medium">Warranty</div>
                    <div className="text-xs text-gray-500">12 Months Warranty</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <div className="text-sm font-medium text-green-500">
                    {product.stockStatus}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Quantity</div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-r-none"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="h-10 w-16 border-y flex items-center justify-center">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-l-none"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.quantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90 h-12"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </Button>
                <Button
                  className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 h-12"
                  onClick={handleBuyNow}
                >
                  BUY NOW
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-md border">
              <Tabs defaultValue="description">
                <TabsList className="w-full grid grid-cols-3 rounded-none border-b h-12">
                  <TabsTrigger value="description" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="specifications" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="features" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                    Features
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Product Description</h2>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="specifications" className="p-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Specifications</h2>
                    <div className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b">
                          <div className="text-gray-600">{key}</div>
                          <div>{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="p-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">You may also like</h2>
            <Link href="/smartphones">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                SEE ALL
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="relative">
                      {relatedProduct.discount > 0 && (
                        <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                          -{relatedProduct.discount}%
                        </span>
                      )}
                      <div className="h-40 flex items-center justify-center p-4 border-b">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="h-full max-h-full w-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <div className="font-semibold text-base">{formatPrice(relatedProduct.price)}</div>
                      {relatedProduct.oldPrice && (
                        <div className="text-gray-500 text-xs line-through">{formatPrice(relatedProduct.oldPrice)}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
