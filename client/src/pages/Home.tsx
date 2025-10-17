import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  Smartphone, 
  Tv, 
  Satellite, 
  Network, 
  GraduationCap, 
  Wrench,
  Calendar,
  ClipboardCheck,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl text-primary-foreground font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-primary">Arcadia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#accueil" className="text-sm font-medium hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#processus" className="text-sm font-medium hover:text-primary transition-colors">Comment faire ?</a>
            <a href="#zone" className="text-sm font-medium hover:text-primary transition-colors">Zone d'intervention</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button asChild>
            <a href="#contact">Contactez-nous</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Arcadia Informatique Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Spécialiste du dépannage numérique depuis 2007
              </p>
              <p className="text-lg">
                Nos techniciens qualifiés interviennent pour toutes pannes de connexion internet, problèmes sur ordinateurs, portables ou tablettes. Installation, développement et formation de logiciels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">Prendre rendez-vous</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#services">Découvrir nos services</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Monitor className="w-48 h-48 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour particuliers et entreprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Monitor className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Assistance informatique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dépannage d'ordinateurs, optimisation, sécurité et résolution de problèmes logiciels
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Assistance mobile & tablette</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dépannage et configuration de vos appareils mobiles et tablettes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Tv className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Assistance TV</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Installation et dépannage TV, satellite, TNT et antenne
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Satellite className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Internet par satellite</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Installation d'internet par satellite pour les zones non couvertes
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment faire ?</h2>
            <p className="text-lg text-muted-foreground">Simple et efficace...</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">1. Contact & RDV</h3>
              <p className="text-muted-foreground">
                Prise de RDV, par mail ou téléphone
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <ClipboardCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">2. Diagnostic & Traitement</h3>
              <p className="text-muted-foreground">
                Diagnostic & Traitement du problème
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">3. Problème résolu</h3>
              <p className="text-muted-foreground">
                Remise d'un rapport d'intervention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Businesses */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Services aux Entreprises</h2>
              <p className="text-lg text-muted-foreground">
                À la hauteur de vos exigences
              </p>
              <p>
                Vous souhaitez vous former à un logiciel, vous cherchez un logiciel de gestion, votre entreprise doit s'équiper d'un réseau interne ou votre réseau interne nécessite une maintenance... CONTACTEZ-NOUS, ARCADIA peut réaliser un audit et vous trouver LA solution.
              </p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <Network className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Installation et déploiement de réseaux</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Nos équipes peuvent vous aider depuis une connexion distante, mais parfaitement sécurisée
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <GraduationCap className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Formations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Il vaut mieux prévenir que guérir. Formation pour faire face aux problèmes à l'avenir
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Wrench className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Les bons réflexes pour durer. Nos experts informatiques prennent en charge la correction de vos bugs
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Partenaires</h2>
            <p className="text-lg text-muted-foreground">
              Partenaire d'ORANGE, Expert agréé SFR, BOUYGUES TÉLÉCOM et technicien installateur certifié CANAL+ & CANAL SAT
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-4xl font-bold text-primary">ORANGE</div>
            <div className="text-4xl font-bold text-primary">SFR</div>
            <div className="text-4xl font-bold text-primary">BOUYGUES</div>
            <div className="text-4xl font-bold text-primary">CANAL+</div>
          </div>
        </div>
      </section>

      {/* Zone Section */}
      <section id="zone" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zone d'intervention</h2>
            <p className="text-lg text-muted-foreground">
              Nous couvrons 3 départements avec un technicien qualifié par secteur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Vaucluse (84)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Avignon et environs
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Bouches-du-Rhône (13)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Marseille, Aix-en-Provence et environs
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Var (83)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Toulon, Draguignan, Brignoles, Saint-Maximin
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "Arcadia a pu m'aider dans l'optimisation de mon ordinateur, beaucoup trop long à mon goût... Ils ont pris la main à distance et en une heure l'histoire était réglée. Merci pour votre réactivité et professionnalisme."
                </p>
                <p className="font-semibold">— Gilbert Lafont</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "J'ai fait appel à Arcadia pour utiliser au mieux mon logiciel de compta. Grâce à leur formation, je peux aujourd'hui être entièrement autonome."
                </p>
                <p className="font-semibold">— Julie Bronssart</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
              <p className="text-lg text-muted-foreground">
                Un professionnel à votre écoute - À distance pour plus de réactivité ou sur place si vous le souhaitez !
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Phone className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Par téléphone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Fixe:</span>
                    <a href="tel:0977197788" className="hover:text-primary">09 77 19 77 88</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Mobile:</span>
                    <a href="tel:0686402477" className="hover:text-primary">06 86 40 24 77</a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Mail className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Par email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:contact@arcadia.services" 
                    className="text-primary hover:underline"
                  >
                    contact@arcadia.services
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <a href="mailto:contact@arcadia.services">Envoyer un message</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-lg text-primary-foreground font-bold">A</span>
              </div>
              <span className="font-semibold">Arcadia Informatique Services</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2007-2025 Arcadia | Entreprise créée par Patrice HERAULT
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

