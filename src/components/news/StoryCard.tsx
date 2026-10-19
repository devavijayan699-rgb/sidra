import Image from "next/image";
import Link from "next/link";
import styles from "./StoryCard.module.css";

export interface StoryCardData {
  id: string;
  image: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  linkHref: string;
  hasDedicatedArticle?: boolean;
}

interface StoryCardProps {
  story: StoryCardData;
}

export default function StoryCard({ story }: StoryCardProps) {
  const tooltip =
    story.hasDedicatedArticle !== undefined
      ? story.hasDedicatedArticle
        ? "Read full story"
        : "Archived excerpt — dedicated article pending review"
      : undefined;

  return (
    <article className={styles.storyCard}>
      <Image
        src={story.image}
        alt={story.title}
        width={440}
        height={220}
        className={styles.storyImg}
      />
      <div className={styles.storyBody}>
        <div className={styles.storyMeta}>
          <span className={styles.storyPill}>{story.tag}</span>
          <time>{story.date}</time>
        </div>
        <h3>{story.title}</h3>
        <p>{story.description}</p>
        <Link href={story.linkHref} className={styles.btnSoft} title={tooltip}>
          <span>Read More</span>
          <Image
            src="/assets/arrow-right-16.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
