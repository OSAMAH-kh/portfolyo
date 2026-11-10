import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Merhaba! Ben Osamah, web uygulamaları geliştiriyorum.",
            1000,
            "Fikirlerinizi hayata geçirmeye hazırım.",
            1000,
            "Projelerime göz atmak için aşağı kaydırın!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="osamah-avatar.jpg" alt="Osamah" />
    </motion.div>
  );
};

export default Speech;
