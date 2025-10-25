"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";



export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const year = new Date().getFullYear();
  useEffect(() => {
    setIsVisible(true);
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
emailjs.init("NnSLm5Tvyp4jm3j4_");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    await emailjs.send(
      "service_u9umlww", // Your EmailJS service ID
      "template_ol2htam", // Your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Selim Reza",
      }
    );

    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("EmailJS error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "✨" },
    { name: "Django", icon: "🎯" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🔴" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Git", icon: "📝" },
    { name: "Scraping", icon: "🕷️" },
    { name: "Debugging", icon: "🔍" },
    { name: "Hosting & Deployment", icon: "🚀" },
  ];

  const projects = [
    {
      title: "Global Shopping Automation & Forwarding",
      role: "Backend Developer & Deployment Engineer",
      description:
        "Automation platform to fetch product details from global marketplaces with a robust admin dashboard for monitoring and managing orders.",
      features: [
        "Automatically fetch product details from major international stores",
        "Provide manual purchase forms when automation fails",
        "Advanced admin dashboard for managing users, products, and orders",
      ],
      tech: [
        "Django",
        "API",
        "Playwright",
        "BeautifulSoup4",
        "lxml",
        "Resend",
        "Digital Ocean",
        "Bkash"
      ],
      image:
        "https://i.ibb.co.com/Nd4j13Qz/Screenshot-from-2025-09-10-08-34-16.png",
      liveDemo: "https://www.americatobd.com", // Add your actual live demo URL
      github:
        "https://github.com/mohammadSelimReza/Global-shopping-automation-and-forwarding-platform-server",
    },
    {
      title: "AI Travel Planner — Intelligent Trip Assistant",
      role: "Backend Development & Deployment",
      description:
        "AI-integrated trip planning platform for smarter and more personalized travel experiences.",
      features: [
        "Plan journeys by chatting with an AI travel assistant",
        "Create and store journals of past and upcoming trips",
        "Scrape travel data from Booking.com and other sources with Stripe payment support",
      ],
      tech: ["Django", "DRF", "Open Ai", "Scrapping", "Stripe", "Render"],
      image:
        "https://i.ibb.co.com/LdKhjhj6/Screenshot-from-2025-09-10-08-36-28.png",
      liveDemo: "https://mtravel.ai", // Add your actual live demo URL
      github: "https://github.com/mohammadSelimReza/Ai-Travel-Planner",
    },
    {
      title: "EduSoft — E-Learning Platform",
      role: "Full-Stack Developer",
      description:
        "Feature-rich e-learning platform enabling browsing, enrollment, payments, and interactive learning.",
      features: [
        "JWT authentication, password management, and role-based access control",
        "Seamless backend with DRF + PostgreSQL + SSLCommerz",
        "Interactive React frontend with Tailwind CSS, Router, and Axios",
        "Core features: course browsing, enrollment, cart, checkout, order management, and dashboards",
      ],
      tech: [
        "Django",
        "DRF",
        "PostgreSQL",
        "SSLCommerz",
        "React",
        "Tailwind CSS",
        "Axios",
        "Deployment"
      ],
      image:
        "https://i.ibb.co.com/vCGNtNGf/421224197-4d8ba02e-9462-4996-832f-804c306a707a.png",
      liveDemo: "https://edusoft-lms.netlify.app", // Add your actual live demo URL
      github:
        "https://github.com/mohammadSelimReza/EduSoft---Learning-Management-System",
    },
  ];

  const experiences = [
    {
      title: "Backend Developer (Remote, Part-Time)",
      company: "FAARNS",
      period: "July 2025 - Present",
      description:
        "Built scalable APIs and optimized database structures for performance. Developed production-ready servers with smooth deployment pipelines. Debugged and resolved critical issues in live environments to ensure stability.",
      achievements: [
        "Built scalable APIs and optimized database structures",
        "Developed production-ready deployment pipelines",
        "Resolved critical live environment issues ensuring stability",
      ],
    },
    {
      title: "Backend Developer (Full-Time)",
      company: "Join Venture AI",
      period: "July 2025 - Present",
      description:
        "Designed and implemented scalable backend systems. Engineered real-time services with WebSockets. Conducted R&D on project feasibility, mentored juniors, and supported cross-team collaboration.",
      achievements: [
        "Designed and implemented scalable backend systems",
        "Engineered real-time WebSocket services",
        "Mentored juniors and supported cross-team collaboration",
      ],
    },
    {
      title: "Junior Backend Developer (Probation)",
      company: "Join Venture AI",
      period: "April 2025 - June 2025",
      description:
        "Designed and implemented scalable backend systems with Django and DRF. Built AI-powered features for travel planning, task management, gifting, and healthcare projects. Integrated Stripe payments and developed admin CRM dashboards. Deployed and managed applications across Render, Vercel, and VPS environments.",
      achievements: [
        "Built AI-powered features for multiple projects",
        "Integrated Stripe payments and admin CRM dashboards",
        "Deployed apps across Render, Vercel, and VPS",
      ],
    },
  ];
  const services = [
    {
      icon: "🚀",
      title: "API Development",
      description:
        "Custom RESTful APIs with Django REST Framework and WebSockets, including authentication, rate limiting, and real-time features.",
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description:
        "Schema design, query optimization, and migrations for PostgreSQL, MySQL, and Redis caching strategies.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Code profiling, caching, Celery task queues, and database tuning to handle millions of records efficiently.",
    },
    {
      icon: "🔒",
      title: "Security Implementation",
      description:
        "JWT authentication, role-based access control, data encryption, and applying industry best practices for secure systems.",
    },
    {
      icon: "☁️",
      title: "Cloud Deployment",
      description:
        "Deployment and scaling on AWS, Render, and VPS with Docker and CI/CD pipelines for smooth production readiness.",
    },
    {
      icon: "🔧",
      title: "System Integration",
      description:
        "Stripe, SSLCommerz, Twilio, and third-party API integrations, along with CRM and payment gateway solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ... existing hero section code ... */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/30 rounded-full animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-4 max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6 overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-bold text-balance animate-slide-in-left">
                Hi, I'm{" "}
                <span className="text-accent relative inline-block">
                  <span className="animate-gradient-text bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-300% animate-gradient">
                    Selim Reza
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary animate-expand-width"></span>
                </span>
              </h1>
            </div>
            <div className="mb-8 overflow-hidden">
              <p
                className={`text-xl md:text-2xl text-muted-foreground text-pretty transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "animate-slide-in-left"
                    : "opacity-0 translate-x-10"
                }`}
              >
                Python Django Backend Developer
              </p>
            </div>
            <div className="mb-12 overflow-hidden">
              <p
                className={`text-lg text-muted-foreground max-w-2xl text-pretty transition-all duration-1000 delay-500 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                Building robust, scalable web applications and APIs that power
                modern businesses. Passionate about clean code, performance
                optimization, and solving complex problems.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
                isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="#projects"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-accent/90 animate-pulse-subtle"
              >
                View My Work
              </a>
              <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-muted hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 animate-gradient-rotate"></div>

              {/* Main image container */}
              <div className="relative bg-card rounded-2xl p-2 shadow-2xl">
                <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/professional-developer-workspace-with-multiple-mon.png"
                    alt="Selim Reza - Python Django Developer Workspace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay with floating code snippets */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                    <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle">
                      Django Expert
                    </div>
                    <div
                      className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      Python Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around the image */}
              <div
                className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full animate-float opacity-60"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full animate-float opacity-60"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-6 w-4 h-4 bg-accent/50 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-accent to-primary rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 animate-pulse">
            Scroll Down
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Backend Specialist
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  With over 1 year of experience in Python and Django
                  development, I specialize in creating high-performance backend
                  systems that scale. From RESTful APIs to complex database
                  architectures, I focus on writing maintainable code that
                  stands the test of time.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  I'm passionate about optimization, security best practices,
                  and staying current with the latest technologies in the Python
                  ecosystem. When I'm not coding, you'll find me contributing to
                  open-source projects or mentoring junior developers.
                </p>
                <a
                  href="/resume-of-reza.pdf"
                  download
                  className="mt-6 inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors text-center w-max"
                >
                  Download My Resume
                </a>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-card p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="text-3xl mb-2 animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-card-foreground">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="scroll-animate bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium inline-block mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-card-foreground">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto text-pretty">
              I offer comprehensive backend development services to help
              businesses build robust, scalable applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="scroll-animate bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-subtle transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              Live Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="scroll-animate bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-pretty line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      target="_blank"
                      href={project.liveDemo}
                      className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors flex-1 text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      href={project.github}
                      className="border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors flex-1 text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="achievement" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              Achievements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Best Backend Developer Achievement */}
            <div className="scroll-animate bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <img
                  src="https://i.ibb.co.com/XktfdqVV/best-backen.jpg"
                  alt="Best Backend Developer"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Awarded Best Backend Developer of the Quarter
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty mt-4">
                I have been working here for over 7 months, contributing to a wide variety of Django backend projects. Some of my contributions include:
                <ul className="mt-2 list-disc pl-5">
                  <li>Designed the database schema and optimized data structures.</li>
                  <li>Conducted R&D on client projects, ensuring their success.</li>
                  <li>Assisted in saving projects that were at risk of being cancelled.</li>
                  <li>Mentored junior developers and helped them grow in their roles.</li>
                </ul>
              </p>
            </div>

          {/* CSE Fundamentals Certificate Achievement */}
          <div className="scroll-animate bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <img
                src="https://i.ibb.co.com/b5M7Gdc0/certificate.png"
                alt="CSE Fundamentals Certificate"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>

            <h3 className="text-xl font-semibold text-card-foreground">
              CSE Fundamentals with Phitron
            </h3>

            <div className="text-muted-foreground leading-relaxed text-pretty mt-4">
              <p>
                I have been working here for over 7 months, contributing to a wide variety of Django backend projects. Some of my contributions include:
              </p>

              <ul className="mt-2 list-disc pl-5">
                <li>Designed the database schema and optimized data structures.</li>
                <li>Conducted R&D on client projects, ensuring their success.</li>
                <li>Assisted in saving projects that were at risk of being cancelled.</li>
              </ul>
            </div>
          </div>

          </div>
        </div>
      </section>


  

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-pretty">
              Ready to start your next project? Let's discuss how I can help you
              build something amazing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you need a robust API, database
                  optimization, or a complete backend solution, let's discuss
                  how I can help bring your ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground">
                        selim.reza.uits@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">💼</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        LinkedIn
                      </p>
                      <p className="text-muted-foreground">
                        https://www.linkedin.com/in/selimreza-dev
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">GitHub</p>
                      <p className="text-muted-foreground">
                        https://github.com/mohammadSelimReza
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-fade-in">
                      <p className="font-medium">
                        Message sent successfully! 🎉
                      </p>
                      <p className="text-sm">
                        I'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg animate-fade-in">
                      <p className="font-medium">Failed to send message 😞</p>
                      <p className="text-sm">
                        Please try again or contact me directly via email.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-lg">🚀</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sidebar-foreground/70">
            © {year} Selim Reza
          </p>
        </div>
      </footer>
    </div>
  );
}
