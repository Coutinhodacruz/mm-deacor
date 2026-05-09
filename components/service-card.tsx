import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  details?: string[];
  isCompact?: boolean;
}

export function ServiceCard({
  id,
  title,
  description,
  details,
  isCompact = false,
}: ServiceCardProps) {
  if (isCompact) {
    return (
      <div className="group relative p-8 bg-card border border-border rounded-sm overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/services#${id}`}>
      <div className="group relative p-8 bg-card border border-border rounded-sm overflow-hidden hover:shadow-2xl hover:border-accent transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground mb-4 group-hover:text-foreground/90 transition-colors duration-300">{description}</p>
          {details && (
            <ul className="space-y-2">
              {details.map((detail, idx) => (
                <li key={idx} className="text-sm text-muted-foreground group-hover:text-foreground/70 flex items-start gap-2 transition-colors duration-300">
                  <span className="text-accent mt-1 group-hover:scale-110 transition-transform duration-300 origin-left">→</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 text-accent text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
            Learn More →
          </div>
        </div>
      </div>
    </Link>
  );
}
