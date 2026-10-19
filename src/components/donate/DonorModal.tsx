"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./DonorModal.module.css";
import type { DonorFormData } from "@/types";

interface DonorModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: string;
  plan: string;
  amount: number;
}

export default function DonorModal({
  isOpen,
  onClose,
  project,
  plan,
  amount,
}: DonorModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    pan?: string;
  }>({});

  const [submittedData, setSubmittedData] = useState<DonorFormData | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setSubmittedData(null);
    setErrors({});
    setName("");
    setPhone("");
    setEmail("");
    setPan("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const formattedAmount = amount.toLocaleString("en-IN");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();
    const cleanPan = pan.trim();

    if (!cleanName) {
      newErrors.name = "Please enter your name.";
    }

    const digitsOnly = cleanPhone.replace(/\D/g, "");
    if (!cleanPhone || digitsOnly.length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (cleanPan && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(cleanPan)) {
      newErrors.pan = "PAN should look like ABCDE1234F.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data: DonorFormData = {
        project,
        plan,
        amount,
        name: cleanName,
        phone: cleanPhone,
        email: cleanEmail || undefined,
        pan: cleanPan || undefined,
      };

      setSubmittedData(data);

      // Dispatch custom event for future integration listeners
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("sidra:donate", {
            detail: data,
          })
        );
      }
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donor-title"
    >
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalHead}>
          <h2 id="donor-title">Donor Details</h2>
          <button
            className={styles.closeBtn}
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
          >
            <Image
              src="/assets/close.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
            />
          </button>
        </div>

        {submittedData ? (
          /* Honest Payment Gateway Integration Notice */
          <div className={styles.integrationNotice}>
            <div className={styles.integrationNoticeHead}>
              <Image
                src="/assets/info.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
              <span>Payment Gateway Integration Point</span>
            </div>
            <p>
              Your donation selection and donor details have been validated successfully!
            </p>
            <div className={styles.integrationDetails}>
              <div>
                <span>Selected Programme:</span>
                <strong>{submittedData.project}</strong>
              </div>
              <div>
                <span>Package / Plan:</span>
                <strong>{submittedData.plan}</strong>
              </div>
              <div>
                <span>Contribution Total:</span>
                <strong>₹{submittedData.amount.toLocaleString("en-IN")}</strong>
              </div>
              <div>
                <span>Donor:</span>
                <strong>{submittedData.name}</strong>
              </div>
              <div>
                <span>Contact:</span>
                <strong>{submittedData.phone}</strong>
              </div>
            </div>
            <p>
              <strong>Notice:</strong> Online payment processing is not yet connected to a live banking gateway on this deployment. Real funds will not be charged until official payment provider credentials (e.g. Razorpay, PayU, or Bank transfer) are configured.
            </p>
            <button
              type="button"
              className={styles.closeNoticeBtn}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form className={styles.donorForm} onSubmit={handleSubmit} noValidate>
            <p className={styles.donorFormNote}>
              <Image
                src="/assets/info.svg"
                alt=""
                width={22}
                height={22}
                aria-hidden="true"
              />
              <span>
                Please provide the details below to receive your payment receipt.
              </span>
            </p>

            <div className={styles.donorSummary}>
              <span>
                {project} · {plan}
              </span>
              <strong>₹{formattedAmount}</strong>
            </div>

            {/* Name Field */}
            <div className={styles.field}>
              <label htmlFor="f-name">Name</label>
              <input
                ref={nameInputRef}
                id="f-name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
                value={name}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "f-name-error" : undefined}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
              />
              {errors.name && (
                <span id="f-name-error" className={styles.fieldError}>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Phone Field */}
            <div className={styles.field}>
              <label htmlFor="f-phone">Phone No</label>
              <input
                id="f-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder="Phone No"
                autoComplete="tel"
                required
                value={phone}
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "f-phone-error" : undefined}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/[^\d+ ]/g, "");
                  setPhone(cleaned);
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                }}
              />
              {errors.phone && (
                <span id="f-phone-error" className={styles.fieldError}>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Email Field (Optional) */}
            <div className={styles.field}>
              <label htmlFor="f-email">
                Email <em>(optional)</em>
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "f-email-error" : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
              />
              {errors.email && (
                <span id="f-email-error" className={styles.fieldError}>
                  {errors.email}
                </span>
              )}
            </div>

            {/* PAN Card Field (Optional) */}
            <div className={styles.field}>
              <label htmlFor="f-pan">
                Pan Card No <em>(optional)</em>
              </label>
              <input
                id="f-pan"
                name="pan"
                type="text"
                placeholder="Pan Card No"
                autoCapitalize="characters"
                maxLength={10}
                value={pan}
                aria-invalid={errors.pan ? "true" : "false"}
                aria-describedby={errors.pan ? "f-pan-error" : undefined}
                onChange={(e) => {
                  const upper = e.target.value.toUpperCase();
                  setPan(upper);
                  if (errors.pan) setErrors((prev) => ({ ...prev, pan: undefined }));
                }}
              />
              {errors.pan && (
                <span id="f-pan-error" className={styles.fieldError}>
                  {errors.pan}
                </span>
              )}
            </div>

            <button className={styles.btnSubmit} type="submit">
              Pay ₹{formattedAmount}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
