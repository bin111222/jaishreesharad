import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Youtube, Facebook, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  { name: "Bridal Care Prep", href: "/treatments/bridal" },
  { name: "Exosomes", href: "/treatments/exosomes" },
  { name: "Endolift", href: "/treatments/endolift" },
  { name: "Microlift", href: "/treatments/microlift" },
  { name: "Non Surgical Skin Tightening", href: "/treatments/non-surgical-skin-tightening" },
  { name: "Hydrafacial", href: "/treatments/hydrafacial" },
  { name: "Skin Treatments", href: "/treatments/skin" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/drjaishreesharad", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/@drjaishreesharad", icon: Youtube },
  { name: "Facebook", href: "https://facebook.com/drjaishreesharad", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/drjaishreesharad", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/drjaishreesharad", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-25 h-24 flex items-center justify-center">
                <img 
                  src="/Translogo.png" 
                  alt="The Jaishree Sharad Clinic" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Brand Name */}
            <div className="mb-6">
              <p className="text-sm text-gray-700 font-semibold">Skinfiniti</p>
              <p className="text-xs text-gray-500 italic">Proprietor Dr Jaishree Sharad Sharma</p>
            </div>
            
            <div className="space-y-6">
              {/* Khar Clinic */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pastel-pink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Khar Clinic</p>
                    <p className="text-xs text-gray-500">601-604, Prabhat Chambers, S V Road, Khar (West), Mumbai 400 052</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-3">
                    <Phone className="w-4 h-4 text-pastel-pink flex-shrink-0 mt-1" />
                    <a href="tel:+912242832000" className="text-xs text-gray-600 hover:text-pastel-pink transition-colors">
                      022-42832000 (Landline)
                    </a>
                  </div>
                  <div className="flex items-baseline space-x-3">
                    <Phone className="w-4 h-4 text-pastel-pink flex-shrink-0 mt-1" />
                    <a href="tel:+919223219419" className="text-xs text-gray-600 hover:text-pastel-pink transition-colors">
                      +91 92 2321 9419 (Mobile)
                    </a>
                  </div>
                </div>
              </div>

              {/* Vashi Clinic */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pastel-pink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Vashi Clinic</p>
                    <p className="text-xs text-gray-500">105, Satra Plaza, Palm Beach Road, above HDFC Bank, Vashi, Navi Mumbai, Thane, Maharashtra, 400703</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-3">
                    <Phone className="w-4 h-4 text-pastel-pink flex-shrink-0 mt-1" />
                    <a href="tel:+912241819000" className="text-xs text-gray-600 hover:text-pastel-pink transition-colors">
                      022-41819000 (Landline)
                    </a>
                  </div>
                  <div className="flex items-baseline space-x-3">
                    <Phone className="w-4 h-4 text-pastel-pink flex-shrink-0 mt-1" />
                    <a href="tel:+919769691957" className="text-xs text-gray-600 hover:text-pastel-pink transition-colors">
                      +91 97 6969 1957 (Mobile)
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-3 pt-2">
                <div className="flex items-baseline space-x-3">
                  <MessageCircle className="w-5 h-5 text-pastel-pink flex-shrink-0 mt-1" />
                  <a href="https://wa.me/919769691952" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-pastel-pink transition-colors">
                    WhatsApp Helpline: +91 97 6969 1952
                  </a>
                </div>
                
                <div className="flex items-baseline space-x-3">
                  <Mail className="w-5 h-5 text-pastel-pink flex-shrink-0 mt-1" />
                  <a href="mailto:doctorjaishree@gmail.com" className="text-sm text-gray-700 hover:text-pastel-pink transition-colors">
                    doctorjaishree@gmail.com
                  </a>
                </div>
                
                <div className="flex items-baseline space-x-3">
                  <Instagram className="w-5 h-5 text-pastel-pink flex-shrink-0 mt-1" />
                  <a href="https://instagram.com/drjaishreesharad" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-pastel-pink transition-colors">
                    @drjaishreesharad
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/treatments" className="text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200">
                  Injectables
                </Link>
              </li>
              <li>
                <Link href="/treatments/skin" className="text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200">
                  Skin Treatments
                </Link>
              </li>
              <li>
                <Link href="/treatments/body" className="text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200">
                  Body Treatments
                </Link>
              </li>
              <li>
                <Link href="/treatments/bridal" className="text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200">
                  Bridal Care
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200">
                  Books & Publications
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200">
                  Media & Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-gray-800 mb-4">Follow Us</h4>
            
            {/* Social Links */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">Follow us on social media</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pastel-pink hover:text-white transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a
                href="https://wa.me/919769691952?text=Hi%20Dr.%20Jaishree,%20I%20would%20like%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-pastel-green text-white font-medium rounded-lg hover:bg-pastel-green/80 transition-colors duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} The Jaishree Sharad Clinic. All rights reserved.
            </div>
          </div>
          
          {/* Design Credit */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Designed with ❤️ by{" "}
              <a 
                href="https://1942studio.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pastel-pink hover:text-pastel-green transition-colors font-medium"
              >
                1942 Studio
              </a>
            </p>
          </div>
          
          {/* Emergency Note */}
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700 text-center">
              <strong>Important:</strong> For urgent medical concerns, please call your nearest emergency services or visit the nearest hospital.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
