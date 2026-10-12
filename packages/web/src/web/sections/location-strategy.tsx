/* oxlint-disable jsx-a11y/no-noninteractive-tabindex -- The overflow table region needs keyboard focus for scrolling (WCAG 2.1.1). */
import { ArrowUpRight, Building2, Landmark, Layers3, MapPin, MoveUpRight } from "lucide-react";
import brief from "../data/brief.json";
import { Eyebrow, SectionHeading } from "../components/brief-ui";

const propertyIcons = [Building2, Layers3, Landmark, MoveUpRight];

export function PropertyStrategies() {
  return (
    <section className="section properties" id="properties">
      <div className="container">
        <SectionHeading
          number="03"
          label="Development Pathways"
          title="Properties we are exploring."
          description="Several real-estate strategies. One flexible vision. No single property strategy has been selected."
        />
        <div className="property-grid">
          {brief.strategies.map((s, i) => {
            const Icon = propertyIcons[i]!;
            return (
              <article className="property-card" key={s.type}>
                <div className="property-card-top">
                  <span className="item-number">0{i + 1}</span>
                  <Icon size={24} strokeWidth={1} aria-hidden="true" />
                </div>
                <h3>
                  {s.name}
                  <span>{s.type}</span>
                </h3>
                <p>{s.description}</p>
                <ul>
                  {s.advantages.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="section-note">
          Potential advantages depend on the property, existing conditions, and formal review. No
          ownership, negotiations, or entitlement approvals are represented.
        </p>
      </div>
    </section>
  );
}

export function LocationPriorities() {
  return (
    <section className="section locations" id="locations">
      <div className="container">
        <div className="location-layout">
          <div>
            <SectionHeading
              number="04"
              label="Location Priorities"
              title="Where we are looking."
              description="Currently evaluating opportunities across the Las Vegas Valley."
            />
            <div className="location-list">
              {brief.locations.map((l, i) => (
                <article key={l.name}>
                  <span className="item-number">0{i + 1}</span>
                  <div>
                    <h3>{l.name}</h3>
                    <p>{l.detail}</p>
                  </div>
                  <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
                </article>
              ))}
            </div>
            <p>{brief.locationNote}</p>
          </div>
          <figure
            className="location-graphic"
            aria-label="Conceptual Las Vegas Valley diagram highlighting Downtown-adjacent, Southwest Las Vegas, and Enterprise. Not a geographic or jurisdiction map."
          >
            <div className="map-grid" />
            <span className="map-north">N ↑</span>
            <svg viewBox="0 0 500 500" aria-hidden="true">
              <path
                className="map-outline"
                d="M75 80 L335 60 L415 130 L443 390 L370 443 L100 440 L48 360 Z"
              />
              <path className="map-road" d="M245 15 L250 190 L220 280 L245 360 L300 495" />
              <path className="map-road road-secondary" d="M10 305 L135 318 L245 360 L460 347" />
              <path className="map-road road-secondary" d="M100 60 L118 222 L135 318 L170 470" />
              <circle className="map-area" cx="270" cy="152" r="46" />
              <circle className="map-area" cx="140" cy="336" r="53" />
              <circle className="map-area" cx="258" cy="412" r="40" />
              <circle className="map-point" cx="270" cy="152" r="5" />
              <circle className="map-point" cx="140" cy="336" r="5" />
              <circle className="map-point" cx="258" cy="412" r="5" />
            </svg>
            <div className="map-label downtown">
              <span>03</span>ARTS DISTRICT /<br />
              DOWNTOWN-ADJACENT
            </div>
            <div className="map-label southwest">
              <span>01</span>SOUTHWEST
              <br />
              LAS VEGAS
            </div>
            <div className="map-label enterprise">
              <span>02</span>ENTERPRISE
            </div>
            <div className="map-caption">
              <span>LAS VEGAS VALLEY</span>
              <small>
                CONCEPTUAL · NOT TO SCALE
                <br />
                NOT A JURISDICTION OR PARCEL MAP
              </small>
            </div>
          </figure>
        </div>
        <div className="jurisdiction-note">
          <MapPin size={18} aria-hidden="true" />
          <p>
            {brief.jurisdictionNote}{" "}
            <a href={brief.jurisdictionSource} target="_blank" rel="noreferrer">
              Clark County reference
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function RequirementsMatrix() {
  return (
    <section className="section requirements" id="requirements">
      <div className="container">
        <div className="requirements-heading">
          <SectionHeading
            number="05"
            label="Preliminary Site Requirements"
            title="The right space. The right fit."
          />
          <span className="status-label">{brief.requirementsLabel}</span>
        </div>
        <section
          className="table-scroll"
          tabIndex={0}
          aria-label="Preliminary site requirements — scroll horizontally on small screens"
        >
          <table>
            <caption className="sr-only">
              Preliminary site requirements, subject to property evaluation
            </caption>
            <thead>
              <tr>
                <th scope="col">Requirement</th>
                <th scope="col">Initial target / priority</th>
                <th scope="col">Evaluation considerations</th>
              </tr>
            </thead>
            <tbody>
              {brief.requirements.map((r) => (
                <tr key={r.name}>
                  <th scope="row">{r.name}</th>
                  <td>{r.target}</td>
                  <td>{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <p className="section-note">
          Zoning, parking, assembly use, and occupancy must be evaluated for each property through
          the appropriate jurisdiction's formal process.
        </p>
      </div>
    </section>
  );
}

export function DevelopmentRoadmap() {
  return (
    <section className="section roadmap" id="roadmap">
      <div className="container">
        <SectionHeading
          number="08"
          label="Development Strategy"
          title="Start with people. Grow with purpose."
          description="A phased approach that connects community validation, property strategy, and long-term organizational readiness."
        />
        <div className="roadmap-grid">
          {brief.stages.map((s, i) => (
            <article key={s.number} className={i === 0 ? "stage current-stage" : "stage"}>
              <div className="stage-top">
                <span className="eyebrow">STAGE {s.number}</span>
                <span className="stage-dot" />
              </div>
              <h3>{s.title}</h3>
              <p className="stage-timing">{s.timing}</p>
              <p>{s.description}</p>
              <div className="stage-milestone">
                <Eyebrow>{i === 0 ? "Purpose" : "Progression milestone"}</Eyebrow>
                <p>{s.milestone}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="section-note">
          The current planning window is 2026–2027. Subsequent stages are milestone-driven, not
          guaranteed delivery dates.
        </p>
      </div>
    </section>
  );
}
