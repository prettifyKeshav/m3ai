import React from 'react'
import "@/styles/other/other.css"
import Link from 'next/link'

const PrivacyPolicyPage = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="privacy-policy">
                            <div className="content">
                                <div className="heading">
                                    <h1 data-animate="zoom-in">Privacy Policy</h1>
                                </div>

                                <h3>Introduction</h3>
                                <p>
                                    At M3AI, we are committed to protecting the privacy and personal information of our users, partners, and website visitors.
                                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our services or visit our website.
                                    Your trust is important to us, and we ensure that your information is handled with the highest standards of security and confidentiality.
                                </p>
                                <h3>Information We Collect</h3>
                                <p>When you engage with M3AI, we may collect the following types of personal information:</p>
                                <ul>
                                    <li><b>Contact Information:</b> Name, email address, phone number, and mailing address.</li>
                                    <li><b>Account Information:</b> Login credentials, user profile details, and preferences.</li>
                                    <li><b>Communication Data:</b> Messages, inquiries, and feedback submitted through our website or customer support channels.</li>
                                </ul>
                                <h3>Non-Personal Information</h3>
                                <p>We also collect non-personal data that does not directly identify individuals, such as:</p>
                                <ul>
                                    <li><b>Website Usage Data:</b> Pages visited, time spent on pages, and browsing behavior on our platform.</li>
                                    <li><b>Device Information:</b> IP address, browser type, operating system, and other technical details.</li>
                                </ul>
                                <h4>How We Use Your Information</h4>
                                <p>M3AI uses the collected information for the following purposes:</p>
                                <ul>
                                    <li>To manage user accounts, preferences, and platform access.</li>
                                    <li>To communicate updates, announcements, and service-related information.</li>
                                    <li>To improve our website, services, and overall user experience.</li>
                                    <li>To analyze trends, usage, and performance for service optimization.</li>
                                    <li>To comply with applicable legal and regulatory obligations.</li>
                                </ul>
                                <h3>Sharing Your Information</h3>
                                <p>We do not sell or rent your personal information. However, we may share it in the following circumstances:</p>
                                <ul>
                                    <li><b>With Service Providers:</b> Third-party vendors who assist with hosting, analytics, customer support, or other operational tasks.</li>
                                    <li><b>For Legal Compliance:</b> If required by law or in response to lawful requests by public authorities.</li>
                                    <li><b>With Your Consent:</b> In cases where you have explicitly agreed to share your information.</li>
                                </ul>
                                <h3>Security of Your Information</h3>
                                <p>
                                    We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction.
                                    However, no method of transmission over the internet or electronic storage is 100% secure, and we encourage safe online practices.
                                </p>
                                <h3>Your Privacy Rights</h3>
                                <p>Depending on your location, you may have the right to:</p>
                                <ul>
                                    <li>Access, correct, or delete your personal data.</li>
                                    <li>Object to or restrict certain data processing activities.</li>
                                    <li>Withdraw your consent at any time, where applicable.</li>
                                </ul>
                                <p>To exercise your rights or for any privacy-related inquiries, please contact us at <a className="text-white" href="tel:911234567890">+91-1234567890</a>.</p>
                                <h3>Changes to This Privacy Policy</h3>
                                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with the updated effective date.</p>
                                <p>For more information or assistance, please contact M3AI at <Link className="text-white" href="tel:911234567890">+91-1234567890</Link>.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PrivacyPolicyPage