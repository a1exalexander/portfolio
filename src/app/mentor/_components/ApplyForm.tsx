"use client";

import { useState, type FormEvent } from "react";
import styles from "../page.module.css";
import { IconArrowR, IconCheck } from "./icons";
import {
  type ApplyData,
  type ApplyErrors,
  LIMITS,
  hasErrors,
  validateApplyForm,
} from "@/lib/mentor-apply-validation";

const LEVELS = [
  { id: "zero", label: "З нуля", sub: "ніколи не писав коду" },
  { id: "self", label: "Сам вчуся", sub: "курси, туторіали, петпроекти" },
  { id: "junior", label: "Джун (0–1 рік)", sub: "працюю або шукаю першу роботу" },
  { id: "switch", label: "Змінюю сферу", sub: "QA, дизайн, інше" },
] as const;

const FORMATS = [
  { id: "indiv", label: "1-на-1", sub: "1000 ₴ / година" },
  { id: "group", label: "У групі", sub: "400 ₴ / година" },
  { id: "undecided", label: "Не визначився", sub: "ще не вибрав формат" },
] as const;

const initialData: ApplyData = {
  name: "",
  email: "",
  telegram: "",
  phone: "",
  level: "",
  format: "",
  message: "",
};

export const ApplyForm = () => {
  const [data, setData] = useState<ApplyData>(initialData);
  const [errors, setErrors] = useState<ApplyErrors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof ApplyData>(key: K, value: ApplyData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined, contacts: undefined }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const er = validateApplyForm(data);
    setErrors(er);
    if (hasErrors(er)) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/mentor-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setSent(true);
    } catch {
      setErrors({ contacts: "Щось пішло не так, спробуй ще раз" });
    } finally {
      setSubmitting(false);
    }
  };

  const primaryContact =
    data.email.trim() || data.telegram.trim() || data.phone.trim();

  if (sent) {
    return (
      <div className={styles.formCard}>
        <div className={styles.formHead}>
          <div className={styles.formDots}>
            <i />
            <i />
            <i />
          </div>
          <span>~ /mentor/apply.sh · SENT</span>
        </div>
        <div className={styles.formSuccess}>
          <div className={styles.successBadge}>
            <IconCheck />
          </div>
          <h3>Заявку відправлено</h3>
          <p>
            Дякую, {data.name.split(" ")[0]}. Читаю кожну заявку особисто і відповім на{" "}
            <strong>{primaryContact}</strong> протягом 48 годин — запропоную час для безкоштовного
            20-хвилинного знайомства.
          </p>
          <div className={styles.formSuccessActions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={() => {
                setSent(false);
                setData(initialData);
              }}
            >
              Надіслати ще одну
            </button>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href="https://t.me/a1exalexander"
              target="_blank"
              rel="noreferrer"
            >
              Або напиши в Telegram <IconArrowR />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.formCard} onSubmit={submit} noValidate>
      <div className={styles.formHead}>
        <div className={styles.formDots}>
          <i />
          <i />
          <i />
        </div>
        <span>~ /mentor/apply.sh — fill the form</span>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="mentor-name">
            Ім&apos;я <span className={styles.req}>*</span>
          </label>
          <input
            id="mentor-name"
            type="text"
            placeholder="Олена"
            maxLength={LIMITS.name}
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
          />
          {errors.name && <span className={styles.err}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="mentor-email">Email</label>
          <input
            id="mentor-email"
            type="email"
            inputMode="email"
            placeholder="ti@example.com"
            maxLength={LIMITS.email}
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email && <span className={styles.err}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="mentor-telegram">Telegram</label>
          <input
            id="mentor-telegram"
            type="text"
            placeholder="@username"
            maxLength={LIMITS.telegram}
            value={data.telegram}
            onChange={(e) => set("telegram", e.target.value)}
          />
          {errors.telegram && <span className={styles.err}>{errors.telegram}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="mentor-phone">Телефон</label>
          <input
            id="mentor-phone"
            type="tel"
            inputMode="tel"
            placeholder="+380XXXXXXXXX"
            maxLength={LIMITS.phone}
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone && <span className={styles.err}>{errors.phone}</span>}
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <p className={styles.contactsHint}>
            Заповни хоча б один контакт <span className={styles.req}>*</span> — Email, Telegram або
            телефон.
          </p>
          {errors.contacts && <span className={styles.err}>{errors.contacts}</span>}
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label>
            Твій рівень
          </label>
          <div className={styles.radioRow}>
            {LEVELS.map((opt) => (
              <button
                type="button"
                key={opt.id}
                className={`${styles.radioTile} ${data.level === opt.id ? styles.radioTileOn : ""}`}
                onClick={() => set("level", data.level === opt.id ? "" : opt.id)}
              >
                <span className={styles.radioMark}>
                  <IconCheck />
                </span>
                <span className={styles.radioCopy}>
                  <span className={styles.radioMain}>{opt.label}</span>
                  <span className={styles.radioSub}>{opt.sub}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label>
            Формат
          </label>
          <div className={styles.radioRow}>
            {FORMATS.map((opt) => (
              <button
                type="button"
                key={opt.id}
                className={`${styles.radioTile} ${data.format === opt.id ? styles.radioTileOn : ""}`}
                onClick={() => set("format", data.format === opt.id ? "" : opt.id)}
              >
                <span className={styles.radioMark}>
                  <IconCheck />
                </span>
                <span className={styles.radioCopy}>
                  <span className={styles.radioMain}>{opt.label}</span>
                  <span className={styles.radioSub}>{opt.sub}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor="mentor-message">Кілька слів про себе (необов&apos;язково)</label>
          <textarea
            id="mentor-message"
            placeholder="Що вже знаєш, що хочеш вивчити, чому саме фронтенд, посилання на GitHub чи проекти…"
            maxLength={LIMITS.message}
            value={data.message}
            onChange={(e) => set("message", e.target.value)}
          />
          {errors.message && <span className={styles.err}>{errors.message}</span>}
        </div>
      </div>

      <div className={styles.formFoot}>
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={submitting}>
          {submitting ? "Надсилаємо…" : <> Надіслати заявку <IconArrowR /></>}
        </button>
      </div>
    </form>
  );
};
