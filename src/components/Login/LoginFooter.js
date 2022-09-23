const LoginFooter = () => {
  return (
    <footer className="text-xs text-gray-700 py-4 shrink-0">
      <nav className="flex gap-3 flex-wrap justify-center">
        <a className="hover:shadow-border-s" href="#">About</a>
        <a className="hover:shadow-border-s" href="#">Help Center</a>
        <a className="hover:shadow-border-s" href="#">Terms of Service</a>
        <a className="hover:shadow-border-s" href="#">Privace Policy</a>
        <a className="hover:shadow-border-s" href="#">Cookie Policy</a>
        <a className="hover:shadow-border-s" href="#">Acessability</a>
        <a className="hover:shadow-border-s" href="#">Ads info</a>
        <a className="hover:shadow-border-s" href="#">Blog</a>
        <a className="hover:shadow-border-s" href="#">Status</a>
        <a className="hover:shadow-border-s" href="#">Careers</a>
        <a className="hover:shadow-border-s" href="#">Brand Resources</a>
        <a className="hover:shadow-border-s" href="#">Advertising</a>
        <a className="hover:shadow-border-s" href="#">Marketing</a>
        <a className="hover:shadow-border-s" href="#">Twitter for Business</a>
        <a className="hover:shadow-border-s" href="#">Developers</a>
        <a className="hover:shadow-border-s" href="#">Directory</a>
        <a className="hover:shadow-border-s" href="#">Settings</a>
        <p>&copy;{`${(new Date()).getFullYear()} Twitter, Inc.`}</p>
      </nav>
    </footer>
  );
};

export default LoginFooter;