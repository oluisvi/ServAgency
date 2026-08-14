import type { CSSProperties } from "react";

import type { TechnologyIconName } from "@/content/site";

type TechnologyIconProps = {
  name: TechnologyIconName;
};

type TechnologyIconStyle = CSSProperties & {
  "--technology-icon": `url(${string})`;
};

export function TechnologyIcon({ name }: TechnologyIconProps) {
  const style: TechnologyIconStyle = {
    "--technology-icon": `url(/technology/${name}.svg)`,
  };

  return <span className="technology-icon" style={style} aria-hidden="true" />;
}
