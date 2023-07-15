import { TypographyProps } from '../../Typography.types';

export type LinkProps = Omit<TypographyProps, 'variant' | 'color'>;
