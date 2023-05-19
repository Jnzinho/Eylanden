import './footer.css';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <a rel="noreferrer" target="_blank" href="https://github.com/Jnzinho">
        <FaGithub className="icon"></FaGithub>
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/joaovitorjn"
      >
        <FaTwitter className="icon"></FaTwitter>
      </a>
      <p>Made by Jnzinho</p>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/joaovitorjn7/"
      >
        <FaInstagram className="icon"></FaInstagram>
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/joaovitorjn"
      >
        <FaLinkedin className="icon"></FaLinkedin>
      </a>
    </footer>
  );
}

export default Footer;
