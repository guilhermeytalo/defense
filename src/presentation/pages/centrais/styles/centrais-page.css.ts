import { style } from "@vanilla-extract/css";


export const containerPage = style({
    marginTop: "20rem",
    marginLeft: "5%",
    height: "90vh",
});

export const controls = style({
    display: 'flex',
    gap: '16px',
    margin: '20px 0',
    alignItems: 'center',
});

export const createButton = style({
    background: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s',

    ':hover': {
        background: '#0056b3',
    },
});

export const searchInput = style({
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    minWidth: '200px',
});

export const pageSelect = style({
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
});

export const tableContainer = style({
    margin: '20px 0',
    overflowX: 'auto',
});

export const table = style({
    width: '100%',
    borderCollapse: 'collapse',
    background: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

export const tableHeader = style({
    background: '#f8f9fa',
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: '600',
    borderBottom: '2px solid #e9ecef',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.2s',

    ':hover': {
        background: '#e9ecef',
    },
});

export const tableCell = style({
    padding: '12px 16px',
    borderBottom: '1px solid #e9ecef',
});

export const tableRow = style({
    ':hover': {
        background: '#f8f9fa',
    },
});

export const pagination = style({
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    margin: '20px 0',
});

export const paginationButton = style({
    padding: '8px 12px',
    border: '1px solid #ddd',
    background: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s',

    ':hover:not(:disabled)': {
        background: '#f8f9fa',
        borderColor: '#007bff',
    },

    ':disabled': {
        opacity: '0.5',
        cursor: 'not-allowed',
    },
});