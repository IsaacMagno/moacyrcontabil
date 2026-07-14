/**
 * Persistência temporária no browser (Sprint 2–3). Substituída pela API na Sprint 4.
 */
import { boletinsMock } from "@/data/boletins.mock";

const STORAGE_KEY = "moacyr_boletins_store";

function readStore() {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeStore(boletins) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(boletins));
}

export function getClientBoletins() {
  const stored = readStore();
  if (stored) return stored;
  return [...boletinsMock];
}

export function saveClientBoletins(boletins) {
  writeStore(boletins);
}

export function addClientBoletim(boletim) {
  const list = getClientBoletins();
  const next = [boletim, ...list];
  saveClientBoletins(next);
  return next;
}

export function removeClientBoletim(id) {
  const list = getClientBoletins().filter((b) => b.id !== id);
  saveClientBoletins(list);
  return list;
}

export function resetClientBoletins() {
  sessionStorage.removeItem(STORAGE_KEY);
}
