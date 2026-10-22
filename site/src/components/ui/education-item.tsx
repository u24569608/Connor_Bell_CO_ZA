type EducationItemProps = {
  school: string;
  schoolUrl: string;
  certification: string;
  startDate: string;
  endDate: string;
  descriptions?: readonly string[];
};

function EducationItem({
  school,
  schoolUrl,
  certification,
  startDate,
  endDate,
  descriptions,
}: EducationItemProps) {
  return (
    <article className="max-w-3xl">
      <h3 className="text-lg font-semibold tracking-wide text-black sm:text-xl">
        <a
          href={schoolUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <span className="underline underline-offset-5">{school}</span>
          <span aria-hidden="true" className="material-symbols-sharp" style={{fontSize: '1.2rem'}}>
            north_east
          </span>
        </a>
      </h3>
      <p className="text-base text-neutral-800 sm:text-lg">
        {certification}
      </p>
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

export default EducationItem;
