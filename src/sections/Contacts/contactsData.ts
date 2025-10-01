export type Contacts = {
  id: string;
  icon: string;
  alt: string;
  value?: string;
  valueKey?: string;
  href?: string;
  isLink: boolean;
};

export const contacts = [
  {
    id: "email",
    icon: "/icons/email.png",
    alt: "email",
    value: "stanislav.ts.q@gmail.com",
    href: "mailto:stanislav.ts.q@gmail.com",
    isLink: true,
  },
  {
    id: "phoneRu",
    icon: "/icons/phone.png",
    alt: "phone ru",
    value: "+7 925 666 41 986",
    isLink: false,
  },
  {
    id: "phoneRs",
    icon: "/icons/phone.png",
    alt: "phone rs",
    value: "+381-062-151-78-28",
    isLink: false,
  },
  {
    id: "location",
    icon: "/icons/location.png",
    alt: "location",
    valueKey: "contacts.location",
    isLink: false,
  },
  {
    id: "github",
    icon: "/icons/github.png",
    alt: "github",
    value: "Quoralis",
    href: "https://github.com/Quoralis",
    isLink: true,
  },
];
