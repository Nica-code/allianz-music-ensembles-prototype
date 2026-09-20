import React, { useEffect, useState } from "react";
import { bookingSteps, ensembleCategories, externalLinks, faqGroups, navigation, soundCloudTracks, testimonials } from "./data/siteContent.js";

const ExternalLink = ({ href, children, className = "", ...props }) => <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>{children}</a>;

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const close = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    return () => { document.body.classList.remove("menu-open"); document.removeEventListener("keydown", close); };
  }, [open]);
  return <header className="site-header">
    <a href="#home" className="brand" aria-label="Allianz Music Ensembles home"><img src="./assets/allianz-logo.webp" alt="Allianz Music Ensembles — Music for Your Special Occasion" /></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <ExternalLink href={externalLinks.quote} className="button button--small">Get a Quote</ExternalLink>
    <button className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
      {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <ExternalLink href={externalLinks.quote} className="button">Get a Quote</ExternalLink>
    </nav>
  </header>;
}

function Hero() { return <section id="home" className="hero section-dark">
  <div className="hero-copy reveal"><p className="eyebrow">Live music across West Virginia</p><h1>Highest Quality <em>Music</em></h1><p className="hero-tagline">Music for Your Special Occasion</p><p className="hero-intro">Elegant live music for weddings, private celebrations, and corporate events—performed by exceptional musicians with thoughtful, personal service.</p><div className="button-row"><ExternalLink href={externalLinks.quote} className="button">Get a Quote</ExternalLink><a href="#ensembles" className="button button--outline">Explore the Ensembles</a></div><p className="hero-footnote">People · Events · Music · Memories</p></div>
  <div className="hero-portrait reveal"><img src="./assets/allianz-ensemble.webp" alt="Three Allianz musicians with violins and cello" /><div className="deco-corner" aria-hidden="true" /></div><a href="#about" className="scroll-cue">Scroll to discover</a>
</section>; }

function About() { return <section id="about" className="section section-light about"><div className="section-kicker"><span /> About Allianz</div><div className="about-grid reveal"><h2>Vetted Professional Musicians. <em>A Personal Touch.</em></h2><div className="body-copy"><p>Allianz is a company comprised entirely of musicians—from its founder and administrators to every player on stage. Based in Charleston, West Virginia, the team books and organizes music for events throughout the state.</p><p>Every musician is auditioned for artistry, musicianship, and professionalism. The administrative team handles ensemble and repertoire selection, arrangements, special requests, and event details, leaving the players free to focus on creating an exceptional atmosphere.</p></div><aside className="quality-note">Talent<br />Dedication<br />Service<br />Beautiful moments</aside></div></section>; }

function Ensembles() {
  const [active, setActive] = useState("quartet"); const current = ensembleCategories.find((item) => item.id === active);
  return <section id="ensembles" className="section section-dark ensembles"><div className="section-kicker"><span /> Ensembles</div><div className="section-heading reveal"><h2>One standard.<br /><em>Many possibilities.</em></h2><p>From an intimate solo line to the depth of a full string quartet, choose the sound that fits your space and your story.</p></div><div className="ensemble-layout reveal"><div className="ensemble-list" role="list">{ensembleCategories.map((item, index) => <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}><span>{String(index + 1).padStart(2, "0")}</span>{item.name}</button>)}</div><div className="ensemble-detail" aria-live="polite"><p className="eyebrow">Selected ensemble</p><h3>{current.name}</h3><p>{current.detail}</p><ExternalLink href={externalLinks.quote} className="text-link">Ask about this ensemble</ExternalLink></div></div></section>;
}

function AudioLab() {
  const [group, setGroup] = useState("duo"); const [trackIndex, setTrackIndex] = useState(0); const track = soundCloudTracks[group][trackIndex];
  const choose = (key) => { setGroup(key); setTrackIndex(0); };
  return <section id="listen" className="section section-dark audio-lab"><div className="section-kicker"><span /> Audio Lab</div><div className="section-heading reveal"><h2>Explore Our <em>Repertoire</em></h2><p>Hear the musicians, discover the sound, and imagine it in your own occasion.</p></div><div className="audio-tabs" role="tablist" aria-label="Ensemble recordings">{Object.keys(soundCloudTracks).map((key) => <button role="tab" aria-selected={group === key} key={key} onClick={() => choose(key)}>{key === "duo" ? "Duos" : "Trios"}</button>)}</div><div className="track-picker">{soundCloudTracks[group].map(([title], index) => <button key={title} className={trackIndex === index ? "active" : ""} onClick={() => setTrackIndex(index)}>{title}</button>)}</div><div className="soundcloud-frame" role="tabpanel" aria-label={`${group} recording: ${track[0]}`}><div><p className="eyebrow">Now listening</p><h3>{track[0]}</h3></div><iframe key={track[1]} title={`${track[0]} by Allianz Music Ensembles`} src={track[1]} allow="autoplay" loading="lazy" /></div><ExternalLink href={externalLinks.musicList} className="button button--outline">View the Full Music List</ExternalLink></section>;
}

function Occasions() {
  const occasions = [["Weddings", "From the first arrival to the recessional, music that gives every part of the ceremony meaning."], ["Private Celebrations", "Birthdays, anniversaries, dinners, and gatherings made more memorable through live performance."], ["Corporate Events", "Professional, sophisticated music for receptions, dinners, ceremonies, and business occasions."]];
  return <section className="section section-light occasions"><div className="section-kicker"><span /> Your special occasion</div><h2 className="occasion-title">Different events.<br /><em>The same extraordinary music.</em></h2><div className="occasion-grid reveal">{occasions.map(([name, text], index) => <article key={name}><p className="occasion-number">0{index + 1}</p><h3>{name}</h3><p>{text}</p><ExternalLink href={externalLinks.quote} className="text-link">Plan your event</ExternalLink></article>)}</div></section>;
}

function Process() { return <section id="process" className="section section-gold process"><div className="section-kicker"><span /> Simple from the first note</div><h2>How it <em>works.</em></h2><ol>{bookingSteps.map(([title, text], index) => <li className="reveal" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>; }

function Testimonials() {
  const [index, setIndex] = useState(0); const current = testimonials[index];
  return <section className="section section-light testimonials"><div className="section-kicker"><span /> In their words</div><blockquote className="reveal">“{current.quote}”</blockquote><p className="attribution">{current.name}<small>{current.date}</small></p><div className="testimonial-controls"><button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}>Previous story</button><span aria-live="polite">{index + 1} of {testimonials.length}</span><button onClick={() => setIndex((index + 1) % testimonials.length)}>Next story</button></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState("General-0");
  return <section id="faq" className="section section-dark faq"><div className="section-kicker"><span /> Everything you need to know</div><div className="section-heading"><h2>Frequently Asked <em>Questions</em></h2><p>Thoughtful planning makes an effortless event. Here are the details clients ask about most.</p></div><div className="faq-groups">{faqGroups.map((group) => <div className="faq-group" key={group.title}><h3>{group.title}</h3>{group.items.map(([question, answer], index) => { const id = `${group.title}-${index}`; const expanded = open === id; return <div className="faq-item" key={question}><button aria-expanded={expanded} aria-controls={`answer-${id}`} onClick={() => setOpen(expanded ? "" : id)}><span>{question}</span><span aria-hidden="true">{expanded ? "Close" : "Open"}</span></button><div id={`answer-${id}`} className="faq-answer" hidden={!expanded}><p>{answer}</p></div></div>; })}</div>)}</div></section>;
}

function Contact() {
  const contacts = [["Email", externalLinks.email], ["Call", externalLinks.phone], ["Text", externalLinks.sms], ["Instagram", externalLinks.instagram], ["YouTube", externalLinks.youtube], ["Facebook", externalLinks.facebook]];
  return <footer id="contact" className="section contact"><div className="contact-copy reveal"><p className="eyebrow">Begin the conversation</p><h2>Let’s create something <em>unforgettable.</em></h2><p>Tell us about your occasion, and the Allianz team will help shape the music around it.</p><ExternalLink href={externalLinks.quote} className="button">Get a Quote</ExternalLink></div><div className="contact-links">{contacts.map(([name, href]) => <ExternalLink key={name} href={href}>{name}</ExternalLink>)}</div><div className="footer-line"><span>Allianz Music Ensembles · Charleston, West Virginia</span><span><ExternalLink href={externalLinks.weddingWire}>WeddingWire</ExternalLink> · <ExternalLink href={externalLinks.theKnotReview}>The Knot</ExternalLink></span></div></footer>;
}

export function App() {
  useEffect(() => { const nodes = document.querySelectorAll(".reveal"); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []);
  return <><Header /><main><Hero /><About /><Ensembles /><AudioLab /><Occasions /><Process /><Testimonials /><FAQ /></main><Contact /></>;
}
