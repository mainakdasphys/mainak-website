import { motion } from "framer-motion";
import { FileText, Users } from "lucide-react";

const typeColors = {
  conference: "bg-blue-50 text-blue-700 border-blue-200",
  journal: "bg-emerald-50 text-emerald-700 border-emerald-200",
  preprint: "bg-amber-50 text-amber-700 border-amber-200",
  workshop: "bg-purple-50 text-purple-700 border-purple-200",
};

export default function PublicationCard({ pub, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="pl-6 py-4 border-l border-slate-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-md border ${
              typeColors[pub.type] || typeColors.preprint
            }`}
          >
            {pub.type}
          </span>
          <span className="ml-2 text-xs text-slate-400">{pub.year}</span>

          <h3 className="text-base font-semibold text-slate-900 mt-2">
            {pub.title}
          </h3>

          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
            <Users className="w-3 h-3" />
            {pub.authors}
          </p>

          <p className="text-sm text-slate-400 italic">{pub.venue}</p>
        </div>

        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-indigo-600"
          >
            <FileText className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}