
## Plan: Create "Algemene voorwaarden" (Terms & Conditions) Page

### Overview
Create a new Terms and Conditions page following the same structure as the existing Privacy Policy page, with properly structured content and SEO meta tags.

### Changes Required

**1. Create New Page: `src/pages/AlgemeneVoorwaarden.tsx`**
- Follow the exact same structure as `PrivacyPolicy.tsx`
- Include Helmet with proper meta tags (title, description, canonical URL)
- Use the `prose` styling for structured content
- Structure the 10 articles with proper headings (h2) and nested content
- Include Navbar, Footer, and ScrollToTop components

**2. Update Footer: `src/components/Footer.tsx`**
- Add "Algemene voorwaarden" link next to "Privacybeleid" in the footer bottom section (line 142)
- Link to `/algemene-voorwaarden`

**3. Update Routing: `src/App.tsx`**
- Import the new `AlgemeneVoorwaarden` component
- Add route: `/algemene-voorwaarden`

**4. Update Sitemap: `public/sitemap.xml`**
- Add the new page URL to the sitemap

### Content Structure
The page will contain 10 articles:
1. Algemeen
2. Offertes
3. Levering en levertijd
4. Reclamaties (A-E subsections)
5. Eigendomsvoorbehoud (A-B subsections)
6. Betaling (A-F subsections + additional clause)
7. Aansprakelijkheid (A-B subsections)
8. Onuitvoerbaarheid van de opdracht (A-E subsections)
9. Annulering
10. Geschillenbeslechting

Plus the N.B. note at the end about service costs.

### Technical Details
- Route path: `/algemene-voorwaarden`
- Canonical URL: `https://duurzaamwonen.info/algemene-voorwaarden`
- Meta description: Focus on the terms being for consumer transactions regarding windows, doors, frames, and home improvement
- Page title: `Algemene Voorwaarden - Duurzaam Wonen Nederland`
