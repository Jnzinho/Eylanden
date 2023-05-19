import './footer.css';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <FaGithub className="icon"></FaGithub>
      <FaTwitter className="icon"></FaTwitter>
      <p>Made by Jnzinho</p>
      <FaInstagram className="icon"></FaInstagram>
      <FaLinkedin className="icon"></FaLinkedin>
    </footer>
  );
}

export default Footer;
