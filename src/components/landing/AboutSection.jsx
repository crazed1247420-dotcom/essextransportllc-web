import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, FileCheck, AlertTriangle } from "lucide-react";

const CERTS = [
  { icon: Shield, label: "TWIC Certified", code: "CERT-001" },
  { icon: FileCheck, label: "TSA CH-10", code: "CERT-002" },
  { icon: Award, label: "HIPAA Compliant", code: "CERT-003" },
  { icon: AlertTriangle, label: "Bloodborne Pathogen Cert.", code: "CERT-004" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-video overflow-hidden border border-border">
              <img
                src="https://media.base44.com/images/public/69de46d644e778bcad0aa46c/b33c314e0_generated_e7890306.png"
                alt="Essex Transport logistics hub with fleet vehicles at golden hour"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay Logo */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-background/90 backdrop-blur-sm p-2 border border-border">
              <img
                src="https://media.base44.com/images/public/69de46d644e778bcad0aa46c/6a34b5446_EssexLogo-splittrustseal-modifiednoblack.png"
                alt="Essex Transport LLC trust seal"
                className="h-20 w-20 object-contain"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
                  About Essex
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Your Trusted
                <br />
                <span className="text-primary">Local Partner</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              Essex Transport LLC provides fast, reliable, and professional
              transport services across West Michigan. Locally owned, fully
              insured, and committed to clear communication and on-time
              performance.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              What started as a single-vehicle operation has grown into a
              trusted logistics partner for individuals and businesses who value
              reliability and professionalism.
            </p>

            {/* Certifications Grid */}
            <div>
              <span className="text-[0.65rem] font-mono tracking-[0.3em] text-muted-foreground uppercase block mb-4">
                Industry Certifications
              </span>
              <div className="grid grid-cols-2 gap-3">
                {CERTS.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 border border-border bg-secondary/30 hover:border-primary/30 transition-colors"
                  >
                    <cert.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {cert.label}
                      </p>
                      <p className="text-[0.6rem] font-mono text-muted-foreground tracking-wider">
                        {cert.code}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
