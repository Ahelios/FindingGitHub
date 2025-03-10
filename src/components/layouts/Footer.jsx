function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-neutral text-primary-content footer-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.2"
          stroke="grey"
          className="size-10 text-accent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <p className="text-neutral-content">Created 2025</p>
    </footer>
  );
}

export default Footer;
