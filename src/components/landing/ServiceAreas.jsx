import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AREAS = [
  "Grand Rapids",
  "Wyoming",
  "Kentwood",
  "Byron Center",
  "Grandville",
  "Walker",
  "And surrounding areas",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
              Coverage Area
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Proudly Serving
            <br />
            <span className="text-primary">West Michigan</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Based in the Grand Rapids area, delivering professional and reliable
            transport services to surrounding communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {AREAS.map((area, i) => (
            <motion.div
              key={area}
              className="flex items-center gap-3 p-5 border border-border bg-card/50 hover:border-primary/40 hover:bg-secondary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                {area}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
