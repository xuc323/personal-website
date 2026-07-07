"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
  { route: "projects", label: "Project" },
  { route: "experiences", label: "Experience" },
  { route: "blogs", label: "Blog" },
  { route: "about", label: "About" },
];

export default function Navbar() {
  // get the current url so navbar item will have a grey out background
  const path = useSelectedLayoutSegment();

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* LEFT: Home */}
        <Link href="/" className="hover:bg-muted flex shrink-0 items-center justify-center rounded-full p-1 transition">
          <Image src="/logo.svg" alt="Home logo" width={40} height={40} className="block dark:hidden" />
          <Image src="/logo-dark.svg" alt="Home logo" width={40} height={40} className="hidden dark:block" />
        </Link>

        {/* RIGHT: Desktop Menu  */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    render={<Link href={{ pathname: `/${link.route}` }} />}
                    className={cn(navigationMenuTriggerStyle(), path === link.route && "bg-muted")}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-lg" className="h-12 w-12">
                  <Menu className="size-6" />
                </Button>
              }
            />
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-16">
                {links.map((link, index) => (
                  <SheetClose
                    nativeButton={false}
                    key={index}
                    render={
                      <Link href={{ pathname: `/${link.route}` }} className={cn("hover:bg-muted rounded p-2", path === link.route && "bg-muted")}>
                        {link.label}
                      </Link>
                    }
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
