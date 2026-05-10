interface TestimonialCardProps {
  name: string;
  event: string;
  quote: string;
  featured?: boolean;
}

export function TestimonialCard({
  name,
  event,
  quote,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:border-accent flex flex-col h-full ${
        featured
          ? 'p-6 bg-gradient-to-br from-secondary to-secondary/80 border border-border hover:from-secondary hover:to-accent/10'
          : 'p-6 bg-card border border-border hover:bg-card/80'
      }`}
    >
      {/* Background accent glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex flex-col flex-grow">
        {/* Star Rating */}
        <div className="mb-6 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-accent text-lg animate-pulse-glow transition-transform duration-300 group-hover:scale-110 origin-left"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className="text-base text-foreground font-serif italic mb-6 leading-relaxed group-hover:text-foreground/95 transition-colors duration-300 line-clamp-4"
          title={quote}
        >
          &quot;{quote}&quot;
        </blockquote>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
              {name}
            </p>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
              {event}
            </p>
          </div>
          {featured && (
            <div className="text-4xl text-accent opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              ❝
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
