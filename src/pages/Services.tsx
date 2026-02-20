import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import weddingImage from "@/assets/service-wedding.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import eventImage from "@/assets/service-events.jpg";

const services = [
  {
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our exquisite wedding menus. From traditional feasts to modern fusion cuisine, we create culinary experiences that match the magic of your celebration.",
    image: weddingImage,
    features: [
      "Customized menu planning",
      "Live cooking stations",
      "Traditional & fusion options",
      "Dessert & beverage service",
      "On-site event coordination",
    ],
  },
  {
    title: "Corporate Events",
    description: "Professional catering solutions for business meetings, conferences, product launches, and office celebrations. Impress your clients and energize your team with our premium offerings.",
    image: corporateImage,
    features: [
      "Breakfast & lunch packages",
      "Conference catering",
      "Networking event menus",
      "Team celebration meals",
      "Dietary accommodation",
    ],
  },
  {
    title: "Private Parties",
    description: "From birthday celebrations to anniversary dinners, we create intimate dining experiences with personalized menus crafted just for you and your loved ones.",
    image: eventImage,
    features: [
      "Personalized menu creation",
      "Theme-based presentations",
      "Cocktail party service",
      "Private chef experience",
      "Complete event styling",
    ],
  },
];

const additionalServices = [
  { title: "Festival Catering", description: "Traditional delicacies for Diwali, Ugadi, Onam & more" },
  { title: "Outdoor Catering", description: "Complete setup for farmhouses, gardens & venues" },
  { title: "Live Counters", description: "Interactive cooking stations for your events" },
  { title: "Beverage Service", description: "Premium mocktails, juices & traditional drinks" },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
            Catering for Every Occasion
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From weddings to corporate events, we bring exceptional flavors and impeccable service to your celebrations.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="text-primary font-medium text-sm tracking-wider uppercase">
                  Service {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">More Options</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Additional Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Let's Plan Your Perfect Event
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Tell us about your event, and we'll create a customized catering solution that exceeds your expectations.
            </p>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
