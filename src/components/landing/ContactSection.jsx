import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-24 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
              Direct Line
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Prefer to Talk Now?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Reach out directly for urgent or time-sensitive transport needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+16162891570">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 gap-3 text-base min-w-[200px]">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a href="mailto:dan@essextransportllc.com">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary font-semibold h-14 px-8 gap-3 text-base min-w-[200px]"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-sm font-mono text-muted-foreground">
            <span>+1 (616) 289-1570</span>
            <span className="hidden sm:inline">·</span>
            <span>dan@essextransportllc.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
