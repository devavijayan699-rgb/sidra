import { DonationProgram } from "@/types";

function pl(q: number, one: string, many: string) {
  return q === 1 ? one : many;
}

export const DONATION_PROGRAMS: Record<string, DonationProgram> = {
  "happy-meal": {
    id: "happy-meal",
    name: "Happy Meal",
    description: "Nutritious daily meals that keep children fed, focused and ready to learn.",
    packages: [
      {
        name: "Monthly Meal Plan",
        unit: 1000,
        note: (q: number) => `Feeds ${q} ${pl(q, "child", "children")} for a month`,
      },
      {
        name: "Term Meal Plan",
        unit: 3000,
        note: (q: number) => `Feeds ${q} ${pl(q, "child", "children")} for a school term`,
      },
      {
        name: "Annual Meal Plan",
        unit: 10000,
        note: (q: number) => `Feeds ${q} ${pl(q, "child", "children")} for a full school year`,
      },
    ],
  },
  "safe-water": {
    id: "safe-water",
    name: "Safe Water Mission",
    description: "Clean, accessible drinking water for villages that have walked miles without it.",
    packages: [
      {
        name: "Water Kit",
        unit: 1000,
        note: (q: number) => `Safe drinking water for ${q} ${pl(q, "family", "families")}`,
      },
      {
        name: "Community Tap",
        unit: 5000,
        note: (q: number) => `Installs ${q} community ${pl(q, "tap", "taps")}`,
      },
      {
        name: "Water Point",
        unit: 25000,
        note: (q: number) => `Builds ${q} village water ${pl(q, "point", "points")}`,
      },
    ],
  },
  "mercy-van": {
    id: "mercy-van",
    name: "Mercy Van",
    description: "Mobile healthcare and emergency transport reaching people who need it most.",
    packages: [
      {
        name: "Care Visit",
        unit: 500,
        note: (q: number) => `Covers ${q} home health ${pl(q, "visit", "visits")}`,
      },
      {
        name: "Health Camp",
        unit: 2500,
        note: (q: number) => `Supports ${q} community health ${pl(q, "camp", "camps")}`,
      },
      {
        name: "Van Week",
        unit: 10000,
        note: (q: number) => `Keeps the van on the road for ${q} ${pl(q, "week", "weeks")}`,
      },
    ],
  },
  "preschool": {
    id: "preschool",
    name: "Sidra Kids Preschool",
    description: "Value-based early learning that gives young children a strong start.",
    packages: [
      {
        name: "Learning Kit",
        unit: 1000,
        note: (q: number) => `Books and supplies for ${q} ${pl(q, "child", "children")}`,
      },
      {
        name: "Term Sponsor",
        unit: 4000,
        note: (q: number) => `Sponsors ${q} ${pl(q, "child", "children")} for a term`,
      },
      {
        name: "Year Sponsor",
        unit: 12000,
        note: (q: number) => `Sponsors ${q} ${pl(q, "child", "children")} for a year`,
      },
    ],
  },
  "general": {
    id: "general",
    name: "General",
    description: "Give where it is needed most. Your gift is shared across all our programmes.",
    packages: [
      {
        name: "Everyday Giving",
        unit: 500,
        note: () => "Supports our work wherever it is needed most",
      },
      {
        name: "Community Boost",
        unit: 2500,
        note: () => "Strengthens programmes across all departments",
      },
      {
        name: "Foundation Partner",
        unit: 10000,
        note: () => "A lasting contribution to every Sidra programme",
      },
    ],
  },
};

export const DONATION_PROGRAM_KEYS = [
  "happy-meal",
  "safe-water",
  "mercy-van",
  "preschool",
  "general",
] as const;
