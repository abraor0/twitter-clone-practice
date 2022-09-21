const Footer = () => {
  
  return (
    <footer className="text-xs text-gray-700">
      <nav className="flex gap-x-2 gap-y-1 flex-wrap">
        <a className="hover:shadow-border" href="#">Terms of Service</a>
        <a className="hover:shadow-border" href="#">Privace Policy</a>
        <a className="hover:shadow-border" href="#">Cookie Policy</a>
        <a className="hover:shadow-border" href="#">Acessability</a>
        <a className="hover:shadow-border" href="#">Ads info</a>
        <a className="hover:shadow-border" href="#">More...</a>
      </nav>
      <p className="my-1">&copy;{`${(new Date()).getFullYear()} Twitter, Inc.`}</p>
    </footer>
  );
};

export default Footer;