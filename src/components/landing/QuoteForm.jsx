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
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="John Doe"
                    className="h-12 bg-secondary border-border"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="john@company.com"
                    className="h-12 bg-secondary border-border"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(616) 000-0000"
                    className="h-12 bg-secondary border-border"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Urgency Level
                  </label>
                  <Select
                    value={form.urgency}
                    onValueChange={(v) => update("urgency", v)}
                  >
                    <SelectTrigger className="h-12 bg-secondary border-border">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="same-day">Same-Day</SelectItem>
                      <SelectItem value="asap">ASAP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Pickup Address *
                  </label>
                  <Input
                    value={form.pickup}
                    onChange={(e) => update("pickup", e.target.value)}
                    placeholder="123 Main St, Grand Rapids, MI"
                    className="h-12 bg-secondary border-border"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Drop-Off Address *
                  </label>
                  <Input
                    value={form.dropoff}
                    onChange={(e) => update("dropoff", e.target.value)}
                    placeholder="456 Commerce Ave, Kentwood, MI"
                    className="h-12 bg-secondary border-border"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                      Preferred Time
                    </label>
                    <Input
                      type="time"
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Type of Cargo
                  </label>
                  <Input
                    value={form.cargo}
                    onChange={(e) => update("cargo", e.target.value)}
                    placeholder="Packages, Equipment, Documents..."
                    className="h-12 bg-secondary border-border"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                      Est. Weight / Size
                    </label>
                    <Input
                      value={form.weight}
                      onChange={(e) => update("weight", e.target.value)}
                      placeholder="e.g. 50 lbs"
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                      Special Handling
                    </label>
                    <Select
                      value={form.handling}
                      onValueChange={(v) => update("handling", v)}
                    >
                      <SelectTrigger className="h-12 bg-secondary border-border">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="fragile">Fragile</SelectItem>
                        <SelectItem value="medical">Medical</SelectItem>
                        <SelectItem value="oversized">Oversized</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">
                    Additional Notes
                  </label>
                  <Textarea
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Any special instructions or details..."
                    className="bg-secondary border-border min-h-[120px] resize-none"
                  />
                </div>

                {/* Summary */}
                <div className="border border-border bg-secondary/30 p-6 space-y-3">
                  <span className="text-[0.65rem] font-mono tracking-[0.3em] text-primary uppercase">
                    Request Summary
                  </span>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                    <div>
                      <span className="text-muted-foreground text-xs">Name</span>
                      <p className="font-medium">{form.name}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs">Phone</span>
                      <p className="font-medium">{form.phone}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs">From</span>
                      <p className="font-medium">{form.pickup}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs">To</span>
                      <p className="font-medium">{form.dropoff}</p>
                    </div>
                    {form.cargo && (
                      <div>
                        <span className="text-muted-foreground text-xs">Cargo</span>
                        <p className="font-medium">{form.cargo}</p>
                      </div>
                    )}
                    {form.urgency && (
                      <div>
                        <span className="text-muted-foreground text-xs">Urgency</span>
                        <p className="font-medium capitalize">{form.urgency}</p>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted regarding your quote request.
                </p>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="h-12 px-6 gap-2 border-border"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}
              {step < 2 ? (
                <Button
                  type="button"
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 gap-2 font-semibold"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 gap-2 font-semibold"
                >
                  <Send className="w-4 h-4" />
                  Submit Quote Request
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
