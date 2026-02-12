import { motion } from "framer-motion";
import { Calendar, Star } from "lucide-react";

/* ================================
   DATA (Grouped by Year)
================================ */

const teachingData = [
  {
    year: "2026",
    semesters: [
      {
        name: "Spring",
        courses: [
          { code: "PHY 231", title: "General University Physics I", role: "Recitation TA", tce: true },
          { code: "PHY 211", title: "General Physics I", role: "Recitation TA", tce: true },
        ],
      },
    ],
  },
  {
    year: "2025",
    semesters: [
      {
        name: "Spring",
        courses: [
          { code: "PHY 620", title: "Quantum Mechanics II", role: "Teaching Assistant (Graduate level)", tce: false },
          { code: "PHY 571", title: "Fundamental Nuclear Physics", role: "Teaching Assistant (Graduate level)", tce: false },
        ],
      },
      {
        name: "Fall",
        courses: [
          { code: "PHY 211", title: "General Physics I", role: "Recitation TA", tce: true },
        ],
      },
    ],
  },
  {
    year: "2024",
    semesters: [
      {
        name: "Fall",
        courses: [
          { code: "PHY 231", title: "General University Physics I", role: "Recitation TA", tce: true },
        ],
      },
    ],
  },
  {
    year: "2023",
    semesters: [
      {
        name: "Spring",
        courses: [
          { code: "PHY 211", title: "General Physics I", role: "Recitation TA", tce: true },
        ],
      },
    ],
  },
  {
    year: "2022",
    semesters: [
      {
        name: "Fall",
        courses: [
          { code: "PHY 241", title: "General Physics II", role: "Lab TA", tce: true },
        ],
      },
      {
        name: "Spring",
        courses: [
          { code: "PHY 241", title: "General Physics II", role: "Lab TA", tce: true },
        ],
      },
    ],
  },
  {
    year: "2021",
    semesters: [
      {
        name: "Fall",
        courses: [
          { code: "PHY 211", title: "General Physics I", role: "Lab TA", tce: true },
        ],
      },
    ],
  },
];

const awards = [
  {
    name: "Merit Scholarship",
    institution: "IIT Madras",
    period: "2018–2019",
  },
  {
    name: "Inspire Scholarship for Higher Education",
    institution: "Government of India",
    period: "2015–2020",
  },
];

/* ================================
   COMPONENT
================================ */

export default function Teaching() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-5xl font-bold tracking-tight">
            Teaching Experience
          </h1>
          <p className="text-slate-300 text-lg mt-6 max-w-3xl leading-relaxed">
            Teaching assistant for undergraduate and graduate physics courses
            at the University of Kentucky.
          </p>
        </div>
      </section>

      {/* YEAR GROUPING */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">

        {teachingData.map((yearBlock, i) => (
          <motion.div
            key={yearBlock.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
          >
            {/* Year Title */}
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-900">
                {yearBlock.year}
              </h2>
            </div>

            {/* Semesters */}
            <div className="space-y-8">
              {yearBlock.semesters.map((semester) => (
                <div key={semester.name}>
                  
                  {/* Semester Title */}
                  <h3 className="text-lg font-semibold text-indigo-700 mb-4">
                    {semester.name}
                  </h3>

                  {/* Courses */}
                  <div className="space-y-4">
                    {semester.courses.map((course) => (
                      <div
                        key={course.code + course.title}
                        className="flex justify-between items-center bg-slate-50 hover:bg-indigo-50 transition rounded-xl p-4 border border-slate-100"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">
                            {course.code}
                          </p>
                          <p className="text-slate-700">
                            {course.title}
                          </p>
                          <p className="text-sm text-slate-500">
                            {course.role}
                          </p>
                        </div>

                        {course.tce && (
                          <span className="text-xs text-slate-400 font-medium">
                            TCE pending
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </section>

      {/* AWARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-amber-100">
            <Star className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Awards & Honors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div
              key={award.name}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {award.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {award.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    {award.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}