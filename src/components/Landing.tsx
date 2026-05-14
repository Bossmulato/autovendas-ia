import { useState } from "react";
import {
  MessageCircle, Bot, Clock, Zap, ShoppingCart, CreditCard,
  Megaphone, Sparkles, ArrowRight, Check, Instagram, Mail,
  Plus, Minus, ShieldCheck, Star,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/244900000000";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Benefits />
      <HowItWorks />
      <BotDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="size-8 rounded-lg bg-gradient-primary grid place-items-center glow">
            <Bot className="size-5 text-primary-foreground" />
          </span>
          AutoVendas <span className="text-gradient">AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#beneficios" className="hover:text-foreground transition">Benefícios</a>
          <a href="#como-funciona" className="hover:text-foreground transition">Como funciona</a>
          <a href="#planos" className="hover:text-foreground transition">Planos</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#planos" className="hidden sm:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition glow-soft">
          Testar Agora <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 [background:var(--gradient-hero)] pointer-events-none" />

      <div className="container mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <Sparkles className="size-3.5 text-primary" />
            Powered by Inteligência Artificial
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Automatize suas vendas no <span className="text-gradient">WhatsApp</span> com Inteligência Artificial
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Um sistema inteligente que responde clientes, apresenta produtos e ajuda a fechar vendas automaticamente 24h por dia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#planos" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:scale-105 transition-transform glow-soft">
              Testar Agora <ArrowRight className="size-4" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass text-foreground px-6 py-3.5 rounded-xl font-semibold hover:border-primary/60 transition">
              <MessageCircle className="size-5 text-primary" /> Falar no WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Sem cartão</div>
            <div className="flex items-center gap-2"><Zap className="size-4 text-primary" /> Setup em 5 min</div>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative animate-float">
      <div className="absolute -inset-10 [background:var(--gradient-glow)] blur-3xl opacity-60" />
      <div className="relative grid grid-cols-5 gap-4">
        {/* Phone with WhatsApp chat */}
        <div className="col-span-3 glass rounded-3xl p-4 shadow-card glow-soft">
          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <div className="size-10 rounded-full bg-gradient-primary grid place-items-center">
              <Bot className="size-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-sm font-semibold">AutoVendas Bot</div>
              <div className="text-xs text-primary flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" /> online
              </div>
            </div>
          </div>
          <div className="space-y-2.5 py-4 text-sm">
            <Bubble side="left" delay="0s">Olá! 👋 Bem-vindo à nossa loja.</Bubble>
            <Bubble side="right" delay="0.3s">Quanto custa o plano Pro?</Bubble>
            <Bubble side="left" delay="0.6s">O Pro custa 49€/mês com IA avançada e pagamentos. Quer testar grátis?</Bubble>
            <Bubble side="right" delay="0.9s">Sim, pode enviar o link!</Bubble>
            <Bubble side="left" delay="1.2s">✅ Aqui está: pagar.autovendas.ai/pro</Bubble>
          </div>
        </div>

        {/* Dashboard card */}
        <div className="col-span-2 space-y-4">
          <div className="glass rounded-2xl p-4">
            <div className="text-xs text-muted-foreground">Vendas hoje</div>
            <div className="text-2xl font-bold text-gradient mt-1">€2.480</div>
            <div className="text-xs text-primary mt-1">↑ 32% vs ontem</div>
          </div>
          <div className="glass rounded-2xl p-4">
            <div className="text-xs text-muted-foreground mb-2">Conversões IA</div>
            <div className="flex items-end gap-1 h-16">
              {[40, 60, 35, 75, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-primary rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-primary/20 grid place-items-center">
                <Zap className="size-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Resp. médio</div>
                <div className="text-sm font-bold">1.2s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children, delay }: { side: "left" | "right"; children: React.ReactNode; delay: string }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        style={{ animationDelay: delay }}
        className={`animate-message-in max-w-[80%] px-3.5 py-2 rounded-2xl text-sm ${
          side === "right"
            ? "bg-gradient-primary text-primary-foreground rounded-br-sm"
            : "bg-secondary text-foreground rounded-bl-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Benefits() {
  const items = [
    { icon: MessageCircle, title: "Respostas automáticas", desc: "Responde imediatamente cada cliente sem demoras." },
    { icon: Clock, title: "Atendimento 24h", desc: "Vende enquanto dorme — nunca perde um lead." },
    { icon: Zap, title: "Integração WhatsApp", desc: "Conecta-se directamente ao seu número em minutos." },
    { icon: Bot, title: "IA inteligente", desc: "Entende contexto, intenção e personaliza respostas." },
    { icon: ShoppingCart, title: "Fechamento de vendas", desc: "Conduz o cliente do interesse à compra final." },
    { icon: CreditCard, title: "Pagamentos simplificados", desc: "Envia links de pagamento automaticamente." },
  ];
  return (
    <section id="beneficios" className="py-24 px-6">
      <div className="container mx-auto">
        <SectionHeader eyebrow="Benefícios" title={<>Tudo o que precisa para <span className="text-gradient">vender mais</span></>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((b, i) => (
            <div key={i} className="group glass rounded-2xl p-6 hover:border-primary/60 hover:-translate-y-1 transition-all duration-300">
              <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center mb-4 group-hover:glow transition">
                <b.icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Megaphone, label: "Anúncio", desc: "Cliente clica num anúncio ou link." },
    { icon: MessageCircle, label: "WhatsApp", desc: "Inicia uma conversa no seu número." },
    { icon: Bot, label: "IA", desc: "A IA responde, qualifica e apresenta produtos." },
    { icon: CreditCard, label: "Pagamento", desc: "Link de pagamento enviado automaticamente." },
    { icon: ShoppingCart, label: "Cliente", desc: "Compra concluída, sem intervenção humana." },
  ];
  return (
    <section id="como-funciona" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <SectionHeader eyebrow="Como funciona" title={<>Do clique à <span className="text-gradient">venda fechada</span></>} />
        <div className="mt-14 grid lg:grid-cols-5 gap-4 relative">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="glass rounded-2xl p-6 text-center hover:border-primary/60 transition h-full">
                <div className="size-14 rounded-2xl bg-gradient-primary grid place-items-center mx-auto mb-4 glow-soft">
                  <s.icon className="size-7 text-primary-foreground" />
                </div>
                <div className="text-xs text-primary font-mono mb-1">PASSO {i + 1}</div>
                <h4 className="font-semibold mb-2">{s.label}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 size-5 text-primary/60 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BotDemo() {
  const convo = [
    { side: "right", text: "Quanto custa?" },
    { side: "left", text: "Temos planos Básico e Pro. Qual desejas conhecer? 😊" },
    { side: "right", text: "Como funciona?" },
    { side: "left", text: "O sistema responde clientes automaticamente e ajuda no processo de vendas." },
    { side: "right", text: "Quero testar!" },
    { side: "left", text: "✅ Perfeito! Aqui está o seu acesso de teste grátis: autovendas.ai/teste" },
  ];
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader align="left" eyebrow="Demonstração" title={<>Veja a <span className="text-gradient">IA em acção</span></>} />
          <p className="text-muted-foreground mt-6 max-w-md">
            Conversas naturais, respostas instantâneas e foco total em conversão. A IA é treinada para o seu negócio.
          </p>
          <ul className="mt-6 space-y-3">
            {["Compreensão de contexto", "Qualificação automática de leads", "Envio de catálogo e pagamentos"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="size-5 rounded-full bg-primary/20 grid place-items-center"><Check className="size-3 text-primary" /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-3xl p-5 glow-soft max-w-md mx-auto w-full">
          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <div className="size-10 rounded-full bg-gradient-primary grid place-items-center">
              <Bot className="size-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-sm font-semibold">AutoVendas Bot</div>
              <div className="text-xs text-primary">a escrever…</div>
            </div>
          </div>
          <div className="space-y-2.5 py-5">
            {convo.map((m, i) => (
              <Bubble key={i} side={m.side as "left" | "right"} delay={`${i * 0.25}s`}>{m.text}</Bubble>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "10.000",
      oldPrice: "20.000",
      features: ["Respostas automáticas", "1 produto", "Suporte básico", "Integração WhatsApp"],
      featured: false,
      link: "https://pay.kambafy.com/checkout/14042a90-5427-4e06-b03a-f82ffedc1947",
    },
    {
      name: "Pro",
      price: "20.000",
      oldPrice: "40.000",
      features: ["IA avançada", "Múltiplos produtos", "Integração de pagamento", "Automações avançadas", "Suporte prioritário"],
      featured: true,
      link: WHATSAPP_LINK,
    },
  ];
  return (
    <section id="planos" className="py-24 px-6">
      <div className="container mx-auto">
        <SectionHeader eyebrow="Planos" title={<>Comece <span className="text-gradient">hoje mesmo</span></>} />
        <p className="text-center text-muted-foreground mt-4 max-w-xl mx-auto">
          Funciona em qualquer país · Pagamentos em várias moedas (Kz, €, $, R$)
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 transition hover:-translate-y-1 ${
                p.featured ? "bg-gradient-primary text-primary-foreground glow animate-pulse-glow" : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 right-6 bg-background text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary">
                  MAIS POPULAR
                </div>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl md:text-5xl font-bold">{p.price} Kz</span>
                <span className={`text-lg line-through ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground/70"}`}>{p.oldPrice} Kz</span>
                <span className={p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>/mês</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className={`size-4 ${p.featured ? "text-primary-foreground" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 block text-center font-semibold py-3 rounded-xl transition ${
                  p.featured
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Começar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "João Silva", role: "Loja online · Luanda", text: "Tripliquei vendas em 30 dias. A IA atende melhor que muitos humanos.", rating: 5 },
    { name: "Maria Costa", role: "Cosméticos", text: "Já não perco clientes durante a noite. O bot fecha vendas sozinho.", rating: 5 },
    { name: "Paulo Mendes", role: "Cursos online", text: "Setup foi simples e o retorno veio na primeira semana. Recomendo!", rating: 5 },
  ];
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <SectionHeader eyebrow="Resultados" title={<>Quem já <span className="text-gradient">automatizou</span></>} />
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {items.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:border-primary/60 transition">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Funciona em Angola?", a: "Sim, funciona em Angola e em qualquer país onde o WhatsApp esteja disponível." },
    { q: "Precisa de experiência técnica?", a: "Não. O setup é guiado passo a passo, leva menos de 5 minutos." },
    { q: "Funciona no WhatsApp normal?", a: "Funciona com WhatsApp Business e através da API oficial para volumes maiores." },
    { q: "Como recebo acesso?", a: "Após pagamento, recebe credenciais e tutorial por email e WhatsApp imediatamente." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title={<>Perguntas <span className="text-gradient">frequentes</span></>} />
        <div className="mt-12 space-y-3">
          {qs.map((item, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/30 transition"
              >
                <span className="font-semibold">{item.q}</span>
                {open === i ? <Minus className="size-5 text-primary" /> : <Plus className="size-5 text-primary" />}
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground animate-fade-up">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-3">
            <span className="size-8 rounded-lg bg-gradient-primary grid place-items-center">
              <Bot className="size-5 text-primary-foreground" />
            </span>
            AutoVendas <span className="text-gradient">AI</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Automatize as vendas no WhatsApp com inteligência artificial.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contactos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={WHATSAPP_LINK} className="hover:text-primary inline-flex items-center gap-2"><MessageCircle className="size-4" /> WhatsApp</a></li>
            <li><a href="#" className="hover:text-primary inline-flex items-center gap-2"><Instagram className="size-4" /> Instagram</a></li>
            <li><a href="mailto:contacto@autovendas.ai" className="hover:text-primary inline-flex items-center gap-2"><Mail className="size-4" /><span>contacto@autovendas.ai</span></a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#beneficios" className="hover:text-primary">Benefícios</a></li>
            <li><a href="#planos" className="hover:text-primary">Planos</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AutoVendas AI · Todos os direitos reservados
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-primary grid place-items-center glow animate-pulse-glow hover:scale-110 transition"
    >
      <MessageCircle className="size-7 text-primary-foreground" />
    </a>
  );
}

function SectionHeader({
  eyebrow, title, align = "center",
}: { eyebrow: string; title: React.ReactNode; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : ""}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary font-mono uppercase tracking-wider ${align === "center" ? "" : ""}`}>
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mt-4">{title}</h2>
    </div>
  );
}
