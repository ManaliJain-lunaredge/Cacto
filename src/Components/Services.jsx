import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import { RiSeedlingLine } from "react-icons/ri";
import { GiStumpRegrowth } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div>
      <div className="bg-emerald-50 px-[2rem] py-10">
        <div id="features" className="mx-auto 2xl:px-[7rem] ">
          <h3 className="text-4xl text-center  font-bold text-green-700 mb-16 mt-4">
            Our Services
          </h3>
          <ul className="mt-16 grid grid-cols-1 md:p-[3rem]  gap-6 text-center text-slate-700 md:grid-cols-2 xl:grid-cols-3  2xl:p-[1rem]">
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:bg-emerald-900 hover:text-white hover:cursor-pointer">
              <GoProjectSymlink className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="my-3 font-display text-xl font-medium">
                Project evaluation{" "}
              </h3>
              <p className="mt-1.5 text-base leading-6 text-secondary-500">
                Design and construction of processing plants for biogas
                production with cactus. Production of cactus flour, humus
                Vermiculture with cactus and processing for the production of
                protein concentrates. Selection of high-yield cactus.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:bg-emerald-900 hover:text-white hover:cursor-pointer">
              <RiSeedlingLine className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="my-3 text-xl font-display font-medium">
                Seed germination
              </h3>
              <p className="mt-1.5 text-base leading-6 text-secondary-500">
                Integration of high-yield crops, seed germination, greenhouse
                design Crop multiplication and development. 45,000
                plants/hectare, 3-4 mechanical harvests/year. Improvement of
                agricultural soils, fertilization, technical irrigation .
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:bg-emerald-900 hover:text-white hover:cursor-pointer">
              <GiStumpRegrowth className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="my-3 text-xl font-display font-medium">
                Crop development
              </h3>
              <p className="mt-1.5 text-base leading-6 text-secondary-500">
                Our team with extensive experience in cacti will assist the
                development of plantations from germination to full production,
                providing a solution to problems of pests, irrigation, nutrition
                and any other agricultural aspect of the project.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:bg-emerald-900 hover:text-white">
              <a href="/pricing" className="group">
                <MdModelTraining className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="my-3 text-xl font-display font-medium group-hover:text-primary-500">
                  Training
                </h3>
                <p className="mt-1.5 text-base leading-6 text-secondary-500">
                  Training of processing plant personnel, energy generation.
                  Food preparation. Installation of equipment, purifiers,
                  compressors, anaerobic reactors.
                </p>
              </a>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:bg-emerald-900 hover:text-white">
              <a href="/templates" className="group">
                <VscGitStashApply className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="my-3 text-xl font-display font-medium group-hover:text-primary-500">
                  Implementation
                </h3>
                <p className="mt-1.5 text-base leading-6 text-secondary-500">
                  Design and installation of biogas in industrial equipment.
                  Modifications of boilers and direct combustion equipment for
                  the use of biogas. Each project is unique and there may be
                  restrictions in the legislation of each country.
                </p>
              </a>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:bg-emerald-900 hover:text-white">
              <a href="/download" className="group">
                <BiSupport className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="my-3 text-xl font-display font-medium group-hover:text-primary-500">
                  Technical support
                </h3>
                <p className="mt-1.5 text-base leading-6 text-secondary-500">
                  Selection of cactus for the production of biomass, food and
                  energy. Preparation of cultivation beds. Planting of cacti.
                  Multiplication and nutrition of crops. Mechanization of
                  processes. Implementation of projects.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
