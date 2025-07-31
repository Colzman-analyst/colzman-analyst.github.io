import { ArrowDown, Twitter, Instagram, Github, Sparkles, TrendingUp, Database, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import dataCleaningImg from "@/assets/data-cleaning-sql.jpg";
import sqlAnalysisImg from "@/assets/sql-exploratory-analysis.jpg";
import powerbiImg from "@/assets/powerbi-dashboards.jpg";
import excelProjectsImg from "@/assets/excel-projects.jpg";

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
              <Link to="/about" className="relative font-medium hover:text-primary transition-colors duration-300 group">
                About Collins
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            {/* Social Links in Navigation */}
            <div className="flex gap-4" aria-label="Social media links">
              <a
                href="https://x.com/Colzman1"
                className="p-2 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                aria-label="Visit Collins on X (Twitter)"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/_asapbrooo/?next=%2F"
                className="p-2 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                aria-label="Visit Collins on Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Colzman-analyst"
                className="p-2 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                aria-label="Visit Collins on GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
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
                <a href="https://github.com/Colzman-analyst/all-power-bi-dashboards-" className="flex items-center gap-2">
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
                href="https://github.com/Colzman-analyst/all-power-bi-dashboards-" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/80 text-secondary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium group"
              >
                View Dashboards
                <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </article>
        </div>

        {/* Excel Projects Section */}
        <section className="mt-32 animate-fade-in">
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data analysis and visualization projects leveraging Microsoft Excel's powerful capabilities
            </p>
          </div>

          <article className="group bg-card/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={excelProjectsImg} 
                alt="Excel Projects - Data Analysis and Dashboards"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6">
                <a
                  href="https://github.com/Colzman-analyst/All-excel-projects"
                  className="px-4 py-2 bg-primary/90 backdrop-blur-sm border border-primary/20 rounded-full text-primary-foreground font-semibold text-sm flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Excel Expertise
                </a>
              </div>
            </div>
            
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-8 group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                Microsoft Excel Projects
                <Database className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Explore a comprehensive collection of Excel-based projects that demonstrate my expertise in transforming 
                raw data into actionable business insights. These projects showcase advanced data manipulation, complex 
                formula development, and dynamic visualization techniques.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Microsoft Excel</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Data Analysis</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Dashboard Design</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Financial Modeling</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Automation</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">VBA Programming</span>
              </div>
              
              {/* Excel Projects Section Button */}
              <a
                href="https://github.com/Colzman-analyst/All-excel-projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/80 text-secondary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium group"
                aria-label="View Excel Portfolio on GitHub"
              >
                View Excel Portfolio
                <FileSpreadsheet className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </a>
            </div>
          </article>
        </section>
      </main>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto my-32 px-6 py-12 bg-card/60 rounded-3xl shadow-lg border border-border/50 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          About Collins
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-left">
          <div>I am Collins, a passionate data analyst based in Abuja, Nigeria. I am a meticulous data analyst with an aptitude for transforming complex datasets into valuable insights and actionable strategies. I excel in leveraging data-driven methodologies to drive informed decision-making and optimize organizational performance.</div><br />
         <div>My passion lies in making use of data to create impactful solutions that address business challenges and improve operational efficiency. I as well love to add value to every organization. I thrive on crafting intuitive and user-centric data visualization and reports that facilitate understanding and drive business growth.</div><br />
         <div>With a strong foundation in mathematics, I bring a unique perspective to data analysis, combining my problem solving skills, optimize model performance, interpret complex data that answer business questions with a keen eye for pattern and trends. I am proficient in utilizing tools such as PowerBI, Microsoft Excel and SQL to extract, clean and analyze data, delivering meaningful findings that drive strategic initiatives.</div> <br />
         <div>As a proactive learner, I am committed to staying abreast of emerging technologies and methodologies in data analysis. I am adept at translating complex technical concepts into clear and concise insights, making data accessible and actionable for stakeholders at all levels.</div> <br />
         <div>I am driven by a commitment to excellence, always striving to deliver high-quality work that exceeds expectations. I am a strong communicator and collaborator, capable of working effectively both independently and as part of a team. If you are seeking a highly motivated data analyst with a dedication towards delivering impactful solutions and driving business value through data-driven decision-making, I am eager to contribute to your team. Let’s connect to explore how I can support your organization’s data needs and goals.</div> 




        </p>
      </section>

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
              {/* Contact Info */}
              <p className="text-muted-foreground">
                <a
                  href="tel:+2348173289915"
                  className="hover:text-primary transition-colors duration-300"
                  aria-label="Call Collins at (234) 817 328 9915"
                >
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
                <a
                  href="mailto:iorbeeterver@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                  aria-label="Email Collins at iorbeeterver@gmail.com"
                >
                  iorbeeterver@gmail.com
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Connect
              </h3>
              {/* Social Links in Footer */}
              <div className="flex gap-4" aria-label="Social media links">
                <a
                  href="https://x.com/Colzman1"
                  className="p-3 bg-card/50 hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="Visit Collins on X (Twitter)"
                >
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/_asapbrooo/?next=%2F"
                  className="p-3 bg-card/50 hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="Visit Collins on Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Colzman-analyst"
                  className="p-3 bg-card/50 hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="Visit Collins on GitHub"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
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