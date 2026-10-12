# Updating the Sanctuary LV development brief

## Content
Edit `packages/web/src/web/data/brief.json`. It controls organizational information, contacts, leadership, summary metrics, facility components, property strategies, location priorities, site requirements, weekly programming, impact statements, roadmap, City requests, meeting questions, status caveats, images, navigation, and CTAs.

Presentation-only section headings and decorative editorial copy live in `src/web/sections/`. There is no CMS or browser editor, as approved. Configuration changes are deployed through a normal rebuild, not a UI architecture change.

When changing a planning target, update its requirement, summary metric and any corresponding facility description together. Run tests to detect inconsistencies. Keep all preliminary/status labels and jurisdiction caveats.

## PDF
`python scripts/build_pdf.py` regenerates the seven-page executive PDF and social preview from the shared configuration. Python requires `reportlab` and `Pillow`; they are installed in this workspace. The published site downloads a checked-in static PDF, so Python is not needed by its server.

The generator has explicit page-boundary assertions. Substantial content growth may require a document layout adjustment. Verify regenerated pages visually; do not silently shrink the text or claim final dates.

## Assets
All served assets belong in `packages/web/public/`. Reference them with `/images/...`, `/fonts/...` or `/documents/...`. The three architectural/contextual images are monochrome references found through Unsplash search collections. They do not depict Sanctuary property or an approved design. Replace with Sanctuary-owned/licensed assets if preferred; review provenance and permissions before broader publication.

- Experience: https://unsplash.com/s/photos/concert-hall
- Architecture: https://unsplash.com/s/photos/concrete-room
- Regional context: https://unsplash.com/s/photos/las-vegas-skyline

## Commands
```sh
bun install --frozen-lockfile
python scripts/build_pdf.py
bun test tests/brief.test.ts
bun run lint
bun run typecheck
bun run build
bun run dev
```

Browser verification: `python scripts/verify_browser.py`. Automated accessibility: download `https://unpkg.com/axe-core/axe.min.js` to `/tmp/axe.min.js`, then `python scripts/verify_accessibility.py`. Results are saved in `verification/`.

## Future integration
`src/web/lib/command-center.ts` defines the future adapter contract for opportunities, properties, contacts, meeting notes, documents, stages and follow-up tasks. It is not connected; no remote requests or fictional API endpoints exist. An actual API contract and authenticated credentials are required for implementation and testing.

## Publication
Use the platform's publishing controls. Once the public URL is selected, configure an absolute `og:image` URL, `og:url`, and canonical URL in `packages/web/index.html`, then test the public share preview. No guessed domain or claim that sanctuarylv.org was rebuilt is included.