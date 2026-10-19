"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DonorModal from "./DonorModal";
import ClickSpark from "@/components/ui/ClickSpark";
import { DONATION_PROGRAMS, DONATION_PROGRAM_KEYS } from "@/data/donate";
import styles from "./DonationExperience.module.css";

export default function DonationExperience() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("happy-meal");
  const [quantities, setQuantities] = useState<Record<number, number>>({
    0: 1,
    1: 1,
    2: 1,
  });
  const [customAmount, setCustomAmount] = useState<string>("");

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    project: string;
    plan: string;
    amount: number;
  }>({
    isOpen: false,
    project: "",
    plan: "",
    amount: 0,
  });

  const activeProject = DONATION_PROGRAMS[selectedProjectId] || DONATION_PROGRAMS["happy-meal"];

  const handleProjectChange = (projectId: string) => {
    setSelectedProjectId(projectId);
    setQuantities({ 0: 1, 1: 1, 2: 1 });
  };

  const handleStep = (index: number, delta: number) => {
    setQuantities((prev) => {
      const current = prev[index] || 1;
      const next = Math.max(1, Math.min(99, current + delta));
      return { ...prev, [index]: next };
    });
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericOnly = e.target.value.replace(/\D/g, "").slice(0, 8);
    setCustomAmount(numericOnly);
  };

  const isCustomAmountValid = Number(customAmount) >= 100;

  const openModal = (planName: string, totalAmount: number) => {
    setModalState({
      isOpen: true,
      project: activeProject.name,
      plan: planName,
      amount: totalAmount,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      {/* Programme Selection Pills */}
      <section className={styles.donateSelect} aria-label="Programme selection">
        <div className={styles.pills} role="group" aria-label="Project">
          {DONATION_PROGRAM_KEYS.map((key) => {
            const project = DONATION_PROGRAMS[key];
            const isSelected = selectedProjectId === key;
            return (
              <button
                key={key}
                type="button"
                className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ""}`}
                aria-pressed={isSelected}
                onClick={() => handleProjectChange(key)}
              >
                {project.name}
              </button>
            );
          })}
        </div>
        <motion.p
          key={selectedProjectId}
          className={styles.donateDesc}
          id="project-desc"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeProject.description}
        </motion.p>
      </section>

      {/* Packages Grid */}
      <section className={styles.packages} aria-label="Donation packages">
        <ScrollReveal className={styles.packagesGrid} staggerSelector={`.${styles.pkg}`} staggerMs={75}>
          {activeProject.packages.map((pkg, index) => {
            const qty = quantities[index] || 1;
            const total = pkg.unit * qty;
            const planDisplay = `${qty} ${pkg.name}`;

            return (
              <article
                key={pkg.name}
                className={styles.pkg}
              >
                <div className={styles.pkgHead}>
                  <h3 title={planDisplay}>{planDisplay}</h3>
                  <div className={styles.stepper} role="group" aria-label={`Quantity for ${pkg.name}`}>
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${pkg.name}`}
                      disabled={qty <= 1}
                      onClick={() => handleStep(index, -1)}
                    >
                      <Image
                        src="/assets/minus.svg"
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${pkg.name}`}
                      disabled={qty >= 99}
                      onClick={() => handleStep(index, 1)}
                    >
                      <Image
                        src="/assets/plus.svg"
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>

                <div className={styles.pkgBody}>
                  <div className={styles.amount}>
                    <span className={styles.amountCur}>₹</span>
                    <span className={styles.amountVal}>
                      {total.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className={styles.pkgNote}>{pkg.note(qty)}</p>
                  <div className={styles.payRow}>
                    <ClickSpark sparkColor="#00b050" sparkCount={8}>
                      <button
                        type="button"
                        className={styles.btnPay}
                        onClick={() => openModal(planDisplay, total)}
                      >
                        <span>Pay</span>
                        <Image
                          src="/assets/arrow-right-white.svg"
                          alt=""
                          width={16}
                          height={16}
                          aria-hidden="true"
                        />
                      </button>
                    </ClickSpark>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Custom Amount Card */}
          <article className={styles.pkg} id="custom-card">
            <div className={styles.pkgHead}>
              <h3>Custom Amount</h3>
            </div>
            <div className={styles.pkgBody}>
              <label className={styles.customInput}>
                <span className={styles.amountCur}>₹</span>
                <input
                  id="custom-amount"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="Enter amount"
                  aria-label="Custom amount in rupees"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </label>
              <p className={styles.pkgNote}>
                Give any amount you like. Minimum ₹100.
              </p>
              <div className={styles.payRow}>
                <button
                  type="button"
                  className={styles.btnPay}
                  disabled={!isCustomAmountValid}
                  onClick={() => openModal("Custom Amount", Number(customAmount))}
                >
                  <span>Pay</span>
                  <Image
                    src={
                      isCustomAmountValid
                        ? "/assets/arrow-right-white.svg"
                        : "/assets/arrow-right-disabled.svg"
                    }
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </section>

      {/* Spacer to match original design bottom layout */}
      <div className={styles.donateSpacer} />

      {/* Accessible Donor Modal */}
      <DonorModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        project={modalState.project}
        plan={modalState.plan}
        amount={modalState.amount}
      />
    </>
  );
}
