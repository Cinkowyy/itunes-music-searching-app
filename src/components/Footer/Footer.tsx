import { useMemo } from "react";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  const iconSize = useMemo(() => {
    return 32;
  }, []);

  return (
    <div className="footer">
      <div className="footer__icons">
        <RiFacebookBoxFill size={iconSize} />
        <RiInstagramFill size={iconSize} />
        <RiLinkedinBoxFill size={iconSize} />
      </div>
      <div className="footer__author">
        <p>Cinkowyy</p>
      </div>
    </div>
  );
};

export default Footer;
