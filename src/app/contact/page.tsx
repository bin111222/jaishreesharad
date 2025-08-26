"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    title: "Call Us",
    description: "Speak directly with our team",
    icon: Phone,
    action: "Call Now",
    href: "tel:+912241819000",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  },
  {
    title: "WhatsApp",
    description: "Quick consultation via WhatsApp",
    icon: MessageCircle,
    action: "Message Us",
    href: "https://wa.me/919769691952?text=Hi%20Dr.%20Jaishree,%20I%20would%20like%20to%20book%20a%20consultation",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  }
];

const clinicLocations = [
  {
    name: "Skinfinitii (Khar, Mumbai) - Aesthetic Skin and Laser Clinic",
    address: "601-604, Prabhat Chambers, S V Road, Khar (West), Mumbai 400 052",
    phone: "+91 22 4181 9000",
    whatsapp: "+91 97 6969 1952",
    email: "doctorjaishree@gmail.com",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8945230045947!2d72.83458327611825!3d19.068374582134588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e4b3f237c9%3A0x234264c43c5c5224!2sSkinfinitii!5e0!3m2!1sen!2sin!4v1756227180953!5m2!1sen!2sin",
    coordinates: { lat: 19.0596, lng: 72.8347 },
    description: "Our flagship center with all laser facilities. Easily accessible via S.V. Road, near Khar Railway Station (West). Parking available in the building."
  },
  {
    name: "Skinfinitii (Vashi, Navi Mumbai) - Aesthetic Skin and Laser Clinic",
    address: "G-62, Satra Plaza, Palm Beach Road, Sector 19D, Vashi, Navi Mumbai 400 703",
    phone: "+91 22 4283 2000",
    whatsapp: "+91 97 6969 1952",
    email: "doctorjaishree@gmail.com",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5496657326667!2d73.0038139761185!3d19.083527582122688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c136b2c080cb%3A0x25e3032462aea8b4!2sSkinfinitii!5e0!3m2!1sen!2sin!4v1756227153059!5m2!1sen!2sin",
    coordinates: { lat: 19.0759, lng: 72.9989 },
    description: "Our Navi Mumbai branch offers the same range of services for patients based in Thane/Navi Mumbai. It's in the Satra Plaza mall complex with ample parking."
  }
];

const clinicHours = [
  { day: "Monday - Saturday", hours: "10:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function ContactPage() {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your skin? Book your consultation with Dr. Jaishree Sharad 
              and take the first step towards beautiful, healthy skin.
            </p>
          </motion.div>
          
          {/* Clinic Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Khar Clinic */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/clinic/kharclinic.webp"
                  alt="Skinfinitii Khar Clinic - Aesthetic Skin and Laser Clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-gray-800 font-semibold text-sm">Khar Clinic</span>
                </div>
              </div>
              
              {/* Vashi Clinic */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/clinic/vashiclinic.webp"
                  alt="Skinfinitii Vashi Clinic - Aesthetic Skin and Laser Clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-gray-800 font-semibold text-sm">Vashi Clinic</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600">
              Choose the most convenient way to reach us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block group"
                >
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {method.description}
                  </p>
                  <span className={`inline-flex items-center space-x-2 px-4 py-2 ${method.color} text-white font-medium rounded-full ${method.hoverColor} transition-colors duration-200`}>
                    <span>{method.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Clinic Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Clinic Locations */}
              <div className="space-y-8">
                <h2 className="font-display text-3xl font-bold text-gray-800 mb-6">
                  Our Clinics
                </h2>
                
                {clinicLocations.map((clinic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-gray-50 rounded-xl p-6 space-y-4"
                  >
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">{clinic.name}</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-pastel-pink flex-shrink-0 mt-0.5" />
                          <p className="text-gray-600 text-sm">{clinic.address}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-pastel-pink flex-shrink-0" />
                          <a href={`tel:${clinic.phone}`} className="text-gray-600 hover:text-pastel-pink transition-colors text-sm">
                            {clinic.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-5 h-5 text-pastel-pink flex-shrink-0" />
                          <a href={`https://wa.me/${clinic.whatsapp.replace(/\s/g, '')}?text=Hi%20Dr.%20Jaishree,%20I%20would%20like%20to%20book%20a%20consultation%20at%20${clinic.name}`} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-gray-600 hover:text-pastel-pink transition-colors text-sm">
                            WhatsApp: {clinic.whatsapp}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-pastel-pink flex-shrink-0" />
                          <a href={`mailto:${clinic.email}`} className="text-gray-600 hover:text-pastel-pink transition-colors text-sm">
                            {clinic.email}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-pastel-pink flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{clinic.hours}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Clinic Hours */}
              <div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                  Clinic Hours
                </h3>
                <div className="space-y-2">
                  {clinicHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-800">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Parking & Directions */}
              <div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                  Parking & Directions
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Khar Branch:</strong> Parking available in Prabhat Chambers building
                  </p>
                  <p>
                    <strong>Vashi Branch:</strong> Ample parking available in Satra Plaza mall complex
                  </p>
                 
                  <p>
                    <strong>Landmarks:</strong> S.V. Road for Khar, Palm Beach Road for Vashi
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Maps Section */}
            <div className="space-y-8">
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-6">
                Find Us
              </h3>
              
              {clinicLocations.map((clinic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="space-y-4"
                >
                  <h4 className="font-semibold text-lg text-gray-800">{clinic.name}</h4>
                  <div className="bg-gray-200 rounded-2xl overflow-hidden h-80">
                    <iframe
                      src={clinic.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map for ${clinic.name}`}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-pastel-pink text-white font-medium rounded-lg hover:bg-pastel-pink/90 transition-colors"
                    >
                      <span>Open in Maps</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${clinic.whatsapp.replace(/\s/g, '')}?text=Hi%20Dr.%20Jaishree,%20I%20would%20like%20to%20book%20a%20consultation%20at%20${clinic.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Emergency Notice */}
   
    </Layout>
  );
}
