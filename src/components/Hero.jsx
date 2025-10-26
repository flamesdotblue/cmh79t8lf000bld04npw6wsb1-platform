import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="w-full max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight md:text-6xl"
          >
            DM Route
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-zinc-300 md:text-xl"
          >
            Connect your Instagram. Automate smart DM and comment replies. Keep conversations instant, consistent, and on brand — 24/7.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
              Connect Instagram
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5">
              See how it works
            </button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 text-xs text-zinc-400"
          >
            No code. No spam. Full control over triggers, keywords, and tone.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
