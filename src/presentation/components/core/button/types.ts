import { ButtonHTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { buttonRecipe } from './styles/button-recipe.css';

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

export type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;
export type ButtonIconProps = React.HTMLAttributes<HTMLSpanElement>;
export type ButtonTextProps = React.HTMLAttributes<HTMLSpanElement>;
export type ButtonLoaderProps = React.HTMLAttributes<HTMLSpanElement>;