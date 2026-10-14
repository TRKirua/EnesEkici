import { Github, Linkedin, Mail, Phone } from "lucide-react"
import type { Social } from "./types"

export const SOCIALS: Social[] = [
  { label: "Email", href: "mailto:enesekici6868@gmail.com", value: "enesekici6868@gmail.com", icon: Mail, external: false },
  { label: "Phone", href: "tel:+33769359393", value: "+33 7 69 35 93 93", icon: Phone, external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/enes-ekici/",
    value: "linkedin.com/in/enes-ekici",
    icon: Linkedin,
    external: true,
  },
  { label: "GitHub", href: "https://github.com/TRKirua", value: "github.com/TRKirua", icon: Github, external: true },
]
