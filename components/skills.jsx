import { useState } from 'react';
import Accordian from './accordian';
import { IconSvg } from '../IconSvg/iconsvg';

const SkillSection = () => {
  return (
    <section id="skills">
      <div className="flex flex-col py-20 items-center justify-center min-h-screen max-w-screen-lg mx-auto">
        <h1 className="mb-1 font-bold text-2xl text-primary">Skills</h1>
        <span className="text-gray-500 pb-20 text-secondary">
          My technical level
        </span>
        <div className="flex flex-col items-start justify-center lg:w-full lg:flex-row lg:justify-between">
          <Accordian
            title="Frontend Developer"
            caption="More than 1 years"
            data={[
              { name: 'HTML', percent: '90' },
              { name: 'CSS', percent: '80' },
              { name: 'REACT-JS', percent: '70' },
              { name: 'NEXT-JS', percent: '75' },
            ]}
            icon={IconSvg.FrontendIcon}
          />
          <Accordian
            title="Backend Developer"
            caption="Headless cms"
            data={[
              { name: 'NEXT-JS', percent: '75' },
              { name: 'MONGO DB', percent: '50' },
              { name: 'GRAPHCMS', percent: '70' },
              { name: 'EXPRESS-JS', percent: '50' },
            ]}
            icon={IconSvg.BackendIcon}
          />
          <Accordian
            title="Designer"
            caption="Latest Technologies"
            data={[
              { name: 'SASS', percent: '90' },
              { name: 'TAILWIND-CSS', percent: '80' },
              { name: 'FIGMA', percent: '95' },
              { name: 'PHOTOSHOP', percent: '60' },
            ]}
            icon={IconSvg.DesignerIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
