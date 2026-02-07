// lib/types.ts
export type SemesterKey = "s1" | "s2" | "s3";
export type YearKey = "y1" | "y2" | "y3";

export type Term = { year: YearKey; semester: SemesterKey };

export type Course = {
  id: string;            // use the course code as id, e.g. "COMP1126"
  code: string;          // same as id
  name: string;
  credits: number;
  year: YearKey;          // level/year this course belongs to
  offered: SemesterKey[]; // semesters offered (e.g. ["s1","s2"])
  prereqs?: string[];     // prerequisite course codes (e.g. ["COMP1126","COMP1127"])
  degrees: string[];      // degrees that include this course (e.g. ["bscs","bsca"])
  description?: string;
};

export type Roadmap = Record<YearKey, Record<SemesterKey, string[]>>;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  imgPosition?: string; // optional field to specify image position (e.g. "top", "center", "bottom")
};

export type BookPage = {
  title?: string;
  body?: string;
  image?: string;
};
