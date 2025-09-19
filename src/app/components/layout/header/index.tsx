'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, User } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors">
              ASUROO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative group">
                <div className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200 cursor-pointer">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </div>
                
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div className="py-1">
                    <Link
                      href="/products/car-insurance"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                    >
                      Car Insurance
                    </Link>
                    <Link
                      href="/products/travel-insurance"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                    >
                      Travel Insurance
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                href="/about" 
                className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About Us
              </Link>
              
              <Link 
                href="/media" 
                className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Media
              </Link>
              
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
              
              {/* Login Button */}
              <Link 
                href="/login" 
                className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-pink-600 p-2 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="block px-3 py-2">
              <div className="text-base font-medium text-gray-700 mb-2">Products</div>
              <div className="pl-4 space-y-1">
                <Link
                  href="/products/car-insurance"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Car Insurance
                </Link>
                <Link
                  href="/products/travel-insurance"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Travel Insurance
                </Link>
              </div>
            </div>
            
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link
              href="/media"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Media
            </Link>
            
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            <Link
              href="/login"
              className="block mx-3 my-2 px-4 py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-pink-700 transition-colors duration-200 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}