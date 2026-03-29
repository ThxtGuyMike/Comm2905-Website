import { mentalHealthResources } from '@/data/resources';
import { ResourceCard } from '@/components/ResourceCard';
import { IMAGES } from '@/assets/images';
import { motion } from 'framer-motion';
import { Heart, Phone, AlertCircle } from 'lucide-react';

export default function Resources() {
  const crisisResources = mentalHealthResources.filter(
    (r) => r.id === 'moh-helpline' || r.id === 'bellevue-crisis'
  );
  const otherResources = mentalHealthResources.filter(
    (r) => r.id !== 'moh-helpline' && r.id !== 'bellevue-crisis'
  );

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.MENTAL_HEALTH_HERO_6}
            alt="Mental health support"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Get Help
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Seeking help is a sign of strength, not weakness.
            </p>
            <p className="text-lg text-foreground/80">
              You don't have to face your challenges alone. These resources are here to support you on your journey to better mental health.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-destructive">
                  Crisis Support - Available 24/7
                </h2>
                <p className="text-foreground/80 mb-6">
                  If you're in immediate danger or experiencing a mental health emergency, please contact these crisis services right away.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              {crisisResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <Phone className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-semibold">Support Services</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Professional mental health services and support organizations available to Jamaican youth.
            </p>
            <div className="grid gap-6">
              {otherResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Self-Care & When to Seek Help
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Daily Self-Care Tips
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Maintain a regular sleep schedule (7-9 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Stay physically active - even a 15-minute walk helps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Connect with friends and family regularly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Practice mindfulness or meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Limit social media and screen time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Engage in hobbies and activities you enjoy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Eat balanced meals and stay hydrated</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  When to Seek Professional Help
                </h3>
                <p className="text-foreground/80 mb-4">
                  Consider reaching out to a mental health professional if you experience:
                </p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Persistent feelings of sadness or hopelessness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Difficulty concentrating or making decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Changes in sleep or appetite patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Withdrawal from friends and activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Overwhelming anxiety or panic attacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Thoughts of self-harm or suicide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Difficulty coping with daily responsibilities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-center text-foreground/90">
                <strong className="text-accent">Remember:</strong> Taking care of your mental health is just as important as taking care of your physical health. You deserve support, and help is available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
