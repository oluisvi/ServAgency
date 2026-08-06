type Props = {
  number: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({
  number,
  title,
  description,
  dark = false,
}: Props) {
  return (
    <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}>
      <div>
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
