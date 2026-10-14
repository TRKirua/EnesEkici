import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/data/site"
import { SOCIALS } from "@/data/socials"

/** schema.org structured data (WebSite + ProfilePage + Person) */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: `${SITE_NAME} Portfolio`,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      jobTitle: "Analyst Developer - IBM i",
      worksFor: { "@type": "Organization", name: "Eureka Solutions" },
      description: SITE_DESCRIPTION,
      email: "mailto:enesekici6868@gmail.com",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "EPITA", url: "https://www.epita.fr/" },
        { "@type": "CollegeOrUniversity", name: "Bahçeşehir University", url: "https://www.bahcesehir.edu.tr/" },
      ],
      knowsAbout: [
        "IBM i (AS400)",
        "RPG",
        "CL/CLLE",
        "IBM DB2",
        "ERP",
        "Data engineering",
        "Software engineering",
        "Apache Spark",
        "Apache Iceberg",
        "AWS",
        "Flutter",
        "PostgreSQL",
        "Python",
        "Java",
        "C",
      ],
      knowsLanguage: ["en", "de", "fr", "tr"],
      sameAs: SOCIALS.filter((s) => s.external).map((s) => s.href),
    },
  ],
}
