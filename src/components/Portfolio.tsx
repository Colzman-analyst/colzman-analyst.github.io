import { ArrowDown, Twitter, Facebook, Instagram, Github, Sparkles, TrendingUp, Database } from "lucide-react";
import dataCleaningImg from "@/assets/data-cleaning-sql.jpg";
import sqlAnalysisImg from "@/assets/sql-exploratory-analysis.jpg";
import powerbiImg from "@/assets/powerbi-dashboards.jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-primary),_transparent_50%)] opacity-20"></div>
      <div className="fixed inset-0 bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,hsl(240_3.7%_15.9%)_0deg,hsl(142_76%_36%)_67.5deg,hsl(240_3.7%_15.9%)_198.75deg,hsl(142_76%_36%)_251.25deg,hsl(240_3.7%_15.9%)_301.88deg,hsl(142_76%_36%)_360deg)] opacity-10"></div>
      
      {/* Intro Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm animate-glow-pulse">
            <Sparkles className="w-4 h-4" />
            Data Analyst Portfolio
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-br from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-none tracking-tight">
            COLLINS
            <br />
            <span className="text-5xl md:text-7xl font-normal text-muted-foreground">THE ANALYST</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming raw data into actionable insights with expertise in 
            <span className="text-primary font-semibold"> SQL</span>, 
            <span className="text-primary font-semibold"> Power BI</span>, and 
            <span className="text-primary font-semibold"> Python</span>
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 font-semibold text-lg">
            Explore My Work 
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border/50 z-50 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Collins.dev
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <a href="#projects" className="relative font-medium hover:text-primary transition-colors duration-300 group">
                My Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="relative font-medium hover:text-primary transition-colors duration-300 group">
                About Collins
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://x.com/Colzman1" className="p-2 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/_asapbrooo/?next=%2F" className="p-2 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/Colzman-analyst" className="p-2 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10" id="projects">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into my collection of data analysis projects showcasing real-world problem solving
          </p>
        </div>

        {/* Featured Project */}
        <article className="mb-20 animate-scale-in">
          <div className="group bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={dataCleaningImg} 
                alt="Data Cleaning SQL Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-primary/90 backdrop-blur-sm border border-primary/20 rounded-full text-primary-foreground font-semibold text-sm">
                  Featured Project
                </span>
              </div>
            </div>
            <div className="p-10">
              <h2 className="text-4xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                <a href="https://github.com/Colzman-analyst/Data-Cleaning-with-SQL" className="flex items-center gap-3">
                  Data Cleaning in SQL
                  <TrendingUp className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                A comprehensive SQL project demonstrating advanced data cleaning techniques on large datasets. 
                This project showcases identification and resolution of errors, duplicates, and missing values 
                through sophisticated SQL queries and data validation methods.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">SQL</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Data Cleaning</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Data Validation</span>
              </div>
              <a 
                href="https://github.com/Colzman-analyst/Data-Cleaning-with-SQL" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold text-lg group"
              >
                View Project
                <Github className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </article>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <article className="group bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={sqlAnalysisImg} 
                alt="SQL Exploratory Analysis Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                <a href="https://github.com/Colzman-analyst/Exploratory-analysis-with-SQL" className="flex items-center gap-2">
                  Exploratory Analysis in SQL
                  <ArrowDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[-45deg]" />
                </a>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprehensive exploratory data analysis utilizing advanced SQL techniques to uncover patterns, 
                trends, and insights from complex datasets.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">SQL</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">EDA</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Analytics</span>
              </div>
              <a 
                href="https://github.com/Colzman-analyst/Exploratory-analysis-with-SQL" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/80 text-secondary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium group"
              >
                View Project
                <Github className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </article>

          <article className="group bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={powerbiImg} 
                alt="Power BI Dashboard Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                <a href="https://app.powerbi.com/groups/me/list?experience=power-bi" className="flex items-center gap-2">
                  Power BI Dashboards
                  <ArrowDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[-45deg]" />
                </a>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Interactive business intelligence dashboards and visualizations designed to transform 
                raw data into actionable business insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Power BI</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Dashboards</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Visualization</span>
              </div>
              <a 
                href="https://app.powerbi.com/groups/me/list?experience=power-bi" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/80 text-secondary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium group"
              >
                View Dashboards
                <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-32 bg-gradient-to-b from-background to-card/50 border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gradient-primary),_transparent_70%)] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Location
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Federal Capital Territory<br />
                Abuja, Nigeria
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Phone
              </h3>
              <p className="text-muted-foreground">
                <a href="tel:+2348173289915" className="hover:text-primary transition-colors duration-300">
                  (234) 817 328 9915
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Email
              </h3>
              <p className="text-muted-foreground">
                <a href="mailto:iorbeeterver@gmail.com" className="hover:text-primary transition-colors duration-300">
                  iorbeeterver@gmail.com
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Connect
              </h3>
              <div className="flex gap-4">
                <a href="https://x.com/Colzman1" className="p-3 bg-card/50 hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-card/50 hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/_asapbrooo/?next=%2F" className="p-3 bg-card/50 hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com/Colzman-analyst" className="p-3 bg-card/50 hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              © 2024 Collins The Analyst. Crafted with data-driven precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;