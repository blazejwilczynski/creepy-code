import React from "react";
import { motion } from "framer-motion";
import "./styles/PortfolioCards.css";
import pencil from "../assets/emoji/pencil.png";
import artist_palette from "../assets/emoji/artist_palette.png";
import guitar from "../assets/emoji/guitar.png";
import skull from "../assets/emoji/skull.png";

const projects = [
  {
    id: "blazejwilczynski",
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
    id: "rockstar",
    emoji: [guitar],
    title: "Rockstar",
    accent: "Book",
    tagline: "Probably first website developed by Creepy Code. Currently Legacy Site.",
    tech: ["Jekyll", "Adobe XD", "Affinity Designer"],
    cta: "Live Website",
    href: "https://blazejwilczynski.github.io/rockstar-book/",
    gradient: "linear-gradient(to bottom, #fafafa, #f0f0f0)",
  },
  {
    id: "skeleton",
    emoji: [skull],
    title: "Skeleton",
    accent: "Book",
    tagline: "Legacy Webiste for second book by Błażej Wilczyński - Skeleton, cyberpunk thriller",
    tech: ["Jekyll", "Figma", "Affinity Designer"],
    cta: "Live Website",
    href: "https://blazejwilczynski.github.io/skeleton-book/",
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