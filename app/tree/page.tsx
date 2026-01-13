'use client'; 
// app/tree/page.tsx

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseMarker } from "@/components/course-tree"
import { BookOpen, Map, GraduationCap, BriefcaseBusiness, Gem, Presentation } from "lucide-react"
import { useState } from 'react';
import { courses } from "@/data/courses";


const degreeOptions = [
  { key: 'bscs', label: 'B.Sc. Computer Science' },
  { key: 'bsca', label: 'B.Sc. Software Engineering' },
  { key: 'bita', label: 'B.Sc. Information Technology' },
  { key: 'bscsa', label:'B.Sc. Cyber Security'},
];

const yearOptions = [ 
    { key: 1, label: 'Year 1' },
    { key: 2, label: 'Year 2' },
    { key: 3, label: 'Year 3' },
];

// --- Define Course Data ---
type VisualInfo = {
  position: string;
  icon: any;
};
// The 'position' is a percentage from the left (0% to 100%)
const visualMetadata: Record<string, VisualInfo> = {
    "COMP1126": { position: "10%", icon: BookOpen },
    "COMP1127": { position: "15%", icon: BookOpen },
    "COMP1161": { position: "20%", icon: GraduationCap },
    "COMP1210": { position: "25%", icon: Map },
    "COMP1220": { position: "30%", icon: Map },
    "COMP2130": { position: "40%", icon: GraduationCap },
    "COMP2140": { position: "45%", icon: BookOpen },
    "COMP2171": {position:  "36%", icon:Map},
    "COMP2190": { position: "50%", icon: Map },
    "COMP2201": { position: "55%", icon: GraduationCap },
    "COMP2211": { position: "65%", icon: Map },
    "INFO2101": { position: "60%", icon: BookOpen },
    "INFO2111": { position: "64%", icon: GraduationCap },
    "INFO2180": { position:  "48%", icon: Map},
    "COMP2340": { position:  "52%", icon:Map},
    "COMP3101": { position: "85%", icon: GraduationCap },
    "INFO3106": {position: "68%", icon: GraduationCap},
    "INFO3110": {position: "72%", icon: Gem},
    "COMP3161": {position: "71%", icon: GraduationCap},
    "INFO3155": {position: "74%", icon: GraduationCap},
    "INFO3165": {position: "78%", icon: GraduationCap},
    "INFO3171": {position: "76%", icon: GraduationCap},
    "INFO3180": {position: "80%", icon: GraduationCap},
    "COMP3220": { position: "82%", icon: GraduationCap },
    "COMP3911": { position: "90%", icon: BriefcaseBusiness },
    "COMP3901": { position: "98%", icon: Presentation },
    "SWEN3130": { position: "90%", icon: BookOpen },
    "SWEN3145": { position: "95%", icon: Map },
    "SWEN3165": { position: "70%", icon: GraduationCap },
    "SWEN3185": { position: "75%", icon: BookOpen },
    "SWEN3920": { position: "80%", icon: Map },
    };
export default function RoadmapPage() {
    const [selectedDegree, setSelectedDegree] = useState('bscs'); 
    const [selectedYear, setSelectedYear] = useState(0); 

    const filteredCourses = courses
    .filter(course => {
        const hasPosition = visualMetadata[course.id];
        if (!hasPosition) return false;

        const degreeMatch = selectedDegree === 'all' || 
                        (course.degrees?.includes(selectedDegree) ?? false);

        
        const yearMatch = course.year === `y${selectedYear}`;
        
        return degreeMatch && yearMatch;
    })
    .map(course => ({
      ...course,
      ...visualMetadata[course.id],
      title: `${course.code}: ${course.name}`,
      description: `${course.description}. Credits: ${course.credits}. Offered: ${course.offered.join(', ')}`
    }));

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