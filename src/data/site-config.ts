export const siteConfig = {
  name: "Společná advokátní kancelář",
  shortName: "SAK Brno",
  title: "SAK Brno | Právní služby efektivně a srozumitelně",
  description:
    "Společná advokátní kancelář v Brně. Poskytujeme právní služby efektivně a srozumitelně — občanské, obchodní, trestní, rodinné právo a další.",
  email: "info@sakbrno.cz",
  phone: "+420 542 134 273",
  fax: "+420 542 218 044",
  address: {
    street: "Kobližná 19",
    building: "OD Vichr, 7. patro",
    city: "Brno",
    zip: "602 00",
  },
  hours: "Po–Pá: 9:00–16:00",
  parking: "Parkování u Janáčkova divadla (podzemní garáže)",
  social: {
    linkedin: "https://www.linkedin.com",
  },
  nav: [
    { label: "Úvod", href: "/" },
    { label: "Služby", href: "/sluzby" },
    { label: "Tým", href: "/tym" },
    { label: "Kalkulačka", href: "/kalkulacka" },
    { label: "Blog", href: "/blog" },
    { label: "Reference", href: "/reference" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface TeamCategory {
  title: string;
  members: TeamMember[];
}

export const teamCategories: TeamCategory[] = [
  {
    title: "Advokáti společníci",
    members: [
      { name: "JUDr. Ludvík Ševčík", role: "Advokát", photo: "/team/sevcik-ludvik.jpg" },
      { name: "JUDr. Vladimír Kristýn", role: "Advokát", photo: "/team/kristyn-vladimir.jpg" },
      { name: "JUDr. Kárim Titz", role: "Advokát", photo: "/team/titz-karim.jpg" },
      { name: "Mgr. Petr Kubica", role: "Advokát", photo: "/team/kubica-petr.jpg" },
      { name: "JUDr. Daniel Ševčík, Ph.D.", role: "Advokát", photo: "/team/sevcik-daniel.jpg" },
      { name: "Mgr. Václav Rožec", role: "Advokát", photo: "/team/rozec-vaclav.jpg" },
      { name: "JUDr. Ludvík Ševčík, ml.", role: "Advokát", photo: "/team/sevcik-ludvik-ml.jpg" },
      { name: "Mgr. Bc. Martin Kotrbáček, LL.M.", role: "Advokát", photo: "/team/kotrbacek-martin.jpg" },
      { name: "JUDr. Zdeněk Vystrčil", role: "Advokát", photo: "/team/vystrcil-zdenek.jpg" },
    ],
  },
  {
    title: "Zaměstnaní advokáti",
    members: [
      { name: "JUDr. Nikol Kiková", role: "Advokátka", photo: "/team/kikova-nikol.jpg" },
    ],
  },
  {
    title: "Advokátní koncipienti",
    members: [
      { name: "Mgr. Jáchym Vaněk", role: "Advokátní koncipient", photo: "/team/vanek-jachym.jpg" },
    ],
  },
  {
    title: "Spolupracující advokáti",
    members: [
      { name: "Mgr. Jaroslav Bárta", role: "Advokát", photo: "/team/barta-jaroslav.jpg" },
      { name: "Mgr. Martin Kristýn", role: "Advokát", photo: "/team/kristyn-martin.jpg" },
      { name: "JUDr. Filip Králík", role: "Advokát", photo: "/team/kralik-filip.jpg" },
      { name: "Ing. Mgr. Linda Švancarová", role: "Advokátka", photo: "/team/svancarova-linda.jpg" },
      { name: "JUDr. Gabriela Červinková", role: "Advokátka", photo: "/team/cervinkova-gabriela.jpg" },
      { name: "Mgr. Marek Pšenko", role: "Advokát", photo: "/team/psenko-marek.jpg" },
      { name: "Mgr. Martin Nehyba", role: "Advokát", photo: "/team/nehyba-martin.jpg" },
      { name: "JUDr. Mgr. Lucie Semelová", role: "Advokátka", photo: "/team/semelova-lucie.jpg" },
      { name: "Mgr. Karolína Benčová", role: "Advokátka", photo: "/team/bencova-karolina.jpg" },
      { name: "Mgr. Klára Vejmelková", role: "Advokátka", photo: "/team/vejmelkova-klara.jpg" },
    ],
  },
];
