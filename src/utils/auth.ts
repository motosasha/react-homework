const STORAGE_KEY = "profiles";

export interface Profile {
  name: string;
  isLogined: boolean;
}

export function getProfiles(): Profile[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as Profile[];
  } catch {
    return [];
  }
}

export function saveProfiles(profiles: Profile[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

export function getCurrentUser(): Profile | null {
  return getProfiles().find((p) => p.isLogined) ?? null;
}

export function login(name: string): Profile | null {
  const trimmed = name.trim();
  if (!trimmed) return null;

  let profiles = getProfiles().map((p) => ({ ...p, isLogined: false }));

  const existing = profiles.find(
    (p) => p.name.toLowerCase() === trimmed.toLowerCase(),
  );

  if (existing) {
    profiles = profiles.map((p) =>
      p.name.toLowerCase() === trimmed.toLowerCase()
        ? { ...p, isLogined: true }
        : p,
    );
  } else {
    profiles.push({ name: trimmed, isLogined: true });
  }

  saveProfiles(profiles);
  return getCurrentUser();
}

export function logout(): void {
  const profiles = getProfiles().map((p) => ({ ...p, isLogined: false }));
  saveProfiles(profiles);
}
