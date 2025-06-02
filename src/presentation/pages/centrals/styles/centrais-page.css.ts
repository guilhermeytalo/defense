import { style } from "@vanilla-extract/css";


export const containerPage = style({
    marginTop: "20rem",
    marginLeft: "5%",
    height: "90vh",
});

export const form = style({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "100%",
    marginTop: "2rem",
});

export const formGroup = style({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
});

export const input = style({
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
});

export const select = style({
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
});

export const label = style({
    fontSize: "1rem",
    fontWeight: "500",
});

export const errorMessage = style({
    color: "red",
    fontSize: "0.875rem",
});

export const submitButton = style({
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    ":hover": {
        backgroundColor: "#0051cc",
    },
    ":disabled": {
        backgroundColor: "#ccc",
        cursor: "not-allowed",
    },
});
