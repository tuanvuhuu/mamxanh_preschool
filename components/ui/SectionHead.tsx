type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHead({ eyebrow, title, lead, align = 'center', className = '' }: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <header className={`max-w-2xl mb-12 ${alignCls} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">{title}</h2>
      {lead && <p className="mt-3 text-ink-500 text-lg">{lead}</p>}
    </header>
  );
}
