"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePostHog } from "posthog-js/react";
import styles from "../page.module.css";
import { IconArrowR, IconCheck } from "./icons";
import {
  type ServicesData,
  type ServicesErrors,
  LIMITS,
  SERVICE_VALUES,
  hasErrors,
  validateServicesForm,
} from "@/lib/services-apply-validation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_CONVERSION_ID = "AW-18213227098/osZiCKqp3LgcENqU3-xD";

const initialData: ServicesData = {
  name: "",
  email: "",
  telegram: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  details: "",
};

export function ServicesForm() {
  const posthog = usePostHog();
  const startedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState<ServicesData>(initialData);
  const [errors, setErrors] = useState<ServicesErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // A "Get a quote" button on a service card pre-selects that service.
  useEffect(() => {
    const onQuote = (e: Event) => {
      const service = (e as CustomEvent<string>).detail;
      if (!service) return;
      setData((d) => ({ ...d, service }));
      setErrors((er) => ({ ...er, service: undefined }));
    };
    window.addEventListener("services:quote", onQuote);
    return () => window.removeEventListener("services:quote", onQuote);
  }, []);

  const set = <K extends keyof ServicesData>(key: K, value: ServicesData[K]) => {
    if (!startedRef.current) {
      startedRef.current = true;
      posthog.capture("services_request_started");
    }
    if (key === "service" && value) {
      posthog.capture("services_request_service_selected", { service: value });
    }
    const next = { ...data, [key]: value };
    setData(next);
    if (submitted) setErrors(validateServicesForm(next));
    else setErrors((er) => ({ ...er, [key]: undefined, contacts: undefined }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const er = validateServicesForm(data);
    setErrors(er);
    setSubmitted(true);
    if (hasErrors(er)) {
      const order: (keyof ServicesData)[] = ["name", "email", "telegram", "phone", "service", "details"];
      const first = order.find((k) => er[k]) ?? (er.contacts ? "email" : undefined);
      const el = first && formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
      if (el) el.focus();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/services-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      posthog.capture("services_request_submitted", {
        service: data.service || null,
        contact_method: data.email.trim()
          ? "email"
          : data.telegram.trim()
            ? "telegram"
            : "phone",
      });
      window.gtag?.("event", "conversion", {
        send_to: ADS_CONVERSION_ID,
        value: 1.0,
        currency: "UAH",
      });
      setSent(true);
    } catch {
      posthog.capture("services_request_error");
      setErrors({ contacts: "Щось пішло не так, спробуйте ще раз" });
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setData(initialData);
    setErrors({});
    setSubmitted(false);
    setSent(false);
  };

  const primaryContact = data.email.trim() || data.telegram.trim() || data.phone.trim();

  if (sent) {
    return (
      <div className={`${styles.formCard} ${styles.formSuccess}`} role="status" aria-live="polite">
        <div className={styles.tick} aria-hidden="true">
          <IconCheck />
        </div>
        <h3>Запит отримано — дякую, {data.name.split(" ")[0]}.</h3>
        <p>
          Читаю кожне повідомлення особисто і зазвичай відповідаю протягом одного робочого дня на{" "}
          <strong>{primaryContact}</strong>. Ось що ви надіслали:
        </p>
        <div className={styles.recap}>
          <div className={styles.r}>
            <span className={styles.rk}>Послуга</span>
            <span>{data.service}</span>
          </div>
          {data.budget && (
            <div className={styles.r}>
              <span className={styles.rk}>Бюджет</span>
              <span>{data.budget}</span>
            </div>
          )}
          {data.timeline && (
            <div className={styles.r}>
              <span className={styles.rk}>Терміни</span>
              <span>{data.timeline}</span>
            </div>
          )}
          <div className={styles.r}>
            <span className={styles.rk}>Контакт</span>
            <span>{primaryContact}</span>
          </div>
        </div>
        <button type="button" className={`${styles.btn} ${styles.btnGhost} ${styles.resend}`} onClick={reset}>
          Надіслати ще один запит
        </button>
      </div>
    );
  }

  const invalidCount = submitted ? Object.keys(errors).length : 0;

  return (
    <form className={styles.formCard} ref={formRef} onSubmit={submit} noValidate aria-label="Форма заявки на проєкт">
      {invalidCount > 0 && (
        <div className={styles.formBanner} role="alert">
          Виправте {invalidCount} {invalidCount === 1 ? "поле" : "поля/полів"} нижче перед відправленням.
        </div>
      )}

      <div className={`${styles.field} ${styles.row2}`}>
        <div className={`${styles.field} ${errors.name ? styles.invalid : ""}`}>
          <div className={styles.flabel}>
            <label htmlFor="sv-name">Ім&apos;я</label>
            <span className={styles.req}>обов&apos;язково</span>
          </div>
          <input
            id="sv-name"
            name="name"
            className={styles.input}
            type="text"
            autoComplete="name"
            placeholder="Ваше ім'я"
            maxLength={LIMITS.name}
            value={data.name}
            aria-required="true"
            aria-invalid={!!errors.name}
            onChange={(e) => set("name", e.target.value)}
          />
          {errors.name && <div className={styles.err}>{errors.name}</div>}
        </div>
        <div className={`${styles.field} ${errors.email ? styles.invalid : ""}`}>
          <div className={styles.flabel}>
            <label htmlFor="sv-email">Email</label>
            <span className={styles.opt}>опційно</span>
          </div>
          <input
            id="sv-email"
            name="email"
            className={styles.input}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@example.com"
            maxLength={LIMITS.email}
            value={data.email}
            aria-invalid={!!errors.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email && <div className={styles.err}>{errors.email}</div>}
        </div>
      </div>

      <div className={`${styles.field} ${styles.row2}`}>
        <div className={`${styles.field} ${errors.telegram ? styles.invalid : ""}`}>
          <div className={styles.flabel}>
            <label htmlFor="sv-telegram">Telegram</label>
            <span className={styles.opt}>опційно</span>
          </div>
          <input
            id="sv-telegram"
            name="telegram"
            className={styles.input}
            type="text"
            placeholder="@username"
            maxLength={LIMITS.telegram}
            value={data.telegram}
            aria-invalid={!!errors.telegram}
            onChange={(e) => set("telegram", e.target.value)}
          />
          {errors.telegram && <div className={styles.err}>{errors.telegram}</div>}
        </div>
        <div className={`${styles.field} ${errors.phone ? styles.invalid : ""}`}>
          <div className={styles.flabel}>
            <label htmlFor="sv-phone">Телефон</label>
            <span className={styles.opt}>опційно</span>
          </div>
          <input
            id="sv-phone"
            name="phone"
            className={styles.input}
            type="tel"
            inputMode="tel"
            placeholder="+380XXXXXXXXX"
            maxLength={LIMITS.phone}
            value={data.phone}
            aria-invalid={!!errors.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone && <div className={styles.err}>{errors.phone}</div>}
        </div>
      </div>

      <div className={styles.field}>
        <p className={styles.contactsHint}>
          Заповніть хоча б один контакт <span className={styles.req}>*</span> — Email, Telegram або
          телефон.
        </p>
        {errors.contacts && <div className={styles.err}>{errors.contacts}</div>}
      </div>

      <div className={`${styles.field} ${errors.service ? styles.invalid : ""}`}>
        <div className={styles.flabel}>
          <label htmlFor="sv-service">Послуга</label>
          <span className={styles.req}>обов&apos;язково</span>
        </div>
        <select
          id="sv-service"
          name="service"
          className={styles.select}
          value={data.service}
          aria-required="true"
          aria-invalid={!!errors.service}
          onChange={(e) => set("service", e.target.value)}
        >
          <option value="" disabled>
            Оберіть послугу…
          </option>
          {SERVICE_VALUES.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.service && <div className={styles.err}>{errors.service}</div>}
      </div>

      <div className={`${styles.field} ${styles.row2}`}>
        <div className={styles.field}>
          <div className={styles.flabel}>
            <label htmlFor="sv-budget">Бюджет</label>
            <span className={styles.opt}>опційно</span>
          </div>
          <input
            id="sv-budget"
            name="budget"
            className={styles.input}
            type="text"
            placeholder="напр. $5–10k"
            maxLength={LIMITS.budget}
            value={data.budget}
            onChange={(e) => set("budget", e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <div className={styles.flabel}>
            <label htmlFor="sv-timeline">Терміни</label>
            <span className={styles.opt}>опційно</span>
          </div>
          <input
            id="sv-timeline"
            name="timeline"
            className={styles.input}
            type="text"
            placeholder="напр. 4–6 тижнів"
            maxLength={LIMITS.timeline}
            value={data.timeline}
            onChange={(e) => set("timeline", e.target.value)}
          />
        </div>
      </div>

      <div className={`${styles.field} ${errors.details ? styles.invalid : ""}`}>
        <div className={styles.flabel}>
          <label htmlFor="sv-details">Деталі проєкту</label>
          <span className={styles.req}>обов&apos;язково</span>
        </div>
        <textarea
          id="sv-details"
          name="details"
          className={styles.textarea}
          placeholder="Опишіть проєкт: цілі, посилання на релевантні матеріали та терміни."
          maxLength={LIMITS.details}
          value={data.details}
          aria-required="true"
          aria-invalid={!!errors.details}
          onChange={(e) => set("details", e.target.value)}
        />
        {errors.details && <div className={styles.err}>{errors.details}</div>}
      </div>

      <div className={styles.formFoot}>
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={submitting}>
          {submitting ? (
            <>
              <span className={styles.spin} aria-hidden="true" /> Надсилаємо…
            </>
          ) : (
            <>
              Надіслати запит <IconArrowR className={styles.arr} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
