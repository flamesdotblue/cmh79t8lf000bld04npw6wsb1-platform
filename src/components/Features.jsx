import { MessageCircle, MessageSquare, Zap, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Automatic DM Replies',
    desc: 'Respond instantly to inbound messages with smart, context-aware replies.',
    icon: MessageCircle,
  },
  {
    title: 'Comment Auto-Responder',
    desc: 'Turn post comments into conversations. Route comment triggers to DMs.',
    icon: MessageSquare,
  },
  {
    title: 'Smart Rules & Keywords',
    desc: 'Define rules, keywords, and fallback flows to stay on brand, every time.',
    icon: Zap,
  },
  {
    title: 'Secure & Compliant',
    desc: 'Built with privacy in mind. Your data is encrypted and protected.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Everything you need to scale conversations</h2>
            <p className="mt-3 max-w-2xl text-zinc-400">Automate the busywork without losing your voice. DM Route keeps you fast, consistent, and personal.</p>
          </div>
          <div className="hidden text-zinc-400 md:block">
            <Activity className="h-6 w-6" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-zinc-950/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition-colors hover:border-white/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
