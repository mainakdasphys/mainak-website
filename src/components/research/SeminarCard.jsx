import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function SeminarCard({ seminar, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-slate-200 p-6"
    >
      <h3 className="font-semibold text-slate-900 text-sm">
        {seminar.title}
      </h3>

      <p className="text-sm text-slate-500 mt-1">{seminar.event}</p>

      <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
        <MapPin className="w-3 h-3" />
        {seminar.location}
      </div>
    </motion.div>
  );
}