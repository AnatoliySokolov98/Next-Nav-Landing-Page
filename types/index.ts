import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type CardData = {
  header: string, // The header of the card
  bullets: string[], // The bullet point of the card, will be in unordered list
  path?: string, // The path to the gif
  alttext?: string // The alt text for the gif
}

export type ProfileProps = {
  header: string,
  profile: string,
  alttext: string,
  linkedin: string,
  github: string,
}