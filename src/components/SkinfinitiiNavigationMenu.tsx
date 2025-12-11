"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Sparkles, Heart, User, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const treatmentCategories = [
  {
    title: "Anti-Ageing",
    href: "/treatments?category=anti-ageing",
    description: "Comprehensive anti-ageing solutions",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/1.webp"
  },
  {
    title: "Acne & Acne Scars",
    href: "/treatments?category=acne-acne-scars",
    description: "Effective treatments for active acne and scars",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/acnescars/1.webp"
  },
  {
    title: "Pigmentation",
    href: "/treatments?category=pigmentation",
    description: "Advanced solutions for uneven skin tone",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/1.webp"
  },
  {
    title: "Skin & Glow Treatments",
    href: "/treatments?category=skin-glow-treatments",
    description: "Treatments for radiant, glowing skin",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/skintreatments/skintreatments.webp"
  },
  {
    title: "Hair Treatments",
    href: "/treatments?category=hair-treatments",
    description: "Hair restoration and removal solutions",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/1.webp"
  },
  {
    title: "Intimate Area Treatments",
    href: "/treatments?category=intimate-area-treatments",
    description: "Specialized intimate area treatments",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bodytreatments/bodytreatments.webp"
  },
  {
    title: "Body Contouring",
    href: "/treatments?category=body-contouring",
    description: "Non-surgical body shaping and fat reduction",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/1.webp"
  }
]

export function SkinfinitiiNavigationMenu() {
  return (
    <NavigationMenu className="max-w-none w-full">
      <NavigationMenuList className="space-x-2 md:space-x-4 lg:space-x-6 justify-center">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base">
            Treatments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[900px] lg:w-[1100px] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
              <ul className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-4">
                {treatmentCategories.map((category) => (
                  <li key={category.title} className="group">
                    <Link
                      href={category.href}
                      className="relative flex h-48 w-full select-none flex-col justify-end rounded-xl overflow-hidden no-underline outline-none focus:shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #fce7f3 0%, #d1fae5 100%)';
                          }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>
                      </div>
                      
                      {/* Content Overlay */}
                      <div className="relative z-10 p-5 text-white">
                        <h3 className="text-lg font-bold mb-1 drop-shadow-lg">
                          {category.title}
                        </h3>
                        <p className="text-sm text-white/90 drop-shadow-md line-clamp-2">
                          {category.description}
                        </p>
                        <div className="mt-3 flex items-center text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Explore</span>
                          <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 bg-gray-50 p-4">
                <Link
                  href="/treatments"
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-pastel-pink hover:bg-white rounded-lg transition-all duration-200"
                >
                  View All Treatments
                  <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/team" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              Team
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/testimonials" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              Testimonials
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/media" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              Media
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/books" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              Books
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/training" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              Training
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors text-sm md:text-base"
            )}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
}
