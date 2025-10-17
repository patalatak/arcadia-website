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
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Arcadia" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#processus" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Comment faire ?</a>
            <a href="#zone" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Zone d'intervention</a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            <a href="#contact">Contactez-nous</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 pointer-events-none" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Depuis 2007</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Arcadia
                </span>
                <br />
                <span className="text-foreground">Informatique Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Spécialiste du dépannage numérique
              </p>
              <p className="text-lg text-foreground/80">
                Nos techniciens qualifiés interviennent pour toutes pannes de connexion internet, problèmes sur ordinateurs, portables ou tablettes. Installation, développement et formation de logiciels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  <a href="#contact">Prendre rendez-vous</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary/50 hover:bg-primary/10">
                  <a href="#services">Découvrir nos services</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <Monitor className="w-48 h-48 text-primary" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent pointer-events-none" />
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Nos Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour particuliers et entreprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4">
                  <Monitor className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground">Assistance informatique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Dépannage d'ordinateurs, optimisation, sécurité et résolution de problèmes logiciels
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground">Assistance mobile & tablette</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Dépannage et configuration de vos appareils mobiles et tablettes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4">
                  <Tv className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground">Assistance TV</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Installation et dépannage TV, satellite, TNT et antenne
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4">
                  <Satellite className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground">Internet par satellite</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Comment faire ?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">Simple et efficace...</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-primary/30 flex items-center justify-center mx-auto">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1. Contact & RDV</h3>
              <p className="text-muted-foreground">
                Prise de RDV, par mail ou téléphone
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-primary/30 flex items-center justify-center mx-auto">
                <ClipboardCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">2. Diagnostic & Traitement</h3>
              <p className="text-muted-foreground">
                Diagnostic & Traitement du problème
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-primary/30 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">3. Problème résolu</h3>
              <p className="text-muted-foreground">
                Remise d'un rapport d'intervention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Businesses */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Services aux Entreprises
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                À la hauteur de vos exigences
              </p>
              <p className="text-foreground/80">
                Vous souhaitez vous former à un logiciel, vous cherchez un logiciel de gestion, votre entreprise doit s'équiper d'un réseau interne ou votre réseau interne nécessite une maintenance... CONTACTEZ-NOUS, ARCADIA peut réaliser un audit et vous trouver LA solution.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Installation et déploiement de réseaux</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Nos équipes peuvent vous aider depuis une connexion distante, mais parfaitement sécurisée
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Formations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Il vaut mieux prévenir que guérir. Formation pour faire face aux problèmes à l'avenir
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Nos Partenaires
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Partenaire d'ORANGE, Expert agréé SFR, BOUYGUES TÉLÉCOM et technicien installateur certifié CANAL+ & CANAL SAT
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">ORANGE</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">SFR</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">BOUYGUES</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">CANAL+</div>
          </div>
        </div>
      </section>

      {/* Zone Section */}
      <section id="zone" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Zone d'intervention
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous couvrons 3 départements avec un technicien qualifié par secteur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Vaucluse (84)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Avignon et environs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Bouches-du-Rhône (13)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Marseille, Aix-en-Provence et environs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Var (83)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Témoignages
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <p className="italic mb-4 text-foreground/80">
                  "Arcadia a pu m'aider dans l'optimisation de mon ordinateur, beaucoup trop long à mon goût... Ils ont pris la main à distance et en une heure l'histoire était réglée. Merci pour votre réactivité et professionnalisme."
                </p>
                <p className="font-semibold text-primary">— Gilbert Lafont</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <p className="italic mb-4 text-foreground/80">
                  "J'ai fait appel à Arcadia pour utiliser au mieux mon logiciel de compta. Grâce à leur formation, je peux aujourd'hui être entièrement autonome."
                </p>
                <p className="font-semibold text-primary">— Julie Bronssart</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Contactez-nous
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Un professionnel à votre écoute - À distance pour plus de réactivité ou sur place si vous le souhaitez !
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Par téléphone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2 text-foreground/80">
                    <span className="font-semibold">Fixe:</span>
                    <a href="tel:0977197788" className="hover:text-primary transition-colors">09 77 19 77 88</a>
                  </p>
                  <p className="flex items-center gap-2 text-foreground/80">
                    <span className="font-semibold">Mobile:</span>
                    <a href="tel:0686402477" className="hover:text-primary transition-colors">06 86 40 24 77</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Par email</CardTitle>
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
              <Button size="lg" asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <a href="mailto:contact@arcadia.services">Envoyer un message</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/40 bg-card/30 backdrop-blur">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Arcadia" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2007-2025 Arcadia Informatique Services | Entreprise créée par Patrice HERAULT
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

