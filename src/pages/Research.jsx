import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Filter, Mic, MapPin, Video } from "lucide-react";
import PublicationItem from "../components/PublicationItem";

/** --- DATA --- **/
const publications = [
  {
    title:
      "Momentum-Space AC Josephson Effect and Intervalley Coherence in Multilayer Graphene",
    authors: "M. Das, C. Huang",
    venue: "Nature Communication",
    year: 2025,
    type: "journal",
    doi: "10.1038/s41467-025-67838-7",
  },
  {
    title:
      "Microscopic theory of multiferroic behavior in rhombohedral multilayer graphene",
    authors: "M. Das, C. Huang",
    venue: "Physical Review B 111, L161106",
    year: 2025,
    type: "journal",
    doi: "10.1103/PhysRevB.111.L161106",
  },
  {
    title:
      "Quarter-metal phases in multilayer graphene: Ising-XY and annular Lifshitz transitions",
    authors: "M. Das, C. Huang",
    venue: "Physical Review B 110, 035103",
    year: 2024,
    type: "journal",
    doi: "10.1103/PhysRevB.110.035103",
  },
  {
    title:
      "Unconventional metallic ferromagnetism: Nonanalyticity and sign-changing behavior of orbital magnetization in rhombohedral trilayer graphene",
    authors: "M. Das, C. Huang",
    venue: "Physical Review B 109, L060409",
    year: 2024,
    type: "journal",
    doi: "10.1103/PhysRevB.109.L060409",
  },
];

const seminars = [
    {
    title:
      "Microscopic Theory of Magnetic SU(4) Spin-Valley Domain Walls in Rhombohedral Multilayer Graphene",
    event: "APS Global Physics Summit 2026",
    month: "Mar",
    day: "19",
    year: "2026",
    location: "Denver, USA",
    recording: null,
    type: "Talk",
  },
  {
    title:
      "Microscopic theory of multiferroic behavior in rhombohedral multilayer graphene",
    event: "EP2DS 2025 - Washington University in St. Louis",
    month: "Jul",
    day: "30",
    year: "2025",
    location: "St. Louis, USA",
    recording: null,
    type: "Poster",
  },
  {
    title:
      "Momentum space AC Josephson effect and intervalley coherence in multilayer graphene",
    event: "APS Global Physics Summit 2025",
    month: "Mar",
    day: "18",
    year: "2025",
    location: "Anaheim, USA",
    recording: null,
    type: "Talk",
  },
  {
    title:
      "Superpolarized Electron-Hole Liquid and Multiferroicity in Rhombohedral Pentalayer Graphene",
    event: "Trends in Quantum Matter 2024 — University of Notre Dame",
    month: "Oct",
    day: "20",
    year: "2024",
    location: "Notre Dame, USA",
    recording: null,
    type: "Talk",
  },
  {
    title:
      "Superpolarized Electron-Hole Liquid and Multiferroicity in Rhombohedral Pentalayer Graphene",
    event: "Engineered 2D Quantum Materials 2024 — ICTS",
    month: "Jul",
    day: "23",
    year: "2024",
    location: "Bangalore, India",
    recording: null,
    type: "Poster",
  },
  {
    title:
      "Unconventional Metallic Magnetism: Non-analyticity and Sign-changing Behavior of Orbital Magnetization in ABC Trilayer Graphene",
    event: "APS March Meeting 2024",
    month: "Mar",
    day: "06",
    year: "2024",
    location: "Minneapolis, USA",
    recording: null,
    type: "Talk",
  },
  {
    title:
      "Unconventional Metallic Magnetism: Non-analyticity and Sign-changing Behavior of Orbital Magnetization in ABC Trilayer Graphene",
    event: "RCQM Workshop on Flat Bands 2023 — Rice University",
    month: "Nov",
    day: "07",
    year: "2023",
    location: "Houston, USA",
    recording: null,
    type: "Poster",
  },
];

const yearFilters = ["All", "2025", "2024"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Research() {
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredPubs = useMemo(() => {
    if (selectedYear === "All") return publications;
    const y = Number(selectedYear);
    return publications.filter((p) => p.year === y);
  }, [selectedYear]);

  return (
    <div className="min-h-screen bg-stone-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-16 w-72 h-72 bg-indigo-400 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold tracking-tight"
          >
            Research
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="text-slate-300 text-lg mt-6 max-w-3xl leading-relaxed"
          >
            My work focuses on ground state and low-energy excitations of itinerant
            ferromagnets in rhombohedral multilayer graphene, exploring magnetism
            and emergent phenomena in low-dimensional quantum materials.
          </motion.p>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100">
              <BookOpen className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Publications</h2>
          </div>

          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-slate-400" />
            <div className="flex bg-slate-100 rounded-lg p-1">
              {yearFilters.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                    selectedYear === year
                      ? "bg-white shadow-sm text-slate-900"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative ml-3 border-l border-slate-200">
          <AnimatePresence mode="popLayout">
            {filteredPubs.map((pub) => (
              <motion.div
                key={`${pub.title}-${pub.year}`}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35 }}
                className="group pl-8 pb-10 relative"
              >
                <div className="absolute -left-[6px] top-3 w-3 h-3 bg-slate-300 rounded-full group-hover:bg-indigo-500 group-hover:ring-4 group-hover:ring-indigo-100 transition-all" />

                <PublicationItem pub={pub} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPubs.length === 0 && (
            <p className="text-slate-400 text-sm pl-8 py-10">
              No publications found for this year.
            </p>
          )}
        </div>
      </section>

      {/* TALKS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-indigo-100">
            <Mic className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Talks & Seminars</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {seminars.map((s, i) => (
            <motion.div
              key={`${s.title}-${s.event}-${s.day}-${s.year}`}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-indigo-600 uppercase">
                    {s.month}
                  </span>
                  <span className="text-lg font-bold text-indigo-800 leading-none">
                    {s.day}
                  </span>
                </div>

                <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-indigo-700 transition-colors">
                    {s.title}
                    {s.type && (
                        <span className="ml-2 text-xs text-slate-400 font-normal">
                        ({s.type})
                        </span>
                    )}
                    </h3>
                  <p className="text-sm text-slate-500 mt-1">{s.event}</p>

                  <div className="flex items-center gap-4 mt-3 flex-wrap">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {s.location}
                    </span>

                    {s.recording && (
                      <a
                        href={s.recording}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-indigo-500 hover:text-indigo-700 transition-colors"
                      >
                        <Video className="w-3 h-3" />
                        Recording
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}