import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const tableRoot = recipe({
  base: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  variants: {
    size: {
      sm: { fontSize: '0.875rem' },
      md: { fontSize: '1rem' },
      lg: { fontSize: '1.125rem' },
    },
    variant: {
      primary: {
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      secondary: {
        backgroundColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

export const tableRow = recipe({
  base: {
    borderBottom: '1px solid #232529',
  },
  variants: {
    interactive: {
      true: {
        cursor: 'pointer',
        ':hover': {
          backgroundColor: '#f9fafb',
        },
      },
    },
    selected: {
      true: {
        backgroundColor: '#f3f4f6',
      },
    },
  },
});

export const tableCell = style({
  padding: '1rem',
  textAlign: 'left',
  color: 'black'
});

export const tableHeaderCell = recipe({
  base: {
    padding: '1rem',
    textAlign: 'left',
    fontWeight: '600',
    backgroundColor: '#232529',
    color: 'white',
  },
  variants: {
    sortable: {
      true: {
        cursor: 'pointer',
        userSelect: 'none',
      },
    },
  },
}); 