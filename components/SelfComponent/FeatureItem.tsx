import { ReactNode } from "react";

type FeatureItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="flex gap-4">

      {/* Icon Box */}
      <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-yellow-400 shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="font-bold text-lg text-slate-900 mb-2">
          {title}
        </h3>

        <p className="text-slate-500">
          {description}
        </p>
      </div>

    </div>
  );
}