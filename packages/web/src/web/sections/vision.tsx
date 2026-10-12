import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import brief from "../data/brief.json";
import {
  ContactLink,
  DownloadLink,
  Eyebrow,
  ReferenceCaption,
  SectionHeading,
  VisionLink,
} from "../components/brief-ui";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={brief.images.hero}
        alt="Architectural reference: intimate contemporary performance room with sculptural ceiling and a central stage"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="print-brand">
          {brief.organization.name} / {brief.organization.designation}
        </p>
        <div className="hero-top">
          <Eyebrow>
            <span className="status-dot" />
            {brief.organization.designation}
          </Eyebrow>
          <span className="hero-edition">LAS VEGAS, NEVADA</span>
        </div>
        <div className="hero-copy">
          <p className="hero-overline">FAITH. CULTURE. COMMUNITY.</p>
          <h1 id="hero-title">
            A new kind of <br />
            sanctuary for <br />
            <span>Las Vegas.</span>
          </h1>
          <p className="hero-descriptor">{brief.organization.descriptor}</p>
          <p className="hero-description">
            A flexible gathering space. A creative ecosystem.
            <br className="desktop-break" /> A meaningful contribution to the city.
          </p>
          <div className="hero-buttons">
            <ContactLink light />
            <a className="hero-explore" href="#vision">
              Explore the vision
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#vision" className="hero-scroll">
            <ArrowDownRight size={22} aria-hidden="true" />
            <span>A VISION TAKING SHAPE</span>
          </a>
          <p>
            ARCHITECTURAL REFERENCE ONLY
            <br />
            NOT A PROPOSED SANCTUARY PROPERTY
          </p>
        </div>
      </div>
    </section>
  );
}

export function ExecutiveSummary() {
  return (
    <section className="section summary" id="vision">
      <div className="container">
        <div className="editorial-grid">
          <div>
            <Eyebrow number="01">The Vision</Eyebrow>
            <h2>
              More than a place.
              <br />A possibility.
            </h2>
            <span className="status-label">CURRENT FACT · VISION IN DEVELOPMENT</span>
          </div>
          <div className="summary-copy">
            <p className="large-copy">{brief.organization.summary}</p>
            <p>{brief.organization.summaryDetail}</p>
            <VisionLink />
          </div>
        </div>
        <div className="metrics">
          {brief.summaryMetrics.map((metric) => (
            <div key={metric.label}>
              <span className="metric-value">
                {metric.value}
                <span>{metric.unit}</span>
              </span>
              <p>{metric.label}</p>
            </div>
          ))}
          <div className="metric-note">
            <span className="eyebrow">PLANNING TARGETS</span>
            <p>Preliminary. Subject to property evaluation and development phase.</p>
          </div>
        </div>
        <div className="program-strip">
          <span className="eyebrow">DESIGNED TO BRING TOGETHER</span>
          <p>
            Faith<span>/</span>Creativity<span>/</span>Culture<span>/</span>Community<span>/</span>
            Hospitality
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhyLasVegas() {
  return (
    <section className="why-section section">
      <div className="container why-grid">
        <figure className="city-image">
          <img
            src={brief.images.city}
            alt="Black-and-white Las Vegas skyline at night, regional context only"
            loading="lazy"
          />
          <ReferenceCaption>
            LAS VEGAS VALLEY · REGIONAL CONTEXT, NOT A SITE LOCATION
          </ReferenceCaption>
        </figure>
        <div>
          <Eyebrow>The Opportunity</Eyebrow>
          <h2>{brief.opportunity.title}</h2>
          <p>{brief.opportunity.intro}</p>
          <h3 className="statement">{brief.opportunity.position}</h3>
          <p className="eyebrow audience-label">A COMMUNITY FOR</p>
          <div className="audience-list">
            {brief.opportunity.audiences.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FacilityVision() {
  return (
    <section className="section dark-section facility-section" id="facility">
      <div className="container">
        <div className="facility-top">
          <SectionHeading
            number="02"
            label="The Facility"
            title="A venue for possibility."
            description="A flexible venue, not simply a conventional church building. Designed for meaningful experiences, everyday connection, and room to grow."
          />
          <span className="status-label">CONCEPTUAL · FUTURE VISION</span>
        </div>
        <div className="facility-layout">
          <figure className="facility-image">
            <img
              src={brief.images.facility}
              alt="Architectural reference: concrete circulation space with dramatic natural light"
              loading="lazy"
            />
            <div className="image-label">
              <span>THE SPATIAL VISION</span>
              <p>
                Architecture that
                <br />
                makes room for people.
              </p>
            </div>
            <ReferenceCaption />
          </figure>
          <div className="facility-list">
            {brief.facility.map((item, i) => (
              <article key={item.name}>
                <span className="item-number">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="facility-foot">
          <span className="eyebrow">ONE SPACE. MANY EXPRESSIONS.</span>
          <p>Worship / Live music / Hospitality / Learning / Creativity / Community</p>
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="closing section" id="contact">
      <div className="container">
        <Eyebrow>The Next Conversation</Eyebrow>
        <h2>{brief.ctas.closing}</h2>
        <p>{brief.ctas.closingDetail}</p>
        <div className="closing-actions">
          <ContactLink light />
          <DownloadLink />
        </div>
        <a className="closing-email" href={`mailto:${brief.organization.contact.email}`}>
          {brief.organization.contact.email}
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
