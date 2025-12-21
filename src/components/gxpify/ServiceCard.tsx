import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Factory, Truck, Package, Shield, ClipboardCheck } from 'lucide-react';
import { AuditService } from '@/data/gxpifyData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flask: FlaskConical,
  Factory,
  Truck,
  Package,
  Shield,
  ClipboardCheck,
};

interface ServiceCardProps {
  service: AuditService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon] || ClipboardCheck;

  return (
    <Link
      to={service.href}
      className="group block p-6 bg-card border border-border rounded-lg hover-lift hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
          <IconComponent className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
