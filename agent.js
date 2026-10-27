/* =====================================================================
   AGENT DATA — the ONLY file you edit for a new agent
   (plus the 5 marked lines in <head> of index.html for link previews).
   New agent: copy this folder, replace portrait.webp / portrait.png
   (and profile.jpg, used only for link previews),
   edit the values below. Everything else is the shared template.
   ===================================================================== */
window.AGENT = {
  name: "Woon Kim",
  nameKo: "",   // MISSING: no Korean name in any source — fill in when confirmed
  title: "Realtor",
  company: "REMAX SIMPLY",
  // SAMPLE TEXT (same generic placeholder as Andy's — replace with the agent's own line) — the agent's own one sentence ("한마디"), shown in the quote box. "" hides the box.
  message: "편하게 연락 주세요 · Happy to help with your next move.",
  // Head-and-shoulders cutout (transparent background), 720x833: small headroom above the hair,
  // face centered, cut at upper chest. The card fills the top panel with it, top-aligned.
  photo: "portrait.webp",
  photoFallback: "portrait.png",

  // Keep these three exactly as they are — they work on Android + iPhone.
  addContactUrl: "https://docs.google.com/uc?export=download&id=1KjPJOxREHDa68gvLTTDmCdmUWnqCmVIn",
  callHref: "tel:+12016446413",
  emailHref: "mailto:woonkyung4989@gmail.com",

  smsHref: "sms:+12016446413",

  website:    { label: "Agent website",  display: "woonkyungkim.remaxsimplynj.com", url: "https://woonkyungkim.remaxsimplynj.com/" },

  addresses: [
    { label: "Office visits · 방문 상담 사무실",
      text: "120 Sylvan Ave Suite 106, Englewood Cliffs, NJ 07632",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=120+Sylvan+Ave+Suite+106%2C+Englewood+Cliffs%2C+NJ+07632" }
  ],

  // Social icons: list any number (1–6 looks best). icon = file name in icons/
  // (facebook, instagram, youtube, threads, linkedin, tiktok, x, kakaotalk, naver).
  // To add a network: drop its SVG into icons/ and use its file name here.
  social: [
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/nj_realtor_woonkim/", label: "Woon Kim on Instagram" },
    { name: "Threads", icon: "threads", url: "https://www.threads.com/@nj_realtor_woonkim", label: "Woon Kim on Threads" }
  ]   // agent's own accounts from their current card; [] hides the row
};
