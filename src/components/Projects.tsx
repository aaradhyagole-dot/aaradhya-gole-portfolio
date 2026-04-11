import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Fresh Category Supply Chain & Analytics Dashboard",
    category: "Category Management Intern, Food Lion (May 2025 – Aug 2025)",
    description: "Led the development of a comprehensive Power BI reporting suite for the Fresh Category team at Food Lion, encompassing Deli, Market, and Produce departments. I designed automated pipelines that completely replaced older, manual Excel workflows. This gave merchandising and analytics teams a reliable single source of truth to track margin projections and supply chain service levels across over 1,100 stores. During this time, I also pitched a new tokenized loyalty rewards concept directly to leadership, using market research to demonstrate clear potential for boosting app engagement.",
    tags: ["Power BI", "Excel", "SQL", "MicroStrategy", "Cross-functional Collaboration", "Data Analytics", "Category Management"],
    link: "https://drive.google.com/file/d/11c5VJAd8lCn0-yI745yEoypEYFOpRFD7/view?usp=sharing",
    image: "/sequence/food-lion-dashboard.jpg"
  },
  {
    id: 2,
    title: "Global Sourcing & ERP Operations at Doosan Bobcat",
    category: "SUPPLY CHAIN CO-OP · SOURCING (Sep 2025 – Dec 2025)",
    description: "Managed $70K in monthly tariff spend and ran RFQs for 200 electrical harness parts across 10+ global suppliers. Operated across SAP ERP, SAP Ariba, Oracle, and Qlik simultaneously while owning the weekly EFI report, full RFQ cycles, tariff analysis, and PR generation. Acted as the primary bridge between engineering teams and suppliers.",
    tags: ["SAP ERP", "SAP Ariba", "Oracle ERP", "Qlik", "Advanced Excel", "Tariff Analysis", "RFQ Management", "EFI Reporting", "Supplier Management"],
    link: "https://drive.google.com/file/d/1KQ2I93agwQRyi3tbN611saLO-Zq4x088/view?usp=sharing",
    image: "/sequence/Bobcat-dashboard.jpg"
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full bg-[#121212] pt-32 pb-48 px-8 lg:px-16 overflow-hidden">
      {/* Background gradients for added depth */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">MY WORK</h3>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-16 font-light">
          a showcase of recent professional experiences and projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative flex flex-col rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-xl ${
                index === 2 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Image Container with Hover zoom */}
              <div className={`relative w-full overflow-hidden ${index === 2 ? 'h-[400px] lg:h-[500px]' : 'h-[400px]'}`}>
                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                    index < 2 ? 'object-contain object-top p-4' : 'object-cover'
                  }`}
                />
              </div>

              {/* Content Panel */}
              <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs lg:text-sm font-medium tracking-wider text-blue-400 uppercase mb-3 leading-relaxed text-left">
                    {project.category}
                  </div>
                  <h4 className="text-2xl lg:text-3xl tracking-tight font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all text-left">
                    {project.title}
                  </h4>
                  <p className="text-white/70 font-light text-[15px] leading-relaxed mb-6 text-left">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white/90 font-medium group/btn cursor-pointer w-fit"
                >
                  <span className="mr-3 text-sm tracking-wide">View Project</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                    <ArrowRight size={18} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
