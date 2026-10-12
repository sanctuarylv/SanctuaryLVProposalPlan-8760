/** Future integration boundary only. No remote endpoint, credentials, or live synchronization. */
export type DevelopmentEntity =
  | "opportunities"
  | "properties"
  | "contacts"
  | "meeting-notes"
  | "documents"
  | "stages"
  | "follow-up-tasks";

export interface DevelopmentRecord {
  id: string;
  kind: DevelopmentEntity;
  updatedAt: string;
  fields: Record<string, unknown>;
}

/** Implement only after receiving and validating the Sanctuary Platform API contract. */
export interface CommandCenterAdapter {
  list(kind: DevelopmentEntity): Promise<DevelopmentRecord[]>;
  synchronize(records: DevelopmentRecord[]): Promise<{ synchronizedIds: string[] }>;
}

export const integrationStatus = {
  mode: "local-config",
  connected: false,
  description: "Future-ready boundary. Not connected to Sanctuary Command Center.",
} as const;
