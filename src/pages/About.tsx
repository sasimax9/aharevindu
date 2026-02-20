import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Award, Users, Utensils } from "lucide-react";
import aboutKitchen from "@/assets/about-kitchen.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    description: "Every dish we create is made with love and dedication to culinary excellence.",
  },
  {
    icon: Award,
    title: "Quality Ingredients",
    description: "We source only the freshest, highest-quality ingredients for our dishes.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We tailor every menu to your preferences.",
  },
  {
    icon: Utensils,
    title: "Expert Chefs",
    description: "Our team of experienced chefs brings creativity and expertise to every event.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutKitchen})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            About Aharevindu
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
            Our Culinary Story
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A journey of passion, flavor, and dedication to creating unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                From a Small Kitchen to Bangalore's Favorite Caterer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Aharevindu began in 2010 with a simple mission: to bring authentic, homemade flavors to every celebration. What started as a small family kitchen has grown into one of Bangalore's most trusted catering services.
                </p>
                <p>
                  Our name "Aharevindu" combines "Ahara" (food) and "Vindu" (point/essence), representing our philosophy that food is the essence of every celebration. We believe that good food brings people together and creates lasting memories.
                </p>
                <p>
                  Over the years, we've had the privilege of serving thousands of happy clients, from intimate family gatherings to grand weddings with over 2000 guests. Each event teaches us something new and inspires us to elevate our craft.
                </p>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src={chefPortrait}
                  alt="Head Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-display font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Meet the Team Behind Your Feast
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Our passionate team of chefs, event coordinators, and service staff work together to make your events extraordinary.
            </p>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
