import { ArrowUpRight, Plus } from "lucide-react";
import brief from "../data/brief.json";
import { Eyebrow, SectionHeading } from "../components/brief-ui";

export function WeeklyOperatingModel() {
  return (
    <section className="section dark-section weekly" id="operating">
      <div className="container">
        <div className="weekly-heading">
          <SectionHeading
            number="06"
            label="The Operating Model"
            title="A seven-day ecosystem."
            description="Designed to maximize facility utilization—not a single-purpose building used primarily once a week."
          />
          <span className="status-label">PROPOSED PROGRAMMING</span>
        </div>
        <div className="week-grid">
          {brief.week.map((w) => (
            <article key={w.day}>
              <p className="eyebrow">{w.day}</p>
              <h3>
                {w.title}
                <ArrowUpRight size={20} aria-hidden="true" />
              </h3>
              <ul>
                {w.programs.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <details className="program-details">
          <summary>
            Explore the full programming vision
            <Plus size={17} aria-hidden="true" />
          </summary>
          <div className="all-programs">
            {brief.programs.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

export function CommunityImpact() {
  return (
    <section className="section impact" id="impact">
      <div className="container">
        <div className="editorial-grid">
          <SectionHeading number="07" label="Community Impact" title="Potential community value." />
          <div className="impact-intro">
            <p className="large-copy">
              A space that invests in people—and the city they call home.
            </p>
            <p>
              These are intended outcomes, not guaranteed economic-impact claims. Programming and
              partnerships will develop with community needs and organizational capacity.
            </p>
          </div>
        </div>
        <div className="impact-grid">
          {brief.impact.map((v, i) => (
            <article key={v.name}>
              <span className="item-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.name}</h3>
              <p>{v.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CityPartnership() {
  return (
    <section className="section dark-section city-partnership" id="city">
      <div className="container">
        <div className="editorial-grid">
          <SectionHeading
            number="09"
            label="City Partnership"
            title="Where the City may be able to help."
          />
          <div className="city-intro">
            <p className="large-copy">
              The right guidance.
              <br />
              The right connections.
              <br />A shared conversation.
            </p>
            <p>
              We are seeking an informed dialogue—not a presumption of approvals, incentives, or an
              existing City partnership.
            </p>
          </div>
        </div>
        <div className="city-request-grid">
          {brief.city.map((r, i) => (
            <article key={r.name}>
              <span className="request-number">0{i + 1}</span>
              <div>
                <h3>{r.name}</h3>
                <p>{r.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MeetingQuestions() {
  return (
    <section className="section meeting" id="conversation">
      <div className="container">
        <div className="meeting-grid">
          <div>
            <SectionHeading
              number="10"
              label="Meeting Preparation"
              title="A conversation worth having."
              description="Questions for our introductory City conversation."
            />
            <div className="meeting-duration">
              <span>30</span>
              <div>
                <span className="eyebrow">MINUTES</span>
                <p>
                  An introduction.
                  <br />A practical path forward.
                </p>
              </div>
            </div>
          </div>
          <div className="meeting-accordion">
            {brief.meetingGroups.map((group, i) => (
              <details key={group.title} open={i === 0}>
                <summary>
                  <span className="item-number">0{i + 1}</span>
                  <span>{group.title}</span>
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <div className="meeting-group-content">
                  <p>{group.detail}</p>
                  <ol>
                    {group.questionIndices.map((index) => (
                      <li value={index + 1} key={index}>
                        {brief.questions[index]}
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section className="section about" id="about">
      <div className="container editorial-grid">
        <div>
          <Eyebrow>About Sanctuary LV</Eyebrow>
          <h2>
            A new kind of sanctuary
            <br />
            for Las Vegas.
          </h2>
          <p>{brief.organization.mission}</p>
        </div>
        <div className="leadership-list">
          {brief.organization.leadership.map((person) => (
            <div key={person.name}>
              <p className="eyebrow">{person.role}</p>
              <h3>{person.name}</h3>
            </div>
          ))}
          <a
            className="text-link"
            href={brief.organization.website}
            target="_blank"
            rel="noreferrer"
          >
            {brief.organization.websiteLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#top" className="wordmark">
            SANCTUARY<span>LV</span>
            <span className="wordmark-dot">.</span>
          </a>
          <span className="eyebrow">{brief.organization.designation}</span>
          <a className="back-top" href="#top">
            Back to top ↑
          </a>
        </div>
        <div className="accuracy-grid">
          <div>
            <Eyebrow>Current Fact</Eyebrow>
            <p>{brief.status.current}</p>
          </div>
          <div>
            <Eyebrow>Planning Target</Eyebrow>
            <p>{brief.status.target}</p>
          </div>
          <div>
            <Eyebrow>Preliminary Requirement</Eyebrow>
            <p>{brief.status.preliminary}</p>
          </div>
          <div>
            <Eyebrow>Future Vision</Eyebrow>
            <p>{brief.status.future}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{brief.status.disclaimer}</p>
          <span>© 2026 SANCTUARY LV</span>
        </div>
      </div>
    </footer>
  );
}
