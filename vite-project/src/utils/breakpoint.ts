const Breakpoint = {
  tablet: 1199,
  mobile: 767,
} as const;

const MediaQueryBreakpoint = {
  tablet: `(max-width: ${Breakpoint.tablet}px)`,
  mobile: `(max-width: ${Breakpoint.mobile}px)`,
} as const;

type MediaQueryBreakpoint =
  (typeof MediaQueryBreakpoint)[keyof typeof MediaQueryBreakpoint];

export { MediaQueryBreakpoint };
