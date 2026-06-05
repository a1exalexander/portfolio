export type ServicesData = {
  name: string;
  email: string;
  telegram: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
};

export type ServicesErrors = Partial<Record<keyof ServicesData | "contacts", string>>;

// Canonical list of selectable services — the single source of truth shared by
// the form select, the "Get a quote" presets and this validator.
export const SERVICE_VALUES = [
  "Односторінковий сайт + CMS",
  "Багатосторінковий сайт + CMS",
  "Веб-застосунок",
  "Нова функція / виправлення в наявному проєкті",
  "Потрібна консультація",
] as const;

const VALID_SERVICES = new Set<string>([...SERVICE_VALUES, ""]);

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
  budget: 60,
  timeline: 60,
  details: 2000,
} as const;

// Minimum length for the free-text project brief — a bare word or two isn't
// enough context to reply usefully.
const DETAILS_MIN = 12;

export function validateServicesForm(raw: Partial<ServicesData>): ServicesErrors {
  const errors: ServicesErrors = {};

  const name     = (raw.name     ?? "").trim();
  const email    = (raw.email    ?? "").trim();
  const telegram = (raw.telegram ?? "").trim();
  const phone    = (raw.phone    ?? "").trim();
  const service  = (raw.service  ?? "").trim();
  const budget   = (raw.budget   ?? "").trim();
  const timeline = (raw.timeline ?? "").trim();
  const details  = (raw.details  ?? "").trim();

  if (!name) {
    errors.name = "Як до вас звертатися?";
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
    errors.contacts = "Заповніть хоча б один контакт";
  }

  if (!service) {
    errors.service = "Оберіть послугу, що підходить найкраще";
  } else if (!VALID_SERVICES.has(service)) {
    errors.service = "Невірне значення";
  }

  if (budget.length > LIMITS.budget) {
    errors.budget = `Максимум ${LIMITS.budget} символів`;
  }

  if (timeline.length > LIMITS.timeline) {
    errors.timeline = `Максимум ${LIMITS.timeline} символів`;
  }

  if (!details) {
    errors.details = "Додайте кілька деталей — навіть одне речення допоможе";
  } else if (details.length < DETAILS_MIN) {
    errors.details = "Трохи більше деталей допоможе відповісти точніше";
  } else if (details.length > LIMITS.details) {
    errors.details = `Максимум ${LIMITS.details} символів`;
  }

  return errors;
}

export function hasErrors(errors: ServicesErrors): boolean {
  return Object.keys(errors).length > 0;
}
