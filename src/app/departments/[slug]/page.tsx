import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DepartmentTemplate from "@/components/departments/DepartmentTemplate";
import { departmentDetails } from "@/data/departments";

interface DepartmentPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(departmentDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: DepartmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = departmentDetails[slug];

  if (!data) {
    return {
      title: "Department Not Found | Sidra Foundation",
    };
  }

  return {
    title: `${data.title} ${data.titleEm} | Sidra Foundation`,
    description: data.metaDescription,
  };
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const data = departmentDetails[slug];

  if (!data) {
    notFound();
  }

  return <DepartmentTemplate data={data} />;
}
