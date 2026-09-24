// Live preview of export/index.html. It uses the same classes and stylesheet
// (export/style.css), so what you see here matches the standalone files.
import React from 'react';
import './export/style.css';

type Card = {title: string;text: string;image: string;href: string;label: string;};

const projects: Card[] = [1, 2, 3].map((n) => ({
  title: `Project Title ${['One', 'Two', 'Three'][n - 1]}`,
  text: 'A short description of the project, the problem it solved, and your role.',
  image: `https://placehold.co/800x500?text=Project+${n}`,
  href: `case-study-${n}.html`,
  label: 'Read case study →'
}));

const experience: Card[] = [
{
  title: 'Senior Product Designer, Company One',
  text: '2022 – Present. A brief summary of your responsibilities and key achievements in this role.',
  image: 'https://placehold.co/800x500?text=Company+1',
  href: '#',
  label: 'Learn more →'
},
{
  title: 'UX Designer, Company Two',
  text: '2019 – 2022. A brief summary of your responsibilities and key achievements in this role.',
  image: 'https://placehold.co/800x500?text=Company+2',
  href: '#',
  label: 'Learn more →'
}];


export function App() {
  return (
    <div style={{ width: '100%', background: 'var(--color-bg)' }}>
      <header className="hero">
        <div className="container hero__inner">
          <div className="hero__left">
            <h1 className="hero__name">Peter McAlernon</h1>
            <p className="hero__title">UX &amp; Product Designer</p>
          </div>
          <div className="hero__right">
            <p className="hero__statement">Crafting creative solutions to complex user problems</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="projects" aria-labelledby="projects-heading">
          <div className="container">
            <h2 className="section__heading" id="projects-heading">Selected Projects</h2>
            <div className="card-grid">
              {projects.map((c) => <CardLink key={c.title} {...c} />)}
            </div>
            <div className="cta-wrapper">
              <a className="button" href="projects.html">View All Projects</a>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="experience" aria-labelledby="experience-heading">
          <div className="container">
            <h2 className="section__heading" id="experience-heading">Experience</h2>
            <div className="card-grid card-grid--two">
              {experience.map((c) => <CardLink key={c.title} {...c} />)}
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-heading">
          <div className="container about__inner">
            <div className="about__text">
              <h2 className="section__heading" id="about-heading">About Me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <img className="about__photo" src="https://placehold.co/600x600?text=Photo" alt="Portrait of Peter McAlernon" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__contact">
              <p className="footer__heading">Get in touch</p>
              <p><a href="mailto:hello@example.com">hello@example.com</a></p>
              <p>+44 (0)000 000 0000</p>
              <p>City, Country</p>
            </div>
            <nav aria-label="Footer">
              <p className="footer__heading">Elsewhere</p>
              <ul className="footer__links">
                {['LinkedIn', 'Dribbble', 'Behance', 'Resume'].map((l) =>
                <li key={l}><a href="#">{l}</a></li>
                )}
              </ul>
            </nav>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2026 Peter McAlernon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

}

function CardLink({ title, text, image, href, label }: Card) {
  return (
    <a className="card" href={href}>
      <img className="card__image" src={image} alt={`Placeholder image for ${title}`} />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <span className="card__link-label">{label}</span>
      </div>
    </a>);

}