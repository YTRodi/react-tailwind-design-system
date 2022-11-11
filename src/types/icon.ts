type HeroIcon = React.ComponentProps<'svg'> & {
  title?: string;
  titleId?: string;
};
type HeroIconReactElement = React.ReactElement<HeroIcon>;

export type { HeroIcon, HeroIconReactElement };
