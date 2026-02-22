import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";
import eventImage from "@/assets/service-events.jpg";
import weddingImage from "@/assets/service-wedding.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import { Helmet } from "react-helmet-async";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Client Rating" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const services = [
  {
    title: "Wedding Catering",
    description:
      "Make your special day unforgettable with our exquisite wedding menus.",
    image: weddingImage,
  },
  {
    title: "Corporate Events",
    description:
      "Professional catering solutions for business meetings and conferences.",
    image: corporateImage,
  },
  {
    title: "Private Parties",
    description:
      "Intimate gatherings with personalized menus crafted just for you.",
    image: eventImage,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Aharevindu – Premium Catering Services in Vijayawada</title>
        <meta
          name="description"
          content="Aharevindu offers premium catering services for weddings, events and traditional food across Andhra Pradesh."
        />
        <link rel="canonical" href="https://aharevindu.in/" />

        {/* OpenGraph (WhatsApp / Facebook preview) */}
        <meta
          property="og:title"
          content="Aharevindu – Premium Catering Services"
        />
        <meta
          property="og:description"
          content="Premium catering for weddings & events across Andhra Pradesh."
        />
        <meta property="og:url" content="https://aharevindu.in/" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>

        <div className="relative container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium backdrop-blur-sm">
              Premium Catering Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
              Flavors That Create
              <span className="text-primary block">Lasting Memories</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Experience the art of culinary excellence with Aharevindu. From
              intimate gatherings to grand celebrations, we craft unforgettable
              dining experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-primary-foreground">
                <stat.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl font-display font-bold">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-4">
              Exceptional Catering Services
            </h2>
            <p className="text-muted-foreground mt-4">
              From weddings to corporate events, we bring culinary excellence to
              every occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
              Ready to Create Something Special?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Let's discuss your next event. Contact us today for a personalized
              consultation and quote.
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

export default Index;
