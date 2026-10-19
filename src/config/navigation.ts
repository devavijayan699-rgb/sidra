/**
 * Central Navigation and External Links Configuration
 *
 * LINK RULES:
 * - Internal anchors point to verified valid section IDs on the homepage.
 * - Real organization contact info (email, tel, physical address) is preserved.
 * - External destinations (donation gateways, social profiles, individual blog slugs)
 *   are tracked here as pending items (TODO) to avoid fabricating routes or creating dead links.
 */

import { ContactInfo, SocialLink } from "@/types";

export const CONTACT_INFO: ContactInfo = {
  email: "sidrafoundationka@gmail.com",
  phoneDisplay: "+91 7624 852 616",
  phoneTel: "+917624852616",
  address: "SIDRA Square, Adarsh Nagar, Hadapsar, Pune, Maharashtra",
};

export const SECTION_LINKS = {
  home: "/",
  about: "/about",
  vision: "/#vision",
  impact: "/#impact",
  projects: "/#projects",
  gallery: "/#gallery",
  departments: "/departments",
  blogs: "/news",
  contact: "/#contact",
  donate: "/donate",
} as const;

/**
 * External Links & Pending Production URLs (TODO)
 * Update these once client specifies live endpoints for donation gateway and social channels.
 */
export const PENDING_EXTERNAL_LINKS: {
  readonly donationGateway: {
    readonly url: string;
    readonly isConfigured: boolean;
    readonly note: string;
  };
  readonly socials: readonly SocialLink[];
} = {
  // Donation platform URL (e.g. Razorpay, GiveIndia, Milaap)
  donationGateway: {
    url: "/donate",
    isConfigured: true,
    note: "Donation page route in application",
  },
  // Social media channels
  socials: [
    {
      name: "Instagram",
      href: "#",
      isConfigured: false,
      note: "TODO: Connect official Sidra Foundation Instagram handle",
    },
    {
      name: "Facebook",
      href: "#",
      isConfigured: false,
      note: "TODO: Connect official Sidra Foundation Facebook page",
    },
    {
      name: "YouTube",
      href: "#",
      isConfigured: false,
      note: "TODO: Connect official Sidra Foundation YouTube channel",
    },
    {
      name: "LinkedIn",
      href: "#",
      isConfigured: false,
      note: "TODO: Connect official Sidra Foundation LinkedIn organization page",
    },
  ],
} as const;
