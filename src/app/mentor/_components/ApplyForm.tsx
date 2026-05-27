"use client";

import { useState, type FormEvent } from "react";
import styles from "../page.module.css";
import { IconArrowR, IconCheck } from "./icons";

const LEVELS = [
  { id: "zero", label: "З нуля", sub: "ніколи не писав коду" },
  { id: "self", label: "Сам вчуся", sub: "курси, туторіали, петпроекти" },
  { id: "junior", label: "Джун (0–1 рік)", sub: "працюю або шукаю першу роботу" },
  { id: "switch", label: "Змінюю сферу", sub: "QA, дизайн, інше" },
] as const;

const FORMATS = [
  { id: "indiv", label: "1-на-1", sub: "1000 ₴ / година" },
  { id: "group", label: "У групі", sub: "400 ₴ / година" },
] as const;

type Data = {
  name: string;
  email: string;
  contact: string;
  level: string;
  format: string;
  message: string;
};

const initialData: Data = {
  name: "",
  email: "",
  contact: "",
  level: "",
  format: "",
  message: "",
};

const validateEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const ApplyForm = () => {
  const [data, setData] = useState<Data>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Data>(key: K, value: Data[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const er: Partial<Record<keyof Data, string>> = {};
    if (!data.name.trim()) er.name = "Як до тебе звертатися?";
    if (!validateEmail(data.email)) er.email = "Потрібен дійсний email";
    if (!data.level) er.level = "Обери рівень";
    if (!data.format) er.format = "Обери формат";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

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
            <strong>{data.email}</strong> протягом 48 годин — запропоную час для безкоштовного
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
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
          />
          {errors.name && <span className={styles.err}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="mentor-email">
            Email <span className={styles.req}>*</span>
          </label>
          <input
            id="mentor-email"
            type="email"
            placeholder="ti@example.com"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email && <span className={styles.err}>{errors.email}</span>}
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor="mentor-contact">Telegram або інший контакт (необов&apos;язково)</label>
          <input
            id="mentor-contact"
            type="text"
            placeholder="@username"
            value={data.contact}
            onChange={(e) => set("contact", e.target.value)}
          />
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label>
            Твій рівень <span className={styles.req}>*</span>
          </label>
          <div className={styles.radioRow}>
            {LEVELS.map((opt) => (
              <button
                type="button"
                key={opt.id}
                className={`${styles.radioTile} ${data.level === opt.id ? styles.radioTileOn : ""}`}
                onClick={() => set("level", opt.id)}
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
          {errors.level && <span className={styles.err}>{errors.level}</span>}
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label>
            Формат <span className={styles.req}>*</span>
          </label>
          <div className={styles.radioRow}>
            {FORMATS.map((opt) => (
              <button
                type="button"
                key={opt.id}
                className={`${styles.radioTile} ${data.format === opt.id ? styles.radioTileOn : ""}`}
                onClick={() => set("format", opt.id)}
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
          {errors.format && <span className={styles.err}>{errors.format}</span>}
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor="mentor-message">Кілька слів про себе (необов&apos;язково)</label>
          <textarea
            id="mentor-message"
            placeholder="Що вже знаєш, що хочеш вивчити, чому саме фронтенд, посилання на GitHub чи проекти…"
            value={data.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formFoot}>
        <span className={styles.formSmall}>→ відповідь за 48 годин</span>
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
          Надіслати заявку <IconArrowR />
        </button>
      </div>
    </form>
  );
};
