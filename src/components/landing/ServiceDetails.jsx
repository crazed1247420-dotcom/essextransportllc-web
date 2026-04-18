import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DETAILS = [
  {
    id: "lastmile",
    label: "SVC-01",
    title: "Last-Mile Delivery",
    description:
      "We provide fast, reliable last-mile delivery for businesses and individuals. Whether it's packages, equipment, or time-sensitive items, we ensure safe handling and on-time arrival.",
    items: [
      "Retail stores and local shops",
      "E-commerce and online sellers",
      "Medical and professional offices",
      "Individuals needing secure delivery",
    ],
    image: "https://media.base44.com/images/public/69de46d644e778bcad0aa46c/5eca25497_generated_51b14889.png",
    cta: "Get a Last-Mile Quote",
    reverse: false,
  },
  {
    id: "b2b",
    label: "SVC-02",
    title: "B2B Routes & Logistics",
    description:
      "We support businesses with scheduled routes, recurring deliveries, and custom logistics solutions. Our service is built for reliability, consistency, and professional communication.",
    items: [
      "Daily, weekly, or monthly routes",
      "Contracted delivery services",
      "Business-to-business transport",
      "Document, equipment, and supply movement",
    ],
    image: "https://media.base44.com/images/public/69de46d644e778bcad0aa46c/d6a16093d_generated_7afadefa.png",
    cta: "Schedule a Consultation",
    reverse: true,
  },
  {
    id: "specialty",
    label: "SVC-03",
    title: "Specialty & Equipment Transport",
    description:
      "With professional certifications and compliance training, we handle sensitive, confidential, and high-value cargo with care and precision. We also transport machinery, appliances, furniture, and oversized items.",
    items: [
      "Medical deliveries & HIPAA-protected materials",
      "Secure documents & confidential items",
      "Biohazard-sensitive & regulated cargo",
      "High-value equipment & specialized items",
    ],
    image: "https://media.base44.com/images/public/69de46d644e778bcad0aa46c/042e5637c_generated_3b2788fa.png",
    cta: "Request Specialty Transport",
    reverse: false,
  },
];

function DetailBlock({ detail }) {
  const content = (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-primary" />
        <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
          {detail.label}
        </span>
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold">{detail.title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">
        {detail.description}
      </p>
      <ul className="space-y-3">
        {detail.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
      <a href="#quote">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-6 gap-2 mt-2">
          {detail.cta}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </a>
    </motion.div>
  );

  const image = (
    <motion.div
      className="aspect-video overflow-hidden border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <img
        src={detail.image}
        alt={`${detail.title} - Essex Transport professional service`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {detail.reverse ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  );
}

export default function ServiceDetails() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 lg:space-y-32">
        {DETAILS.map((detail) => (
          <DetailBlock key={detail.id} detail={detail} />
        ))}
      </div>
    </section>
  );
}
