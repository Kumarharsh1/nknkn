import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, institution, icon, iconWide, score, date }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between card-hover border border-white/5 hover:border-[#915EFF]/40"
  >
    {iconWide && icon && (
      <img
        src={icon}
        alt={institution}
        className="w-full max-w-[260px] mx-auto h-auto object-contain rounded-2xl mb-4"
      />
    )}

    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-white font-bold text-[20px]">{degree}</h3>
        <p className="mt-2 text-secondary text-[14px]">{institution}</p>
      </div>

      {!iconWide && icon && (
        <img
          src={icon}
          alt={institution}
          className="w-16 h-16 object-contain rounded-2xl flex-shrink-0"
        />
      )}
    </div>

    <div className="mt-5 flex justify-between items-center gap-2">
      <p className="text-[14px] blue-text-gradient font-semibold">{score}</p>
      <p className="text-secondary text-[13px]">{date}</p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have studied</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
