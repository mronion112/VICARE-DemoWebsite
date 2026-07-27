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
  BrainCircuit,
  ActivitySquare,
  AlertTriangle
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImage from "@/imports/image.png";
import heroImage from "@/imports/_nh1.png";
import dashboardImage from "@/imports/Gemini_Generated_Image_wsanfwwsanfwwsan.png";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-border/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageWithFallback 
              src={logoImage} 
              alt="VICARE Y Nhãn Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">Về Y Nhãn</a>
            <a href="#features" className="hover:text-primary transition-colors">Tính năng</a>
            <a href="#architecture" className="hover:text-primary transition-colors">Kiến trúc AI</a>
            <a href="#dashboard" className="hover:text-primary transition-colors">Sản Phẩm</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
              Liên hệ
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
                  <span>Dự án AI chăm sóc sức khỏe của VICARE</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
                  <span className="block text-primary">Y Nhãn</span>
                  Công nghệ y tế của người Việt
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  "Trao ngành Y thêm một đôi Nhãn, trao người bệnh thêm một chữ An."<br/><br/>
                  Y Nhãn là "đôi mắt AI" hỗ trợ bệnh viện quan sát bệnh nhân không tiếp xúc liên tục, phát hiện sớm rủi ro và nâng cao an toàn điều trị.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Tìm hiểu dự án <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-white text-foreground border border-border px-8 py-4 rounded-full font-medium hover:bg-muted transition-colors flex items-center justify-center">
                    Liên hệ hợp tác
                  </button>
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
                      alt="Bác sĩ ân cần chăm sóc bệnh nhân trên giường bệnh"
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Bài toán của ngành Y</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bác sĩ không thể ở bên mọi bệnh nhân 24/7. Nhưng AI có thể luôn quan sát. Y Nhãn không thay thế bác sĩ mà trở thành đôi mắt công nghệ đồng hành, giúp phát hiện sớm rủi ro, giảm áp lực chăm sóc.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: AlertTriangle, title: "Phát hiện sớm rủi ro", color: "from-[#FFF0F0] to-white", iconColor: "text-[#FF5A5A]" },
                { icon: Clock, title: "Giảm áp lực chăm sóc", color: "from-[#F2FCFF] to-white", iconColor: "text-[#3ED7D5]" },
                { icon: Eye, title: "Theo dõi liên tục", color: "from-[#F7FBFF] to-white", iconColor: "text-[#2A7FFF]" },
                { icon: ShieldCheck, title: "Nâng cao an toàn", color: "from-[#F0FDF4] to-white", iconColor: "text-[#22C55E]" },
                { icon: HeartPulse, title: "Mang lại sự an tâm", color: "from-[#FAF5FF] to-white", iconColor: "text-[#A855F7]" },
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Kiến trúc hệ thống AI</h2>
              <p className="text-lg text-muted-foreground">Mô hình phân tích dữ liệu hình ảnh tiên tiến với độ chính xác cao.</p>
            </div>

            {/* Models Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {[
                { title: "Person Detection", desc: "Nhận diện người trong phòng", icon: User },
                { title: "Pose Estimation", desc: "Phân tích tư thế 3D", icon: ActivitySquare },
                { title: "Action Recognition", desc: "Nhận diện hành động", icon: BrainCircuit },
                { title: "Fall Detection", desc: "Phát hiện té ngã tức thì", icon: AlertTriangle },
                { title: "Respiration Analysis", desc: "Đo nhịp thở qua video", icon: Wind },
                { title: "Heat Detection", desc: "Phân tích nhiệt độ", icon: Thermometer },
              ].map((model, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <model.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                  <p className="text-muted-foreground">{model.desc}</p>
                </motion.div>
              ))}
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
                      <span className="font-mono text-sm font-medium">CAM-ICU-04</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">LIVE • 1080p • 60FPS</div>
                  </div>
                  <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                    <ImageWithFallback 
                      src={dashboardImage} 
                      alt="Góc camera bệnh nhân đang nằm trên giường ốm"
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
                        Person 99%
                      </div>
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded text-white text-xs font-mono">
                        Seizure Warning
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
                        <h3 className="font-bold text-red-600 tracking-wide">CẢNH BÁO KHẨN</h3>
                        <p className="text-xs text-muted-foreground font-mono">14:02:45 • Vừa xong</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-800 text-sm font-medium">
                        Có dấu hiệu co giật và căng cứng cơ.
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bệnh nhân</p>
                          <p className="font-semibold text-sm">Phạm Văn A</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Vị trí</p>
                          <p className="font-semibold text-sm">Giường X</p>
                          <p className="text-xs text-muted-foreground">Phòng Y • Tòa Z</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-red-100/50">
                        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-2">Nhân Khẩu Học</p>
                        <div className="grid grid-cols-4 gap-2">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Tuổi</p>
                            <p className="font-medium text-sm">65</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Giới</p>
                            <p className="font-medium text-sm">Nam</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Cao</p>
                            <p className="font-medium text-sm">165cm</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Nặng</p>
                            <p className="font-medium text-sm">68kg</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-red-100/50 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Nhịp thở</p>
                          <p className="font-mono font-medium text-red-600">10 /min</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Nhiệt độ</p>
                          <p className="font-mono font-medium text-orange-500">40.0°C</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-500/20">
                      <Stethoscope className="w-4 h-4" /> Báo cáo Điều dưỡng
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
                <h2 className="text-4xl font-heading font-bold mb-2">VICARE</h2>
                <h3 className="text-xl text-primary font-medium">Vietnam Intelligent Care</h3>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Công nghệ y tế của người Việt, vì người Việt. VICARE phát triển các giải pháp AI nhằm nâng cao chất lượng chăm sóc sức khỏe và hỗ trợ đội ngũ y tế bằng công nghệ trí tuệ nhân tạo.
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
              <h3 className="text-2xl font-bold mb-8">Liên hệ với chúng tôi</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Hotline</p>
                    <p className="text-xl font-semibold">081 743 1106</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-xl font-semibold">tttanh.0311@gmail.com</p>
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
              className="h-6 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 VICARE.COM.VN. Bảo lưu mọi quyền.
          </p>
        </div>
      </footer>
    </div>
  );
}
