import { DepartmentDetail, DepartmentOverviewItem } from "@/types";

export const departmentsOverview: DepartmentOverviewItem[] = [
  {
    id: "early-education",
    num: "01",
    title: "Early Education and Foundational Learning",
    shortTitle: "Early Education",
    description:
      "Building strong educational foundations through value-based early learning, creative activities, and essential skill development.",
    image: "/assets/dept-early-education.webp",
    imageAlt: "Early Education and Foundational Learning",
    linkHref: "/departments/early-education",
    isReversed: false,
  },
  {
    id: "school-outreach",
    num: "02",
    title: "School Outreach and Academic Excellence",
    shortTitle: "School Outreach",
    description:
      "Enhancing academic outcomes through targeted outreach, tutoring programs, and quality educational resources for schools.",
    image: "/assets/about-students.webp",
    imageAlt: "School Outreach and Academic Excellence",
    linkHref: "/departments/school-outreach",
    isReversed: true,
  },
  {
    id: "residential-schooling",
    num: "03",
    title: "Residential Schooling and Mentorship",
    shortTitle: "Residential Schooling",
    description:
      "Providing holistic residential education programs with mentorship, character development, and comprehensive student care.",
    image: "/assets/about-tree.webp",
    imageAlt: "Residential Schooling and Mentorship",
    linkHref: "/departments/residential-schooling",
    isReversed: false,
  },
  {
    id: "community-care",
    num: "04",
    title: "Community Care and Humanitarian Relief",
    shortTitle: "Community Care",
    description:
      "Delivering essential humanitarian aid, healthcare support, and community welfare programs to those most in need.",
    image: "/assets/about-community.webp",
    imageAlt: "Community Care and Humanitarian Relief",
    linkHref: "/departments/community-care",
    isReversed: true,
  },
];

export const departmentDetails: Record<string, DepartmentDetail> = {
  "early-education": {
    slug: "early-education",
    title: "Early Education and",
    titleEm: "Foundational Learning",
    metaDescription:
      "Value-based early learning, creative activities and essential skill development for young children.",
    heroDescription:
      "The first years of school shape everything that follows. This department gives young children a strong start through learning rooted in good values, with space to explore, create and grow in confidence. Our early learning programme combines creative activities with the essential skills children need, working alongside families and teachers so that every child is ready for the classroom and for life.",
    heroImage: "/assets/dept-early-education.webp",
    heroImageAlt: "Early education",
    whatWeDo: [
      {
        num: "01",
        title: "Value-Based Early Learning",
        description:
          "Nurturing curiosity, good character and a love of learning from the very first years in the classroom.",
      },
      {
        num: "02",
        title: "Creative Activities",
        description:
          "Play, art and hands-on activities that help young children express themselves and build confidence.",
      },
      {
        num: "03",
        title: "Essential Skill Development",
        description:
          "Building the language, numeracy and social skills every child needs to move forward in school.",
      },
    ],
    stories: [
      {
        id: "ee-story-1",
        image: "/assets/dept-early-education.webp",
        tag: "News",
        date: "24 Sep 2026",
        title: "Happy Meal Reaches Three More Schools",
        description:
          "Our daily nutrition programme now serves students at three additional partner schools, keeping children fed, focused and ready to learn.",
        linkHref: "/news",
      },
      {
        id: "ee-story-2",
        image: "/assets/about-students.webp",
        tag: "Blogs",
        date: "28 Aug 2026",
        title: "Mentorship Stories from Our Residential Students",
        description:
          "Hear from students about how mentorship, discipline and a supportive hostel community are shaping their goals.",
        linkHref: "/news",
      },
      {
        id: "ee-story-3",
        image: "/assets/about-community.webp",
        tag: "News",
        date: "06 Sep 2026",
        title: "A Year of Communal Harmony, Celebrated Together",
        description:
          "Families, teachers and volunteers gathered to reflect on a year of dialogue, shared meals and community-led projects.",
        linkHref: "/news",
      },
    ],
    otherDepartments: [
      {
        title: "School Outreach and Academic Excellence",
        description:
          "Enhancing academic outcomes through targeted outreach, tutoring programs, and quality educational resources for schools.",
        linkHref: "/departments/school-outreach",
      },
      {
        title: "Residential Schooling and Mentorship",
        description:
          "Providing holistic residential education programs with mentorship, character development, and comprehensive student care.",
        linkHref: "/departments/residential-schooling",
      },
      {
        title: "Community Care and Humanitarian Relief",
        description:
          "Delivering essential humanitarian aid, healthcare support, and community welfare programs to those most in need.",
        linkHref: "/departments/community-care",
      },
    ],
  },

  "school-outreach": {
    slug: "school-outreach",
    title: "School Outreach and",
    titleEm: "Academic Excellence",
    metaDescription:
      "Targeted outreach, tutoring programmes and quality learning resources that improve academic outcomes in partner schools.",
    heroDescription:
      "Strong schools build strong communities. This department works alongside partner schools to improve academic outcomes through targeted outreach, tutoring programmes and quality learning resources. By supporting teachers and students directly, we help close learning gaps and give every child the chance to succeed in the classroom.",
    heroImage: "/assets/about-students.webp",
    heroImageAlt: "School outreach",
    whatWeDo: [
      {
        num: "01",
        title: "Targeted School Outreach",
        description:
          "Partnering with schools in underserved areas to identify needs and bring support where it matters most.",
      },
      {
        num: "02",
        title: "Tutoring Programmes",
        description:
          "Small-group tutoring that helps students strengthen core subjects and build lasting study habits.",
      },
      {
        num: "03",
        title: "Quality Learning Resources",
        description:
          "Books, materials and teaching support that equip schools and teachers to raise academic outcomes.",
      },
    ],
    stories: [
      {
        id: "so-story-1",
        image: "/assets/dept-early-education.webp",
        tag: "News",
        date: "24 Sep 2026",
        title: "Tutoring Programme Expands to Five More Schools",
        description:
          "Weekly small-group tutoring is now reaching students in five additional partner schools, with a focus on maths and languages.",
        linkHref: "/news",
      },
      {
        id: "so-story-2",
        image: "/assets/about-students.webp",
        tag: "Blogs",
        date: "28 Aug 2026",
        title: "How Outreach Volunteers Support Teachers",
        description:
          "Volunteers share how classroom visits and resource drives are helping teachers do more with limited materials.",
        linkHref: "/news",
      },
      {
        id: "so-story-3",
        image: "/assets/about-community.webp",
        tag: "News",
        date: "06 Sep 2026",
        title: "Academic Awards Celebrate Student Progress",
        description:
          "Students, parents and teachers came together to recognise steady improvement and hard work across partner schools.",
        linkHref: "/news",
      },
    ],
    otherDepartments: [
      {
        title: "Early Education and Foundational Learning",
        description:
          "Building strong educational foundations through value-based early learning, creative activities, and essential skill development.",
        linkHref: "/departments/early-education",
      },
      {
        title: "Residential Schooling and Mentorship",
        description:
          "Providing holistic residential education programs with mentorship, character development, and comprehensive student care.",
        linkHref: "/departments/residential-schooling",
      },
      {
        title: "Community Care and Humanitarian Relief",
        description:
          "Delivering essential humanitarian aid, healthcare support, and community welfare programs to those most in need.",
        linkHref: "/departments/community-care",
      },
    ],
  },

  "residential-schooling": {
    slug: "residential-schooling",
    title: "Residential Schooling and",
    titleEm: "Mentorship",
    metaDescription:
      "Holistic residential schooling where academics, mentorship and character development come together.",
    heroDescription:
      "Education grows best when students feel supported. This department offers holistic residential schooling where academics, mentorship and character development come together. Living and learning in a caring community, students gain discipline, confidence and guidance from dedicated mentors, preparing them for higher studies and a life of purpose.",
    heroImage: "/assets/about-tree.webp",
    heroImageAlt: "Residential schooling",
    whatWeDo: [
      {
        num: "01",
        title: "Residential Education",
        description:
          "A structured campus life that balances classroom learning, study hours and time to grow together.",
      },
      {
        num: "02",
        title: "Mentorship and Guidance",
        description:
          "Dedicated mentors who support each student academically, personally and spiritually.",
      },
      {
        num: "03",
        title: "Character and Student Care",
        description:
          "Daily routines, values and attentive care that help students become confident, responsible young adults.",
      },
    ],
    stories: [
      {
        id: "rs-story-1",
        image: "/assets/dept-early-education.webp",
        tag: "News",
        date: "24 Sep 2026",
        title: "A Day in the Life of Our Residential Campus",
        description:
          "From morning prayers to evening study hours, students describe the routines that shape their growth.",
        linkHref: "/news",
      },
      {
        id: "rs-story-2",
        image: "/assets/about-students.webp",
        tag: "Blogs",
        date: "28 Aug 2026",
        title: "Mentors on Guiding the Next Generation",
        description:
          "Senior mentors reflect on what it takes to support young people academically and personally.",
        linkHref: "/news",
      },
      {
        id: "rs-story-3",
        image: "/assets/about-community.webp",
        tag: "News",
        date: "06 Sep 2026",
        title: "Annual Hostel Day Brings Families Together",
        description:
          "Parents visited the campus to see students’ work, meet mentors and share a meal together.",
        linkHref: "/news",
      },
    ],
    otherDepartments: [
      {
        title: "School Outreach and Academic Excellence",
        description:
          "Enhancing academic outcomes through targeted outreach, tutoring programs, and quality educational resources for schools.",
        linkHref: "/departments/school-outreach",
      },
      {
        title: "Early Education and Foundational Learning",
        description:
          "Building strong educational foundations through value-based early learning, creative activities, and essential skill development.",
        linkHref: "/departments/early-education",
      },
      {
        title: "Community Care and Humanitarian Relief",
        description:
          "Delivering essential humanitarian aid, healthcare support, and community welfare programs to those most in need.",
        linkHref: "/departments/community-care",
      },
    ],
  },

  "community-care": {
    slug: "community-care",
    title: "Community Care and",
    titleEm: "Humanitarian Relief",
    metaDescription:
      "Essential humanitarian aid, healthcare support and community welfare programmes for families facing hardship.",
    heroDescription:
      "Care for those in need is at the heart of our work. This department delivers essential humanitarian aid, healthcare support and community welfare programmes to families facing hardship. Through relief drives, mobile health services and local volunteers, we reach people when they need it most, with dignity and compassion.",
    heroImage: "/assets/about-community.webp",
    heroImageAlt: "Community care",
    whatWeDo: [
      {
        num: "01",
        title: "Humanitarian Aid",
        description:
          "Food, shelter and essential supplies delivered quickly to families affected by hardship and disaster.",
      },
      {
        num: "02",
        title: "Healthcare Support",
        description:
          "Free check-ups, medicines and mobile clinics that bring care to remote communities.",
      },
      {
        num: "03",
        title: "Community Welfare",
        description:
          "Local programmes and volunteers that keep neighbourhoods supported long after the emergency ends.",
      },
    ],
    stories: [
      {
        id: "cc-story-1",
        image: "/assets/dept-early-education.webp",
        tag: "News",
        date: "24 Sep 2026",
        title: "Relief Kits Delivered to Flood-Affected Families",
        description:
          "Volunteers distributed food, hygiene and shelter supplies to families who lost their homes this season.",
        linkHref: "/news",
      },
      {
        id: "cc-story-2",
        image: "/assets/about-students.webp",
        tag: "Blogs",
        date: "28 Aug 2026",
        title: "Mercy Van Brings Healthcare to Remote Villages",
        description:
          "Our mobile clinic completed another round of free check-ups and medicines across rural communities.",
        linkHref: "/news",
      },
      {
        id: "cc-story-3",
        image: "/assets/about-community.webp",
        tag: "News",
        date: "06 Sep 2026",
        title: "Community Volunteers Keep Neighbourhoods Supported",
        description:
          "Local volunteers share how small, steady acts of care are making a difference close to home.",
        linkHref: "/news",
      },
    ],
    otherDepartments: [
      {
        title: "School Outreach and Academic Excellence",
        description:
          "Enhancing academic outcomes through targeted outreach, tutoring programs, and quality educational resources for schools.",
        linkHref: "/departments/school-outreach",
      },
      {
        title: "Residential Schooling and Mentorship",
        description:
          "Providing holistic residential education programs with mentorship, character development, and comprehensive student care.",
        linkHref: "/departments/residential-schooling",
      },
      {
        title: "Early Education and Foundational Learning",
        description:
          "Building strong educational foundations through value-based early learning, creative activities, and essential skill development.",
        linkHref: "/departments/early-education",
      },
    ],
  },
};
