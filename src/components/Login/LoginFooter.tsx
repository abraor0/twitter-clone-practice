import Anchor from '../UI/Anchor';

const LoginFooter = () => {
  return (
    <footer className="text-xs text-gray-700 py-4 shrink-0">
      <nav className="flex gap-3 flex-wrap justify-center">
        <Anchor secondary>About</Anchor>
        <Anchor secondary>Help Center</Anchor>
        <Anchor secondary>Terms of Service</Anchor>
        <Anchor secondary>Privace Policy</Anchor>
        <Anchor secondary>Cookie Policy</Anchor>
        <Anchor secondary>Acessability</Anchor>
        <Anchor secondary>Ads info</Anchor>
        <Anchor secondary>Blog</Anchor>
        <Anchor secondary>Status</Anchor>
        <Anchor secondary>Careers</Anchor>
        <Anchor secondary>Brand Resources</Anchor>
        <Anchor secondary>Advertising</Anchor>
        <Anchor secondary>Marketing</Anchor>
        <Anchor secondary>Twitter for Business</Anchor>
        <Anchor secondary>Developers</Anchor>
        <Anchor secondary>Directory</Anchor>
        <Anchor secondary>Settings</Anchor>
        <p>&copy;{`${(new Date()).getFullYear()} Dwitter, Inc.`}</p>
      </nav>
    </footer>
  );
};

export default LoginFooter;