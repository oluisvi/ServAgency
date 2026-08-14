type Props = {
  id?: string;
  number: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({
  id,
  number,
  title,
  description,
  dark = false,
}: Props) {
  return (
    <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}>
      <div>
        <span className="section-number">{number}</span>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
