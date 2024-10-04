import { css } from "../../../styled-system/css";

export const LayoutStyle = css({
  maxWidth: "960px",
  minWidth: "320px",
  margin: "0 auto",
  padding: "0 15px",
});

export const NotFoundWrap = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "calc(100vh - 160px - 60px)",
  "& h1": {
    fontSize: "3.5rem",
    fontWeight: "200",
    color: "var(--color-main)",
  },
  "& p": {
    color: "var(--color-main-dark)",
  },
  "& a": {
    color: "var(--color-main)",
    fontSize: "1.2rem",
    textDecoration: "underline",
    marginTop: "auto",

    "&:hover": {
      color: "var(--color-main-dark)",
    },
  },
  "& .notfound-container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 160px - 60px)",
  },
  "& img": {
    width: "300px",
    height: "100px",
  },
});
