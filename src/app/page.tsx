// pages/index.js
import React from "react";
import FeatureSection from "@/components/FeatureSection/index"
import ProductSection from "@/components/ProductSection/index"
import Testimonials from "@/components/Testimonials/index"
import Faq from "@/components/Faq/index"
import Cta from "@/components/CallToAction/index"
import CenterCta from "@/components/Hero/index"
export default function Home() {
  return (
    <div>
      <CenterCta />
      <ProductSection />
      <FeatureSection />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  );
}
