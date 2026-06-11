import Image from 'next/image';
import Link from 'next/link';

type Props = {
  variant?: 'dark' | 'light';
  withText?: boolean;
  size?: number;
};

export default function Logo({ variant = 'dark', withText = true, size = 48 }: Props) {
  const titleColor = variant === 'light' ? 'text-white' : 'text-leaf-700';
  const tagColor = variant === 'light' ? 'text-leaf-300' : 'text-ink-500';

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <span
        className="relative shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="Mầm Xanh Preschool"
          width={size}
          height={size}
          priority
        />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <strong className={`font-display font-extrabold text-xl ${titleColor}`}>
            Mầm Xanh
          </strong>
          <small className={`text-[0.7rem] tracking-[0.16em] uppercase mt-0.5 ${tagColor}`}>
            Preschool · ESL
          </small>
        </span>
      )}
    </Link>
  );
}
