import '../styles/layout/footer.css';
import ic_facebook from '../assets/icons/ic_facebook.svg';
import ic_twitter from '../assets/icons/ic_twitter.svg';
import ic_youtube from '../assets/icons/ic_youtube.svg';
import ic_instagram from '../assets/icons/ic_instagram.svg';

/**
 * 푸터
 */
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="bottom-content-box">
            <p className="copyright">&copy;codeit - 2024</p>
            <div className="footer-menu">
              <a className="privacy" href="privacy">
                Privacy Policy
              </a>
              <a className="faq" href="faq">
                FAQ
              </a>
            </div>
            <div className="sns-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/?locale=ko_KR"
                    target="_blank"
                  >
                    <img src={ic_facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" target="_blank">
                    <img src={ic_twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <img src={ic_youtube} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338586&extra_1=s%7Cc%7C547419126416%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419126416&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338586%26adgroupid%3D126262418054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1009893%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gad_campaignid=13530338586&gbraid=0AAAAAD2MkOWIH8iWLwVWP6v0p_1HdRI6d&gclid=CjwKCAjw3rnCBhBxEiwArN0QE9SDCYSzDNJ4WrBimCMqR03vbrMlhFSwCwQPbcXHLcU0EoQb1lrLZxoC-3wQAvD_BwE"
                    target="_blank"
                  >
                    <img src={ic_instagram} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
