"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkpink  text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/img/asuroo-logo.png"
                alt="Asuroo Logo"
                width={170}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-m leading-relaxed">
              Insurance without the same old thing. Exseg is here to reshape the corporate insurance market in Brazil. We offer personalized service that&apos;s closer to each client.
            </p>
          </div>

          {/* Insurance */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">Products</h3>
            <ul className="space-y-3">
              {[
                'Private Car Insurance',
                'Commercial Car Insurance',
                'PHV Insurance',
                'Maid Insurance',
                'Motorcycle Insurance',
                'Travel Insurance',
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors text-m leading-relaxed block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">About Us</h3>
            <ul className="space-y-3">
              {[
                'Our Mission & Vision',
                'Blog',
                'Media',
                
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors text-m leading-relaxed block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Exseg */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">Useful Links</h3>
            <ul className="space-y-3">
              {[
                'Claim',
                'Terms of Use',
                'Privacy Policy',
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors text-m leading-relaxed block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <Link 
                  href="mailto:enquiry@asuroo.com" 
                  className="text-gray-300 hover:text-white transition-colors text-m block"
                >
                  enquiry@asuroo.com
                </Link>
              </div>
              <div>
                <Link 
                  href="tel:+552721250400" 
                  className="text-gray-300 hover:text-white transition-colors text-m block"
                >
                  +55 (27) 2125-0400
                </Link>
              </div>
            </div>

            {/* Share */}
            <div className="pt-4">
              <h4 className="text-white text-lg font-semibold mb-4">Social Media </h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
                  { icon: Send, href: '#', label: 'Telegram' }
                ].map(({ icon: Icon, href, label }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
       <div className="mt-12 pt-8 border-t border-white/10">
  {/* Row 1 - Disclaimer */}
  <div className="mb-6">
    <p className="text-gray-400 text-xs md:text-sm text-center  mx-auto leading-relaxed text-justify">
      ASUROO Pte. LTD., a registered Insurance Broker licensed by the Monetary Authority of Singapore (MAS), to promote and support the growth and development of insurance industry in Singapore. ASUROO was designed for a good social purpose, to create a rewarding community. ASUROO takes a slice of the commission to operate the business and give-back the rest to users as Cashback or Instant Commission Rebate. The use of ASUROO Website and services is entirely voluntary but if decided to use www.asuroo.com (&quot;ASUROO Website&quot;) or carrying out a transaction on ASUROO Website, users are demeed to have agreed with ASUROO&apos;s Terms of use and Privacy Policy. All insurance products and related transactions on ASUROO Website are arranged and admistered by ASUROO Pte. Ltd. a business entity legally registered in the Republic of Singapore with UEN: 202144168H
    </p>
  </div>

  {/* Row 2 - Copy + Logo */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-gray-400 text-sm text-center md:text-left">
      © {new Date().getFullYear()} Asuroo. All rights reserved.
    </p>

    {/* Logo on the right */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/assets/img/sectigo.png"
        alt="sectigo logo"
        className="h-6 md:h-8 w-auto"
      />
    </div>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
