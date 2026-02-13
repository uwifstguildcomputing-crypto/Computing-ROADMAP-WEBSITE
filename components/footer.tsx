import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const usefulLinks = [
  { name: "Academic Calendar", href: "https://www.mona.uwi.edu/compsci/#" },
  { name: "Course Catalog", href: "https://www.mona.uwi.edu/compsci/#" },
  { name: "Student Resources", href: "https://www.mona.uwi.edu/compsci/#" },
  { name: "Faculty Directory", href: "https://www.mona.uwi.edu/fst/" },
  { name: "Career Services", href: "https://www.mona.uwi.edu/placement/" },
]

const socialLinks = [
  { name: "Linkedin", icon: Linkedin, href: "https://www.linkedin.com/school/university-of-the-west-indies/posts/?feedView=all" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/computing_fstgc/" },
  { name: "Email", icon: Mail, href: "mailto:uwi.fstguildcomputing@gmail.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-color)] bg-[color:var(--card)] mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Useful Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[color:var(--text)]">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color:var(--muted)] hover:text-[color:var(--primary-color)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="mb-4 text-lg font-semibold text-[color:var(--text)]">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-color)] text-[color:var(--muted)] transition-all hover:border-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/10 hover:text-[color:var(--primary-color)]"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[color:var(--border-color)] pt-6 text-center">
          <p className="text-sm text-[color:var(--muted)]">
            © {new Date().getFullYear()} Computer Science Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
