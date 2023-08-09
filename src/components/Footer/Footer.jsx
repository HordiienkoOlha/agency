import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import SocialList from "../SocialList/SocialList";

function Footer() {
  return (
    <footer>
      <Container>
        <Logo />
        <ul>
          <li>
            <ul>
              <li>
                <h2>Terms & policies</h2>
              </li>
              <li>
                <p>Terms of Service</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <h2>Company</h2>
              </li>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>About</p>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <h2>Contact</h2>
              </li>
              <li>
                <p>(+62) 893912392190</p>
              </li>
              <li>
                <p>agecnycr@gmail.com</p>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <h2>Location</h2>
              </li>
              <li>
                <p>
                  PT Osiris Real Estate Internasional Jl. KH. Wahid Hasyim Kel
                  No.10D Jakarta, Indonesia
                </p>
              </li>
              <li>
                <p>team@OsirisRealEstate.com</p>
              </li>
            </ul>
          </li>
        </ul>
        <SocialList />
        <p>Copyright @ 2023 Agency Creative. All Right Reserved</p>
      </Container>
    </footer>
  );
}

export default Footer;
