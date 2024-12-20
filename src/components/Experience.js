import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

// Styles
import styles from "../styles/components/Experience.module.css";

// Utils
import HeightStandardizer from "../utils/HeightStandardizer";
import StaggerAnimationHelper from "../utils/StaggerAnimationHelper";

// Constants
import { experiences } from "../constants/content";

// Required components
import ExperienceCard from "./ExperienceCard";

/**
 * Renders the Experience component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the experience section.
 * @returns {JSX.Element} The rendered Experience component.
 */
export default function Experience({ title, ...props }) {
  const staggerAnimationHelper = new StaggerAnimationHelper(
    experiences.length + 1
  );

  const heightStandardizer = new HeightStandardizer();

  return (
    <section className={styles.experience} role="experience" {...props}>
      <motion.h1 {...staggerAnimationHelper.headingProps()}>{title}</motion.h1>
      <div className={styles.body}>
        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={exp.company}
              {...staggerAnimationHelper.cardProps(index)}
            >
              <ExperienceCard
                {...exp}
                headingRef={heightStandardizer.itemRefAssigner(index)}
                headingHeight={heightStandardizer.heightProp}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
};
