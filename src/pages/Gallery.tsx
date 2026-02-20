import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import weddingImage from "@/assets/service-wedding.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import eventImage from "@/assets/service-events.jpg";
import heroImage from "@/assets/hero-catering.jpg";

const categories = ["All", "Weddings", "Corporate", "Parties", "Traditional"];

const galleryItems = [
  { id: 1, image: weddingImage, category: "Weddings", title: "Grand Wedding Buffet" },
  { id: 2, image: corporateImage, category: "Corporate", title: "Corporate Lunch Event" },
  { id: 3, image: eventImage, category: "Parties", title: "Cocktail Party Setup" },
  { id: 4, image: heroImage, category: "Traditional", title: "Festival Celebration Spread" },
  { id: 5, image: weddingImage, category: "Weddings", title: "Engagement Ceremony" },
  { id: 6, image: corporateImage, category: "Corporate", title: "Conference Catering" },
  { id: 7, image: eventImage, category: "Parties", title: "Birthday Celebration" },
  { id: 8, image: heroImage, category: "Traditional", title: "Diwali Special Thali" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Our Gallery
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
            A Feast for the Eyes
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Browse through our collection of culinary creations and event setups.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-card hover:shadow-hover transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-foreground">
                    <span className="text-xs uppercase tracking-wider opacity-80">{item.category}</span>
                    <h3 className="text-lg font-display font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl"
            />
            <div className="text-center mt-6 text-primary-foreground">
              <span className="text-sm uppercase tracking-wider opacity-80">{selectedImage.category}</span>
              <h3 className="text-2xl font-display font-bold mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Want This for Your Event?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Let us create a stunning culinary experience for your special occasion.
            </p>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
