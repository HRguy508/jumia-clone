"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Search,
  User,
  Heart,
  HelpCircle,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const categories = [
  {
    name: "Phones & Tablets",
    href: "/phones-tablets",
    subcategories: [
      { name: "Mobile Phones", href: "/mobile-phones" },
      { name: "Smartphones", href: "/smartphones" },
      { name: "Feature Phones", href: "/feature-phones" },
      { name: "Tablets", href: "/tablets" },
    ],
  },
  {
    name: "TVs & Audio",
    href: "/electronics",
    subcategories: [
      { name: "Televisions", href: "/televisions" },
      { name: "Smart TVs", href: "/smart-tvs" },
      { name: "Audio", href: "/audio" },
    ],
  },
  {
    name: "Appliances",
    href: "/appliances",
    subcategories: [
      { name: "Large Appliances", href: "/large-appliances" },
      { name: "Small Appliances", href: "/small-appliances" },
      { name: "Kitchen Appliances", href: "/kitchen-appliances" },
    ],
  },
  {
    name: "Computing",
    href: "/computing",
    subcategories: [
      { name: "Laptops", href: "/laptops" },
      { name: "Desktop PCs", href: "/desktops" },
      { name: "Computer Accessories", href: "/computer-accessories" },
    ],
  },
  {
    name: "Health & Beauty",
    href: "/health-beauty",
    subcategories: [
      { name: "Makeup", href: "/makeup" },
      { name: "Fragrances", href: "/fragrances" },
      { name: "Hair Care", href: "/hair-care" },
    ],
  },
  {
    name: "Home & Office",
    href: "/home-office",
    subcategories: [
      { name: "Furniture", href: "/furniture" },
      { name: "Home Decor", href: "/home-decor" },
      { name: "Kitchen & Dining", href: "/kitchen-dining" },
    ],
  },
  {
    name: "Supermarket",
    href: "/supermarket",
    subcategories: [
      { name: "Food Cupboard", href: "/food-cupboard" },
      { name: "Beverages", href: "/beverages" },
      { name: "Household Supplies", href: "/household-supplies" },
    ],
  },
];

export function Header() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#313133] text-white">
        <div className="jumia-container py-2 flex justify-between items-center">
          <div className="flex space-x-3 text-xs">
            <Link href="/" className="hidden md:flex items-center">
              <img
                src="/jumia-logo.png"
                alt="Jumia"
                className="h-6 w-auto"
              />
            </Link>
            <Link href="/sell-on-jumia" className="hover:text-primary">
              Sell on Jumia
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <Link href="/help" className="flex items-center hover:text-primary">
              <HelpCircle className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Help</span>
            </Link>
            <Link href="/account/login" className="flex items-center hover:text-primary">
              <User className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Account</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b shadow-sm">
        <div className="jumia-container py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <div className="bg-primary p-4 flex justify-between items-center">
                  <h2 className="text-white font-semibold">CATEGORIES</h2>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="overflow-auto h-full py-2">
                  {categories.map((category) => (
                    <div key={category.name} className="px-4 py-3 border-b">
                      <Link
                        href={category.href}
                        className="font-medium flex justify-between items-center"
                      >
                        {category.name}
                        <ChevronDown className="h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo for desktop */}
            <Link href="/" className="hidden md:block mr-6">
              <img
                src="/jumia-logo.png"
                alt="Jumia"
                className="h-8 w-auto"
              />
            </Link>

            {/* Search */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full max-w-3xl">
                <Input
                  type="search"
                  placeholder="Search products, brands and categories"
                  className="w-full h-10 pl-4 pr-12 rounded-sm border-primary"
                />
                <Button
                  className="absolute right-0 top-0 h-10 px-4 bg-primary hover:bg-primary/90 rounded-l-none rounded-r-sm"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center ml-4 space-x-6">
              <Link
                href="/account"
                className="hidden md:flex flex-col items-center text-sm hover:text-primary"
              >
                <User className="h-6 w-6" />
                <span>Account</span>
              </Link>
              <Link
                href="/wishlist"
                className="hidden md:flex flex-col items-center text-sm hover:text-primary"
              >
                <Heart className="h-6 w-6" />
                <span>Saved</span>
              </Link>
              <Link
                href="/cart"
                className="flex flex-col items-center text-sm hover:text-primary"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="bg-white border-b shadow-sm hidden md:block">
        <div className="jumia-container">
          <nav className="flex">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setOpenCategory(category.name)}
                onMouseLeave={() => setOpenCategory(null)}
              >
                <Link
                  href={category.href}
                  className={`jumia-nav-item px-3 py-3 text-sm font-medium flex items-center ${
                    openCategory === category.name ? "text-primary" : ""
                  }`}
                >
                  {category.name}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Link>
                {openCategory === category.name && (
                  <div className="absolute left-0 mt-0 w-64 bg-white border shadow-lg z-50">
                    <div className="py-2">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.name}
                          href={subcategory.href}
                          className="jumia-nav-item block px-4 py-2 text-sm"
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
