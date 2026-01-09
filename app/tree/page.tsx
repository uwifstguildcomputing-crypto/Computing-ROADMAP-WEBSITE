'use client'; 
// app/tree/page.tsx

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseMarker } from "@/components/course-tree"
import { BookOpen, Map, GraduationCap, BriefcaseBusiness, Gem } from "lucide-react"
import { useState } from 'react';


const degreeOptions = [
  { key: 'all', label: 'All Courses' },
  { key: 'bscs', label: 'B.Sc. Computer Science' },
  { key: 'bsca', label: 'B.Sc. Software Engineering' },
  { key: 'bita', label: 'B.Sc. Information Technology' },
  { key: 'bscsa',label: 'B.Sc. Cyber Security'},
];

const yearOptions = [
    { key: 0, label: 'All Years' }, 
    { key: 1, label: 'Year 1' },
    { key: 2, label: 'Year 2' },
    { key: 3, label: 'Year 3' },
];

// --- Define Course Data ---
// The 'position' is a percentage from the left (0% to 100%)
const roadmapCourses = [
  // --- LEVEL 1 (Introductory: 0% - 25%) ---
  { 
    id: 'comp1126', 
    title: 'COMP 1126: Intro to Computing I', 
    description: 'Fundamental concepts of computing and problem solving.',
    position: '5%',
    icon: BookOpen,
    category: 'Foundation',
    degree: ['bscs', 'bsca', 'bita', 'bscsa'], // Required by all
    year: 1 
  },
  { 
    id: 'comp1127', 
    title: 'COMP 1127: Intro to Computing II', 
    description: 'Advanced problem solving and introduction to programming logic.',
    position: '9%',
    icon: BookOpen,
    category: 'Foundation',
    degree: ['bscs', 'bsca', 'bita', 'bscsa'], // Required by all
    year: 1 
  },
  { 
    id: 'comp1161', 
    title: 'COMP 1161: Object-Oriented Programming', 
    description: 'Concepts of objects, classes, inheritance, and polymorphism.',
    position: '13%',
    icon: BookOpen,
    category: 'Foundation',
    degree: ['bscs', 'bsca', 'bita', 'bscsa'], // Required by all
    year: 1 
  },
  { 
    id: 'comp1210', 
    title: 'COMP 1210: Mathematics for Computing', 
    description: 'Logic, sets, functions, and mathematical reasoning.',
    position: '17%',
    icon: BookOpen,
    category: 'Foundation',
    degree: ['bscs', 'bsca', 'bita', 'bscsa'], // Required by all
    year: 1 
  },
  { 
    id: 'comp1220', 
    title: 'COMP 1220: Computing and Society', 
    description: 'Social, legal, and ethical issues in the computing profession.',
    position: '21%',
    icon: BookOpen,
    category: 'Foundation',
    degree: ['bscs', 'bsca', 'bita', 'bscsa'], // Required by all
    year: 1 
  },

  // --- LEVEL 2 (Core: 30% - 60%) ---
  { 
    id: 'comp2130', 
    title: 'COMP 2130: Systems Programming', 
    description: 'Low-level programming and system-level resource management.',
    position: '30%',
    icon: Map,
    category: 'Core',
    degree: ['bscsa'], // Unique to Cybersecurity
    year: 2
  },
  { 
    id: 'comp2140', 
    title: 'COMP 2140: Software Engineering', 
    description: 'Software lifecycle, requirements analysis, and design methodologies.',
    position: '33%',
    icon: Map,
    category: 'Core',
    degree: ['bscs', 'bsca', 'bita', 'bscsa'], // Shared
    year: 2
  },
  { 
    id: 'comp2171', 
    title: 'COMP 2171: OO Design and Implementation', 
    description: 'Advanced object-oriented techniques and design patterns.',
    position: '36%',
    icon: Map,
    category: 'Core',
    degree: ['bscs', 'bsca'], 
    year: 2
  },
  { 
    id: 'comp2190', 
    title: 'COMP 2190: Net-Centric Computing', 
    description: 'Web technologies, networking fundamentals, and distributed systems.',
    position: '39%',
    icon: Map,
    category: 'Core',
    degree: ['bscs', 'bsca', 'bita', 'bscsa'], // Shared
    year: 2
  },
  { 
    id: 'comp2201', 
    title: 'COMP 2201: Discrete Math for CS', 
    description: 'Combinatorics, probability, graph theory, and automata.',
    position: '42%',
    icon: Map,
    category: 'Core',
    degree: ['bscs', 'bsca', 'bscsa'], // Shared
    year: 2
  },
  { 
    id: 'comp2211', 
    title: 'COMP 2211: Analysis of Algorithms', 
    description: 'Algorithmic efficiency, sorting, searching, and complexity classes.',
    position: '45%',
    icon: Map,
    category: 'Core',
    degree: ['bscs', 'bsca', 'bscsa'], // Shared
    year: 2
  },
  { 
    id: 'info2180', 
    title: 'INFO 2180: Dynamic Web Development I', 
    description: 'Client-side web development and design principles.',
    position: '48%',
    icon: Map,
    category: 'Core',
    degree: ['bita', 'bscsa'], // Required by IT and Cyber
    year: 2
  },
  { 
    id: 'comp2340', 
    title: 'COMP 2340: Computer Systems Organization', 
    description: 'Digital logic, machine level representation, and processor architecture.',
    position: '52%',
    icon: Map,
    category: 'Core',
    degree: ['bscs', 'bita'], 
    year: 2
  },

  // --- LEVEL 3 (Advanced: 65% - 100%) ---
  { 
    id: 'comp3101', 
    title: 'COMP 3101: Operating Systems', 
    description: 'Kernel design, memory management, and concurrent processes.',
    position: '65%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bscs'], 
    year: 3
  },
  { 
    id: 'info3106', 
    title: 'INFO 3106: Computer System Administration', 
    description: 'Management and security of multi-user computer systems.',
    position: '68%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bita', 'bscsa'], // Required by IT and Cyber
    year: 3
  },
  { 
    id: 'comp3161', 
    title: 'COMP 3161: Database Management Systems', 
    description: 'Database design, SQL, normalization, and transaction management.',
    position: '71%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bscs', 'bita', 'bscsa'], // Shared
    year: 3
  },
  { 
    id: 'info3155', 
    title: 'INFO 3155: Information Assurance and Security', 
    description: 'Principles and practice of securing information and systems.',
    position: '74%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bita', 'bscsa'], // Required by IT and Cyber
    year: 3
  },
  { 
    id: 'info3165', 
    title: 'INFO 3165: Security Analysis and Digital Forensics', 
    description: 'Techniques for investigating and defending against cyber attacks.',
    position: '78%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bscsa'], // Unique to Cybersecurity
    year: 3
  },
  { 
    id: 'comp3220', 
    title: 'COMP 3220: Principles of AI', 
    description: 'Search algorithms, machine learning basics, and knowledge representation.',
    position: '82%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bscs', 'bscsa'], // Shared
    year: 3
  },
  { 
    id: 'comp3911', 
    title: 'COMP 3911: Internship in Computing', 
    description: 'Professional work experience in industry.',
    position: '90%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bsca'], 
    year: 3
  },
  { 
    id: 'comp3901', 
    title: 'COMP 3901: Capstone Project', 
    description: 'Implementation of a significant computing project.',
    position: '98%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bscs', 'bita', 'bscsa'], // Shared
    year: 3
  },
  { 
    id: 'swen3920', 
    title: 'SWEN 3920: Capstone Project (SE)', 
    description: 'Major group project for Software Engineering.',
    position: '98%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bsca'], 
    year: 3
  },
];

export default function RoadmapPage() {
    const [selectedDegree, setSelectedDegree] = useState('bscs'); 
    const [selectedYear, setSelectedYear] = useState(0); 

    const filteredCourses = roadmapCourses.filter(course => {
        const degreeMatch = selectedDegree === 'all' || course.degree.includes(selectedDegree);
        const yearMatch = selectedYear === 0 || course.year === selectedYear;
        return degreeMatch && yearMatch;
    });

    // Find the current degree label for the title
    const currentDegreeLabel = degreeOptions.find(d => d.key === selectedDegree)?.label || 'Roadmap';

    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                
                {/* Degree Selection Sub-Menu */}
                <div className="flex justify-center space-x-4 mb-4 border-b border-[color:var(--border-color)] pb-4">
                    {degreeOptions.map(option => (
                        <button
                            key={option.key}
                            onClick={() => setSelectedDegree(option.key)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                selectedDegree === option.key
                                    ? 'bg-[color:var(--primary-color)] text-white shadow-md'
                                    : 'bg-[color:var(--card)] text-[color:var(--text)] hover:bg-[color:var(--border-color)]'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                {/* Academic Year Filter */}
                <div className="flex justify-center space-x-2 mb-8">
                    {yearOptions.map(option => (
                        <button
                            key={option.key}
                            onClick={() => setSelectedYear(option.key)}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                selectedYear === option.key
                                    ? 'bg-[color:var(--primary-color)] text-white shadow-md'
                                    : 'bg-[color:var(--card)] text-[color:var(--muted)] hover:bg-[color:var(--border-color)]'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
                
                <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text)] text-center mb-12">
                    {currentDegreeLabel} Roadmap
                </h1>
                
                {/* --- ROAD MAP VISUALIZATION CONTAINER ---*/}
                <div className="relative w-full h-64 overflow-visible rounded-lg shadow-xl border border-[color:var(--border-color)]">
                    
                    {/* Background Image of the Road */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: "url('/Road.jpg')" }}
                    />

                    {/* --- PLACE INTERACTIVE MARKERS (USING FILTERED DATA) --- */}
                    {filteredCourses.map((course, index) => (
                        <CourseMarker 
                            key={course.id} 
                            course={course} 
                            index={index} 
                        />
                    ))}
                    
                </div>

                <p className="mt-8 text-center text-[color:var(--muted)]">Hover over a course marker to see details.</p>
                
            </main>

            <Footer />
        </div>
    )
}