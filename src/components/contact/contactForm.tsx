"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_MESSAGE_ROUTER_URL ||
  "https://notifications.jakob-lingel.dev/v1/submit";
const API_KEY = process.env.NEXT_PUBLIC_MESSAGE_ROUTER_API_KEY || "";

interface ContactFormProps {
  locale?: string;
}

export default function ContactForm({ locale = "de" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Honeypot check
    if (data._website) {
      setStatus("success");
      e.currentTarget.reset();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          site_id: data.site_id,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        (error as Error).message ||
          (locale === "en"
            ? "An error occurred. Please try again."
            : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const labels = {
    de: {
      name: "Name *",
      email: "E-Mail *",
      message: "Nachricht *",
      submit: "Nachricht senden",
      sending: "Wird gesendet...",
      success:
        "Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.",
      error: "Fehler",
    },
    en: {
      name: "Name *",
      email: "Email *",
      message: "Message *",
      submit: "Send Message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent successfully.",
      error: "Error",
    },
  };

  const t = labels[locale === "en" ? "en" : "de"];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden site_id field */}
      <input type="hidden" name="site_id" value="joy-alemazung" />

      {/* Honeypot field */}
      <div className="hidden">
        <label>
          <input
            name="_website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </label>
      </div>

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-(--megalight-accent) border border-(--light-accent) text-foreground placeholder:text-(--muted-accent) focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all duration-200"
          placeholder={
            locale === "en" ? "Your full name" : "Ihr vollständiger Name"
          }
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-(--megalight-accent) border border-(--light-accent) text-foreground placeholder:text-(--muted-accent) focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all duration-200"
          placeholder={
            locale === "en" ? "your.email@example.com" : "ihre.email@beispiel.de"
          }
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-(--megalight-accent) border border-(--light-accent) text-foreground placeholder:text-(--muted-accent) focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all duration-200 resize-vertical"
          placeholder={
            locale === "en"
              ? "Your message..."
              : "Ihre Nachricht..."
          }
        />
      </div>

      {/* Success Message */}
      {status === "success" && (
        <div className="flex items-center gap-x-3 p-4 rounded-lg bg-(--success)/20 text-(--dark-success)">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <p>{t.success}</p>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="flex items-center gap-x-3 p-4 rounded-lg bg-(--alert)/20 text-(--alert)">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>
            {t.error}: {errorMessage}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 bg-(--accent) hover:bg-(--strong-accent) text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin">
              <Send className="w-4 h-4" />
            </span>
            <span>{t.sending}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>{t.submit}</span>
          </>
        )}
      </button>
    </form>
  );
}
