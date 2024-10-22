export function MindMapIllustration() {
  return (
    <div className="flex items-center justify-center lg:justify-end">
      <svg className="w-full h-auto max-w-[500px]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="250" r="200" fill="#F3F4F6" />
                  <circle cx="250" cy="250" r="150" fill="#E5E7EB" />
                  <circle cx="250" cy="250" r="100" fill="#D1D5DB" />
                  <circle cx="250" cy="250" r="20" fill="#4B5563" />
                  <line x1="250" y1="50" x2="250" y2="450" stroke="#4B5563" strokeWidth="2" />
                  <line x1="50" y1="250" x2="450" y2="250" stroke="#4B5563" strokeWidth="2" />

                  <g className="node-group">
                    <circle cx="250" cy="100" r="30" fill="#60A5FA" />
                    <text x="250" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 1</text>
                  </g>

                  <g className="node-group">
                    <circle cx="400" cy="250" r="30" fill="#34D399" />
                    <text x="400" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 2</text>
                  </g>

                  <g className="node-group">
                    <circle cx="250" cy="400" r="30" fill="#F87171" />
                    <text x="250" y="405" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 3</text>
                  </g>

                  <g className="node-group">
                    <circle cx="100" cy="250" r="30" fill="#FBBF24" />
                    <text x="100" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Idea 4</text>
                  </g>

                  <line x1="250" y1="130" x2="250" y2="230" stroke="#4B5563" strokeWidth="2" />
                  <line x1="370" y1="250" x2="270" y2="250" stroke="#4B5563" strokeWidth="2" />
                  <line x1="250" y1="370" x2="250" y2="270" stroke="#4B5563" strokeWidth="2" />
                  <line x1="130" y1="250" x2="230" y2="250" stroke="#4B5563" strokeWidth="2" />

                  <text x="250" y="255" textAnchor="middle" fill="#1F2937" fontSize="16" fontWeight="bold">Main Concept</text>
                </svg>
    </div>
  )
}

