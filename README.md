# Maharashtra Admission Guide 2026–27

> **Independent Informational Admission Guide for Maharashtra Professional Technical Courses (AY 2026–27)**  
> **Official Source:** State Common Entrance Test Cell Information Brochure 2026–27  
> **Website URL:** [https://admissionguide.dalvihub.com](https://admissionguide.dalvihub.com)

---

## 📌 Important Notice & Disclaimer
**Maharashtra Admission Guide** is an independent educational web application built to help students, parents, and counselors navigate the technical admission rules, eligibility criteria, entrance tests, reservations, and Centralized Admission Process (CAP) in Maharashtra.

**This is NOT the official website of the Government of Maharashtra, Directorate of Technical Education (DTE), or the State Common Entrance Test Cell.** Official registrations, option form submission, and seat allotments take place exclusively on the official portal: [https://cetcell.mahacet.org](https://cetcell.mahacet.org).

---

## 🚀 Key Features

1. **Course Directory (35+ Programs & Entry Routes):**
   - Full coverage of First Year and Lateral Entry (Direct Second Year, Direct Third Year, Direct Final Year) for Engineering, Pharmacy, Architecture, Planning, Hotel Management, Design, Management (BBA/BMS/MBA), and Computer Applications (BCA/MCA).
   - Dedicated coverage for Working Professionals and Twinning/Collaborative degree programs.
2. **Interactive Rule-Based Eligibility Checker:**
   - Evaluates mandatory subjects, qualifying percentage, category relaxation (45% General vs 40% Reserved), entrance examination scores, and special requirements.
   - Accurately executes the official brochure rounding-off rule (*Section 8(3)(a)*: 44.50% to 44.99% rounds to 45%).
3. **Interactive Document Checklist:**
   - Dynamic checklist categorized by candidate status: General, SC/ST, OBC/VJNT/SBC/SEBC, EWS, TFWS, PwD, Defence, Orphan, and Working Professionals.
   - Print-friendly layout for students to take to Facilitation Centres (FC).
4. **Candidature Types & Home University Directory:**
   - Comprehensive explanation of Maharashtra State Candidature Types A, B, C, D, and E with Home University district mapping across all 10 state universities.
   - All India, Minority (Linguistic/Religious), NRI/OCI/PIO, and J&K/Ladakh Migrant provisions.
5. **Reservation & TFWS Information:**
   - Statutory reservation quota breakdown (SC 13%, ST 7%, VJ/DT 3%, NT-B 2.5%, NT-C 3.5%, NT-D 2%, OBC 19%, SEBC 10% [sub judice]).
   - Economically Weaker Section (EWS 10%), Orphan (1%), Female (30% horizontal), Defence (5%), PwD (5% across 21 disabilities), and Tuition Fee Waiver Scheme (TFWS 5% supernumerary).
6. **Step-by-Step CAP Admission Walkthrough:**
   - Visual guide to CAP Rounds I through IV, Auto-Freeze vs Self-Freeze vs Betterment, Seat Acceptance Fee, and ARC grievance procedures.
7. **Brochure Source Mapping:**
   - Every single rule, percentage, and condition includes an explicit reference to the printed page number and rule clause in the 2026–27 brochure.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Tooling:** Vite 8
- **Styling:** Modern Tailwind CSS v4 (Navy Blue `#0f172a`, Teal `#0d9488`, Slate `#f8fafc`)
- **Icons:** Lucide React
- **Routing:** React Router v7 `HashRouter` (ensures direct URL loading and refreshing works seamlessly on GitHub Pages and static hosts without server-side rewrite rules)
- **Deployment:** GitHub Actions + GitHub Pages with custom domain support

---

## 🌐 Custom Domain & DNS Setup Guide

This project is configured to serve on `admissionguide.dalvihub.com`.

### 1. DNS Records Setup (At your Domain Registrar / DNS Provider)
For the subdomain **`admissionguide.dalvihub.com`**:

| Record Type | Host / Name | Target / Points To | TTL |
|-------------|-------------|--------------------|-----|
| **CNAME**   | `admissionguide` | `<your-github-username>.github.io` | Automatic / 300 |

*(If configuring the apex domain `dalvihub.com`, configure four A records pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)*

### 2. GitHub Pages Settings
1. Navigate to your GitHub repository: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Under **Custom domain**, enter: `admissionguide.dalvihub.com` and save.
4. Check **Enforce HTTPS** (GitHub will automatically provision a free Let's Encrypt TLS certificate once DNS propagation completes).

---

## 💻 Local Development & Build

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/maharashtra-admission-guide.git
cd maharashtra-admission-guide

# Install dependencies
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev

# Run TypeScript compiler check
npm run lint

# Build static production bundle
npm run build

# Preview production build locally
npm run preview
```

The production output is generated in `./dist`, complete with `CNAME`, `robots.txt`, and `sitemap.xml`.

---

## 📁 Content Architecture & Future Updates

All course data and rules are cleanly separated into strongly typed data files in `src/data/`:

| File | Purpose |
|------|---------|
| `src/data/courses.ts` | Detailed data for all 35+ courses, criteria, marks, and FAQs |
| `src/data/candidatureTypes.ts` | Candidature Types A–E, All India, Minority, J&K, Home Universities |
| `src/data/reservations.ts` | Constitutional quotas, EWS, TFWS, Defence, PwD, Seat distributions |
| `src/data/capProcess.ts` | CAP stages, round-by-round rules, auto-freeze, fees, ARC reporting |
| `src/data/documents.ts` | Master document checklist, proformas, specifications |
| `src/data/sourceMapping.ts` | Cross-reference table linking topics to printed brochure pages |

**To update rules for Academic Year 2027–28:**  
Simply update the values in `src/data/courses.ts` and `src/data/reservations.ts` without needing to rewrite any React components or user interface layouts.

---

## 📜 Official References & Links
- **State CET Cell Maharashtra:** [https://cetcell.mahacet.org](https://cetcell.mahacet.org)
- **Directorate of Technical Education (DTE):** [https://dte.maharashtra.gov.in](https://dte.maharashtra.gov.in)
- **Admission Regulating Authority (ARA):** [https://maha-ara.org](https://maha-ara.org)
- **Fee Regulating Authority (FRA):** [https://sssamiti.org](https://sssamiti.org)

---

## ⚖️ License
Educational resource provided under the Apache 2.0 License.
