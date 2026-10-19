import type { Metadata } from "next";
import DonateHeader from "@/components/donate/DonateHeader";
import DonationExperience from "@/components/donate/DonationExperience";

export const metadata: Metadata = {
  title: "Donate | Sidra Foundation",
  description:
    "Choose a project, then pick a package or give an amount of your own to support Sidra Foundation programs.",
};

export default function DonatePage() {
  return (
    <main id="main-content">
      {/* Donation Page Header with clean motion reveal */}
      <DonateHeader />

      {/* Interactive Donation Experience (Client Component) */}
      <DonationExperience />
    </main>
  );
}
