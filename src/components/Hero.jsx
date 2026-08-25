import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Professional background layers */}
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Interactive 3D computer (follows the cursor) */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      <div
        className={`absolute top-[120px] inset-x-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <p className={`${styles.heroSubText} text-white-100`}>Hi, I'm</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-gradient">Harsh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            I analyze data, build ML models, and create <br className="sm:block hidden" />
            AI solutions for real-world problems
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
