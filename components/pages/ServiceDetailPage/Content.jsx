import React from 'react'
import FormSec from './FormSec'

const Content = () => {
    return (
        <>
            <div className="service-detail-secB">
                <div className="container">
                    <div className="flex-box">
                        <div className="flex-box-item">
                            <div className="content">
                                <p>Our AI Workflows Orchestration service helps businesses unify fragmented processes, eliminate manual inefficiencies, and scale operations with intelligent automation. We integrate advanced AI models, rule-based systems, and business logic into a seamless, end-to-end workflow—ensuring every task is completed faster, smarter, and with precision.</p>

                                <h2>What We Deliver</h2>
                                <ul>
                                    <li>
                                        <h3>End-to-End Process Automation</h3>
                                        <p>We transform multi-step, repetitive workflows into fully automated pipelines that run with minimal human intervention. From data ingestion to decision-making, every step is optimized.</p>
                                    </li>

                                    <li>
                                        <h3>Intelligent Decision Engines</h3>
                                        <p>Our orchestration layer uses predictive AI models, real-time analytics, and adaptive algorithms to drive accurate and timely decisions across your operations.</p>
                                    </li>

                                    <li>
                                        <h3>Seamless System Integration</h3>
                                        <p>We connect legacy platforms, CRMs, ERPs, cloud applications, and custom tools into a unified operational ecosystem—eliminating data silos and accelerating information flow.</p>
                                    </li>

                                    <li>
                                        <h3>Real-Time Monitoring & Control</h3>
                                        <p>Gain full visibility into your operations with dashboards that track workflow performance, identify bottlenecks, and ensure continuous optimization.</p>
                                    </li>

                                    <li>
                                        <h3>Scalable Architecture</h3>
                                        <p>Whether you’re handling thousands of transactions or millions, our orchestration framework grows with your business—ensuring speed, resilience, and reliability at any scale.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-box-item">
                            <FormSec />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content