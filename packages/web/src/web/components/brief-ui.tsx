import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import brief from "../data/brief.json";
import type { ReactNode } from "react";

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      {children}
    </p>
  );
}

export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow number={number}>{label}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function DownloadLink({
  compact = false,
  dark = false,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <a
      className={compact ? "download-small" : `button ${dark ? "button-dark" : "button-outline"}`}
      href={brief.ctas.pdf}
      download="Sanctuary-LV-Development-Brief.pdf"
    >
      <span>{compact ? "Download Brief" : brief.ctas.secondary}</span>
      <Download size={15} aria-hidden="true" />
    </a>
  );
}

export function ContactLink({ light = false }: { light?: boolean }) {
  const href = `mailto:${brief.organization.contact.email}?subject=${encodeURIComponent(brief.ctas.contactSubject)}`;
  return (
    <a className={`button ${light ? "button-light" : "button-dark"}`} href={href}>
      {brief.ctas.primary}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

export function VisionLink() {
  return (
    <a className="text-link" href="#facility">
      Explore the facility vision
      <ArrowDown size={15} aria-hidden="true" />
    </a>
  );
}

export function ReferenceCaption({ children }: { children?: ReactNode }) {
  return (
    <figcaption className="reference-caption">{children ?? brief.images.disclaimer}</figcaption>
  );
}
