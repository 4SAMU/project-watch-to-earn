import { Box, styled } from "@mui/material";

export const TextFieldWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "380px",
  height: "48px",
  borderRadius: "12px",
  background: "#2E2E41",
  padding: " 9px 13px",
}));

export const SearchInput = styled("input")(() => ({
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  marginLeft: "16px",
}));

export const SearchIcon = styled("img")(() => ({
  width: "16px",
  height: "16px",
  cursor: "pointer",
}));

export const SlashIcon = styled("img")(() => ({
  width: "27px",
  height: "28px",
  cursor: "pointer",
}));

export const TextFieldBox = ({ value, onChange }: any) => {
  return (
    <TextFieldWrapper>
      <SearchIcon src="/searchInputAssets/search.png" alt="" />
      <SearchInput placeholder="Search" value={value} onChange={onChange} />
      <SlashIcon src="searchInputAssets/slash.png" alt="" />
    </TextFieldWrapper>
  );
};
