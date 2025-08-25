"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactMethods = [
  {
    title: "Call Us",
    description: "Speak directly with our team",
    icon: Phone,
    action: "Call Now",
    href: "tel:+919223219419",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  },
  {
    title: "WhatsApp",
    description: "Quick consultation via WhatsApp",
    icon: MessageCircle,
    action: "Message Us",
    href: "https://wa.me/919223219419?text=Hi%20Dr.%20Jaishree,%20I%20would%20like%20to%20book%20a%20consultation",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  },
  {
    title: "Email Us",
    description: "Send us a detailed message",
    icon: Mail,
    action: "Send Email",
    href: "mailto:contactus@skinfiniticlinic.com",
    color: "bg-pastel-pink",
    hoverColor: "hover:bg-pastel-pink/90"
  },
  {
    title: "Book Online",
    description: "Schedule your appointment",
    icon: Calendar,
    action: "Book Now",
    href: "/contact",
    color: "bg-pastel-green",
    hoverColor: "hover:bg-pastel-green/90"
  }
];

const clinicLocations = [
  {
    name: "Skinfinitii (Khar, Mumbai) - Aesthetic Skin and Laser Clinic",
    address: "601–604, Prabhat Chambers (6th Floor), Plot No. 92, S.V. Road, Khar (West), Mumbai – 400052, India",
    phone: "+91 9223219419 / 022-41819000",
    whatsapp: "+91 9223219419",
    email: "contactus@skinfiniticlinic.com",
    hours: "Mon-Sat: 10:30 AM - 7:30 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8347!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b0b0b0b0b0%3A0x0!2sSkinfinitii+Khar!5e0!3m2!1sen!2sin!4v1234567890",
    coordinates: { lat: 19.0596, lng: 72.8347 },
    description: "Our flagship center with all laser facilities. Easily accessible via Linking Road or S.V. Road, near Khar Railway Station (West). Parking available in the building."
  },
  {
    name: "Skinfinitii (Vashi, Navi Mumbai) - Aesthetic Skin and Laser Clinic",
    address: "G-62, Ground Floor, Satra Plaza, Sector-19D, Palm Beach Road, Vashi, Navi Mumbai – 400703, India",
    phone: "+91 9769691957 / 022-42832000",
    whatsapp: "+91 9769691957",
    email: "contactus@skinfiniticlinic.com",
    hours: "Mon-Sat: 10:30 AM - 7:30 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.9989!3d19.0759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b0b0b0b0b0%3A0x0!2sSkinfinitii+Vashi!5e0!3m2!1sen!2sin!4v1234567890",
    coordinates: { lat: 19.0759, lng: 72.9989 },
    description: "Our Navi Mumbai branch offers the same range of services for patients based in Thane/Navi Mumbai. It's in the Satra Plaza mall complex with ample parking."
  }
];

const clinicHours = [
  { day: "Monday", hours: "10:30 AM - 7:30 PM" },
  { day: "Tuesday", hours: "10:30 AM - 7:30 PM" },
  { day: "Wednesday", hours: "10:30 AM - 7:30 PM" },
  { day: "Thursday", hours: "10:30 AM - 7:30 PM" },
  { day: "Friday", hours: "10:30 AM - 7:30 PM" },
  { day: "Saturday", hours: "10:30 AM - 7:30 PM" },
  { day: "Sunday", hours: "Closed (Dr. Jaishree strongly believes Sunday is family time!)" }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <strong>Parking:</strong> Available at Shopper's Stop parking lot (opposite the clinic)
                  </p>
                  <p>
                    <strong>Nearest Metro:</strong> Bandra West Metro Station (10 minutes walk)
                  </p>
                  <p>
                    <strong>Landmark:</strong> Opposite Shopper's Stop, Linking Road
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

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                  Treatment of Interest
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                >
                  <option value="">Select a treatment</option>
                  <option value="botox">Botox Treatment</option>
                  <option value="fillers">Dermal Fillers</option>
                  <option value="liquid-facelift">Liquid Facelift</option>
                  <option value="skin-treatments">Skin Treatments</option>
                  <option value="body-treatments">Body Treatments</option>
                  <option value="bridal-package">Bridal Package</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                placeholder="Tell us about your concerns and what you'd like to achieve..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-red-50 border-t border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-red-700">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <p className="font-medium">
              <strong>Emergency:</strong> For urgent medical concerns, please call your nearest emergency services or visit the nearest hospital.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
