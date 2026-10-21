type ExperienceItemProps = {
  title: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  descriptions?: readonly string[];
};

function ExperienceItem({
  title,
  company,
  companyUrl,
  startDate,
  endDate,
  descriptions,
}: ExperienceItemProps) {
  return (
    <article className="max-w-3xl">
      <h3 className="text-2xl font-medium tracking-wide text-black sm:text-2xl">
        {title}
      </h3>
      <a
        href={companyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-base text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:text-lg"
      >
        <span className="underline underline-offset-4">{company}</span>
        <span aria-hidden="true" className="material-symbols-sharp" style={{fontSize: '1.2rem'}}>
          north_east
        </span>
      </a>
      <p className="text-sm text-neutral-500 sm:text-base">
        {startDate} – {endDate}
      </p>
      {descriptions !== undefined && (
        <div className="mt-2 text-xs space-y-1 text-base leading-tight text-neutral-600">
          {descriptions.map((line, index) => (
            <p key={`${index}-${line}`}>{line}</p>
          ))}
        </div>
      )}
    </article>
  );
}

export default ExperienceItem;
