"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Heart, CalendarClock } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const expectations = [
    "Personalised nutrition guidance based on your specific goals",
    "Practical meal planning that fits your daily routine",
    "Guidance on better food choices and meal combinations",
    "Support with portion awareness and eating habits",
    "A sustainable approach without unnecessary extreme restrictions",
    "Nutrition support for weight loss, blood sugar management, and thyroid-related concerns"
  ];

  return (
    <main className="min-h-screen bg-stone-50 overflow-hidden selection:bg-brand-200 selection:text-brand-900 flex flex-col items-center justify-center py-20 px-6">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-3xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 relative z-10"
      >
        <div className="text-center mb-10">
          <motion.div variants={fadeIn} className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6 leading-tight">
            Thank You! <br/><span className="text-brand-600 text-2xl md:text-4xl mt-2 block">Your Request Has Been Received</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium">
            You’ve taken the first step towards a more personalised approach to nutrition.
          </motion.p>
          
          <motion.p variants={fadeIn} className="text-md text-stone-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Instead of following random diets or generic meal plans, your nutrition guidance will focus on your goals, lifestyle, food preferences, eating habits, and individual requirements.
          </motion.p>
        </div>

        <motion.div variants={fadeIn} className="bg-stone-50 rounded-2xl p-6 md:p-8 mb-10 border border-stone-100">
          <h2 className="text-xl font-bold text-stone-900 mb-5 flex items-center gap-2">
            <Heart className="w-5 h-5 text-brand-500" />
            What You Can Expect
          </h2>
          <div className="space-y-4">
            {expectations.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-stone-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="mb-10 text-center bg-brand-50/50 rounded-2xl p-6 md:p-8 border border-brand-100/50">
          <h2 className="text-xl font-bold text-stone-900 mb-3 flex items-center justify-center gap-2">
            <CalendarClock className="w-5 h-5 text-brand-500" />
            What Happens Next?
          </h2>
          <p className="text-stone-700 leading-relaxed">
            We’ll connect with you shortly to understand your current eating habits, goals, and challenges and discuss the next step for your nutrition journey.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="text-center mb-12 relative py-8 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-50/50 to-transparent rounded-full -z-10 blur-md"></div>
          <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed max-w-2xl mx-auto">
            <span className="text-3xl text-brand-400 font-serif mr-1 opacity-70">"</span>
            <span className="italic">No extreme diets. No generic meal charts—</span>
            <br className="hidden md:block" />
            <span className="text-brand-700 font-bold mt-2 inline-block">just practical nutrition guidance designed around you.</span>
            <span className="text-3xl text-brand-400 font-serif ml-1 opacity-70">"</span>
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="text-center">
          <Link href="/">
            <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium text-lg hover:bg-stone-800 transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
        </motion.div>

      </motion.div>
    </main>
  );
}
