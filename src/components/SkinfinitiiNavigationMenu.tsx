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
    ]
  },
  {
    title: "Skin Treatments",
    treatments: [
      { name: "Chemical Peels", href: "/treatments/chemical-peels" },
      { name: "Microdermabrasion", href: "/treatments/microdermabrasion" },
      { name: "Pigmentation", href: "/treatments/pigmentation" },
      { name: "Acne Scars", href: "/treatments/acne-scars" },
    ]
  },
  {
    title: "Body Contouring",
    treatments: [
      { name: "Cryolipolysis", href: "/treatments/cryolipolysis" },
      { name: "Exilis", href: "/treatments/exilis" },
      { name: "EndyMed", href: "/treatments/endymed" },
      { name: "HIFU", href: "/treatments/hifu" },
    ]
  },
  {
    title: "Specialized",
    treatments: [
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
      { name: "Skin Boosters", href: "/treatments/skin-boosters" },
      { name: "Non-Surgical Nose", href: "/treatments/non-surgical-nose" },
      { name: "Facial Contouring", href: "/treatments/facial-contouring" },
    ]
  }
]

export function SkinfinitiiNavigationMenu() {
  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList className="space-x-6">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors"
            )}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-800 hover:text-pastel-pink transition-colors">
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
              "text-gray-800 hover:text-pastel-pink transition-colors"
            )}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/team" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors"
            )}>
              Team
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/testimonials" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors"
            )}>
              Testimonials
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/media" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors"
            )}>
              Media
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/books" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors"
            )}>
              Books
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/quiz" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "text-gray-800 hover:text-pastel-pink transition-colors"
            )}>
              Skin Quiz
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
}
