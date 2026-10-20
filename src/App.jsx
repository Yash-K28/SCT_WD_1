
import { useEffect, useState } from "react";
import "./App.css";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Nova<span>Nest.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO NOVANEST</p>

            <h1>
              Build your ideas.
              <br />
              <span>Create your future.</span>
            </h1>

            <p className="hero-description">
              Discover creative solutions, explore new possibilities,
              and turn your ideas into meaningful digital experiences.
            </p>

            <a href="#about" className="primary-btn">
              Explore More ↗
            </a>
          </div>

          <div className="hero-art">
            <div className="art-circle circle-one"></div>
            <div className="art-circle circle-two"></div>

            <div className="art-card">
              <span className="art-icon">✦</span>
              <h3>Ideas into reality</h3>
              <p>Design · Create · Innovate</p>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE ↓
          </a>
        </section>

        <section id="about" className="section about-section">
          <p className="section-tag">01 / ABOUT</p>
          <h2>
            Creativity meets <span>technology.</span>
          </h2>
          <p className="section-description">
            Great digital experiences begin with curiosity and grow
            through creativity, thoughtful design, and continuous learning.
            Our goal is to turn possibilities into practical solutions.
          </p>

          <div className="stats">
            {[
              ["01", "Think creatively"],
              ["02", "Design thoughtfully"],
              ["03", "Build confidently"],
            ].map(([number, label]) => (
              <article className="stat-card" key={number}>
                <h3>{number}</h3>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <p className="section-tag">02 / SERVICES</p>
          <h2>
            What we <span>do.</span>
          </h2>

          <div className="service-grid">
            {[
              {
                icon: "✳",
                title: "Web Design",
                description:
                  "Clean layouts and thoughtful interfaces for modern websites.",
              },
              {
                icon: "⌘",
                title: "Development",
                description:
                  "Responsive, interactive experiences for different devices.",
              },
              {
                icon: "↗",
                title: "Innovation",
                description:
                  "Fresh ideas and creative approaches to digital challenges.",
              },
            ].map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <p className="section-tag">03 / PROJECTS</p>
          <h2>
            Made with <span>purpose.</span>
          </h2>

          <div className="project-grid">
            <article className="project-card project-one">
              <span>PROJECT 01</span>
              <h3>Digital Experiences</h3>
              <p>Simple, intuitive, user-focused design.</p>
            </article>

            <article className="project-card project-two">
              <span>PROJECT 02</span>
              <h3>Creative Solutions</h3>
              <p>Turning concepts into useful experiences.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-tag">04 / CONTACT</p>
          <h2>
            Let's create something <span>great.</span>
          </h2>
          <p className="section-description">
            Have an idea? Start exploring, experimenting, and building today.
          </p>
          <a href="mailto:hello@example.com" className="primary-btn">
            Get In Touch ↗
          </a>
        </section>
      </main>

      <footer>
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Nova<span>Nest.</span>
        </a>
        <p>© 2026 NovaNest Task 01</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
};

export default App;
