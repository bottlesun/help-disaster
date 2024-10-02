import { css } from "../../../../styled-system/css";

export const ItemContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
});

export const ItemContent = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "5px",
});

export const ItemBox = css({
  borderRadius: "5px",
  padding: "20px 15px",
  background: "#fff",
  boxShadow: "0 2px 10px 0 rgba(51, 68, 105, 0.3)",
  width: "100%",
  maxWidth: "800px",
  minWidth: "320px",
  flexShrink: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ItemTitle = css({
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "10px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  flexShrink: "0",

  "& span": {
    marginRight: "5px",
  },

  "& span.loading": {
    fontSize: "12px",
    paddingLeft: "5px",
    color: "var(--color-gray)",
    fontWeight: "400",
    animation: "opacity 1s infinite alternate",
  },
});

export const ItemText = css({
  fontSize: "14px",
  fontWeight: "400",
  height: "42px",
  flexShrink: "0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  lineClamp: "3",
  boxOrient: "vertical",
});

export const ItemLocation = css({
  marginTop: "5px",
  marginLeft: "auto",
  alignItems: "end",
  display: "flex",
  flexDirection: "column",
  gap: "5pxx",

  "& p": {
    fontSize: "12px",
    color: "var(--color-gray)",
  },
});

export const ItemTitleDate = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "800px",
  minWidth: "320px",
  "& h3": {
    margin: "0",
  },
  "@media (max-width: 760px)": {
    flexDirection: "column",
    alignItems: "start",
    gap: "15px",
    "& div": {
      marginLeft: "auto",
    },
  },
});

export const ItemRefreshDate = css({
  fontSize: "12px",
  color: "var(--color-gray)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    color: "var(--color-gray)",
    marginRight: "5px",
    transition: "all 0.3s",
    "& path": {
      fill: "var(--color-gray)",
    },
  },

  "&:hover svg": {
    transform: "rotate(360deg)",
  },
});

export const ItemTopButtonWrapper = css({
  width: "100%",
  height: "50px",
  position: "absolute",
  bottom: "0",
});
export const ItemTopButtonActive = css({
  background:
    "linear-gradient(0deg, rgba(249,251,255,1) 80%,  rgba(255,255,255,0) 100%)",
});

export const ItemTopButton = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  color: "var(--color-gray)",

  "& path": {
    fontSize: "20px",
    color: "var(--color-main-dark)",
  },
  "& p": {
    fontSize: "12px",
    color: "var(--color-main-dark)",
  },
});

export const ItemEmpty = css({
  fontSize: "12px",
  textAlign: "center",
  padding: "50px",
  color: "var(--color-gray)",
  background: "#fff",
  borderRadius: "5px",
  boxShadow: "0 2px 10px 0 rgba(51, 68, 105, 0.3)",
  width: "100%",
  maxWidth: "800px",
  minWidth: "320px",

  "& span.loading": {
    fontSize: "12px",
    paddingLeft: "5px",
    color: "var(--color-gray)",
    fontWeight: "400",
    animation: "opacity 1.4s infinite alternate",
  },
});

export const itemScrollClass = css({
  "&:after": {
    content: "''",
    display: "block",
    height: "20px",
    position: "absolute",
    top: "-2px",
    left: "0",
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(249,251,255,1) 0%, rgba(255,255,255,0) 100%)",
  },
});
