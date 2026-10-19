import { FeaturedStory, NewsStoryItem } from "@/types";

export const featuredNewsStory: FeaturedStory = {
  tag: "News",
  date: "02 Oct 2026",
  title: "Safe Water Mission Brings Clean Drinking Water to More Villages",
  description:
    "New community water points are now serving families who previously walked miles for safe water. Here is how local volunteers and partners made it happen, and what comes next.",
  image: "/assets/news-safe-water.webp",
  imageAlt: "Safe Water Mission",
  linkHref: "/news/safe-water-mission",
};

export const newsStories: NewsStoryItem[] = [
  {
    id: "news-1",
    tag: "News",
    date: "24 Sep 2026",
    title: "Happy Meal Reaches Three More Schools",
    description:
      "Our daily nutrition programme now serves students at three additional partner schools, keeping children fed, focused and ready to learn.",
    image: "/assets/dept-early-education.webp",
    linkHref: "#",
    hasDedicatedArticle: false,
  },
  {
    id: "news-2",
    tag: "Blogs",
    date: "15 Sep 2026",
    title: "Students Lead a Campus Tree-Planting Drive",
    description:
      "Learners from our residential programme planted saplings across the campus, learning first-hand what it means to care for shared spaces.",
    image: "/assets/about-tree.webp",
    linkHref: "#",
    hasDedicatedArticle: false,
  },
  {
    id: "news-3",
    tag: "News",
    date: "06 Sep 2026",
    title: "A Year of Communal Harmony, Celebrated Together",
    description:
      "Families, teachers and volunteers gathered to reflect on a year of dialogue, shared meals and community-led projects.",
    image: "/assets/about-community.webp",
    linkHref: "#",
    hasDedicatedArticle: false,
  },
  {
    id: "news-4",
    tag: "Blogs",
    date: "28 Aug 2026",
    title: "Mentorship Stories from Our Residential Students",
    description:
      "Hear from students about how mentorship, discipline and a supportive hostel community are shaping their goals.",
    image: "/assets/about-students.webp",
    linkHref: "#",
    hasDedicatedArticle: false,
  },
  {
    id: "news-5",
    tag: "Blogs",
    date: "19 Aug 2026",
    title: "Vision 2030: Our Roadmap for Self-Reliant Communities",
    description:
      "A look at the goals guiding Sidra Foundation to 2030, from quality education to sustainable social development.",
    image: "/assets/hero.webp",
    linkHref: "#",
    hasDedicatedArticle: false,
  },
  {
    id: "news-6",
    tag: "News",
    date: "03 Aug 2026",
    title: "Mercy Van Brings Care Closer to Home",
    description:
      "Our mobile relief unit continues to reach families in remote areas with essential supplies and healthcare support.",
    image: "/assets/about-community.webp",
    linkHref: "#",
    hasDedicatedArticle: false,
  },
];
