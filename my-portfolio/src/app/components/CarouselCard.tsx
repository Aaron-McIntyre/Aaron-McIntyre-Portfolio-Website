"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import FeaturedProjectCard from "./FeaturedProjectCard";

interface CarouselCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectLink?: string;
    githubProjectLink?: string;
    tags: string[];
  };
  index: number;
  x: MotionValue<number>;
  carouselWidth: number;
  cardWidth: number;
}

export default function CarouselCard({
  project,
  index,
  x,
  carouselWidth,
  cardWidth,
}: CarouselCardProps) {
  const cardOffset = useTransform(x, (value) => {
    const center = carouselWidth / 2 - cardWidth / 2;
    const cardCenter = index * (cardWidth + 16);
    return cardCenter + value - center;
  });

  const rotateY = useTransform(cardOffset, [-300, 0, 300], [15, 0, -15]);
  const scale = useTransform(cardOffset, [-300, 0, 300], [0.85, 1, 0.85]);
  const zIndex = useTransform(cardOffset, [-300, 0, 300], [0, 1, 0]);

  return (
    <motion.div
      className="w-2/5 flex-shrink-0"
      style={{ rotateY, scale, zIndex }}
    >
      <FeaturedProjectCard {...project} />
    </motion.div>
  );
}
