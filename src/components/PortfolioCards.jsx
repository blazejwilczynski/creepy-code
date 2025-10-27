import React from "react";
import { motion } from "framer-motion";
import "./styles/PortfolioCards.css";
import pencil from "../assets/emoji/pencil.png";
import artist_palette from "../assets/emoji/artist_palette.png";
import guitar from "../assets/emoji/guitar.png";

const projects = [
  {
    id: "BlazejWilczynski",
    emoji: [pencil, artist_palette],
    title: "Błażej",
    accent: "Wilczyński",
    tagline: "Website for Writer and 3D Artist. Developed with Astro framework.",
    tech: ["Astro", "Figma", "Blender"],
    cta: "Live Website",
    href: "#",
    gradient: "linear-gradient(to bottom, #fafafa, #f0f0f0)",
  },
  {
    id: "runner",
    emoji: [guitar],
    title: "Pixel ",
    accent: "Runner",
    tagline: "Retro gra w przeglądarce — złap rytm kodu!",
    tech: ["React", "Canvas"],
    cta: "Live Website",
    href: "#",
    gradient: "linear-gradient(to bottom, #fafafa, #f0f0f0)",
  },
  {
    id: "caffelatte",
    emoji: "☕",
    title: "Caffe",
    accent: "Latte",
    tagline: "Twoje ulubione kawiarnie — w jednej mapie.",
    tech: ["Svelte", "Mapbox"],
    cta: "Live Website",
    href: "#",
    gradient: "linear-gradient(to bottom, #fafafa, #f0f0f0)",
  },
];

function Card({ p }) {
  return (
    <motion.article
      className="card"
      style={{ background: p.gradient }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <div className="emoji">
  {Array.isArray(p.emoji)
    ? p.emoji.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          style={{ width: "48px", height: "48px", margin: "0 4px" }}
        />
      ))
    : p.emoji}
</div>
      <h3 className="title">
       
         {p.title} <span className="accent">{p.accent}</span>
      </h3>
      <p className="tagline">{p.tagline}</p>
      <ul className="tech">
        {p.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <a href={p.href} className="btn-website" target="_blank">
        {p.cta}
      </a>
    </motion.article>
  );
}

export default function PortfolioCards() {
  return (
    <section className="portfolio-section">
    <div className="portfolio-grid">
      {projects.map((p) => (
        <Card key={p.id} p={p} />
      ))}
    </div>
    </section>
  );
}