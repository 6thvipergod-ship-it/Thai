"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const image = PlaceHolderImages.find((img) => img.id === "about-us");

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <h2 className="font-headline text-4xl md:text-5xl">Our Story</h2>
          <p className="text-muted-foreground text-lg">
            Thai House Restaurant offers an authentic taste of Thailand in the vibrant heart of Accra. Our journey began with a simple mission: to share the rich, complex, and aromatic flavors of Thai cuisine with Ghana.
          </p>
          <p className="text-muted-foreground">
            We are a family-run establishment, dedicated to time-honored recipes passed down through generations. From the spicy kick of Tom Yum to the comforting embrace of Massaman curry, every dish is a celebration of Thai culture. We invite you to join us for a memorable dining experience.
          </p>
          <a href="#contact">
            <Button variant="secondary">Visit Us</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
