"use client";

import { useId, useState, type FormEvent } from "react";

/**
 * Inline / footer email capture used inside guide MDX:
 *
 *   <EmailSignup variant="inline" magnet="The Small-Kitchen Buying Checklist" />
 *
 * This is intentionally NOT wired to an email provider yet. On submit it only
 * validates the address format client-side and shows a success message. No data
 * is sent anywhere and nothing is persisted (no localStorage/sessionStorage).
 */
type Variant = "inline" | "footer";

// Basic, permissive email shape check — good enough for a format hint without
// rejecting valid-but-unusual addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailSignup({
  variant = "inline",
  magnet,
}: {
  variant?: Variant;
  magnet: string;
}) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    // TODO: ligar ao provedor de email (MailerLite/Brevo) — enviar `email`
    // e a tag do magnet. Por enquanto é só validação no client.
    setDone(true);
  }

  const heading =
    variant === "footer" ? "Get the free checklist" : "Free download";

  if (done) {
    return (
      <aside className={`email-signup email-signup--${variant}`} role="status">
        <p className="email-signup__success">Thanks, you&rsquo;re on the list</p>
      </aside>
    );
  }

  return (
    <aside className={`email-signup email-signup--${variant}`}>
      <form className="email-signup__form" onSubmit={handleSubmit} noValidate>
        <p className="email-signup__heading">{heading}</p>
        <p className="email-signup__magnet">{magnet}</p>

        <label className="email-signup__label" htmlFor={inputId}>
          Email address
        </label>
        <div className="email-signup__row">
          <input
            id={inputId}
            className="email-signup__input"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${inputId}-error` : undefined}
            required
          />
          <button className="email-signup__button" type="submit">
            Send it to me
          </button>
        </div>

        {error ? (
          <p
            id={`${inputId}-error`}
            className="email-signup__error"
            role="alert"
          >
            {error}
          </p>
        ) : null}
      </form>
    </aside>
  );
}
