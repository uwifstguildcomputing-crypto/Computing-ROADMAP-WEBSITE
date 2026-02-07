"use client"

import { useState } from "react"
import Image from "next/image"
import { User } from "lucide-react"
import type { TeamMember } from "@/lib/types"

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  const [showBio, setShowBio] = useState(false)

  return (
    <div className="group relative flex flex-col gap-4 rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--card)] p-6 shadow-lg transition-all hover:shadow-xl">
      {/* Profile Image */}
      <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border-2 border-[color:var(--border-color)]">
        <Image
          src={member.img || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
          sizes="160px"
          style={{ objectPosition: member.imgPosition || "center" }}
        />
      </div>

      {/* Name and Role */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-[color:var(--text)] mb-1">{member.name}</h3>
        <p className="text-sm text-[color:var(--muted)]">{member.role}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setShowBio(!showBio)}
          className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--bg)] px-4 py-1.5 text-xs font-medium text-[color:var(--text)] transition-all hover:border-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/10 hover:text-[color:var(--primary-color)]"
        >
          Read Bio
        </button>
        <div className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--accent-color)]/10 px-4 py-1.5 text-xs font-medium text-[color:var(--accent-color)]">
          <User className="inline h-3 w-3 mr-1" />
          Role
        </div>
      </div>

      {/* Bio (expandable) */}
      {showBio && (
        <div className="mt-2 rounded-xl border border-[color:var(--border-color)] bg-[color:var(--bg)] p-4">
          <p className="text-sm text-[color:var(--muted)] leading-relaxed">{member.bio}</p>
        </div>
      )}
    </div>
  )
}
