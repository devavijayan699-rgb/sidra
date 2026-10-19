export interface VisionGoal {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ImpactMetric {
  id: string;
  target: number;
  suffix: string;
  prefix?: string;
  useGrouping?: boolean;
  displayValue: string;
  label: string;
}

export interface FlagshipProject {
  id: string;
  title: string;
  description: string;
  image: string;
  badgeIcon: string;
  badgeAlt: string;
  linkHref: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
}

export interface DepartmentItem {
  id: string;
  title: string;
  description: string;
  linkHref: string;
}

export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  linkHref: string;
}

export interface SocialLink {
  name: string;
  href: string;
  isConfigured: boolean;
  note: string;
}

export interface ContactInfo {
  email: string;
  phoneDisplay: string;
  phoneTel: string;
  address: string;
}

export interface WhatWeDoItem {
  num: string;
  title: string;
  description: string;
}

export interface DepartmentStory {
  id: string;
  image: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  linkHref: string;
}

export interface DepartmentDetail {
  slug: string;
  title: string;
  titleEm: string;
  metaDescription: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  whatWeDo: WhatWeDoItem[];
  stories: DepartmentStory[];
  otherDepartments: {
    title: string;
    description: string;
    linkHref: string;
  }[];
}

export interface DepartmentOverviewItem {
  id: string;
  num: string;
  title: string;
  shortTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  linkHref: string;
  isReversed?: boolean;
}

export interface NewsStoryItem {
  id: string;
  slug?: string;
  tag: "News" | "Blogs";
  date: string;
  title: string;
  description: string;
  image: string;
  linkHref: string;
  hasDedicatedArticle?: boolean;
}

export interface FeaturedStory {
  tag: "News" | "Blogs";
  date: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkHref: string;
}

export interface DonationPackage {
  name: string;
  unit: number;
  note: (quantity: number) => string;
}

export interface DonationProgram {
  id: string;
  name: string;
  description: string;
  packages: DonationPackage[];
}

export interface DonorFormData {
  project: string;
  plan: string;
  amount: number;
  name: string;
  phone: string;
  email?: string;
  pan?: string;
}

