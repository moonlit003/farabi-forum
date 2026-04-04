import { ChevronRight } from "lucide-preact";

export interface LinksButtonProps {
  label: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export function LinksButton({ label, href, target = "_blank" }: LinksButtonProps) {
  return (
    <a
      href={href}
      target={target}
      className="bg-farabi-lightblue text-white w-full rounded-sm relative py-2 px-10 inline-flex items-center justify-between hover:underline"
    >
      <span>{label}</span>
      <ChevronRight className="absolute left-2 top-1/2 -translate-y-1/2"/>
    </a>
  );
}