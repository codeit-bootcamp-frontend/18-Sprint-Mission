const ButtonSize = {
  medium: "medium",
  small: "small",
} as const;

type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

const ButtonShape = {
  round: "round",
  pill: "pill",
} as const;

type ButtonShape = (typeof ButtonShape)[keyof typeof ButtonShape];

export { ButtonShape, ButtonSize };
