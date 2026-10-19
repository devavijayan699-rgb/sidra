import type { Metadata } from "next";
import Image from "next/image";
import DonationCTA from "@/components/sections/DonationCTA";
import RevealWrapper from "@/components/ui/RevealWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StoryCard from "@/components/news/StoryCard";
import { featuredNewsStory, newsStories } from "@/data/news";
import NewsFeaturedHeader from "@/components/news/NewsFeaturedHeader";
import styles from "./NewsPage.module.css";

export const metadata: Metadata = {
  title: "Blogs & News | Sidra Foundation",
  description:
    "The latest stories, initiatives and community events from Sidra Foundation.",
};

export default function NewsListingPage() {
  return (
    <main id="main-content">
      {/* Featured Story */}
      <section className={styles.featured} aria-labelledby="featured-story-title">
        <div className={styles.featuredGrid}>
          <Image
            className={styles.featuredImg}
            src={featuredNewsStory.image}
            alt={featuredNewsStory.imageAlt}
            width={640}
            height={520}
            priority
            style={{ viewTransitionName: "news-hero-safe-water-mission" }}
          />
          <NewsFeaturedHeader
            tag={featuredNewsStory.tag}
            date={featuredNewsStory.date}
            title={featuredNewsStory.title}
            description={featuredNewsStory.description}
            linkHref={featuredNewsStory.linkHref}
          />
        </div>
      </section>

        {/* Latest Stories Grid */}
        <RevealWrapper>
          <section className={styles.latest} aria-labelledby="latest-stories-heading">
            <div className={styles.stack}>
              <div className={styles.headBlock}>
                <SectionHeading
                  id="latest-stories-heading"
                  prefix="Latest"
                  accent="Stories"
                />
                <p className={styles.lead}>
                  The latest from our departments, initiatives and community events.
                </p>
              </div>

              <ScrollReveal className={styles.storiesGrid} staggerSelector="article" staggerMs={75}>
                {newsStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </ScrollReveal>

              {/* Load More Button */}
              <div className={styles.loadMore}>
                <button
                  className={styles.btnLoad}
                  type="button"
                  aria-label="All current archive stories displayed"
                  disabled
                  style={{ opacity: 0.85, cursor: "default" }}
                >
                  <span>All Stories Displayed</span>
                  <Image
                    src="/assets/chevron-down-green.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </section>
        </RevealWrapper>

        {/* Call to Action with padded top */}
        <RevealWrapper>
          <DonationCTA padded={true} />
        </RevealWrapper>
      </main>
  );
}
