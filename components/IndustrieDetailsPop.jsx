"use client"
import { useModalStore } from "@/store/modalStore";
import { useEffect, useState } from "react";

export default function IndustriesDetailPop() {
    const isOpen = useModalStore((state) => state.isIndustriesDetailOpen)
    const closeIndustriesDetail = useModalStore((state) => state.closeIndustriesDetail)

    useEffect(() => {
        const inputBoxes = document.querySelectorAll('.form-control');

        const handleFocus = function () {
            this.closest('.form-group')?.classList.add('active');
            this.classList.add('valid');
        };

        const handleBlur = function () {
            const hasValue = this.value.trim() !== '';

            if (!hasValue) {
                this.closest('.form-group')?.classList.remove('active');
                this.classList.remove('valid');
            }
        };

        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('focus', handleFocus);
            inputBox.addEventListener('blur', handleBlur);
        });

        return () => {
            inputBoxes.forEach(inputBox => {
                inputBox.removeEventListener('focus', handleFocus);
                inputBox.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    return (
        <div className={`model industrie-detail-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeIndustriesDetail}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <div className="model-body">
                <div className="flex-box">
                    <div className="flex-box-item">
                        <h2>Banking</h2>
                    </div>
                    <div className="flex-box-item">
                        <ul>
                            <li>Underwriting Workflow Automation  Automate risk assessment and approvals</li>
                            <li>Structured Finance Model Optimization  Streamline complex financial models</li>
                            <li>Treasury Operations Workflow Automation  Simplify cash management and reconciliation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}