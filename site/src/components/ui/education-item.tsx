type EducationItemProps = {
  school: string;
  certification: string;
  startDate: string;
  endDate: string;
};

function EducationItem({
  school,
  certification,
  startDate,
  endDate,
}: EducationItemProps) {
  return (
    <article className="max-w-3xl">
      <h3 className="text-lg font-semibold tracking-wide text-black sm:text-2xl">
        {school}
      </h3>
      <p className="text-base text-neutral-800 sm:text-lg">
        {certification}
      </p>
      <p className="text-sm text-neutral-500 sm:text-base">
        {startDate} – {endDate}
      </p>
    </article>
  );
}

export default EducationItem;
