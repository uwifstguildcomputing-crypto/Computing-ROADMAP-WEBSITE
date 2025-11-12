'use client'; 
// app/tree/page.tsx

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseMarker } from "@/components/course-tree"
import { BookOpen, Map, GraduationCap } from "lucide-react"
import { useState } from 'react';


const degreeOptions = [
  { key: 'all', label: 'All Courses' },
  { key: 'bscs', label: 'B.Sc. Computer Science' },
  { key: 'bsca', label: 'B.Sc. Software Engineering' },
  { key: 'bita', label: 'B.Sc. Information Technology' },
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
  { 
    id: 'cs1161', 
    title: 'COMP1161: Intro to Programming', 
    description: 'The very first step: learn Python basics and computational thinking.',
    position: '10%',
    icon: BookOpen,
    category: 'Foundation',
    degree: ['bscs', 'bsca', 'bita'],
    year: 2 
  },
  { 
    id: 'cs2101', 
    title: 'COMP 2101: Discrete Math', 
    description: 'Essential mathematical structures for computer science.',
    position: '28%',
    icon: Map,
    category: 'Foundation',
    degree: ['bscs', 'bsca'] 
  },
  { 
    id: 'cs3162', 
    title: 'COMP 3162: Data Structures', 
    description: 'Covers lists, stacks, queues, and basic algorithm analysis.',
    position: '45%',
    icon: BookOpen,
    category: 'Core',
    degree: ['bscs', 'bsca'],
    year: 1
  },
  { 
    id: 'cs2201', 
    title: 'COMP 2201: Analysis of Algorithms', 
    description: 'Study advanced algorithms and complexity theory.',
    position: '62%',
    icon: Map,
    category: 'Core',
    degree: ['bscs', 'bsca'], 
    year: 3
  },
  { 
    id: 'cs3136', 
    title: 'COMP 3136: Operating Systems', 
    description: 'Understand kernel design, memory management, and concurrent processes.',
    position: '85%',
    icon: GraduationCap,
    category: 'Advanced',
    degree: ['bscs', 'bsca'] 
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
            <Navbar />

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