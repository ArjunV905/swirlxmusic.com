import type { SectionStyle } from "../config/artist";

export function getSectionStyles(
  config: SectionStyle,
  defaultBg: string
): { style: string; hasBackgroundImage: boolean } {
  const hasBgImage =
    config.backgroundImage != null && config.backgroundImage.trim() !== "";
  const colorOverride = config.backgroundColorOverride ?? null;

  let bgColor = defaultBg;
  if (colorOverride) bgColor = colorOverride;

  const parts: string[] = [`background-color: ${bgColor}`];

  if (hasBgImage) {
    parts.push(`background-image: url('${config.backgroundImage}')`);
    parts.push("background-size: cover");
    parts.push("background-position: center");
    parts.push("background-repeat: no-repeat");
  }

  return {
    style: parts.join("; "),
    hasBackgroundImage: hasBgImage,
  };
}
