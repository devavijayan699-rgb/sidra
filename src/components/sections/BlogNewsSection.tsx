import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/data/homepage";
import styles from "./BlogNewsSection.module.css";

export default function BlogNewsSection() {
  return (
    <section className={styles.blogSection} id="blogs" aria-labelledby="blogs-heading">
      <div className={styles.blogContainer}>
        {/* Head Block */}
        <ScrollReveal className={styles.headBlock}>
          <SectionHeading id="blogs-heading" prefix="Latest" accent="Blogs & News" />
          <p className={styles.lead}>
            Stay connected with our latest stories, educational initiatives,
            community achievements, and inspiring updates.
          </p>
        </ScrollReveal>

        {/* 2-Column Responsive Grid */}
        <ScrollReveal
          className={styles.blogsGrid}
          staggerSelector={`.${styles.bcard}`}
          staggerMs={100}
        >
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.bcard}>
              <div className={styles.bcardImg}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={320}
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 600px"
                  className={styles.bcardImage}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles.tag}>{post.tag}</span>
              </div>

              <div className={styles.bcardBody}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogDesc}>{post.description}</p>
                <Link href={post.linkHref} className={styles.readMoreLink}>
                  <span>Read more</span>
                  <Image
                    className={styles.arrowIcon}
                    src="/assets/arrow-right-16.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
