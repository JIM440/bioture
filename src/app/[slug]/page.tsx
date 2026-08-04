import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessDetailPage } from "@/components/business-detail-page";
import { businesses, getBusiness } from "@/data/businesses";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    return {};
  }

  return {
    title: `${business.title} | BioTure Group`,
    description: business.introCopy,
  };
}

export default async function BusinessPage({ params }: PageProps) {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    notFound();
  }

  const currentIndex = businesses.findIndex((item) => item.slug === business.slug);
  const nextBusiness = businesses[(currentIndex + 1) % businesses.length];

  return <BusinessDetailPage business={business} nextBusiness={nextBusiness} />;
}
