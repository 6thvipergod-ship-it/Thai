"use client";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ThaiPatternIcon } from "@/components/icons";

const menuItems = {
  appetizers: [
    { id: "menu-spring-rolls", name: "Por Pia Tod (Spring Rolls)", description: "Crispy fried spring rolls with vegetables and glass noodles.", price: "₵55" },
    { id: "menu-satay", name: "Chicken Satay", description: "Grilled chicken skewers with peanut sauce.", price: "₵65" },
  ],
  soups: [
    { id: "menu-tom-yum", name: "Tom Yum Goong", description: "Spicy and sour soup with shrimp, lemongrass, and galangal.", price: "₵80" },
  ],
  main_courses: [
    { id: "menu-green-curry", name: "Gaeng Keow Wan (Green Curry)", description: "Spicy green curry with chicken or beef, coconut milk, and Thai basil.", price: "₵110" },
    { id: "menu-pad-thai", name: "Pad Thai", description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts.", price: "₵95" },
    { id: "menu-massaman", name: "Massaman Curry", description: "A rich, mild curry with beef, potatoes, and peanuts.", price: "₵120" },
  ],
  drinks: [
    { id: "menu-thai-iced-tea", name: "Cha Yen (Thai Iced Tea)", description: "Creamy and sweet, brewed with black tea, spices, and condensed milk.", price: "₵40" },
    { id: "menu-lemongrass-tea", name: "Nam Takrai (Lemongrass Iced Tea)", description: "A refreshing and aromatic herbal tea, served chilled.", price: "₵35" },
    { id: "menu-coconut-juice", name: "Nam Maprow (Fresh Coconut Juice)", description: "Straight from the coconut, a refreshing tropical drink.", price: "₵45" },
  ]
};

const MenuCategory = ({ title, items }: { title: string; items: typeof menuItems.appetizers }) => (
  <div className="space-y-8">
    <h3 className="font-headline text-3xl text-center">{title}</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const image = PlaceHolderImages.find((img) => img.id === item.id);
        return (
          <Card key={item.id} className="overflow-hidden flex flex-col">
            <CardHeader className="p-0">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                  data-ai-hint={image.imageHint}
                />
              )}
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
              <CardDescription className="mt-2">{item.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <p className="font-semibold text-primary">{item.price}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  </div>
);

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-card">
      <div className="container space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl">Our Menu</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A curated selection of authentic Thai dishes, prepared with the freshest ingredients from Ghana.
          </p>
          <ThaiPatternIcon className="mx-auto h-12 w-12 text-accent opacity-50"/>
        </div>
        <MenuCategory title="Appetizers" items={menuItems.appetizers} />
        <MenuCategory title="Soups" items={menuItems.soups} />
        <MenuCategory title="Main Courses" items={menuItems.main_courses} />
        <MenuCategory title="Drinks" items={menuItems.drinks} />
      </div>
    </section>
  );
}
