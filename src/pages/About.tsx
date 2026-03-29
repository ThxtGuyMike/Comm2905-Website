import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Target, TrendingUp, Shield } from "lucide-react";
import { IMAGES } from "@/assets/images";

export default function About() {
  const stats = [
    { label: "Youth Affected", value: "1 in 4", description: "Jamaican students experience mental health challenges" },
    { label: "Stigma Barrier", value: "73%", description: "Avoid seeking help due to cultural stigma" },
    { label: "Digital Reach", value: "95%", description: "Youth access content via smartphones" },
  ];

  const goals = [
    {
      icon: Heart,
      title: "Normalize Conversations",
      description: "Break the silence around mental health in Jamaican youth culture through authentic storytelling."
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Create a safe space where students feel seen, heard, and understood in their struggles."
    },
    {
      icon: Shield,
      title: "Reduce Stigma",
      description: "Challenge cultural barriers that prevent young people from seeking mental health support."
    },
    {
      icon: BookOpen,
      title: "Provide Resources",
      description: "Connect students with accessible mental health services and support networks in Jamaica."
    },
  ];

  const approach = [
    {
      title: "Episodic Storytelling",
      description: "Short-form digital comics released bi-weekly, each exploring a specific mental health challenge faced by Jamaican students."
    },
    {
      title: "Cultural Authenticity",
      description: "Characters and narratives that reflect the real experiences of Jamaican youth, avoiding stereotypes and caricatures."
    },
    {
      title: "Mobile-First Design",
      description: "Vertical-scroll webtoon format optimized for smartphone reading, meeting students where they already consume content."
    },
    {
      title: "Actionable Support",
      description: "Each episode concludes with mental health resources and information specific to Jamaica."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.MENTAL_HEALTH_HERO_1} 
            alt="Mental health awareness" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Inside the Pressure
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A digital comic series addressing mental health challenges among Jamaican students through authentic, empathetic storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mental health challenges among Jamaican students aged 15-24 are often hidden behind cultural stigma and silence. Academic pressure, financial stress, exam anxiety, and social comparison create overwhelming burdens that many young people face alone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Inside the Pressure exists to change this narrative. Through visual storytelling that resonates with Jamaican youth culture, we create a space where mental health conversations are normalized, stigma is challenged, and seeking help is recognized as a sign of strength.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Target Audience</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our primary audience is Jamaican youth aged 15-24, including high school and tertiary students who are digitally native and consume content primarily through smartphones on platforms like Instagram, TikTok, and YouTube.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also reach educators, counselors, parents, and youth organizations who support young people navigating mental health challenges. Our content is designed to be accessible, culturally relevant, and actionable for all these stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Project Goals</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How Inside the Pressure creates meaningful change in mental health awareness and support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Content Approach</h2>
              </div>
            </motion.div>

            <div className="space-y-8">
              {approach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-8 shadow-lg border-l-4 border-primary"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Visual Style</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our visual language balances emotional authenticity with accessibility. We use a modern, semi-realistic illustrative style that is emotionally expressive and visually appealing to young audiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The color palette is deliberate: cool, desaturated tones represent moments of distress and struggle, while warm, vibrant colors signal hope, breakthrough, and support. This visual storytelling helps readers emotionally connect with the narrative.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Character designs represent the diversity of Jamaican youth, avoiding stereotypes while celebrating cultural authenticity. The overall aesthetic is clean, accessible, and optimized for mobile reading experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">How the Comic Series Helps</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Inside the Pressure meets students where they are—on their phones, consuming visual content. By presenting mental health challenges through relatable characters and authentic narratives, we create identification and reduce isolation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Each episode validates the reader's experiences while providing hope through storytelling. The concluding resource panels offer concrete next steps, transforming awareness into action.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This approach bypasses traditional barriers to mental health education, using the power of narrative and visual art to create emotional connection, understanding, and ultimately, the courage to seek support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}