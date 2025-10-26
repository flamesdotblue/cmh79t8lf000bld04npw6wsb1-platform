import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Ready to route every conversation in the right direction?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-zinc-400"
        >
          Start with a simple setup, then customize rules to fit your brand. Switch on automations any time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
            Connect Instagram
          </button>
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5">
            Explore features
          </button>
        </motion.div>
        <p className="mt-4 text-xs text-zinc-500">Free to try. Cancel anytime.</p>
      </div>
    </section>
  );
}
