import { useState, useEffect, useRef, FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Github } from "lucide-react";
import dataCleaningImg from "@/assets/data-cleaning-sql.jpg";
import sqlAnalysisImg from "@/assets/sql-exploratory-analysis.jpg";
import powerbiImg from "@/assets/powerbi-dashboards.jpg";
import excelProjectsImg from "@/assets/excel-projects.jpg";

// ─── Reveal on scroll ─────────────────────────────────────────────────────────
const Reveal: FC<{ children: ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.75s ${delay}s cubic-bezier(.22,1,.36,1), transform 0.75s ${delay}s cubic-bezier(.22,1,.36,1)`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Animated counter ─────────────────────────────────────────────────────────
const Counter: FC<{ target: string }> = ({ target }) => {
  const num = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9.]/g, "");
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = num / 40;
    const t = setInterval(() => {
      start += step;
      if (start >= num) { setVal(num); clearInterval(t); }
      else setVal(Math.floor(start));
    }, 30);
    return () => clearInterval(t);
  }, [inView, num]);
  return <span ref={ref}>{isNaN(num) ? target : `${val}${suffix}`}</span>;
};

// ─── Particle canvas ──────────────────────────────────────────────────────────
const Particles: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.4,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,212,255,0.45)";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.1 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

// ─── Main Portfolio ───────────────────────────────────────────────────────────
const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["hero", "projects", "about", "skills", "achievements", "certifications", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (label: string, href: string, isRouter = false) => {
    const active = activeSection === href.replace("#", "");
    const cls = `relative font-medium text-sm uppercase tracking-widest transition-colors duration-200 ${active ? "text-cyan-400" : "text-slate-400 hover:text-white"}`;
    return isRouter
      ? <Link to={href} className={cls}>{label}</Link>
      : <a href={href} className={cls}>{label}</a>;
  };

  return (
    <div
      className="min-h-screen text-slate-100 overflow-x-hidden"
      style={{ background: "#080c12", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;900&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #080c12; }
        ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.3); border-radius: 3px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.75)} }
      `}</style>

      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px", zIndex: 0,
      }} />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled ? "rgba(8,12,18,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
        }}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="font-black text-xl tracking-tight text-white">
            Collins<span style={{ color: "#00d4ff" }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLink("Projects", "#projects")}
            {navLink("About", "#about")}
            {navLink("About Collins", "/about", true)}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://x.com/Colzman1" target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/_asapbrooo/" target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://github.com/Colzman-analyst" target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/10">
              <Github className="w-4 h-4" />
            </a>
            <a href="/Collins_Iorbee_CV.pdf" download="Collins_Iorbee_CV.pdf"
              className="text-sm font-medium px-4 py-2.5 rounded-md transition-all hover:-translate-y-0.5 border"
              style={{ borderColor: "rgba(0,212,255,0.2)", color: "#e8edf5", background: "transparent" }}>
              Download CV ↓
            </a>
            <a href="mailto:iorbeeterver@gmail.com"
              className="text-sm font-semibold px-5 py-2.5 rounded-md transition-all hover:-translate-y-0.5"
              style={{ background: "#00d4ff", color: "#080c12" }}>
              Hire Me
            </a>
          </div>
          <button className="md:hidden text-slate-300" onClick={() => setMenuOpen(v => !v)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 py-4 flex flex-col gap-4 border-t border-cyan-500/10"
            style={{ background: "#0d1420" }}>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="text-slate-300 text-sm uppercase tracking-widest">Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-slate-300 text-sm uppercase tracking-widest">About</a>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-slate-300 text-sm uppercase tracking-widest">About Collins</Link>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#080c12" }}>
        <Particles />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.06), transparent)"
        }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div style={{ animation: "fadeUp 0.6s ease both" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 border"
              style={{ background: "rgba(0,212,255,0.08)", borderColor: "rgba(0,212,255,0.25)", color: "#00d4ff" } as React.CSSProperties}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff", animation: "pulseDot 2s infinite" }} />
              Data Analyst · Business Analyst · Data Scientist
            </div>

            <h1 style={{ animation: "fadeUp 0.6s 0.1s ease both", fontWeight: 900, fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 1.02, letterSpacing: "-0.03em", marginBottom: "1.4rem" }}>
              Turning Data<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(0,212,255,0.4)" }}>Into Decisions</span>
              <span style={{ color: "#00d4ff" }}>.</span>
            </h1>

            <p style={{ animation: "fadeUp 0.6s 0.2s ease both", color: "#7a8a9e", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.85, maxWidth: 540, marginBottom: "2.2rem" }}>
              I'm <strong style={{ color: "#e8edf5", fontWeight: 500 }}>Collins Iorbee</strong> — based in Abuja, Nigeria. I ask{" "}
              <strong style={{ color: "#e8edf5", fontWeight: 500 }}>why</strong> things happen, then build models and dashboards that answer it.
            </p>

            <div style={{ animation: "fadeUp 0.6s 0.3s ease both" }} className="flex flex-wrap gap-4 mb-16">
              <a href="#projects"
                className="font-bold text-sm px-8 py-3.5 rounded-md transition-all hover:-translate-y-0.5"
                style={{ background: "#00d4ff", color: "#080c12" }}>
                View My Work
              </a>
              <a href="mailto:iorbeeterver@gmail.com"
                className="font-medium text-sm px-8 py-3.5 rounded-md transition-all hover:-translate-y-0.5 border text-white"
                style={{ borderColor: "rgba(0,212,255,0.2)", background: "transparent" }}>
                Get In Touch
              </a>
              <a href="/Collins_Iorbee_CV.pdf" download="Collins_Iorbee_CV.pdf"
                className="font-medium text-sm px-8 py-3.5 rounded-md transition-all hover:-translate-y-0.5"
                style={{ borderColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", color: "#7a8a9e", background: "transparent" }}>
                Download CV ↓
              </a>
            </div>

            <div style={{ animation: "fadeUp 0.6s 0.4s ease both", borderTop: "1px solid rgba(0,212,255,0.1)", paddingTop: "2.5rem" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: "3+", label: "Years Experience" },
                { num: "50+", label: "Students Trained" },
                { num: "30%", label: "Data Accuracy Gained" },
                { num: "50%", label: "Reporting Time Saved" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-black leading-none mb-1" style={{ fontSize: "2.2rem", color: "#00d4ff" }}>
                    <Counter target={s.num} />
                  </div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "#7a8a9e" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "#334155" }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#0d1420", borderTop: "1px solid rgba(0,212,255,0.08)", borderBottom: "1px solid rgba(0,212,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap gap-6 justify-between items-center">
          {["SQL", "Python", "R", "Power BI", "Excel", "Machine Learning", "ETL Pipelines", "AWS", "Azure", "BigQuery"].map(s => (
            <span key={s} className="text-xs font-medium uppercase tracking-widest" style={{ color: "#7a8a9e" }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <main id="projects" style={{ background: "#080c12" }} className="max-w-6xl mx-auto px-6 py-24">

        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#00d4ff" }}>Portfolio</span>
          <h2 className="font-black tracking-tight mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>Featured Projects</h2>
          <p className="font-light mb-14 max-w-lg" style={{ color: "#7a8a9e", lineHeight: 1.7 }}>
            Real-world data projects solving business problems with measurable impact.
          </p>
        </Reveal>

        {/* NEW — Churn Prediction (our project) */}
        <Reveal delay={0.05}>
          <a href="https://github.com/Colzman-analyst/churn-prediction-r" target="_blank" rel="noopener noreferrer"
            className="group block mb-6 rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5"
            style={{ background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.25)" }}>
            <div className="p-8 md:p-10 relative">
              <div className="absolute top-6 right-6 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                style={{ background: "rgba(0,212,255,0.12)", borderColor: "rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                ★ Latest Project
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["R", "Machine Learning", "Fintech", "Random Forest"].map(t => (
                  <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded" style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff" }}>{t}</span>
                ))}
              </div>
              <h3 className="font-black mb-3 text-white" style={{ fontSize: "1.8rem", letterSpacing: "-0.02em" }}>
                Customer Churn Prediction Model
              </h3>
              <p className="font-light mb-8 max-w-2xl" style={{ color: "#7a8a9e", lineHeight: 1.8 }}>
                End-to-end ML project comparing Logistic Regression and Random Forest on 7,000+ customer records. Achieved AUC of 0.851 with 81.1% recall. Delivered $145K annual savings estimate through actionable business recommendations.
              </p>
              <div className="flex flex-wrap gap-8 mb-8 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {[{ val: "0.851", label: "AUC Score" }, { val: "81.1%", label: "Recall" }, { val: "7,032", label: "Records Analysed" }, { val: "$145K", label: "Est. Annual Savings" }].map(m => (
                  <div key={m.label}>
                    <div className="font-black" style={{ fontSize: "1.4rem", color: "#00d4ff" }}>{m.val}</div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "#7a8a9e" }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: "#00d4ff" }}>
                View on GitHub ↗
              </span>
            </div>
          </a>
        </Reveal>

        {/* Data Cleaning — Featured */}
        <Reveal delay={0.08}>
          <a href="https://github.com/Colzman-analyst/Data-Cleaning-with-SQL" target="_blank" rel="noopener noreferrer"
            className="group block mb-6 rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,212,255,0.1)" }}>
            <div className="aspect-video relative overflow-hidden" style={{ maxHeight: 380 }}>
              <img src={dataCleaningImg} alt="Data Cleaning SQL Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,12,18,0.9) 0%, transparent 60%)" }} />
              <div className="absolute top-5 left-5">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "rgba(0,212,255,0.9)", color: "#080c12" }}>
                  Featured Project
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {["SQL", "Python", "Data Cleaning", "Data Validation"].map(t => (
                  <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded" style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff" }}>{t}</span>
                ))}
              </div>
              <h3 className="font-black text-white mb-3" style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
                Data Cleaning in SQL and Python
              </h3>
              <p className="font-light mb-6" style={{ color: "#7a8a9e", lineHeight: 1.8 }}>
                Advanced data cleaning techniques on large datasets — identifying and resolving errors, duplicates and missing values through sophisticated SQL queries and data validation methods.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: "#00d4ff" }}>
                View Project ↗
              </span>
            </div>
          </a>
        </Reveal>

        {/* Grid — 2 col */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {[
            {
              href: "https://github.com/Colzman-analyst/Exploratory-analysis-with-SQL",
              img: sqlAnalysisImg, alt: "SQL Analysis",
              tags: ["SQL", "Python", "EDA", "Analytics"],
              title: "Exploratory Analysis in SQL & Python",
              desc: "Comprehensive exploratory data analysis using advanced SQL to uncover patterns, trends and insights from complex datasets.",
            },
            {
              href: "https://github.com/Colzman-analyst/all-power-bi-dashboards-",
              img: powerbiImg, alt: "Power BI",
              tags: ["Power BI", "Dashboards", "Visualisation"],
              title: "Power BI Dashboards",
              desc: "Interactive business intelligence dashboards transforming raw data into actionable insights for executive decision-making.",
            },
          ].map((proj, i) => (
            <Reveal key={proj.title} delay={i * 0.08}>
              <a href={proj.href} target="_blank" rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 h-full"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,212,255,0.1)" }}>
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img src={proj.img} alt={proj.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,12,18,0.7), transparent)" }} />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tags.map(t => <span key={t} className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff" }}>{t}</span>)}
                  </div>
                  <h3 className="font-bold text-white mb-2" style={{ fontSize: "1.1rem" }}>{proj.title}</h3>
                  <p className="font-light text-sm mb-4" style={{ color: "#7a8a9e", lineHeight: 1.7 }}>{proj.desc}</p>
                  <span className="text-sm font-semibold" style={{ color: "#00d4ff" }}>View Project ↗</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Excel Projects */}
        <Reveal delay={0.1}>
          <a href="https://github.com/Colzman-analyst/All-excel-projects" target="_blank" rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,212,255,0.1)" }}>
            <div className="relative overflow-hidden" style={{ height: 280 }}>
              <img src={excelProjectsImg} alt="Excel Projects" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,12,18,0.85), transparent 60%)" }} />
              <div className="absolute top-5 left-5">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "rgba(0,212,255,0.9)", color: "#080c12" }}>
                  Excel Expertise
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Microsoft Excel", "Data Analysis", "Dashboard Design", "Financial Modelling", "Automation", "VBA"].map(t => (
                  <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded" style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff" }}>{t}</span>
                ))}
              </div>
              <h3 className="font-black text-white mb-3" style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}>Microsoft Excel Projects</h3>
              <p className="font-light mb-6 max-w-2xl" style={{ color: "#7a8a9e", lineHeight: 1.8 }}>
                A comprehensive collection of Excel-based projects demonstrating advanced data manipulation, complex formula development and dynamic visualisation techniques.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: "#00d4ff" }}>
                View Excel Portfolio ↗
              </span>
            </div>
          </a>
        </Reveal>
      </main>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: "#0d1420" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#00d4ff" }}>About Me</span>
              <h2 className="font-black tracking-tight mb-6" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>
                The Analyst<br />Who Asks <em>Why</em>
              </h2>
              <div className="space-y-4 font-light" style={{ color: "#7a8a9e", lineHeight: 1.85, fontSize: "0.97rem" }}>
                <p>I've always been drawn to patterns. Before I knew what data analytics was, I was the person who couldn't look at something scattered without wanting to organise it — and couldn't see a result without asking what caused it.</p>
                <p>My degree in <strong style={{ color: "#e8edf5", fontWeight: 500 }}>Industrial Mathematics & Statistics</strong> from FUT Minna gave me the foundation. Four months of intensive training at <strong style={{ color: "#e8edf5", fontWeight: 500 }}>AfriHub Centre for Excellence, Abuja (2023)</strong> gave me the tools.</p>
                <p>What makes me different is that I <strong style={{ color: "#e8edf5", fontWeight: 500 }}>bridge data and people</strong>. I've taught 50+ students analytics from scratch and built dashboards that non-technical executives actually use and act on.</p>
              </div>
              <blockquote className="mt-8 font-light italic text-white text-lg leading-relaxed pl-5"
                style={{ borderLeft: "2px solid #00d4ff", lineHeight: 1.7 }}>
                "Data is just scattered facts until someone asks the right questions."
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:iorbeeterver@gmail.com"
                  className="font-bold text-sm px-6 py-3 rounded-md transition-all hover:-translate-y-0.5"
                  style={{ background: "#00d4ff", color: "#080c12" }}>
                  Get In Touch
                </a>
                <a href="https://www.linkedin.com/in/collins-iorbee-22a125214/" target="_blank" rel="noopener noreferrer"
                  className="font-medium text-sm px-6 py-3 rounded-md transition-all hover:-translate-y-0.5 border text-white"
                  style={{ borderColor: "rgba(0,212,255,0.2)", background: "transparent" }}>
                  LinkedIn Profile
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🔍", title: "Curious by Nature", desc: "I ask why things happen — that's what drew me to data." },
                  { icon: "🎓", title: "Trainer & Mentor", desc: "Taught 50+ students across Excel, Power BI & SQL." },
                  { icon: "🏥", title: "Healthcare Domain", desc: "2+ years of HIPAA-compliant healthcare data work." },
                  { icon: "🌍", title: "Global Mindset", desc: "Targeting remote roles across fintech, health & tech." },
                  { icon: "🧩", title: "Problem Solver", desc: "People come to me when things don't make sense." },
                  { icon: "⚡", title: "Self-taught", desc: "Most of my tools were learned independently — fast." },
                ].map(c => (
                  <div key={c.title} className="rounded-xl p-4 transition-all duration-200 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,212,255,0.1)" }}>
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <div className="font-semibold text-sm text-white mb-1">{c.title}</div>
                    <div className="text-xs font-light" style={{ color: "#7a8a9e", lineHeight: 1.5 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <div style={{ background: "#080c12" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#00d4ff" }}>What I Work With</span>
            <h2 className="font-black tracking-tight mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>Skills & Tools</h2>
            <p className="font-light mb-12 max-w-lg" style={{ color: "#7a8a9e", lineHeight: 1.7 }}>A full-stack data skill set built through real-world projects and self-driven learning.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Languages & Querying", tags: ["Python", "R", "SQL", "MySQL", "PostgreSQL", "SQL Server", "NoSQL"] },
              { title: "Analytics & Visualisation", tags: ["Power BI", "Excel", "Pivot Tables", "Dashboards", "SPSS", "PSPP", "ggplot2"] },
              { title: "Machine Learning", tags: ["Scikit-learn", "Random Forest", "Logistic Regression", "Time Series", "Forecasting", "A/B Testing"] },
              { title: "Cloud & Infrastructure", tags: ["AWS S3", "AWS Redshift", "Microsoft Azure", "Google BigQuery", "ETL Pipelines"] },
              { title: "Python Libraries", tags: ["Pandas", "NumPy", "Statsmodels", "Matplotlib", "Web Scraping"] },
              { title: "Tools & Workflow", tags: ["Git / GitHub", "Microsoft Teams", "AI-assisted Analytics", "Data Governance", "HIPAA Compliance"] },
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.06}>
                <div className="rounded-xl p-5 h-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,212,255,0.1)" }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-4 pb-3"
                    style={{ color: "#00d4ff", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
                    {cat.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded transition-all hover:text-cyan-400 cursor-default"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#e8edf5" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" style={{ background: "#080c12" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#00d4ff" }}>Impact</span>
            <h2 className="font-black tracking-tight mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>Key Achievements</h2>
            <p className="font-light mb-12 max-w-lg" style={{ color: "#7a8a9e", lineHeight: 1.7 }}>Real numbers from real work — measurable outcomes delivered for businesses and people.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: "30%", label: "Data accuracy improvement", desc: "Achieved at Cress Pharmaceuticals by automating SQL pipelines that standardised patient and financial data across clinical systems.", color: "#00d4ff" },
              { num: "50%", label: "Reporting time reduction", desc: "Cut weekly reporting time in half by building interactive Excel Pivot dashboards enabling faster insights for executive review.", color: "#00d4ff" },
              { num: "50+", label: "Students trained in data analytics", desc: "Designed and delivered a 2-month online bootcamp teaching Excel, Power BI and SQL across 3 live sessions per week.", color: "#00d4ff" },
              { num: "25%", label: "Healthcare reporting reliability gain", desc: "Improved data quality at Cress Pharmaceuticals through rigorous audits detecting anomalies in patient records.", color: "#00d4ff" },
              { num: "0.851", label: "AUC score on churn prediction model", desc: "Built a Random Forest model on 7,000+ customer records achieving strong predictive performance on unseen test data.", color: "#00d4ff" },
              { num: "3+", label: "Recurring reports produced weekly", desc: "Tracked revenue, treatment progress and patient engagement at Cress Pharmaceuticals supporting strategic business planning.", color: "#00d4ff" },
            ].map((a, i) => (
              <Reveal key={a.label} delay={i * 0.06}>
                <div className="flex gap-5 p-5 rounded-xl transition-all duration-200 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,212,255,0.1)" }}>
                  <div className="font-black shrink-0" style={{ fontSize: "2rem", color: a.color, lineHeight: 1, minWidth: 72 }}>{a.num}</div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-1 capitalize">{a.label}</div>
                    <div className="text-xs font-light leading-relaxed" style={{ color: "#7a8a9e" }}>{a.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" style={{ background: "#0d1420" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#00d4ff" }}>Training & Credentials</span>
            <h2 className="font-black tracking-tight mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>Certifications</h2>
            <p className="font-light mb-12 max-w-lg" style={{ color: "#7a8a9e", lineHeight: 1.7 }}>Formal training and certifications that underpin my technical skill set.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Data Analytics Training", issuer: "AfriHub Centre for Excellence", date: "2023", location: "Abuja, Nigeria (Physical)", status: "Completed", desc: "4 months of intensive hands-on training covering data analysis, SQL, Excel, Power BI and data storytelling." },
              { title: "B.Tech — Industrial Mathematics & Statistics", issuer: "Federal University of Technology, Minna", date: "Expected 2025", location: "Nigeria", status: "In Progress", desc: "Strong foundation in statistical modelling, time-series forecasting, machine learning and applied mathematics." },
              { title: "Microsoft PL-300 — Power BI Associate", issuer: "Microsoft Learn", date: "In Progress", location: "Online", status: "Pursuing", desc: "Industry-recognised certification validating Power BI data modelling, visualisation and reporting skills." },
            ].map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.08}>
                <div className="rounded-xl p-5 h-full flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,212,255,0.1)" }}>
                  <div className="flex justify-between items-start gap-3">
                    <div className="font-bold text-sm text-white leading-snug">{cert.title}</div>
                    <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: cert.status === "Completed" ? "rgba(34,197,94,0.12)" : "rgba(0,212,255,0.1)",
                        color: cert.status === "Completed" ? "#4ade80" : "#00d4ff",
                        border: cert.status === "Completed" ? "1px solid rgba(74,222,128,0.25)" : "1px solid rgba(0,212,255,0.2)",
                      }}>
                      {cert.status}
                    </span>
                  </div>
                  <div className="text-xs font-semibold" style={{ color: "#00d4ff" }}>{cert.issuer}</div>
                  <div className="flex gap-3 text-xs" style={{ color: "#7a8a9e" }}>
                    <span>{cert.date}</span>
                    <span>·</span>
                    <span>{cert.location}</span>
                  </div>
                  <div className="text-xs font-light leading-relaxed mt-auto" style={{ color: "#7a8a9e" }}>{cert.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ background: "#0d1420" }}>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#00d4ff" }}>Get In Touch</span>
            <h2 className="font-black tracking-tight mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
              Let's Build<br />Something Together
            </h2>
            <p className="font-light mb-10 max-w-xl mx-auto" style={{ color: "#7a8a9e", lineHeight: 1.7 }}>
              I'm actively seeking Data Analyst, Business Analyst and Data Scientist roles — remote or global. Whether you have an opportunity or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "iorbeeterver@gmail.com", href: "mailto:iorbeeterver@gmail.com" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/collins-iorbee-22a125214/" },
                { label: "GitHub", href: "https://github.com/Colzman-analyst" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="font-medium text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,212,255,0.15)", color: "#e8edf5" }}>
                  {l.label}
                </a>
              ))}
            </div>
            <a href="mailto:iorbeeterver@gmail.com"
              className="inline-block font-bold text-sm px-10 py-4 rounded-md transition-all hover:-translate-y-0.5"
              style={{ background: "#00d4ff", color: "#080c12" }}>
              Send Me a Message
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#080c12", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {[
              { title: "Location", content: "Federal Capital Territory\nAbuja, Nigeria" },
              { title: "Phone", content: "(234) 817 328 9915", href: "tel:+2348173289915" },
              { title: "Email", content: "iorbeeterver@gmail.com", href: "mailto:iorbeeterver@gmail.com" },
            ].map(col => (
              <div key={col.title}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
                  <span className="font-bold text-sm" style={{ color: "#00d4ff" }}>{col.title}</span>
                </div>
                {col.href
                  ? <a href={col.href} className="font-light text-sm hover:text-cyan-400 transition-colors" style={{ color: "#7a8a9e" }}>{col.content}</a>
                  : <p className="font-light text-sm whitespace-pre-line" style={{ color: "#7a8a9e" }}>{col.content}</p>
                }
              </div>
            ))}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
                <span className="font-bold text-sm" style={{ color: "#00d4ff" }}>Connect</span>
              </div>
              <div className="flex gap-3">
                <a href="https://x.com/Colzman1" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#7a8a9e" }}>
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/_asapbrooo/" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#7a8a9e" }}>
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://github.com/Colzman-analyst" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#7a8a9e" }}>
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-wrap justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}>
            <p className="text-sm" style={{ color: "#7a8a9e" }}>© 2025 Collins Iorbee. Built with passion from Abuja, Nigeria.</p>
            <a href="https://github.com/Colzman-analyst" className="text-sm hover:text-cyan-400 transition-colors" style={{ color: "#7a8a9e" }}>@Colzman-analyst</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
