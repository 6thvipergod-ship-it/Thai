"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/#menu", label: "Menu" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "Our Story" },
  { href: "/#contact", label: "Contact & Location" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );
    
    const sections = document.querySelectorAll("section[id]");
    if (pathname === '/') {
      sections.forEach((section) => observer.observe(section));
    }
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (pathname === '/') {
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, [pathname]);
  
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
    } else {
      const hash = window.location.hash.substring(1);
      setActiveSection(hash);
    }
  }, [pathname]);

  const NavLinkItems = () => (
    <>
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.substring(2);
        
        return(
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
             isActive
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      )})}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
          <Coffee className="h-6 w-6 text-primary" />
          Thai House Restaurant
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinkItems />
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col items-start gap-6 pt-10">
                <NavLinkItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
