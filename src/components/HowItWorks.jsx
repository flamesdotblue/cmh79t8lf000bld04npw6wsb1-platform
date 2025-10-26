import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Connect Instagram',
    desc: 'Securely authenticate your account in seconds to get started.',
  },
  {
    title: 'Set Rules & Triggers',
    desc: 'Choose keywords, set conditions, and define reply flows that match your tone.',
  },
  {
    title: 'Go Live',
    desc: 'Activate automations and let DM Route handle the replies while you focus on growth.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">How it works</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">Launch in minutes with a simple, secure setup. No code required.</p>
        </div>
        <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
                <CheckCircle className="h-4 w-4 text-white" />
                <span>Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
