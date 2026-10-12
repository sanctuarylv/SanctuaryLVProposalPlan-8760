import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import brief from "../packages/web/src/web/data/brief.json";
import { integrationStatus } from "../packages/web/src/web/lib/command-center";

describe("Sanctuary development brief", () => {
  test("contains all structured executive content", () => {
    expect(brief.facility).toHaveLength(8);
    expect(brief.strategies).toHaveLength(4);
    expect(brief.requirements).toHaveLength(8);
    expect(brief.impact).toHaveLength(8);
    expect(brief.city).toHaveLength(6);
    expect(brief.questions).toHaveLength(8);
    expect(brief.programs).toHaveLength(14);
  });
  test("meeting disclosures cover every question exactly once", () => {
    expect(brief.meetingGroups.flatMap((group) => group.questionIndices).sort()).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7,
    ]);
  });
  test("planning targets and current timing remain consistent", () => {
    expect(brief.requirements[1]?.target).toContain(brief.summaryMetrics[0]!.value);
    expect(brief.requirements[0]?.target).toBe("20,000–50,000+ sq ft");
    expect(brief.stages[0]?.timing).toContain("2026–2027");
    expect(brief.stages.slice(1).every((s) => s.timing.includes("Milestone-driven"))).toBe(true);
    expect(brief.requirementsLabel).toContain("Preliminary");
  });
  test("all linked local images and document exist", () => {
    for (const asset of [
      brief.images.hero,
      brief.images.facility,
      brief.images.city,
      brief.ctas.pdf,
    ]) {
      expect(existsSync(`packages/web/public${asset}`)).toBe(true);
    }
    expect(readFileSync(`packages/web/public${brief.ctas.pdf}`).subarray(0, 5).toString()).toBe(
      "%PDF-",
    );
  });
  test("no live Command Center integration is represented", () => {
    expect(integrationStatus.connected).toBe(false);
    expect(integrationStatus.mode).toBe("local-config");
  });
  test("contact and jurisdiction match the approved brief", () => {
    expect(brief.organization.contact.email).toBe("erskine@sanctuarylv.org");
    expect(brief.organization.leadership.map((p) => p.name)).toEqual([
      "Erskine Currie",
      "Andrea Currie",
    ]);
    expect(brief.jurisdictionNote).toContain("Clark County");
    expect(Object.keys(brief.organization.contact)).not.toContain("phone");
  });
});
