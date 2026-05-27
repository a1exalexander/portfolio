export type ApplyData = {
  name: string;
  email: string;
  telegram: string;
  phone: string;
  level: string;
  format: string;
  message: string;
};

export type ApplyErrors = Partial<Record<keyof ApplyData | "contacts", string>>;

const VALID_LEVELS = new Set(["zero", "self", "junior", "switch", ""]);
const VALID_FORMATS = new Set(["indiv", "group", "undecided", ""]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Telegram: @ followed by 5–32 alphanumeric/underscore chars
const TELEGRAM_RE = /^@[a-zA-Z0-9_]{5,32}$/;
// Phone: optional +, then digits/spaces/dashes/parens, 7–20 chars total
const PHONE_RE = /^\+?[\d\s\-(). ]{7,20}$/;

export const LIMITS = {
  name: 100,
  email: 254,
  telegram: 33,
  phone: 20,
  message: 2000,
} as const;

export function validateApplyForm(raw: Partial<ApplyData>): ApplyErrors {
  const errors: ApplyErrors = {};

  const name     = (raw.name     ?? "").trim();
  const email    = (raw.email    ?? "").trim();
  const telegram = (raw.telegram ?? "").trim();
  const phone    = (raw.phone    ?? "").trim();
  const level    = (raw.level    ?? "").trim();
  const format   = (raw.format   ?? "").trim();
  const message  = (raw.message  ?? "").trim();

  if (!name) {
    errors.name = "Як до тебе звертатися?";
  } else if (name.length > LIMITS.name) {
    errors.name = `Максимум ${LIMITS.name} символів`;
  }

  if (email) {
    if (email.length > LIMITS.email) {
      errors.email = `Максимум ${LIMITS.email} символів`;
    } else if (!EMAIL_RE.test(email)) {
      errors.email = "Потрібен дійсний email";
    }
  }

  if (telegram) {
    if (telegram.length > LIMITS.telegram) {
      errors.telegram = `Максимум ${LIMITS.telegram} символів`;
    } else if (!TELEGRAM_RE.test(telegram)) {
      errors.telegram = "Формат: @username (5–32 символи)";
    }
  }

  if (phone) {
    if (phone.length > LIMITS.phone) {
      errors.phone = `Максимум ${LIMITS.phone} символів`;
    } else if (!PHONE_RE.test(phone)) {
      errors.phone = "Невірний формат телефону";
    }
  }

  if (!email && !telegram && !phone) {
    errors.contacts = "Заповни хоча б один контакт";
  }

  if (level && !VALID_LEVELS.has(level)) {
    errors.level = "Невірне значення";
  }

  if (format && !VALID_FORMATS.has(format)) {
    errors.format = "Невірне значення";
  }

  if (message.length > LIMITS.message) {
    errors.message = `Максимум ${LIMITS.message} символів`;
  }

  return errors;
}

export function hasErrors(errors: ApplyErrors): boolean {
  return Object.keys(errors).length > 0;
}
