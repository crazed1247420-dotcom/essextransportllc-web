
import React from "react";
import { Shield, FileCheck, Award, AlertTriangle } from "lucide-react";

const CERT_ICONS = [
  { icon: Shield, label: "DOT Compliant" },
  { icon: FileCheck, label: "MC Registered" },
  { icon: Award, label: "Safety Rated" },
  { icon: AlertTriangle, label: "OSHA Compliant" },
];

const LINKS = {
  Services: [
    { label: "Last-Mile Delivery", href: "#services" },
    { label: "B2B Routes", href: "#services" },
    { label: "Specialty Transport", href: "#services" },
    { label: "Equipment Hauling", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Service Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
    { label: "Get a Quote", href: "#quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* Oversized Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-bold tracking-tighter text-secondary/40 leading-none whitespace-nowrap">
          ESSEX
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <img
                src="https://media.base44.com/images/public/69de46d644e778bcad0aa46c/4a2fe1a9f_EssexLogotr.png"
                alt="Essex Transport LLC"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional, insured, and on-time logistics for businesses and
              individuals across West Michigan.
            </p>
            <div className="text-xs font-mono text-muted-foreground space-y-1">
              <p>+1 (616) 289-1570</p>
              <p>dan@essextransportllc.com</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-6">
              Industry Standards
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {CERT_ICONS.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 border border-border"
                >
                  <cert.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-[0.65rem] font-mono text-muted-foreground">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} ESSEX TRANSPORT LLC. ALL RIGHTS
            RESERVED.
          </p>
          <p className="text-xs font-mono text-muted-foreground tracking-wider">
            LOCAL · PROFESSIONAL · INSURED
          </p>
        </div>
      </div>
    </footer>
  );
}
