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
    title: "Injectables",
    treatments: [
      { name: "Botox", href: "/treatments/botox" },
      { name: "Dermal Fillers", href: "/treatments/fillers" },
      { name: "Liquid Facelift", href: "/treatments/liquid-facelift" },
      { name: "Thread Lifts", href: "/treatments/thread-lifts" },
      { name: "Non-Surgical Nose", href: "/treatments/non-surgical-nose" },
      { name: "Skin Boosters", href: "/treatments/skin-boosters" },
      { name: "Facial Contouring", href: "/treatments/facial-contouring" },
    ]
  },
  {
    title: "Skin Treatments",
    treatments: [
      { name: "Chemical Peels", href: "/treatments/chemical-peels" },
      { name: "Microdermabrasion", href: "/treatments/microdermabrasion" },
      { name: "Pigmentation", href: "/treatments/pigmentation" },
      { name: "Acne Scars", href: "/treatments/acne-scars" },
      { name: "Laser Treatments", href: "/treatments/laser-treatments" },
      { name: "Anti-Aging", href: "/treatments/anti-aging" },
      { name: "Skin Treatments", href: "/treatments/skin" },
    ]
  },
  {
    title: "Body Contouring",
    treatments: [
      { name: "Cryolipolysis", href: "/treatments/cryolipolysis" },
      { name: "Exilis", href: "/treatments/exilis" },
      { name: "EndyMed", href: "/treatments/endymed" },
      { name: "HIFU", href: "/treatments/hifu" },
      { name: "Body Treatments", href: "/treatments/body" },
    ]
  },
  {
    title: "Specialized",
    treatments: [
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
      { name: "Bridal Care", href: "/treatments/bridal" },
    ]
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
            <div className="w-[800px] lg:w-[900px] bg-white rounded-lg shadow-lg">
              <ul className="grid gap-3 p-6 md:grid-cols-2 lg:grid-cols-4">
                {treatmentCategories.map((category) => (
                  <li key={category.title} className="row-span-3">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pastel-pink/10 to-pastel-green/10 p-6 no-underline outline-none focus:shadow-md hover:from-pastel-pink/20 hover:to-pastel-green/20 transition-all">
                      <div className="mb-2 mt-4 text-lg font-medium text-gray-800">
                        {category.title}
                      </div>
                      <div className="space-y-2">
                        {category.treatments.map((treatment) => (
                          <Link
                            key={treatment.name}
                            href={treatment.href}
                            className="block text-sm text-gray-700 hover:text-pastel-pink transition-colors"
                          >
                            {treatment.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 p-4">
                <Link
                  href="/treatments"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-pastel-pink transition-colors"
                >
                  View All Treatments →
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
