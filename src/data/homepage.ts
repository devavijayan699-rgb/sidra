import {
  VisionGoal,
  ImpactMetric,
  FlagshipProject,
  GalleryItem,
  DepartmentItem,
  BlogPost,
} from "@/types";
import { SECTION_LINKS } from "@/config/navigation";

export const visionGoals: VisionGoal[] = [
  {
    id: "education",
    icon: "/assets/pencil.svg",
    title: "Education for All",
    description:
      "Expand access to quality, value-based education for children and youth in underserved communities.",
  },
  {
    id: "empowerment",
    icon: "/assets/users.svg",
    title: "Community Empowerment",
    description:
      "Equip underprivileged families with knowledge, skills, and opportunities to achieve self-reliance.",
  },
  {
    id: "leadership",
    icon: "/assets/award.svg",
    title: "Leadership Development",
    description:
      "Nurture responsible, confident young leaders who contribute positively to society and national development.",
  },
  {
    id: "opportunities",
    icon: "/assets/flag.svg",
    title: "Equal Opportunities",
    description:
      "Bridge educational and social gaps by creating inclusive opportunities for individuals from disadvantaged backgrounds.",
  },
  {
    id: "harmony",
    icon: "/assets/heart-sm.svg",
    title: "Communal Harmony",
    description:
      "Promote unity, mutual respect, and social responsibility to strengthen harmony across diverse communities.",
  },
  {
    id: "impact",
    icon: "/assets/globe.svg",
    title: "Sustainable Social Impact",
    description:
      "Build lasting educational and community development initiatives that empower future generations and transform lives.",
  },
];

export const impactMetrics: ImpactMetric[] = [
  {
    id: "students",
    target: 25,
    suffix: "K+",
    displayValue: "25K+",
    label: "Students Empowered",
  },
  {
    id: "families",
    target: 1000,
    suffix: "+",
    useGrouping: true,
    displayValue: "1,000+",
    label: "Families Supported",
  },
  {
    id: "communities",
    target: 250,
    suffix: "+",
    displayValue: "250+",
    label: "Communities Reached",
  },
  {
    id: "initiatives",
    target: 5000,
    suffix: "+",
    useGrouping: true,
    displayValue: "5,000+",
    label: "Educational Initiatives",
  },
  {
    id: "volunteers",
    target: 650,
    suffix: "+",
    displayValue: "650+",
    label: "Dedicated Volunteers",
  },
  {
    id: "states",
    target: 64,
    suffix: "+",
    displayValue: "64+",
    label: "States of Operation",
  },
];

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "happy-meal",
    title: "Happy Meal",
    description:
      "Through the Happy Meal initiative, we provide nutritious meals to individuals and families in need, spreading kindness and reducing hunger.",
    image: "/assets/happy-meal.webp",
    badgeIcon: "/assets/heart-card.svg",
    badgeAlt: "Heart badge",
    linkHref: SECTION_LINKS.projects,
  },
  {
    id: "safe-water",
    title: "Safe Water Mission",
    description:
      "Our Safe Water Mission delivers clean, accessible drinking water to communities in need, improving health outcomes.",
    image: "/assets/safe-water.webp",
    badgeIcon: "/assets/water.svg",
    badgeAlt: "Water badge",
    linkHref: SECTION_LINKS.projects,
  },
  {
    id: "mercy-van",
    title: "Mercy Van",
    description:
      "Mobile healthcare and emergency transportation services reaching remote and underserved areas with compassion.",
    image: "/assets/mercy-van.webp",
    badgeIcon: "/assets/truck.svg",
    badgeAlt: "Medical van badge",
    linkHref: SECTION_LINKS.projects,
  },
  {
    id: "preschool",
    title: "Sidra Kids Preschool",
    description:
      "Value-based early learning for young children, building strong foundations through creative activities and skill development.",
    image: "/assets/preschool.webp",
    badgeIcon: "/assets/cap.svg",
    badgeAlt: "Graduation cap badge",
    linkHref: SECTION_LINKS.projects,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    image: "/assets/mercy-van.webp",
    caption: "Community learning gathering",
  },
  {
    id: "gallery-2",
    image: "/assets/preschool.webp",
    caption: "Students of Sidra",
  },
  {
    id: "gallery-3",
    image: "/assets/tree-planting.webp",
    caption: "Planting for a greener tomorrow",
  },
];

export const departmentsData: DepartmentItem[] = [
  {
    id: "early-education",
    title: "Early Education and Foundational Learning",
    description:
      "Building strong educational foundations through value-based early learning, creative activities, and essential skill development.",
    linkHref: "/departments/early-education",
  },
  {
    id: "school-outreach",
    title: "School Outreach and Academic Excellence",
    description:
      "Enhancing academic outcomes through targeted outreach, tutoring programs, and quality educational resources for schools.",
    linkHref: "/departments/school-outreach",
  },
  {
    id: "residential-schooling",
    title: "Residential Schooling and Mentorship",
    description:
      "Providing holistic residential education programs with mentorship, character development, and comprehensive student care.",
    linkHref: "/departments/residential-schooling",
  },
  {
    id: "community-care",
    title: "Community Care and Humanitarian Relief",
    description:
      "Delivering essential humanitarian aid, healthcare support, and community welfare programs to those most in need.",
    linkHref: "/departments/community-care",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "empowering-young-minds",
    tag: "News",
    title: "Empowering Young Minds Through Education",
    description:
      "Building strong educational foundations through value-based early learning, creative activities, and essential skill development.",
    image: "/assets/blog1.webp",
    linkHref: SECTION_LINKS.blogs,
  },
  {
    id: "small-acts-of-kindness",
    tag: "Article",
    title: "Small Acts of Kindness, Lasting Impact",
    description:
      "How everyday acts of generosity create ripples of positive change across communities and inspire others to give.",
    image: "/assets/tree-planting.webp",
    linkHref: SECTION_LINKS.blogs,
  },
  {
    id: "nurturing-tomorrows-leaders",
    tag: "Article",
    title: "Nurturing Tomorrow’s Leaders Through Learning",
    description:
      "Our leadership programs are shaping confident, responsible young individuals ready to serve their communities.",
    image: "/assets/blog3.webp",
    linkHref: SECTION_LINKS.blogs,
  },
  {
    id: "building-stronger-communities",
    tag: "News",
    title: "Building Stronger Communities Together",
    description:
      "Community building initiatives that bring people together, foster collaboration, and create lasting bonds of support.",
    image: "/assets/blog4.webp",
    linkHref: SECTION_LINKS.blogs,
  },
];
