import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Landing.css";

// original emoji
import upside_face from "../assets/emoji/upside_down_face.png";
import smiley_face_sunglasses from "../assets/emoji/smiling_face_with_sunglasses.png";
import alien_monster from "../assets/emoji/alien_monster.png";
import pizza from "../assets/emoji/pizza.png";
import hot_beverage from "../assets/emoji/hot_beverage.png";
import chocolate_bar from "../assets/emoji/chocolate_bar.png";
import guitar from "../assets/emoji/guitar.png";
import soccer_ball from "../assets/emoji/soccer_ball.png";
import rocket from "../assets/emoji/rocket.png";

// new emoji
import exploding_head from "../assets/emoji/exploding_head.png";
import dizzy_face from "../assets/emoji/dizzy_face.png";
import pumpkin from "../assets/emoji/pumpkin.png";
import pill from "../assets/emoji/pill.png";
import cup_with_straw from "../assets/emoji/cup_with_straw.png";
import watermelon from "../assets/emoji/watermelon.png";
import drum from "../assets/emoji/drum.png";
import eightball from "../assets/emoji/eightball.png";
import video_game from "../assets/emoji/video_game.png";

const originalIcons = [
  upside_face,
  smiley_face_sunglasses,
  alien_monster,
  pizza,
  hot_beverage,
  chocolate_bar,
  guitar,
  soccer_ball,
  rocket,
];

const newIcons = [
  exploding_head,
  dizzy_face,
  pumpkin,
  pill,
  cup_with_straw,
  watermelon,
  drum,
  eightball,
  video_game,
];

// 🔤 słowa do wyświetlania w miejscu podkreślenia
const WORDS = ["Websites", "Apps", "Brands", "Ideas", "Products"];

export function Landing() {
  const COUNT = originalIcons.length;

  // --- EMOJI ---
  const [icons, setIcons] = useState(originalIcons);
  const [animatingIndex, setAnimatingIndex] = useState(null);
  const cursorRef = useRef(0); // 0..8
  const phaseRef = useRef("toNew"); // "toNew" | "toOriginal"

  useEffect(() => {
    const interval = setInterval(() => {
      const i = cursorRef.current;
      setAnimatingIndex(i);

      setTimeout(() => {
        setIcons((prev) => {
          const next = [...prev];
          next[i] =
            phaseRef.current === "toNew" ? newIcons[i] : originalIcons[i];
          return next;
        });

        setAnimatingIndex(null);

        if (i === COUNT - 1) {
          phaseRef.current =
            phaseRef.current === "toNew" ? "toOriginal" : "toNew";
          cursorRef.current = 0;
        } else {
          cursorRef.current = i + 1;
        }
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [COUNT]);

  // --- TEKST: dynamiczne słowo ---
  const [wordIndex, setWordIndex] = useState(0);
  const wordRef = useRef(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  // zmiana słowa co 3 sekundy
  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  // dopasowanie szerokości podkreślenia do słowa
  useEffect(() => {
    if (!wordRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setUnderlineWidth(w);
    });
    ro.observe(wordRef.current);
    return () => ro.disconnect();
  }, [wordIndex]);

  const wordVariants = {
    initial: { opacity: 0, y: 20, rotateX: -90, filter: "blur(6px)" },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: 80,
      filter: "blur(6px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="landing">
      <div className="landing-wrapper">
        {/* ikony */}
        <div className="emoji-icons">
          {[0, 1, 2].map((r) => (
            <div className="emoji-row" key={r}>
              {icons.slice(r * 3, r * 3 + 3).map((icon, i) => {
                const idx = r * 3 + i;
                return (
                  <AnimatedIcon
                    key={idx}
                    src={icon}
                    isAnimating={animatingIndex === idx}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* tekst */}
        <div className="landing-text">
          <h2>We Bring</h2>


<h2>
  Your{" "}
  <span className="changing-word">
    {/* Duch wyznaczający szerokość */}
    <span className="changing-word__ghost">{WORDS[wordIndex]}</span>

    {/* Czerwone, animowane słowo */}
    <AnimatePresence mode="wait">
      <motion.span
        key={WORDS[wordIndex]}
        className="changing-word__text"
        initial={{ opacity: 0, y: 20, rotateX: -90, filter: "blur(6px)" }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0)",
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{
          opacity: 0,
          y: -20,
          rotateX: 80,
          filter: "blur(6px)",
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {WORDS[wordIndex]}
      </motion.span>
    </AnimatePresence>
  </span>
</h2>


<h2>To Virtual Life</h2>
        </div>
      </div>
    </div>
  );
}

// 🔄 pojedyncza ikona z animacją
const AnimatedIcon = ({ src, isAnimating }) => (
  <motion.img
    src={src}
    alt="emoji"
    className="emoji"
    animate={
      isAnimating
        ? { rotate: 360, scale: 1.2, opacity: 0.6 }
        : { rotate: 0, scale: 1, opacity: 1 }
    }
    transition={{ duration: 0.5 }}
  />
);