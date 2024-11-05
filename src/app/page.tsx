// pages/index.js
import React from "react";
import FeatureSection from "@/components/FeatureSection/index"
import ProductSection from "@/components/ProductSection/index"
import Testimonials from "@/components/Testimonials/index"
import Faq from "@/components/Faq/index"
import Cta from "@/components/CallToAction/index"
import Footer from "@/components/Footer/index"
import CenterCta from "@/components/Hero/index"
export default function Home() {
  return (
    <div className="">
      {/* Header */}
      <CenterCta />
      <ProductSection />
      <FeatureSection />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
