'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>

      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white"> Metaverse </span>
        is your gateway to the future—a place where virtual reality (VR) 
        transforms your wildest dreams into reality. 
        Step into the 
        <span className="font-extrabold text-white"> madness of the metaverse  </span>
        , where every experience feels alive and limitless. With just a
        <span className="font-extrabold text-white"> VR  </span> device, 
        you can explore vibrant worlds, 
        create unforgettable moments, and live out adventures like never before. 
        Ready to dive in? Let's embrace the madness of the Metaverse—
        scroll down to start your journey!
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
    </motion.div>
  </section>
);

export default About;
