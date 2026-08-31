"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Utensils, Apple, Activity, HeartPulse, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.children[0] as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth : 300;
      const gap = 16; // 1rem (gap-4)
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

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

  return (
    <main className="min-h-screen bg-stone-50 overflow-hidden selection:bg-brand-200 selection:text-brand-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-stone-200 shadow-sm flex items-center justify-center bg-white shrink-0">
              <Image src="/logo.jpeg" alt="Decoded Diet By Poorvi" width={44} height={44} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-stone-900 leading-none">Decoded Diet</span>
              <span className="font-medium text-stone-500 text-sm">By Poorvi</span>
            </div>
          </div>
          <button className="px-5 py-2.5 bg-stone-900 text-white rounded-full font-medium text-sm hover:bg-stone-800 transition-all shadow-sm flex items-center gap-2">
            Talk to Poorvi
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-200/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-accent-200/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              By Poorvi Agarwal | Decoded Diet By Poorvi
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-4 md:mb-8 leading-tight">
              Personalised Nutrition Guidance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Weight Loss, Thyroid & Blood Sugar</span> Management
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-sm md:text-2xl text-stone-600 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop Following Random Diets. Start Following a Nutrition Plan Designed for You. Your body, lifestyle, eating habits, and goals are different — so your diet should be, too.
            </motion.p>
            
          {/* VSL Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 md:mt-12 mb-6 md:mb-12 relative w-full max-w-4xl mx-auto aspect-video bg-stone-200 rounded-3xl shadow-2xl overflow-hidden group cursor-pointer border-8 border-white/80 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-stone-800/10 to-stone-900/50 flex items-center justify-center transition-colors group-hover:to-stone-900/60">
              <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 text-white/90 font-medium flex items-center justify-center drop-shadow-md bg-black/30 backdrop-blur-md py-3 px-6 rounded-xl mx-auto max-w-fit">
              Watch: How we personalise your nutrition plan
            </div>
          </motion.div>

            <motion.div variants={fadeIn} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium text-lg hover:bg-stone-800 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
                Talk to Poorvi
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-8 pb-12 lg:pt-12 lg:pb-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-4xl font-bold text-stone-900 mb-10 lg:mb-14">
              Our Approach
            </motion.h2>
            
            <div className="relative w-full overflow-hidden py-4">
              {/* Fade overlays for smooth entry/exit */}
              <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                className="flex gap-4 md:gap-6 w-max"
              >
                {[
                  { icon: "🥗", title: "Personalised Nutrition" },
                  { icon: "⚖️", title: "Sustainable Weight Management" },
                  { icon: "🩸", title: "Blood Sugar Support" },
                  { icon: "🦋", title: "Thyroid Nutrition Support" },
                  { icon: "🥗", title: "Personalised Nutrition" },
                  { icon: "⚖️", title: "Sustainable Weight Management" },
                  { icon: "🩸", title: "Blood Sugar Support" },
                  { icon: "🦋", title: "Thyroid Nutrition Support" },
                  { icon: "🥗", title: "Personalised Nutrition" },
                  { icon: "⚖️", title: "Sustainable Weight Management" },
                  { icon: "🩸", title: "Blood Sugar Support" },
                  { icon: "🦋", title: "Thyroid Nutrition Support" },
                  { icon: "🥗", title: "Personalised Nutrition" },
                  { icon: "⚖️", title: "Sustainable Weight Management" },
                  { icon: "🩸", title: "Blood Sugar Support" },
                  { icon: "🦋", title: "Thyroid Nutrition Support" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 p-4 md:p-5 rounded-[1.5rem] bg-white border border-sky-100 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100 transition-all duration-300 group w-[260px] md:w-[320px] shrink-0"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-sky-50/50 border border-sky-50 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-stone-900 leading-tight text-left">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are You Looking to Improve? */}
      <section className="py-12 lg:py-20 bg-stone-50 relative">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10 lg:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">What Are You Looking to Improve?</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Weight Loss */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all border border-stone-100 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
                <Activity className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Weight Loss</h3>
              <p className="text-stone-700 mb-2 font-semibold text-base leading-relaxed">Want to lose weight without following extreme diets?</p>
              <p className="text-stone-500 mb-4 text-base leading-relaxed flex-grow">If you've tried different diets but struggled to maintain the results, the problem may not be your willpower. A sustainable approach starts with understanding your current eating habits, lifestyle and daily routine.</p>
              <div className="space-y-2 mt-auto">
                <p className="text-sm font-bold text-stone-900">Nutrition guidance focused on:</p>
                {['Better everyday food choices', 'Sustainable eating habits', 'Practical meal planning', 'Portion and meal awareness'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Thyroid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all border border-stone-100 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-accent-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
                <HeartPulse className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Thyroid & Nutrition</h3>
              <p className="text-stone-700 mb-2 font-semibold text-base leading-relaxed">Managing thyroid-related concerns?</p>
              <p className="text-stone-500 mb-4 text-base leading-relaxed flex-grow">Not every diet or food rule is appropriate for every person. Your nutrition plan should consider your individual requirements, food preferences, lifestyle and existing routine.</p>
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 mt-auto">
                <p className="text-sm text-stone-500 leading-relaxed font-medium"><span className="font-bold text-stone-800">Important:</span> Nutrition guidance does not diagnose or treat thyroid disorders and does not replace medical care or prescribed medication.</p>
              </div>
            </motion.div>

            {/* Diabetes */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all border border-stone-100 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
                <Apple className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Diabetes & Prediabetes</h3>
              <p className="text-stone-700 mb-2 font-semibold text-base leading-relaxed">Unsure what to eat?</p>
              <p className="text-stone-500 mb-4 text-base leading-relaxed flex-grow">Your everyday food choices can be an important part of managing your overall nutrition. The focus is on helping you understand your meals and build more practical eating habits.</p>
              <div className="space-y-2 mt-auto mb-4">
                <p className="text-sm font-bold text-stone-900">Nutrition guidance may focus on:</p>
                {['Balanced meal choices', 'Better food combinations', 'Portion awareness', 'Meal timing and routine'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <p className="text-sm text-stone-500 leading-relaxed font-medium"><span className="font-bold text-stone-800">Important:</span> Nutrition support is not a replacement for medical diagnosis or prescribed medication.</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-10 lg:mt-12 text-center"
          >
            <button className="px-8 py-4 bg-brand-600 text-white rounded-full font-medium text-lg hover:bg-brand-700 transition-all hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              Talk to Poorvi
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* What Exactly Do We Help You With? */}
      <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 -z-10 pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                What Exactly Do We Help You With?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed">
                This is not just about giving you a diet chart and asking you to follow it. We help you understand what to eat, how to eat, what to change, and how to build healthier eating habits that fit your lifestyle.
              </motion.p>
              
              <div className="flex flex-col items-center lg:items-start w-full">
                <div className="relative group/carousel w-[280px] sm:w-[320px]">
                  <div 
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {[
                      { icon: "🥗", title: "Personalised Meal Planning", desc: "Get meal and food guidance tailored to your goals, lifestyle, food preferences, routine, and individual needs, rather than following a generic diet chart." },
                      { icon: "🍽️", title: "Better Food Choices", desc: "Learn what foods and meal combinations may work better for your goals, while making practical choices with the foods you already eat." },
                      { icon: "⚖️", title: "Portion & Meal Guidance", desc: "Understand how much to eat, how to structure your meals, and how to create a more balanced eating routine without unnecessary restriction." },
                      { icon: "🕐", title: "Nutrition Around Your Lifestyle", desc: "Your nutrition plan should work with your actual life — your work schedule, family meals, travel, social occasions, and daily routine." },
                      { icon: "🔄", title: "Improve Your Eating Habits", desc: "Identify the eating habits that may be making your goals harder to achieve and gradually replace them with more sustainable habits." },
                      { icon: "🎯", title: "Goal-Based Nutrition Support", desc: "Whether your primary goal is weight loss, healthier eating, thyroid-related nutrition support, or blood sugar management, your nutrition approach is built around your specific requirements." }
                    ].map((item, i) => (
                      <div key={i} className="w-[280px] sm:w-[320px] shrink-0 snap-center">
                        <motion.div 
                          variants={fadeIn} 
                          className="bg-stone-50/50 p-6 sm:p-8 rounded-[1.5rem] border border-stone-100 hover:shadow-lg hover:shadow-stone-200/50 hover:bg-white transition-all duration-300 group flex flex-col gap-4 items-center justify-center w-full h-full"
                        >
                          <div className="w-16 h-16 shrink-0 rounded-xl bg-white border border-stone-100/50 shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2 leading-tight">{item.title}</h4>
                            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-sm mx-auto">{item.desc}</p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel Controls - Below the cards */}
                  <div className="flex items-center gap-4 mt-4 lg:mt-6 justify-center">
                    <button 
                      onClick={() => scrollCarousel("left")}
                      className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm active:scale-95"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => scrollCarousel("right")}
                      className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm active:scale-95"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[600px] hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-accent-50 rounded-3xl overflow-hidden shadow-2xl border border-white/50">
                {/* We can place an abstract image or decorative elements here since we don't have a real image */}
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-8 p-12 text-center">
                   <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <Utensils className="w-16 h-16 text-brand-500" />
                   </div>
                   <h3 className="text-3xl font-bold text-stone-800">Your Personalised Nutrition Journey</h3>
                   <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-brand-500 rounded-full"></div>
                   </div>
                   <div className="grid grid-cols-2 gap-4 w-full mt-4">
                      <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/40">
                         <p className="text-brand-700 font-bold text-2xl">100%</p>
                         <p className="text-stone-600 text-sm font-medium">Personalised</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/40">
                         <p className="text-brand-700 font-bold text-2xl">0%</p>
                         <p className="text-stone-600 text-sm font-medium">Fad Diets</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 3R Approach Section */}
      <section className="py-12 lg:py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-brand-900/50 border border-brand-500/30 text-brand-300 font-semibold tracking-wider text-sm mb-6">
              THE 3R APPROACH
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6">
              Real diet. Real food. Real fat loss.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-stone-300">
              Sustainable fat loss, guided by an actual nutrition expert — not another Instagram diet trend.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Real Diet", desc: "A diet designed around your lifestyle, not a generic meal chart copied from the internet." },
              { num: "02", title: "Real Food", desc: "Focus on practical, everyday foods that you can actually include in your regular routine." },
              { num: "03", title: "Real Fat Loss", desc: "The focus is on building sustainable habits instead of chasing quick results through extreme diets." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-700 hover:border-brand-500/50 transition-colors"
              >
                <div className="text-5xl font-black text-stone-700 mb-6">{item.num}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px]"></div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-brand-50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 lg:mb-6">
              Book a Free Call & Discuss Your Diet and Nutrition Goals
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-stone-600 mb-6 lg:mb-8 leading-relaxed font-medium">
              Talk About Your Diet. Understand Your Needs. Know Your Next Step.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-stone-600 mb-8 lg:mb-10 leading-relaxed">
              Share your current diet, health goals, eating habits, and challenges with Poorvi. Get clear guidance on what you may need to improve and understand how personalised nutrition support can help you move forward.
            </motion.p>
            <motion.button variants={fadeIn} className="px-10 py-5 bg-stone-900 text-white rounded-full font-medium text-xl hover:bg-stone-800 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3">
              Talk to Poorvi
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10 lg:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">Still have questions before booking?</h2>
            <p className="text-brand-600 font-semibold tracking-wider text-sm md:text-base uppercase mb-4">Frequently Asked Questions</p>
            <div className="w-24 h-1 bg-stone-200 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: "Will I receive the same diet plan as everyone else?", a: "No. The approach is personalised around your goals, lifestyle, food preferences and individual requirements." },
              { q: "Do I have to follow a very restrictive diet?", a: "The focus is on practical and sustainable nutrition rather than unnecessary extreme restrictions." },
              { q: "Can I eat normal Indian food?", a: "Nutrition guidance can be built around practical everyday foods and your existing eating habits rather than requiring complicated or unrealistic meals." },
              { q: "Is this only for weight loss?", a: "No. Personalised nutrition guidance can also be relevant for people seeking nutrition support around thyroid-related concerns or healthier blood sugar management, depending on their individual situation." },
              { q: "Will this replace my thyroid or diabetes medication?", a: "No. Nutrition support does not replace prescribed medication or medical treatment. Always follow your doctor's advice." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={`bg-stone-50 rounded-2xl border border-stone-100 overflow-hidden transition-all duration-300 ${openFaq === i ? 'shadow-md' : 'shadow-sm'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                >
                  <h3 className="text-xl font-bold text-stone-900 flex items-start gap-3">
                    <span className="text-brand-500 font-black shrink-0">Q.</span>
                    <span className="flex-grow">{faq.q}</span>
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-stone-600 leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-stone-950 py-8 lg:py-12 border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 overflow-hidden border border-stone-800 shadow-lg">
            <Image src="/logo.jpeg" alt="Decoded Diet By Poorvi Logo" width={64} height={64} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Decoded Diet By Poorvi</h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Personalised Nutrition Guidance for Weight Loss, Thyroid & Blood Sugar Management.
          </p>
          <div className="w-full h-px bg-stone-800 mb-8"></div>
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Decoded Diet By Poorvi. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
