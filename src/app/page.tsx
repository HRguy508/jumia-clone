"use client";

import React from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredCategories = [
  {
    name: "Phones & Tablets",
    image: "https://ug.jumia.is/cms/UG_WK11_TS_PHONES_CATEGORY_FREELINKS_BANNERS-01.png",
    href: "/phones-tablets",
  },
  {
    name: "Electronics",
    image: "https://ug.jumia.is/cms/UG_WK11_TS_PHONES_CATEGORY_FREELINKS_BANNERS-02.png",
    href: "/electronics",
  },
  {
    name: "Home & Office",
    image: "https://ug.jumia.is/cms/UG_WK11_TS_PHONES_CATEGORY_FREELINKS_BANNERS-06.png",
    href: "/home-office",
  },
  {
    name: "Fashion",
    image: "https://ug.jumia.is/cms/UG_WK8_Stock_Up_On_Groceries_Thumbnails_HP-10.png",
    href: "/fashion",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Samsung Galaxy A15",
    image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/5301612/1.jpg",
    price: 699000,
    oldPrice: 799000,
    discount: 13,
    rating: 4.5,
    reviews: 120,
    href: "/product/samsung-galaxy-a15",
  },
  {
    id: 2,
    name: "Tecno Spark 20",
    image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/5309002/1.jpg",
    price: 599000,
    oldPrice: 679000,
    discount: 12,
    rating: 4.2,
    reviews: 86,
    href: "/product/tecno-spark-20",
  },
  {
    id: 3,
    name: "Apple iPhone 13",
    image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4560391/1.jpg",
    price: 2499000,
    oldPrice: 2799000,
    discount: 11,
    rating: 4.8,
    reviews: 210,
    href: "/product/apple-iphone-13",
  },
  {
    id: 4,
    name: "Redmi A2+",
    image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/7279442/1.jpg",
    price: 429000,
    oldPrice: 499000,
    discount: 14,
    rating: 4.1,
    reviews: 65,
    href: "/product/redmi-a2-plus",
  },
];

const dealOfTheDay = [
  {
    id: 5,
    name: "Hisense 43\" Smart TV",
    image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/7055412/1.jpg",
    price: 899000,
    oldPrice: 1199000,
    discount: 25,
    rating: 4.6,
    reviews: 94,
    href: "/product/hisense-43-smart-tv",
  },
  {
    id: 6,
    name: "Saachi Air Fryer",
    image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/135345/1.jpg",
    price: 249000,
    oldPrice: 349000,
    discount: 29,
    rating: 4.3,
    reviews: 127,
    href: "/product/saachi-air-fryer",
  },
  {
    id: 7,
    name: "Smartec Blender",
    image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/8796232/1.jpg",
    price: 129000,
    oldPrice: 179000,
    discount: 28,
    rating: 4.4,
    reviews: 73,
    href: "/product/smartec-blender",
  },
];

export default function Home() {
  // Function to format price with currency
  const formatPrice = (price: number) => {
    return `UGX ${price.toLocaleString()}`;
  };

  return (
    <MainLayout>
      {/* Hero Banner Carousel */}
      <section className="jumia-section">
        <div className="jumia-container py-4">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="h-[384px] w-full bg-primary/5 rounded-md overflow-hidden">
                  <img
                    src="https://ug.jumia.is/cms/Easter_Sale_KV_SX_1168Xfrw384.gif"
                    alt="Easter Sale"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[384px] w-full bg-primary/5 rounded-md overflow-hidden">
                  <img
                    src="https://ug.jumia.is/cms/Samsung_CAT_SX_2_1168X312.jpg"
                    alt="Samsung Deals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[384px] w-full bg-primary/5 rounded-md overflow-hidden">
                  <img
                    src="https://ug.jumia.is/cms/Portable-speakers_CAT_SX_7_1168X312.jpg"
                    alt="Portable Speakers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="jumia-section">
        <div className="jumia-container py-4">
          <h2 className="text-lg font-semibold mb-4">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredCategories.map((category) => (
              <Link key={category.name} href={category.href}>
                <div className="jumia-card p-4 h-full flex flex-col items-center text-center hover:shadow-md transition-all">
                  <div className="mb-2 h-36 w-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Deals */}
      <section className="jumia-section">
        <div className="jumia-container py-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Top Deals</h2>
            <Link href="/top-deals">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                SEE ALL
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={product.href}>
                <div className="jumia-product-card h-full flex flex-col">
                  <div className="relative mb-2">
                    {product.discount > 0 && (
                      <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                        -{product.discount}%
                      </span>
                    )}
                    <div className="h-40 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full max-h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm font-medium mb-1 line-clamp-2">{product.name}</h3>
                    <div className="mt-auto">
                      <div className="font-semibold text-base">{formatPrice(product.price)}</div>
                      {product.oldPrice && (
                        <div className="text-gray-500 text-xs line-through">{formatPrice(product.oldPrice)}</div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="jumia-section bg-white py-6">
        <div className="jumia-container">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Deal of the Day</h2>
              <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">HOT</span>
            </div>
            <Link href="/deal-of-the-day">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                SEE ALL
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dealOfTheDay.map((product) => (
              <Link key={product.id} href={product.href}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="relative">
                      {product.discount > 0 && (
                        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                          -{product.discount}%
                        </span>
                      )}
                      <div className="h-48 flex items-center justify-center p-4 border-b">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full max-h-full w-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
                      <div className="font-semibold text-base">{formatPrice(product.price)}</div>
                      {product.oldPrice && (
                        <div className="text-gray-500 text-xs line-through mb-2">{formatPrice(product.oldPrice)}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Banner */}
      <div className="jumia-container py-4">
        <div className="w-full rounded-md overflow-hidden">
          <img
            src="https://ug.jumia.is/cms/UBL_STICKY_BANNER_1168X56.gif"
            alt="Special Offer"
            className="w-full h-auto"
          />
        </div>
      </div>
    </MainLayout>
  );
}
