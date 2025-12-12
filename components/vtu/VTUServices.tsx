"use client";

import { VTUServiceCard } from "./VTUServiceCard";
import { VTU_SERVICES_CONFIG, FEATURE_FLAGS } from "@/lib/vtu/constants";

export function VTUServices() {
  // Filter services based on feature flags
  const enabledServices = Object.entries(VTU_SERVICES_CONFIG).filter(([key]) => {
    const featureFlagKey = `enable${key.charAt(0).toUpperCase() + key.slice(1).replace('-', '')}` as keyof typeof FEATURE_FLAGS;
    return FEATURE_FLAGS[featureFlagKey];
  });

  return (
    <section id="vtu-services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">VTU Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Quick and convenient virtual top-up services. Buy airtime, data, pay bills, and more -
            all in one place with instant delivery and secure payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {enabledServices.map(([key, config]) => (
            <VTUServiceCard
              key={key}
              icon={config.icon}
              title={config.title}
              description={config.description}
              features={config.features}
              href={`/buy/${key}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
