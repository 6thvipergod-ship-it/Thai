"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  { id: "gallery-1" },
  { id: "gallery-2" },
  { id: "gallery-3" },
  { id: "gallery-4" },
  { id: "gallery-5" },
  { id: "gallery-6" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="font-headline text-4xl md:text-5xl">Moments at Thai House Ghana</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          A glimpse into the life and atmosphere of our beloved coffee shop.
        </p>
      </div>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((galleryItem) => {
          const image = PlaceHolderImages.find((img) => img.id === galleryItem.id);
          if (!image) return null;
          return (
            <div key={image.id} className="break-inside-avoid">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={image.id === 'gallery-1' || image.id === 'gallery-4' ? 800 : 400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
