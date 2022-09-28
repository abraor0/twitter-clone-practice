import Anchor from '../UI/Anchor';

const Footer = () => {
  return (
    <footer className="text-xs text-gray-700">
      <nav className="flex gap-x-2 gap-y-1 flex-wrap">
        <Anchor secondary>Terms of Service</Anchor>
        <Anchor secondary>Privace Policy</Anchor>
        <Anchor secondary>Cookie Policy</Anchor>
        <Anchor secondary>Acessability</Anchor>
        <Anchor secondary>Ads info</Anchor>
        <Anchor secondary>More...</Anchor>
      </nav>
      <p className="my-1">&copy;{`${(new Date()).getFullYear()} Twitter, Inc.`}</p>
    </footer>
  );
};

export default Footer;