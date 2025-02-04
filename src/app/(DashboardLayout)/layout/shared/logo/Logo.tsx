import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const LinkStyled = styled(Link)(() => ({
  height: "64px",
  width: "174px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src={`${getImagePrefix()}images/logos/light-logo.svg`} alt="logo" height={64} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
