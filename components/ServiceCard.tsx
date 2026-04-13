import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;          // ← Accept rendered JSX, not a Lucide component reference
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-card border border-slate-100 transition-all duration-300 cursor-default hover:-translate-y-1.5 hover:shadow-card-lg hover:border-brand-blue-300">

      {/* Icon badge */}
      <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center mb-6 group-hover:bg-brand-blue-500 transition-colors duration-300">
        <span className="text-brand-blue-400 group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
      </div>

      <h3 className="font-display text-brand-black text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>

      {/* Animated underline via CSS */}
      <div className="mt-6 h-0.5 w-0 bg-brand-blue-500 rounded-full group-hover:w-10 transition-all duration-300" />
    </div>
  );
}