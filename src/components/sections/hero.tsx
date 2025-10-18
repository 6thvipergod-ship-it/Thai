"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    id: "hero-1",
    title: "The True Taste of Thailand in Accra.",
    subtitle: "Authentic Flavors, Unforgettable Experience.",
  },
  {
    id: "hero-2",
    title: "Where Every Dish Tells a Story.",
    subtitle: "Crafted with Passion, Served with a Smile.",
  },
  {
    id: "hero-3",
    title: "Your Escape to the Heart of Thai Cuisine.",
    subtitle: "Savor the Moment.",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide) => {
            const image = PlaceHolderImages.find((img) => img.id === slide.id);
            return (
              <CarouselItem key={slide.id} className="relative w-full h-screen">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                    priority={slide.id === 'hero-1'}
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                  <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    {slide.subtitle}
                  </p>
                  <a href="#menu">
                    <Button size="lg" className="mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                      Explore Our Menu
                    </Button>
                  </a>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-white/20 hover:bg-white/30 border-white/50" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-white/20 hover:bg-white/30 border-white/50" />
      </Carousel>
    </section>
  );
}
