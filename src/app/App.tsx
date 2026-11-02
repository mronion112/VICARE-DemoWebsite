import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  HeartPulse, 
  Eye, 
  ShieldCheck, 
  Clock, 
  Stethoscope, 
  Activity, 
  Thermometer, 
  User, 
  Bell, 
  ArrowRight,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  Wind,
  ScanFace,
  ActivitySquare,
  AlertTriangle,
  Droplets,
  Gauge
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import heroImage from "@/imports/_nh1.png";
import dashboardImage from "@/imports/Gemini_Generated_Image_wsanfwwsanfwwsan.png";
import vnTranslations from "./vn.json";
import engTranslations from "./eng.json";

// Language dictionary - add more locales here later by dropping in a new json file
const TRANSLATIONS = {
  vn: vnTranslations,
  eng: engTranslations,
};
const vitalIcons = [Thermometer, Wind, HeartPulse, Droplets, Gauge];
const vitalIconColors = [
  "bg-orange-50 text-orange-600",
  "bg-teal-50 text-teal-600",
  "bg-rose-50 text-rose-600",
  "bg-blue-50 text-blue-600",
  "bg-violet-50 text-violet-600",
];
const modelIcons = [User, ActivitySquare, AlertTriangle];
const logoImage = "/LogoVICARE-transparent.png";

// Subtle animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [language, setLanguage] = useState("vn"); // "vn" | "eng"

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["hero", "features", "architecture", "dashboard", "about"];
      let current = "hero";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-border/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Logo - left */}
          <div className="flex items-center gap-2 justify-self-start">
            <ImageWithFallback 
              src={logoImage} 
              alt="VICARE Y Nhãn Logo" 
              className="h-12 w-24 object-contain"
            />
          </div>

          {/* Menu - centered */}
          <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#hero" className={`hover:text-primary transition-colors ${activeSection === 'hero' ? 'text-primary font-bold' : ''}`}>{t.nav.about}</a>
            <a href="#features" className={`hover:text-primary transition-colors ${activeSection === 'features' ? 'text-primary font-bold' : ''}`}>{t.nav.features}</a>
            <a href="#architecture" className={`hover:text-primary transition-colors ${activeSection === 'architecture' ? 'text-primary font-bold' : ''}`}>{t.nav.architecture}</a>
            <a href="#dashboard" className={`hover:text-primary transition-colors ${activeSection === 'dashboard' ? 'text-primary font-bold' : ''}`}>{t.nav.product}</a>
            <a href="#about" className={`hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary font-bold' : ''}`}>{t.nav.contact}</a>
          </div>

          {/* Language toggle - right */}
          <div className="flex items-center justify-self-end">
            <div className="flex items-center gap-1 bg-secondary/60 rounded-full p-1 border border-primary/10">
              <button
                onClick={() => setLanguage("vn")}
                aria-pressed={language === "vn"}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${language === "vn" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-primary"}`}
              >
                {t.languageToggle.vn}
              </button>
              <button
                onClick={() => setLanguage("eng")}
                aria-pressed={language === "eng"}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${language === "eng" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-primary"}`}
              >
                {t.languageToggle.eng}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F7FBFF] via-white to-white"></div>
          {/* Soft glowing orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#2A7FFF]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-[#66E7C8]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-xl"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-6 border border-primary/10">
                  <Activity className="w-4 h-4" />
                  <span>{t.hero.badge}</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
                  <span className="block text-primary">{t.hero.titleAccent}</span>
                  {t.hero.titleRest}
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.hero.descriptionLine1}<br/><br/>
                  {t.hero.descriptionLine2}
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <a href="#architecture" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#about" className="bg-white text-foreground border border-border px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center">
                    {t.hero.ctaSecondary}
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border border-white bg-white aspect-[4/3]">
                  {/* Mockup of hospital room with AI vision overlay */}
                  <div className="absolute inset-0 bg-[#F5F7FA]">
                    <ImageWithFallback 
                      src={heroImage} 
                      alt={t.hero.heroImageAlt}
                      className="w-full h-full object-cover object-center opacity-90"
                    />
                    {/* Subtle Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="features" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.problem.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.problem.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: AlertTriangle, title: t.problem.cards[0], color: "from-[#FFF0F0] to-white", iconColor: "text-[#FF5A5A]" },
                { icon: Clock, title: t.problem.cards[1], color: "from-[#F2FCFF] to-white", iconColor: "text-[#3ED7D5]" },
                { icon: Eye, title: t.problem.cards[2], color: "from-[#F7FBFF] to-white", iconColor: "text-[#2A7FFF]" },
                { icon: ShieldCheck, title: t.problem.cards[3], color: "from-[#F0FDF4] to-white", iconColor: "text-[#22C55E]" },
                { icon: HeartPulse, title: t.problem.cards[4], color: "from-[#FAF5FF] to-white", iconColor: "text-[#A855F7]" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-b ${item.color} p-6 rounded-[1.5rem] border border-black/[0.03] shadow-sm hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-black/[0.03] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI System Architecture */}
        <section id="architecture" className="py-24 bg-[#F7FBFF] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.architecture.title}</h2>
              <p className="text-lg text-muted-foreground">{t.architecture.description}</p>
            </div>

            {/* Models Grid */}
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-primary/70 mb-5">
              {t.architecture.modelsLabel}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {t.architecture.models.map((model, i) => {
                const ModelIcon = modelIcons[i];

                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-3xl border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <ModelIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                    <p className="text-muted-foreground">{model.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-5 md:p-7 rounded-[2rem] border border-border shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-primary/70 mb-1">
                      {t.architecture.vitalsLabel}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold">{t.architecture.vitalsTitle}</h3>
                  </div>
                  <Activity className="hidden sm:block w-5 h-5 text-primary/50" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                  {t.architecture.vitals.map((vital, index) => {
                    const VitalIcon = vitalIcons[index];

                    return (
                      <motion.div
                        key={vital}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className="min-h-[76px] flex items-center gap-3 rounded-2xl border border-primary/[0.08] bg-gradient-to-br from-[#F7FBFF] to-white px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
                      >
                        <span className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${vitalIconColors[index]}`}>
                          <VitalIcon className="w-5 h-5" />
                        </span>
                        <span className="text-sm font-semibold leading-snug text-foreground">{vital}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-border shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#FFF0F0] rounded-2xl flex items-center justify-center mb-5 text-[#FF5A5A]">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t.architecture.actionsTitle}</h3>
                  <ul className="space-y-3">
                    {t.architecture.actions.map((action) => (
                      <li key={action} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A5A]" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-8 rounded-3xl border border-border shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-5 text-[#22C55E]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t.architecture.selfCheckTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.architecture.selfCheckDescription}</p>
                </motion.div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-primary text-white p-8 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xl shadow-primary/15">
              <div>
                <p className="text-white/75 text-sm font-semibold uppercase tracking-wider mb-2">{t.architecture.accuracyLabel}</p>
                <p className="text-white/85">{t.architecture.accuracyDescription}</p>
              </div>
              <p className="text-5xl md:text-6xl font-heading font-bold tracking-tight">{t.architecture.accuracyValue}</p>
            </div>
          </div>
        </section>

        {/* Alert Dashboard Simulation */}
        <section id="dashboard" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#F5F7FA] rounded-[3rem] p-4 md:p-8 border border-border shadow-2xl shadow-primary/5">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Panel: Camera Feed */}
                <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden border border-border shadow-sm">
                  <div className="p-4 border-b border-border flex justify-between items-center bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="font-mono text-sm font-medium">{t.dashboard.camLabel}</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">{t.dashboard.liveStatus}</div>
                  </div>
                  <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                    <ImageWithFallback 
                      src={dashboardImage} 
                      alt={t.dashboard.dashboardImageAlt}
                      className="w-full h-full object-cover object-center scale-[1.05] origin-top-left"
                    />
                    {/* Pose Estimation Overlay Graphic */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 2 }}
                        d="M30 40 L40 50 L50 45 L60 60"
                        stroke="#3ED7D5" strokeWidth="0.5" fill="none"
                      />
                      <motion.circle cx="30" cy="40" r="0.8" fill="#2A7FFF" />
                      <motion.circle cx="40" cy="50" r="0.8" fill="#2A7FFF" />
                      <motion.circle cx="50" cy="45" r="0.8" fill="#2A7FFF" />
                      <motion.circle cx="60" cy="60" r="0.8" fill="#2A7FFF" />
                    </svg>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded text-white text-xs font-mono">
                        {t.dashboard.personBadge}
                      </div>
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded text-white text-xs font-mono">
                        {t.dashboard.fallWarning}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Alert Card */}
                <div className="lg:col-span-4 space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-3xl p-6 border-2 border-red-100 shadow-xl shadow-red-500/5 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                        <Bell className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-bold text-red-600 tracking-wide">{t.dashboard.alertTitle}</h3>
                        <p className="text-xs text-muted-foreground font-mono">{t.dashboard.alertTime}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-800 text-sm font-medium">
                        {t.dashboard.alertMessage}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.dashboard.patientLabel}</p>
                          <p className="font-semibold text-sm">{t.dashboard.patientName}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.dashboard.locationLabel}</p>
                          <p className="font-semibold text-sm">{t.dashboard.bedValue}</p>
                          <p className="text-xs text-muted-foreground">{t.dashboard.roomValue}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-red-100/50">
                        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-2">{t.dashboard.demographicsLabel}</p>
                        <div className="grid grid-cols-4 gap-2">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">{t.dashboard.ageLabel}</p>
                            <p className="font-medium text-sm">{t.dashboard.ageValue}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">{t.dashboard.genderLabel}</p>
                            <p className="font-medium text-sm">{t.dashboard.genderValue}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">{t.dashboard.heightLabel}</p>
                            <p className="font-medium text-sm">{t.dashboard.heightValue}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">{t.dashboard.weightLabel}</p>
                            <p className="font-medium text-sm">{t.dashboard.weightValue}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-red-100/50 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">{t.dashboard.respirationLabel}</p>
                          <p className="font-mono font-medium text-red-600">{t.dashboard.respirationValue}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">{t.dashboard.temperatureLabel}</p>
                          <p className="font-mono font-medium text-orange-500">{t.dashboard.temperatureValue}</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-500/20">
                      <Stethoscope className="w-4 h-4" /> {t.dashboard.reportButton}
                    </button>
                  </motion.div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* About & Contact */}
        <section id="about" className="py-24 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24">
            
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-heading font-bold mb-2">{t.about.companyName}</h2>
                <h3 className="text-xl text-primary font-medium">{t.about.tagline}</h3>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {t.about.description}
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-[#F7FBFF] p-8 md:p-12 rounded-[2.5rem] border border-primary/10">
              <h3 className="text-2xl font-bold mb-8">{t.about.contactTitle}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.about.hotlineLabel}</p>
                    <p className="text-xl font-semibold">{t.about.hotlineValue}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.about.emailLabel}</p>
                    <p className="text-xl font-semibold">{t.about.emailValue}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <ImageWithFallback 
              src={logoImage} 
              alt="VICARE" 
              className="h-10 w-20 object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
