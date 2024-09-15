import { css } from "../../../styled-system/css";

export const LayoutStyle = css({
  maxWidth: "960px",
  minWidth: "320px",
  margin: "0 auto",
  padding: "0 15px",
});

export const HeaderStyle = css({
  height: "80px",
  margin: "0 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--color-main)",
    fontSize: "25px",
    fontWeight: "700",
  },
});

export const FooterStyle = css({
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "5px",

  "& p": {
    margin: 0,
    textAlign: "center",
    fontWeight: "700",
    fontSize: "11px",
  },
});
