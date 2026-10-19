import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonationCTA from "@/components/sections/DonationCTA";
import RevealWrapper from "@/components/ui/RevealWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ShareButtons from "@/components/news/ShareButtons";
import SectionHeading from "@/components/ui/SectionHeading";
import StoryCard from "@/components/news/StoryCard";
import ArticleHeader from "@/components/news/ArticleHeader";
import styles from "./ArticlePage.module.css";

export const metadata: Metadata = {
  title:
    "Safe Water Mission Brings Clean Drinking Water to More Villages | Sidra Foundation",
  description:
    "New community water points are now serving families who previously walked miles for safe water.",
};

const relatedStories = [
  {
    id: "rel-1",
    image: "/assets/dept-early-education.webp",
    tag: "News",
    date: "24 Sep 2026",
    title: "Happy Meal Reaches Three More Schools",
    description:
      "Our daily nutrition programme now serves students at three additional partner schools, keeping children fed, focused and ready to learn.",
    linkHref: "/news",
  },
  {
    id: "rel-2",
    image: "/assets/about-tree.webp",
    tag: "Blogs",
    date: "15 Sep 2026",
    title: "Students Lead a Campus Tree-Planting Drive",
    description:
      "Learners from our residential programme planted saplings across the campus, learning first-hand what it means to care for shared spaces.",
    linkHref: "/news",
  },
  {
    id: "rel-3",
    image: "/assets/about-community.webp",
    tag: "News",
    date: "06 Sep 2026",
    title: "A Year of Communal Harmony, Celebrated Together",
    description:
      "Families, teachers and volunteers gathered to reflect on a year of dialogue, shared meals and community-led projects.",
    linkHref: "/news",
  },
];

export default function SafeWaterMissionArticlePage() {
  const articleTitle =
    "Safe Water Mission Brings Clean Drinking Water to More Villages";

  return (
    <main id="main-content">
      <article>
        {/* Article Header with clean motion reveal */}
        <ArticleHeader
          date="02 Oct 2026"
          readTime="5 min read"
          title={articleTitle}
        />

        {/* Article Hero Media */}
        <div className={styles.articleHero}>
          <Image
            className={styles.articleHeroImg}
            src="/assets/news-safe-water.webp"
            alt="Children at a new community water point"
            width={1240}
            height={560}
            priority
            style={{ viewTransitionName: "news-hero-safe-water-mission" }}
          />
        </div>

        {/* Article Body Content */}
        <div className={styles.articleBody}>
          <div className={styles.articleBodyCol}>
            <p>
              For many families in our partner villages, the day used to begin
              with a long walk to the nearest reliable water source. Children
              missed school, mothers lost hours of work, and the water they
              carried home was not always safe to drink.
            </p>
            <p>
              This autumn, the Safe Water Mission switched on a new set of
              community water points designed to change that. Each one is
              built, maintained and managed together with the village it
              serves.
            </p>

            <h2>Built with the community, not for it</h2>
            <p>
              Every site began with a conversation. Village elders, teachers
              and volunteers helped choose where the water points would go, so
              that they sit close to homes, schools and the places people
              already gather.
            </p>
            <p>
              Local volunteers were trained to test water quality, carry out
              basic repairs and keep records, which means the systems keep
              running long after our teams have left.
            </p>

            <h2>What changes for families</h2>
            <p>
              With water closer to home, children arrive at school on time and
              rested. Households spend less on treating water-borne illness, and
              women have more time for work and study.
            </p>
            <p>
              Teachers in the neighbouring schools have already noticed the
              difference, reporting steadier attendance in the weeks since the
              first points opened.
            </p>
            <p>
              Health workers in the area say the early signs are encouraging,
              with fewer families visiting clinics for stomach illnesses than
              in the same season last year.
            </p>

            <figure className={styles.pullQuote}>
              <blockquote>
                &ldquo;My daughter used to carry water before school. Now she
                carries her books and nothing else.&rdquo;
              </blockquote>
              <figcaption>A mother from one of the partner villages</figcaption>
            </figure>

            <h2>Keeping the water safe</h2>
            <p>
              A water point is only as good as the care it receives. After
              installation, each site follows a simple routine so that the
              water stays clean and the equipment stays in working order:
            </p>

            <ul className={styles.checklist}>
              <li>
                <Image
                  src="/assets/check-bullet.svg"
                  alt=""
                  width={10}
                  height={21}
                  aria-hidden="true"
                />
                <span>
                  <strong>Regular testing.</strong> Trained volunteers check
                  water quality on a fixed schedule and log the results for the
                  whole village to see.
                </span>
              </li>
              <li>
                <Image
                  src="/assets/check-bullet.svg"
                  alt=""
                  width={10}
                  height={21}
                  aria-hidden="true"
                />
                <span>
                  <strong>Simple repairs.</strong> Common faults such as worn
                  taps and loose fittings are fixed locally, without waiting for
                  a technician to arrive.
                </span>
              </li>
              <li>
                <Image
                  src="/assets/check-bullet.svg"
                  alt=""
                  width={10}
                  height={21}
                  aria-hidden="true"
                />
                <span>
                  <strong>Shared responsibility.</strong> A small village
                  committee looks after cleaning, record keeping and any small
                  contributions towards upkeep.
                </span>
              </li>
              <li>
                <Image
                  src="/assets/check-bullet.svg"
                  alt=""
                  width={10}
                  height={21}
                  aria-hidden="true"
                />
                <span>
                  <strong>Follow-up visits.</strong> Our teams return
                  throughout the year to review each site, retrain volunteers
                  and resolve anything that needs attention.
                </span>
              </li>
            </ul>

            <h2>Learning for the long term</h2>
            <p>
              Alongside the water points, volunteers lead short sessions on
              hygiene, safe storage and handwashing in homes and schools.
              Children often take the lead, carrying what they learn back to
              their families and encouraging good habits at home.
            </p>
            <p>
              These small, steady changes are what turn a new water point into
              lasting good health for the whole community.
            </p>

            <h2>What comes next</h2>
            <p>
              Our teams will continue visiting each site to check water quality
              and support volunteers, while planning the next set of villages.
              If you would like to help extend the mission, you can donate or
              volunteer with us.
            </p>
            <p>
              Every contribution, large or small, helps us reach another
              village, train another set of volunteers and bring clean water a
              little closer to home. Thank you for being part of this work.
            </p>

            {/* Share Controls */}
            <ShareButtons title={articleTitle} />
          </div>
        </div>
      </article>

      {/* Keep Reading (Related Stories) */}
      <RevealWrapper>
        <section className={styles.keepReadingBlock} aria-labelledby="keep-reading-heading">
          <div className={styles.stack}>
            <div className={styles.storiesHead}>
              <SectionHeading
                id="keep-reading-heading"
                prefix="Keep"
                accent="Reading"
              />
              <Link href="/news" className={styles.allStoriesLink}>
                <span>All stories</span>
                <Image
                  src="/assets/arrow-right-16.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
              </Link>
            </div>

            <ScrollReveal className={styles.storiesGrid} staggerSelector="article" staggerMs={75}>
              {relatedStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </ScrollReveal>
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
