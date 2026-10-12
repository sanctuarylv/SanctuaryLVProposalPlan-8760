# Sanctuary LV — design direction

Approved standalone City Development Brief, not a marketing site.

## Identity
White #FFFFFF, off-white #F7F7F7, gray #E0E0E0, near-black #111111, deep black #0A0A0A. No chromatic accents. Tightly tracked uppercase wordmark; no invented logo icon.

## Typography
Self-hosted Manrope. Light editorial display with regular body. Desktop headline 84px, mobile 48px. Eyebrows 10–11px, widely tracked. Body 15–17px, line-height 1.7.

## Layout
Architectural editorial grid, 1320px max width, 64px desktop gutters, 24px mobile gutters. Square edges, thin dividers, no rounded cards. Dark cinematic hero; generous white summary; alternating dark/white sections. Section numbers, status labels, large typographic metrics. Reference images are not proposed or acquired Sanctuary properties.

## UX
Sticky navigation, section anchors, accessible mobile menu and native disclosures. Working mailto and PDF links. Minimal CSS entrance animation; reduced-motion support. Print removes navigation, controls and ornamental imagery, retaining all executive content.

## Architecture
Managed Bun/Vite/React/TypeScript template. Web-only changes; retain providers, managed infrastructure and analytics. No database changes or API routes. Content source: src/web/data/brief.json. Reusable components and section groups compose one page. Seven-page PDF regenerated from the same JSON through scripts/build_pdf.py. Future-only Command Center contract, not a live integration. No CMS as approved.

## Accuracy
Current fact, planning target, preliminary requirement, future vision are distinguished. No invented endorsements, property claims, zoning approvals, or statistics. Enterprise jurisdiction caveat cites Clark County. Later roadmap stages milestone-driven.
