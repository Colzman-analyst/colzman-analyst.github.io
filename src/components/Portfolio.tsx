import { ArrowDown, Twitter, Facebook, Instagram, Github } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Intro Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            COLLINS<br />
            THE ANALYST PORTFOLIO
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A meticulous data analyst skilled in SQL, Power BI, and Python.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            Continue <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">My page</div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              <a href="#projects" className="hover:text-primary transition-colors">My projects</a>
              <a href="#about" className="hover:text-primary transition-colors">About Collins</a>
            </div>
            <div className="flex gap-4">
              <a href="https://x.com/Colzman1" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/_asapbrooo/?next=%2F" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/Colzman-analyst" className="hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16" id="projects">
        {/* Featured Project */}
        <article className="mb-16">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/50">SQL</div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                <a href="https://github.com/Colzman-analyst/Data-Cleaning-with-SQL" className="hover:text-primary transition-colors">
                  Data Cleaning in SQL
                </a>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                In this project, you will find all the SQL skills and stages involved in cleaning a large dataset, 
                pointing out the errors, duplicates and empty spaces in the data provided.
              </p>
              <a 
                href="https://github.com/Colzman-analyst/Data-Cleaning-with-SQL" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </article>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-4xl font-bold text-secondary/50">SQL</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                <a href="https://github.com/Colzman-analyst/Exploratory-analysis-with-SQL" className="hover:text-primary transition-colors">
                  Exploratory Analysis in SQL
                </a>
              </h3>
              <p className="text-muted-foreground mb-4">
                Here in this project, an in-depth analysis was made in the dataset provided using different exploratory SQL techniques to tackle the situation.
              </p>
              <a 
                href="https://github.com/Colzman-analyst/Exploratory-analysis-with-SQL" 
                className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
              >
                View Project
              </a>
            </div>
          </article>

          <article className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <div className="text-4xl font-bold text-accent/50">BI</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                <a href="https://app.powerbi.com/groups/me/list?experience=power-bi" className="hover:text-primary transition-colors">
                  Power BI Dashboards
                </a>
              </h3>
              <p className="text-muted-foreground mb-4">
                Interactive dashboards and visualizations created using Power BI to provide insights and analytics for business decision making.
              </p>
              <a 
                href="https://app.powerbi.com/groups/me/list?experience=power-bi" 
                className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
              >
                View Dashboards
              </a>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-3">Location</h3>
              <p className="text-muted-foreground">
                Federal Capital Territory<br />
                Abuja, Nigeria
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Phone</h3>
              <p className="text-muted-foreground">(234) 817 328 9915</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Email</h3>
              <p className="text-muted-foreground">iorbeeterver@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Social</h3>
              <div className="flex gap-4">
                <a href="https://x.com/Colzman1" className="hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/_asapbrooo/?next=%2F" className="hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com/Colzman-analyst" className="hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;