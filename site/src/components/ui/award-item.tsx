import type { ReactNode } from "react";

type AwardItemProps = {
  title: string;
  issuer: string;
  issuerUrl: string;
  date: string;
  descriptions?: readonly ReactNode[];
};

function AwardItem({
  title,
  issuer,
  issuerUrl,
  date,
  descriptions,
}: AwardItemProps) {
  return (
    <article className="max-w-3xl">
      <h3 className="text-lg font-semibold tracking-wide text-black sm:text-xl leading-tight">
        {title}
      </h3>
      <a
        href={issuerUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-base text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:text-lg"
      >
        <span className="underline underline-offset-6">{issuer}</span>
        <span aria-hidden="true" className="material-symbols-sharp" style={{fontSize: '1.2rem'}}>
          north_east
        </span>
      </a>
      <p className="text-sm text-neutral-500 sm:text-base">
        {date}
      </p>
      {descriptions !== undefined && (
        <div className="mt-2 text-xs text-base leading-[1.6] tracking-wide text-neutral-600">
          {descriptions.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </article>
  );
}

export default AwardItem;
