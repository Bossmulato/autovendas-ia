import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "AutoVendas AI · Vendas automáticas no WhatsApp com IA" },
      { name: "description", content: "Sistema com IA que responde clientes, apresenta produtos e fecha vendas no WhatsApp 24h por dia." },
      { property: "og:title", content: "AutoVendas AI · Vendas automáticas no WhatsApp" },
      { property: "og:description", content: "IA que vende por si no WhatsApp, 24/7." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});
