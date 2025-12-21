import { Scale, Target, Globe, FileText, UserCheck, Lock } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Target,
  Globe,
  FileText,
  UserCheck,
  Lock,
};

interface ValuePropCardProps {
  title: string;
  description: string;
  icon: string;
}

const ValuePropCard = ({ title, description, icon }: ValuePropCardProps) => {
  const IconComponent = iconMap[icon] || Scale;

  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4">
        <IconComponent className="w-7 h-7 text-accent" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ValuePropCard;
