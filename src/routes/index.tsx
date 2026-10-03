import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDot,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/555195555267?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20as%20aulas%20de%20Karate%20Shotokan%20do%20Fudoshin%20Dojo.";
const BRAND_IMAGE_URL = `${import.meta.env.BASE_URL}fudoshin-brand.jpg`;
const SYMBOL_IMAGE_URL = `${import.meta.env.BASE_URL}fudoshin-symbol.jpg`;

const benefits = [
  {
    icon: Target,
    number: "01",
    title: "Foco e disciplina",
    text: "A rotina de treinos desenvolve concentração, autocontrole e constância para dentro e fora do dojo.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Corpo preparado",
    text: "Fundamentos, kata e exercícios trabalham coordenação, equilíbrio, flexibilidade e condicionamento.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Respeito na prática",
    text: "Cada aula reforça humildade, coragem e convivência respeitosa com colegas e instrutores.",
  },
  {
    icon: Users,
    number: "04",
    title: "Comunidade que apoia",
    text: "Alunos iniciantes e experientes compartilham desafios, aprendizados e conquistas.",
  },
];

const audiences = [
  {
    label: "Crianças",
    title: "Energia com direção",
    text: "Coordenação motora, disciplina e autoconfiança em um ambiente seguro e acolhedor.",
  },
  {
    label: "Jovens",
    title: "Foco para novos desafios",
    text: "Concentração, perseverança e equilíbrio emocional para apoiar os estudos e as relações.",
  },
  {
    label: "Adultos",
    title: "Mente firme, corpo ativo",
    text: "Uma prática completa para aliviar o estresse, melhorar o condicionamento e superar limites.",
  },
];

const testimonials = [
  "O treino trouxe mais foco e confiança para a rotina.",
  "Um ambiente acolhedor, com respeito e aprendizado de verdade.",
  "Cada aula é uma oportunidade de evoluir no karate e na vida.",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karate Shotokan em Parobé | Fudoshin Dojo" },
      {
        name: "description",
        content:
          "Aulas de Karate Shotokan em Parobé para crianças, jovens e adultos. Desenvolva disciplina, respeito, foco e confiança no Fudoshin Dojo.",
      },
      { property: "og:title", content: "Fudoshin Dojo | Karate Shotokan em Parobé" },
      {
        property: "og:description",
        content:
          "Karate tradicional, disciplina e evolução para crianças, jovens e adultos em Parobé.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Fudoshin Dojo Karate",
    telephone: "+55 51 9555-5267",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Parobé",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    sameAs: [],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-hero-border bg-hero/90 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex min-h-11 items-center gap-3" aria-label="Fudoshin Dojo, início">
            <img
              src={SYMBOL_IMAGE_URL}
              alt="Símbolo Fudoshin Dojo"
              width="48"
              height="48"
                className="brand-mark-hover size-12 rounded-full border border-primary/50 object-cover"
            />
            <span className="hidden font-bold uppercase text-hero-foreground sm:block">
              Fudoshin <span className="text-primary">Dojo</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#beneficios">Benefícios</a>
            <a className="nav-link" href="#sobre">O dojo</a>
            <a className="nav-link" href="#contato">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary appointment-glow min-h-11 max-w-52 px-3 text-xs leading-tight sm:max-w-none sm:px-5 sm:text-sm"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="text-center">Agendar aula experimental gratuita</span>
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-surface relative flex min-h-[92svh] items-center pt-28">
          <div className="hero-lines" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div className="max-w-3xl">
              <div className="hero-enter hero-delay-1 mb-6 flex items-center gap-3 text-xs font-bold uppercase text-primary">
                <span className="h-px w-10 bg-primary" />
                Karate Shotokan JKA em Parobé
              </div>
              <h1 className="hero-enter hero-delay-2 max-w-4xl text-hero-foreground">
                Disciplina para o corpo. <span className="text-primary">Força para a vida.</span>
              </h1>
              <p className="hero-enter hero-delay-3 mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted sm:text-xl">
                Karate tradicional para crianças, jovens e adultos que querem desenvolver foco, respeito e confiança.
              </p>
              <div className="hero-enter hero-delay-4 mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  Quero conhecer o dojo
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
                <a href="#beneficios" className="button button-ghost">
                  Ver benefícios
                  <ArrowDown className="size-5" aria-hidden="true" />
                </a>
              </div>
              <div className="hero-enter hero-delay-5 mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-hero-muted">
                {[
                  "Ambiente acolhedor",
                  "Tradição e técnica",
                  "Evolução no seu ritmo",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" aria-hidden="true" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-enter hero-delay-3 relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="brand-frame">
                <img
                  src={BRAND_IMAGE_URL}
                  alt="Fudoshin Dojo, Karatê Shotokan"
                  width="768"
                  height="768"
                  fetchPriority="high"
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="section-space bg-background">
          <div className="section-container">
            <div data-reveal className="reveal grid gap-5 lg:grid-cols-[0.65fr_1fr] lg:items-end">
              <div>
                <p className="eyebrow">Muito além da técnica</p>
                <h2 className="mt-3">Uma prática que acompanha você todos os dias</h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
                No Fudoshin Dojo, cada treino une corpo e mente. O progresso acontece com constância, respeito e atenção aos fundamentos.
              </p>
            </div>

            <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.title}
                    data-reveal
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className="reveal benefit-card border-b border-r border-border"
                  >
                    <div className="flex items-start justify-between">
                      <Icon className="size-7 text-primary-deep" strokeWidth={1.8} aria-hidden="true" />
                      <span className="text-xs font-bold text-muted-foreground">{benefit.number}</span>
                    </div>
                    <h3 className="mt-12 text-xl">{benefit.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space bg-surface-soft">
          <div className="section-container">
            <div data-reveal className="reveal max-w-3xl">
              <p className="eyebrow">Para cada fase da vida</p>
              <h2 className="mt-3">Um caminho de evolução para todos</h2>
            </div>
            <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
              {audiences.map((item, index) => (
                <article
                  key={item.label}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                  className="reveal group bg-background p-7 transition-transform duration-200 hover:-translate-y-0.5 sm:p-9"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="border border-primary-deep px-3 py-1 text-xs font-bold uppercase text-primary-deep">
                      {item.label}
                    </span>
                    <CircleDot className="size-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section-space bg-hero text-hero-foreground">
          <div className="section-container grid items-center gap-14 lg:grid-cols-[0.84fr_1.16fr]">
            <div data-reveal className="reveal relative mx-auto max-w-sm">
              <div className="symbol-halo">
                <img
                  src={SYMBOL_IMAGE_URL}
                  alt="Emblema do Fudoshin Dojo"
                  width="768"
                  height="768"
                  loading="lazy"
                  className="brand-mark-hover aspect-square h-auto w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div data-reveal className="reveal">
              <p className="eyebrow">O significado de Fudoshin</p>
              <h2 className="mt-3 text-hero-foreground">Mente firme diante de qualquer desafio</h2>
              <p className="mt-6 text-lg leading-relaxed text-hero-muted">
                Fudoshin significa mente imóvel ou espírito inabalável. É a capacidade de manter equilíbrio, clareza e controle emocional mesmo sob pressão.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-hero-muted">
                No dojo, esse princípio ganha vida por meio do Karate Shotokan tradicional, linhagem JKA, com ensino fiel aos fundamentos, à saudação e ao respeito pela arte.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-5 border-t border-hero-border pt-7 sm:grid-cols-4">
                {[
                  ["Fudoshin", "Espírito inabalável"],
                  ["Kihon", "Fundamentos"],
                  ["Kata", "Precisão"],
                  ["Kumite", "Aplicação"],
                ].map(([term, label]) => (
                  <div key={term}>
                    <strong className="block text-xl text-primary">{term}</strong>
                    <span className="mt-1 block text-sm text-hero-muted">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-primary text-primary-foreground">
          <div className="section-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div data-reveal className="reveal">
              <Sparkles className="size-9" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-5 text-xs font-bold uppercase">Nossos faixas pretas</p>
              <h2 className="mt-3 text-primary-foreground">O começo de uma nova responsabilidade</h2>
            </div>
            <blockquote data-reveal className="reveal border-l border-primary-foreground/30 pl-7 text-xl font-medium leading-relaxed sm:text-2xl lg:pl-12">
              Ser faixa preta vai muito além de uma graduação. Representa anos de dedicação, disciplina, superação e compromisso. Não é o fim do caminho, mas a responsabilidade de continuar aprendendo e servir de exemplo dentro e fora do dojo.
            </blockquote>
          </div>
        </section>

        <section className="section-space bg-background">
          <div className="section-container">
            <div data-reveal className="reveal max-w-2xl">
              <p className="eyebrow">Vivências no dojo</p>
              <h2 className="mt-3">Histórias que constroem nossa comunidade</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((text, index) => (
                <figure
                  key={text}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                  className="reveal testimonial-card"
                >
                  <div className="text-5xl font-bold leading-none text-primary">“</div>
                  <blockquote className="mt-4 text-lg font-medium leading-relaxed">{text}</blockquote>
                  <figcaption className="mt-8 border-t border-border pt-5 text-xs font-bold uppercase text-muted-foreground">
                    [PLACEHOLDER: trocar por depoimento real]
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-space bg-surface-soft">
          <div className="section-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div data-reveal className="reveal">
              <p className="eyebrow">Seu primeiro passo</p>
              <h2 className="mt-3 max-w-2xl">Conheça o treino de perto</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Fale com o Fudoshin Dojo, tire suas dúvidas e combine uma aula experimental para conhecer o ambiente e os instrutores.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark mt-8"
              >
                Conversar no WhatsApp
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>
            <div data-reveal className="reveal divide-y divide-border border-y border-border">
              <div className="contact-row">
                <MapPin className="size-6 text-primary-deep" aria-hidden="true" />
                <div>
                  <h3 className="text-base">Localização</h3>
                  <p className="mt-1 text-muted-foreground">Parobé, Rio Grande do Sul</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Fudoshin+Dojo+Parob%C3%A9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary-deep underline decoration-primary/50 underline-offset-4"
                  >
                    Abrir no Google Maps <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="contact-row">
                <MessageCircle className="size-6 text-primary-deep" aria-hidden="true" />
                <div>
                  <h3 className="text-base">WhatsApp</h3>
                  <p className="mt-1 text-muted-foreground">(51) 9555-5267</p>
                </div>
              </div>
              <div className="contact-row">
                <Instagram className="size-6 text-primary-deep" aria-hidden="true" />
                <div>
                  <h3 className="text-base">Instagram e horários</h3>
                  <p className="mt-1 text-muted-foreground">[PLACEHOLDER: informar perfil e horários das turmas]</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-hero py-10 text-hero-muted">
        <div className="section-container flex flex-col items-center gap-5 text-center">
          <a href="#inicio" className="flex min-h-11 items-center gap-3">
            <img
              src={SYMBOL_IMAGE_URL}
              alt=""
              width="40"
              height="40"
              loading="lazy"
              className="size-10 rounded-full object-cover"
            />
            <span className="font-bold text-hero-foreground">Fudoshin Dojo Karate</span>
          </a>
          <p className="text-sm leading-relaxed">Karate Shotokan JKA em Parobé [PLACEHOLDER: informar CNPJ]</p>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Conversar com o Fudoshin Dojo no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.6 0 .28 5.3.28 11.84c0 2.09.55 4.14 1.6 5.94L.18 24l6.38-1.67a11.9 11.9 0 0 0 5.57 1.42h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.46-8.43zm-8.39 18.26a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.88 9.9zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
}