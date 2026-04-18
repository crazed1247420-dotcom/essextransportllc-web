import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

const STEPS = [
  { label: "Contact Info", code: "STEP-01" },
  { label: "Transport Details", code: "STEP-02" },
  { label: "Confirm & Submit", code: "STEP-03" },
];

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    urgency: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    cargo: "",
    weight: "",
    handling: "",
    notes: "",
  });

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canProceed = () => {
    if (step === 0) return form.name && form.email && form.phone;
    if (step === 1) return form.pickup && form.dropoff;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll respond within 1 hour.");
    setForm({ name: "", email: "", phone: "", urgency: "", pickup: "", dropoff: "", date: "", time: "", cargo: "", weight: "", handling: "", notes: "" });
    setStep(0);
  };

  return (
    <section id="quote" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
              Precision Request
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">Request a Quote</h2>
          <p className="text-muted-foreground mt-3">
            Tell us about your transport needs. We respond quickly with pricing and availability.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {STEPS.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center text-xs font-mono font-semibold border transition-colors ${
                    i <= step
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border"
                  }`}
                >
                  {i < step ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`text-xs font-mono tracking-wider hidden sm:inline ${
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`w-12 h-px ${
                    i < step ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="border border-border bg-card/50 p-8">
            {/* Step 1 */}
            {step === 0 && (
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
 
