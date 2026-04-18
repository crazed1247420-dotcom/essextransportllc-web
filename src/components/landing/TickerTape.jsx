import React from "react";

const TICKER_ITEMS = [
  "ACTIVE ROUTES: EAST COAST → MIDWEST → SOUTH",
  "TWIC CERTIFIED",
  "TSA CH-10 COMPLIANT",
  "HIPAA PROTECTED TRANSPORT",
  "SERVING GRAND RAPIDS & WEST MICHIGAN",
  "FULLY INSURED & BONDED",
  "SAME-DAY DELIVERY AVAILABLE",
  "B2B LOGISTICS PARTNER",
];

export default function TickerTape() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-secondary/60 border-b border-border overflow-hidden py-2.5">
      <div className="animate-ticker flex whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center mx-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-4 flex-shrink-0" />
            <span className="text-[0.7rem] font-mono tracking-[0.2em] text-muted-foreground uppercase">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
