import { Link } from "react-router-dom";
import ButtonCommonView from "./button-common.view";
import { LinkButtonStyle } from "./button.style";

type ButtonLinkProps = {
  link?: string;
  text: string;
};
const ButtonLinkView = ({ link, text }: ButtonLinkProps) => {
  return (
    <LinkButtonStyle>
      {
        // 링크가 있으면 링크로, 없으면 버튼으로
        link ? <Link to={link}>{text}</Link> : <ButtonCommonView className={"link"} text={text} />
      }
    </LinkButtonStyle>
  );
};
export default ButtonLinkView;
