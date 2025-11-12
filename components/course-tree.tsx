// components/course-marker.tsx

import React from 'react';
import { LucideIcon } from 'lucide-react'; 

interface Course {
  id: string;
  title: string;
  description: string;
  position: string; 
  icon: LucideIcon;
  category: string;
}

interface CourseMarkerProps {
  course: Course;
  index: number;
}
export function CourseMarker({ course, index }: CourseMarkerProps) {
  // Use index to alternate position (top vs. bottom of the road)
  const isTop = index % 2 === 0;
  
  // Base position styles (relative to the container)
  const positionStyle = {
    left: course.position,
    // Alternate top/bottom placement
    top: isTop ? '15%' : '65%', 
  };

  return (
    <div 
      className="absolute z-10 transform -translate-x-1/2 cursor-pointer group"
      style={positionStyle}
    >
      {/* The Interactive Marker (The "Orange Ball") */}
      <div className="relative w-10 h-10 rounded-full bg-[color:var(--primary-color)] transition-all duration-300 hover:scale-125 hover:shadow-xl flex items-center justify-center">
        {/* Course Icon */}
        <course.icon className="w-5 h-5 text-white" />
      </div>

      {/* Prerequisite Line/Arrow  */}
      <div className={`absolute w-1 h-8 bg-[color:var(--primary-color)]/50 -translate-x-1/2 z-0 ${isTop ? 'bottom-full' : 'top-full'} left-1/2`} />


      {/* Hover Tooltip (Course Details) */}
      <div 
        className={`absolute z-20 w-80 p-4 bg-[color:var(--card)] border border-[color:var(--primary-color)] rounded-xl shadow-2xl transition-opacity duration-300 pointer-events-none 
          ${isTop ? 'bottom-[120%]' : 'top-[120%]'} 
          left-1/2 transform -translate-x-1/2 
          opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
      >
        <p className="text-lg font-extrabold text-[color:var(--primary-color)]">{course.title}</p>
        <p className="text-sm text-[color:var(--text)] mt-1">{course.description}</p>
        <p className="text-xs font-semibold text-[color:var(--muted)] mt-2">Category: {course.category}</p>

        {/* Tooltip Arrow (Tail) */}
        <div className={`absolute w-3 h-3 rotate-45 bg-[color:var(--card)] border-r border-b border-[color:var(--primary-color)] ${isTop ? 'bottom-[-7px]' : 'top-[-7px]'} left-1/2 -translate-x-1/2`} />
      </div>
    </div>
  );
}