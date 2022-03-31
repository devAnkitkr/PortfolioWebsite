import React from 'react';
import { IconSvg } from '../IconSvg/iconsvg';
import CustomCard from './customCard';

const ServiceSection = () => {
  return (
    <section id="service">
      <div className="flex flex-col py-20 items-center justify-center min-h-screen max-w-screen-lg mx-auto">
        <h1 className="mb-1 font-bold text-2xl text-primary">Services</h1>
        <span className="text-gray-500 pb-20 text-secondary">
          My technical level
        </span>
        <div className="flex flex-col items-start justify-center mx-auto lg:flex-row lg:w-full lg:justify-between ">
          <CustomCard
            icon={IconSvg.UIUXIcon}
            title="UI-UX Design"
            features={[
              'Visually Appealing Design',
              'User friendly',
              'Mobile responsive',
              'Cross Browser Compatibility',
            ]}
          />
          <CustomCard
            icon={IconSvg.FullStackIcon}
            title="Fullstack Developer"
            features={[
              'Latest Technologies',
              'Optimized Coding',
              'Ecommerce and bloging features',
              'Perfect for complex websites',
            ]}
          />
          <CustomCard
            icon={IconSvg.BrandingIcon}
            title="Branding Designer "
            features={[
              'SEO optimized',
              'Mobile responsive Design',
              'Google search optimized ',
              'Digital marketing',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
