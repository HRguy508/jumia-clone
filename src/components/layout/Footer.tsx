"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#313133] text-white pt-10">
      {/* Newsletter section */}
      <div className="jumia-container mb-8">
        <div className="bg-primary/10 rounded-md p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white font-semibold text-lg mb-1">NEW TO JUMIA?</h3>
            <p className="text-white/80 text-sm">Subscribe to our newsletter to get updates on our latest offers!</p>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:w-64 h-10 pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/50"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
            </div>
            <Button className="h-10 bg-primary hover:bg-primary/90 text-white font-medium whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer section */}
      <div className="jumia-container mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase">Need Help?</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/help" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/how-to-shop" className="hover:text-primary">
                  How to Shop on Jumia?
                </Link>
              </li>
              <li>
                <Link href="/shipping-delivery" className="hover:text-primary">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="hover:text-primary">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase">About Jumia</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/jumia-careers" className="hover:text-primary">
                  Jumia Careers
                </Link>
              </li>
              <li>
                <Link href="/jumia-express" className="hover:text-primary">
                  Jumia Express
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase">Make Money with Jumia</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/sell-on-jumia" className="hover:text-primary">
                  Sell on Jumia
                </Link>
              </li>
              <li>
                <Link href="/vendor-hub" className="hover:text-primary">
                  Vendor Hub
                </Link>
              </li>
              <li>
                <Link href="/become-sales-consultant" className="hover:text-primary">
                  Become a Sales Consultant
                </Link>
              </li>
              <li>
                <Link href="/become-logistics-partner" className="hover:text-primary">
                  Become a Logistics Service Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase">Jumia International</h4>
            <ul className="space-y-2 text-white/70 text-sm grid grid-cols-2">
              <li>
                <Link href="https://www.jumia.com.ng" className="hover:text-primary">
                  Nigeria
                </Link>
              </li>
              <li>
                <Link href="https://www.jumia.co.ke" className="hover:text-primary">
                  Kenya
                </Link>
              </li>
              <li>
                <Link href="https://www.jumia.com.gh" className="hover:text-primary">
                  Ghana
                </Link>
              </li>
              <li>
                <Link href="https://www.jumia.ci" className="hover:text-primary">
                  Ivory Coast
                </Link>
              </li>
              <li>
                <Link href="https://www.jumia.com.eg" className="hover:text-primary">
                  Egypt
                </Link>
              </li>
              <li>
                <Link href="https://www.jumia.ma" className="hover:text-primary">
                  Morocco
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social media and payment methods */}
      <div className="jumia-container mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h4 className="font-semibold text-sm mb-3">JOIN US ON</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/jumiaUganda" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/jumiaUganda" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com/jumiaUganda" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com/jumiaUganda" className="hover:text-primary">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">PAYMENT METHODS</h4>
            <div className="flex space-x-3">
              <div className="bg-white/10 h-8 w-12 rounded flex items-center justify-center">
                <span className="text-xs">Visa</span>
              </div>
              <div className="bg-white/10 h-8 w-12 rounded flex items-center justify-center">
                <span className="text-xs">MTN</span>
              </div>
              <div className="bg-white/10 h-8 w-12 rounded flex items-center justify-center">
                <span className="text-xs">Airtel</span>
              </div>
              <div className="bg-white/10 h-8 w-12 rounded flex items-center justify-center">
                <span className="text-xs">Cash</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-[#242425] py-3">
        <div className="jumia-container text-center text-white/50 text-xs">
          &copy; {new Date().getFullYear()} Jumia Uganda Clone - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
