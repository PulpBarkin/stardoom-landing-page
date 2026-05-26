# Privacy Policy

**Last Updated:** May 26, 2026

Stardoom is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, store, use, and disclose information. It applies to the Stardoom mobile application (the "**App**"), our website at stardoom.app (the "**Website**"), and any related activities, collectively referred to as our services (the "**Services**").

By affirmatively assenting to this Privacy Policy or otherwise using our Services or providing information to us, you consent to us collecting, storing, using, and disclosing information as described in this Privacy Policy.

---

## Data Controller

The data controller responsible for processing your Personal Information under this Privacy Policy is:

**Can Barkın Bilgili** (sole proprietor, individual developer)
operating the **Stardoom** mobile application
Türkiye

Contact: developer@stardoom.app
Postal address: available upon request to developer@stardoom.app

---

## Contact Us

If you have any questions about this Privacy Policy or how we handle your data, please contact us at **developer@stardoom.app**.

---

## Your Acceptance of This Privacy Policy

The provisions of this Privacy Policy supersede all previous notices regarding our privacy practices with respect to the Services. If you do not agree to all provisions of this Privacy Policy, you may not access or use the Services.

This Privacy Policy is part of our Terms of Service at stardoom.app/terms and is incorporated therein by reference. By accessing or using our Services, you agree to be bound by both documents. If you do not agree, do not use the Services.

---

## Information We Collect

When you use our Services, we collect information that you provide to us and certain information that is automatically collected from your device. Some of this information may identify you ("**Personal Information**"); some may not ("**Anonymous Information**"). When Anonymous Information is combined with Personal Information in a way that makes you identifiable, we treat the combined record as Personal Information.

### We Do Not Sell Personal Information

We do not sell your Personal Information. We do not share your Personal Information to provide personalized or targeted advertising.

### Information You Provide

You may give us information by signing up, completing onboarding, creating audit entries, contacting us, and otherwise interacting with the Services. The categories of information you may provide include:

- **Identifiers** — name (free-text, any string you choose), email address (optional, collected during onboarding), and online identifiers such as device tokens.
- **Birth data about you** — date of birth, approximate time of birth (optional), and birth city. We use this to compute your natal astrological chart on our servers.
- **Birth data about other people you audit** — see the dedicated section below ("About Audited Individuals").
- **Photos** — if you choose to upload a photo for an audit entry, that image is stored privately under your account.
- **Free-text content** — anything you type into note fields, recalibration prompts, or feedback.
- **Account log-in credentials** — Stardoom uses anonymous authentication by default; no password is collected unless you opt in to a linked identity provider in the future.

### Information Collected Automatically

When you access our Services, we automatically collect information linked to your device, including IP address, operating system and version, local time zone, device type and manufacturer, screen size, language preference, app version, and aggregate usage events (which screens you opened, which features you used, how long sessions lasted).

### Information We Do Not Collect

For clarity, Stardoom **does not** import your phone contacts, access your photo library beyond a single user-selected image at the moment you choose one, scrape your social media accounts, or read messages, calendars, location history, or files outside the App's sandbox.

---

## About Audited Individuals

Stardoom's audit feature lets you analyze a relationship using astrological data you provide about another person — typically a date of birth, an approximate time and location, and a nickname or label of your choosing.

This data is **deliberately collected in a pseudonymous form**. There is no field for the audited person's legal name, email, phone number, social handle, photo of an identifying nature, or any other direct identifier. The "name" field accepts arbitrary text — a nickname, an initial, an emoji, a placeholder — and we make no attempt to verify, cross-reference, or link this information to any real person. Stardoom has no way of confirming whether the audited individual exists, is who you say they are, or whether any of the data you entered is accurate.

Because the input is unverified and pseudonymous, Stardoom treats audit entry contents as **information about you (the auditor) and your perception of a relationship**, not as personal data about a third party in the GDPR or CCPA sense. The data is stored privately under your account, is visible only to you, is never shared with any audited person, is never used for matching, profiling, or contacting any third party, and is never combined with external data sources to attempt re-identification.

If you nevertheless choose to enter information that could identify a real person (for example, an unusual full name combined with a specific birth date and location), you remain responsible for ensuring you have a lawful basis to process it under the laws of your jurisdiction.

---

## How We Use Information

We use the information we collect to provide the Services and continually improve them. Specifically, we may use Personal Information and Anonymous Information to:

- Provide the core features of the Services (compute your natal chart, generate readings, store entries);
- Create and maintain your account;
- Generate astrological readings using third-party large language model providers (see "Reading Generation" below);
- Respond to your inquiries and provide support;
- Analyze how the Services are used so we can improve them;
- Detect, prevent, and investigate fraud, abuse, hacking, infringement, or other misconduct;
- Comply with legal obligations, enforce our Terms, and protect our rights, property, and safety, and those of our users;
- Send transactional notices directly related to your use of the Services (for example, account-deletion confirmations).

We currently do **not** send marketing emails or promotional messaging. If we begin to in the future, this Privacy Policy will be updated and you will be given the opportunity to opt out.

### Reading Generation (Large Language Models)

To generate the textual portion of an astrological reading, Stardoom sends a structured prompt to a large language model provider via the OpenRouter API. The prompt typically includes computed astrological placements (planet positions, aspects, chart context) and the nickname / free-text notes you entered for the entry; it does not include your email address, device identifiers, or any other account-level identifier.

Current and past LLM providers we route through OpenRouter include Anthropic and OpenAI. Their data is processed under each provider's data processing agreement and is not used by them to train models on your data.

If you decline to provide birth data, no reading is generated.

---

## How We Share Information

Stardoom does **not** sell your Personal Information and does **not** disclose Personal Information for targeted or cross-context behavioral advertising.

We may share Personal Information only as follows:

- **With service providers and processors who help us run the Services.** Each is bound by its own privacy policy and a data processing agreement. The current list:
  - **Firebase** (Google LLC) — authentication, Firestore database, Cloud Functions, hosting, file storage.
  - **OpenRouter** with downstream providers including **Anthropic** and **OpenAI** — LLM inference for reading generation (see above).
  - **Mixpanel** — product analytics events (anonymous identifier or, with your consent on iOS, advertising identifier).
  - **Sentry** — crash and error reporting (anonymous identifier or, with your consent on iOS, advertising identifier).
  - **Apple** and **Google** — App distribution, in-app purchase processing (when enabled), and platform analytics, governed by their own respective policies.
  - **Adapty** — subscription lifecycle management, only when in-app purchases are enabled in a future version.
- **For legal compliance.** We may disclose Personal Information in response to lawful requests by public authorities, to enforce our Terms, to protect our rights, property, or safety, or to address activity that may be illegal or harmful.
- **In connection with a business transaction.** If Stardoom is involved in a merger, asset sale, financing, liquidation, or acquisition, we may transfer your information to the acquiring party, who will be bound by the obligations of this Privacy Policy.

We may also share **Anonymous Information** that has been aggregated and stripped of identifiers for research, product development, and commercial purposes.

---

## iOS App Tracking Transparency

On iOS, Stardoom uses Apple's App Tracking Transparency (ATT) framework. When you first launch the App, you are asked whether you allow Stardoom to track your activity across other companies' apps and websites.

- If you allow tracking, Stardoom may pass your advertising identifier (IDFA) to Mixpanel and Sentry so events from this device can be cross-app correlated for analytics purposes.
- If you decline tracking, we do not link IDFA to your account; Mixpanel and Sentry operate in a non-tracking mode using only a randomly-generated, app-specific identifier.

You can change this preference at any time in iOS Settings → Privacy & Security → Tracking → Stardoom.

---

## Do Not Track

"Do Not Track" (DNT) is a browser setting. Because Stardoom is a mobile application, DNT signals from web browsers do not directly apply. On iOS, the equivalent preference is App Tracking Transparency (see above).

---

## Children's Privacy

Our Services are not directed to children under the age of sixteen (16), and we do not knowingly collect Personal Information from children under sixteen (16). If you are not sixteen (16) or older, do not use the App or the Website. If you believe we have received information from a child, please contact us at developer@stardoom.app and we will delete it.

### California Minor Erasure

In accordance with California law, minors under the age of eighteen (18) residing in California may remove, or request the removal of, content and information they have shared in the Services. To do so, email developer@stardoom.app. Removing content does not ensure complete or comprehensive erasure of all derivative or backup data. Where permitted by law, Stardoom may anonymize content instead of fully deleting it.

---

## How to Delete Your Account and Data

You can delete your Stardoom account and all associated data at any time, regardless of jurisdiction:

- **Open the Stardoom App** → tap **Settings** (under the Profile tab) → scroll to **Delete Account** → confirm the on-screen prompt.

Account deletion is permanent. We will erase your user record, all audit entries, computed chart data, readings, and stored photos, except where retention is required by law (for example, financial records for tax compliance if you made a purchase). Anonymous, fully de-identified analytics events that do not link back to your account may be retained.

If you cannot delete your account via the App, email **developer@stardoom.app** with the subject line **"Delete My Account"** and include the email address linked to your account (if any) and your account's anonymous user identifier (shown at the bottom of the Settings screen). Our team will process the request.

---

## Links to Third-Party Websites

When you use our Services, you may be directed to other websites or applications beyond our control. We may also allow third-party websites or applications to link to the Services. We are not responsible for the privacy practices of any third parties or the content of linked services. We encourage you to read their applicable privacy policies. This Privacy Policy applies only to Stardoom.

---

## How We Store and Retain Information

### Storage

Personal Information you provide is stored on infrastructure operated by **Google Cloud Platform** (Firebase), primarily in the **us-central1** region (Iowa, United States). If you access the Services from outside the United States, your information will be transferred to and processed in the United States. Data protection standards in the U.S. may differ from those in your jurisdiction; where required by applicable law (for example, GDPR), we rely on Standard Contractual Clauses or equivalent safeguards published by Google Cloud and our other processors.

### Security

We have implemented technical and organizational precautions to protect the confidentiality, security, and integrity of your Personal Information from accidental or unlawful destruction, loss, alteration, disclosure, or unauthorized access — including encryption in transit (TLS), encryption at rest, scoped Firestore security rules, and least-privilege access for our backend functions. However, no system can guarantee absolute security. While we use what we believe to be appropriate measures, we cannot warrant the security of any information transmitted to us.

### Retention

We retain your Personal Information for as long as your account is active and for a reasonable period thereafter to fulfill the purposes described in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements. When information is no longer necessary, we delete it or keep it in a form that does not identify you. If you delete your account, your Personal Information is removed within thirty (30) days, except where longer retention is required by law.

---

## Privacy Rights for EEA, UK, and Swiss Residents

If you are located in the European Economic Area, the United Kingdom, or Switzerland, the legal bases on which we process your Personal Information are:

- **Performance of a contract** — for example, processing your account registration and providing the Services.
- **Legitimate business interests** — for example, fraud prevention, maintaining network security, and improving the Services.
- **Compliance with legal obligations** — for example, tax and accounting record retention.
- **Consent** — where no other basis applies; consent may be withdrawn at any time.

You have the right, under certain circumstances, to:

- Access your Personal Information;
- Correct inaccurate Personal Information;
- Request erasure of your Personal Information without undue delay;
- Restrict processing of your Personal Information;
- Receive a portable copy of your Personal Information and have it transmitted to another controller;
- Object to processing of your Personal Information;
- Withdraw consent where processing is based on consent.

To exercise any of these rights, email **developer@stardoom.app** and specify the right you wish to exercise. We may need to verify your identity before honoring the request.

If you believe we are not complying with applicable data protection law, you have the right to lodge a complaint with your local supervisory authority. We would, however, appreciate the opportunity to address your concerns first.

### International Data Transfers

Data you provide may be transferred to and processed in the United States and other jurisdictions where our service providers operate. Where required, we rely on Standard Contractual Clauses or other safeguards approved under applicable law.

---

## Privacy Rights for U.S. State Residents

Several U.S. states grant residents specific rights over their Personal Information. To exercise any rights, or to ask whether they are available to you, please contact **developer@stardoom.app**.

### Request for Information, Correction, or Deletion

Residents of certain U.S. states have the right to know:

- The categories of Personal Information we collect about them;
- The categories of sources from which Personal Information is collected;
- The business or commercial purpose(s) for collecting, sharing, or disclosing Personal Information;
- The categories of third parties with whom we share Personal Information;
- The specific pieces of Personal Information we have collected about them.

You may also have the right to request that we correct inaccurate Personal Information or delete your Personal Information.

### Request for Portable Data

Residents of certain U.S. states have the right to receive a portable copy of their Personal Information.

### Do Not Sell or Share My Personal Information

Residents of certain U.S. states have the right to opt out of the sale or sharing of Personal Information. **We do not sell or share Personal Information for personalized or cross-context behavioral advertising.**

### Limit the Use of Sensitive Personal Information

Residents of California have the right to direct us to use or disclose sensitive Personal Information only for providing the Services or as otherwise minimally permitted by law. We do not use sensitive Personal Information for any purpose beyond providing the Services.

### Automated Processing and Profiling

Residents of certain U.S. states have the right to opt out of profiling that produces legal or similarly significant effects. We do not engage in such profiling. Astrological readings generated by Stardoom are entertainment content and have no legal effect.

### Right to Equal Service and Price

You will receive equal service and price from us even if you exercise any privacy right.

### Verification Process

To protect your privacy, we verify privacy-rights requests to ensure only you (or your authorized agent) can exercise rights pertaining to your Personal Information. We may request additional information to verify your identity.

### Appeal Process

If we decline to take action on your request as permitted by law, we will provide you with a written explanation and an opportunity to appeal. If we deny your appeal, we will provide instructions on how to contact your state Attorney General or equivalent regulator for further review.

---

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will note the date of the most recent update at the top of this Privacy Policy and, where the change is material, will alert you by prominently posting an announcement within the Services or by emailing the email address on file (if any) before the new policy takes effect. Continued use of the Services after notice of changes constitutes acceptance of the updated Privacy Policy. We encourage you to review this Privacy Policy regularly.
