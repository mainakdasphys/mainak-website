import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

/* ----------------------------
   Helper function
----------------------------- */
async function fetchCitationCount(doi) {
  try {
    const res = await fetch(
      `https://api.semanticscholar.org/graph/v1/paper/DOI:${doi}?fields=citationCount`,
      {
        headers: {
          "Accept": "application/json"
        }
      }
    );

    if (!res.ok) {
      console.error("API error:", res.status);
      return null;
    }

    const data = await res.json();
    return data.citationCount ?? 0;

  } catch (error) {
    console.error("Citation fetch failed:", error);
    return null;
  }
}

/* ----------------------------
   React Component
----------------------------- */
export default function PublicationItem({ pub }) {
  const [citation, setCitation] = useState(null);

  useEffect(() => {
    if (pub?.doi) {
      fetchCitationCount(pub.doi).then(setCitation);
    }
  }, [pub?.doi]);

  return (
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="font-semibold text-slate-900">
          {pub.title}
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          {pub.authors}
        </p>

        <p className="text-sm text-slate-400 italic mt-1">
          {pub.venue}
        </p>

        {citation !== null && (
          <span className="inline-block mt-2 px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-md">
            {citation} citations
          </span>
        )}
      </div>

      {pub.doi && (
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-400 hover:text-indigo-600"
        >
          <FileText className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}