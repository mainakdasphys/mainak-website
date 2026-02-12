import { Mail, MapPin, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white">
        
        {/* Background blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-28 flex flex-col md:flex-row items-center gap-16">
          
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-white/10 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Mainak Das"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hero Text */}
          <div>
            <p className="text-indigo-300 text-sm uppercase tracking-widest mb-3">
              Ph.D. Candidate
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Mainak Das
            </h1>

            <p className="text-lg text-slate-300 mt-4 max-w-xl">
              Department of Physics & Astronomy <br />
              University of Kentucky
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-8 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                mainakdas069@uky.edu
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Chemistry-Physics Building, Room 267
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm backdrop-blur transition"
              >
                <BookOpen className="w-4 h-4" />
                Google Scholar
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm backdrop-blur transition"
              >
                LinkedIn
              </a>

              <a
                href="https://orcid.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm backdrop-blur transition"
              >
                ORCID
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + RESEARCH INTERESTS */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            About
          </h2>
          <p className="text-slate-600 leading-relaxed">
            I am a Ph.D. candidate in theoretical condensed matter physics at the
            Department of Physics and Astronomy, University of Kentucky, advised by 
            Dr. Chunli Huang. My research focuses on modeling quantum many-body systems
            in low-dimensional materials.
          </p>

          <p className="text-slate-600 leading-relaxed mt-4">
            I use continuum models, mean-field methods, and constrained Hartree-Fock
            approximation to understand the ground state and low-energy excitations
            of itinerant ferromagnets in rhombohedral multilayer graphene.
          </p>
        </div>

        {/* Research Interests + Education */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Research Interests
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Quantum Many-Body Systems",
              "Multilayer Graphene",
              "Orbital Ferromagnetism & Multiferroicity",
              "Domain Wall Physics",
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100"
              >
                {interest}
              </span>
            ))}
          </div>

          {/* Education */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
              Education
            </h3>

            <div className="space-y-5 text-sm">

            <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                <p className="font-medium text-slate-900">Ph.D. in Physics</p>
                <p className="text-slate-500">
                    University of Kentucky, 2021–Present
                </p>
                </div>
            </div>

            <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                <p className="font-medium text-slate-900">M.Sc. in Physics</p>
                <p className="text-slate-500">
                    IIT Madras, 2018–2020
                </p>
                </div>
            </div>

            <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                <p className="font-medium text-slate-900">B.Sc. in Physics</p>
                <p className="text-slate-500">
                    University of Calcutta, 2015–2018
                </p>
                </div>
            </div>

            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
        <Link
          to="/research"
          className="p-8 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          <h2 className="text-xl font-bold">Research</h2>
          <p className="text-sm mt-2">
            Publications, ongoing projects, and seminars.
          </p>
        </Link>

        <Link
          to="/teaching"
          className="p-8 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition"
        >
          <h2 className="text-xl font-bold">Teaching</h2>
          <p className="text-sm mt-2">
            Courses, mentoring, and academic contributions.
          </p>
        </Link>
      </section>

    </div>
  );
}