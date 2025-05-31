
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Menu, X, Moon, Sun, ChevronUp, ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks, I'll reply soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const experiences = [
    {
      company: "PSE&G",
      role: "Information Technology Intern",
      period: "May 2024 – Aug 2024",
      achievements: [
        "Ran 15+ risk and vulnerability assessments across AWS, Azure, GCP, aligning with NERC CIP, GDPR, HIPAA",
        "Integrated Veracode and Dome9 scans, cutting vulnerabilities by 25 percent",
        "Embedded automated scans in Jenkins CI/CD, reducing deployment risk by 40 percent"
      ]
    },
    {
      company: "TCS",
      role: "Software Engineer",
      period: "May 2021 – May 2023",
      achievements: [
        "Automated user-data monitoring with advanced SQL, trimming manual work 80 percent",
        "Delivered 150+ Java REST APIs for 205 million VIL users, cutting support time 90 minutes",
        "Managed Tableau dashboards covering 10 TB of data, slashing retrieval from 15 to 3 minutes"
      ]
    },
    {
      company: "Parshwa Builders",
      role: "Software Engineer",
      period: "Jun 2020 – Apr 2021",
      achievements: [
        "Built Python Flask APIs on AWS Lambda, trimming latency 30 percent",
        "Guided 15-feature Agile roadmap, accelerating delivery 15 percent",
        "Implemented scalable microservices architecture"
      ]
    },
    {
      company: "CRISIL",
      role: "Software Dev Intern",
      period: "Jun 2019 – Jul 2019",
      achievements: [
        "Built chatbot with IBM Watson boosting customer satisfaction 35 percent",
        "Integrated natural language processing capabilities",
        "Streamlined customer support workflows"
      ]
    }
  ];

  const projects = [
    {
      title: "Consumer Safety Application",
      description: "Automates multi-page FDA MedWatch reporting and CAPTCHA bypass",
      tech: ["React Native", "Node.js", "Puppeteer", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=240&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Enterprise Document Intelligence Assistant",
      description: "RAG system answering queries across 10k docs with 89% accuracy",
      tech: ["LangChain", "Pinecone", "AWS", "Python", "OpenAI"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Secure Web Sign-Up System",
      description: "Academic project ensuring 100% data protection with advanced security",
      tech: ["Java", "OAuth 2.0", "AES", "Spring Boot", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=240&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    "Languages": ["C/C++", "Java", "Python", "TypeScript", "Golang", "Rust"],
    "Frameworks": ["React", "Spring Boot", "Node.js", "Flask", "Django"],
    "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Neo4j"],
    "AI/ML": ["PyTorch", "TensorFlow", "LangChain", "Bedrock"]
  };

  const themeClasses = darkMode 
    ? "bg-slate-900 text-slate-100" 
    : "bg-slate-50 text-slate-900";

  const cardClasses = darkMode 
    ? "bg-slate-800 border-slate-700" 
    : "bg-white border-slate-200";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-slate-900/90' : 'bg-slate-50/90'} border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-teal-400">KP</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-slate-900' : 'bg-slate-50'} border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 hover:text-teal-400 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-teal-400">Kartikey Patel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-400 max-w-3xl mx-auto animate-fade-in">
            Full-Stack engineer and cloud security enthusiast who turns complex ideas into fast, secure software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-teal-400 hover:bg-teal-500 text-slate-900 px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 text-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-teal-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-700 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm a New Jersey-based software engineer who loves building scalable products and sharing what I learn.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Outside code you'll find me improving gym routines and tinkering with AI agents.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-teal-400">Currently Looking For:</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>• Open to full-time SWE roles</li>
                  <li>• Back-end heavy or full-stack positions</li>
                  <li>• Cloud and security-focused opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Work <span className="text-teal-400">Experience</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-400 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className={`p-6 ml-0 md:ml-20 ${cardClasses} hover:shadow-lg transition-shadow duration-300`}>
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-teal-400 rounded-full hidden md:block"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-teal-400">{exp.role}</h3>
                      <p className="text-lg font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-slate-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 text-slate-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-400 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`overflow-hidden ${cardClasses} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-teal-400/10 text-teal-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-teal-400 hover:bg-teal-500 text-slate-900">
                      <ExternalLink size={16} className="mr-2" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className={`p-6 ${cardClasses} hover:shadow-lg transition-shadow duration-300`}>
                <h3 className="text-xl font-bold mb-4 text-teal-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <Badge key={i} variant="secondary" className={`${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
              <p className="text-slate-400 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to discuss how we can work together.
              </p>
              
              <div className="space-y-4">
                <a href="tel:+18624237020" className="flex items-center text-slate-400 hover:text-teal-400 transition-colors">
                  <Phone size={20} className="mr-3" />
                  +1 (862) 423-7020
                </a>
                <a href="mailto:kartikey.patel1398@gmail.com" className="flex items-center text-slate-400 hover:text-teal-400 transition-colors">
                  <Mail size={20} className="mr-3" />
                  kartikey.patel1398@gmail.com
                </a>
                <a href="https://linkedin.com/in/patel-kartikey" className="flex items-center text-slate-400 hover:text-teal-400 transition-colors">
                  <Linkedin size={20} className="mr-3" />
                  linkedin.com/in/patel-kartikey
                </a>
                <a href="https://github.com/patel-kartikey" className="flex items-center text-slate-400 hover:text-teal-400 transition-colors">
                  <Github size={20} className="mr-3" />
                  github.com/patel-kartikey
                </a>
              </div>
            </div>
            
            <Card className={`p-6 ${cardClasses}`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className={`${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-slate-100 border-slate-300'}`}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className={`${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-slate-100 border-slate-300'}`}
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className={`${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-slate-100 border-slate-300'}`}
                />
                <Button type="submit" className="w-full bg-teal-400 hover:bg-teal-500 text-slate-900">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              © 2025 Kartikey Patel – Crafted with passion and a few cups of coffee.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/patel-kartikey" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/patel-kartikey" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:kartikey.patel1398@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-teal-400 text-slate-900 rounded-full shadow-lg hover:bg-teal-500 transition-all duration-300 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;
