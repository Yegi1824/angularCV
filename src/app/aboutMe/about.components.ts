import {Component, HostBinding} from '@angular/core';
import { faShareAlt, faMinus, faBatteryFull, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTelegramPlane, faGithub } from '@fortawesome/free-brands-svg-icons';
import {routingAnimation} from "../shared/animations/routing-animation";

const INFO_L: string[] = [
  'Age', 'Address', 'Email', 'Phone', 'Freelance'
]
const INFO_R: string[] = [
  '20', 'Ukraine, Dnipro 49000', 'Egorkaishchenko@gmail.com', '+380976170090'
]

@Component({
  selector: 'app-about',
  templateUrl: './about.components.html',
  styleUrls: ['./about.components.scss'],
  animations: [routingAnimation]
})

export class AboutComponents{
  faBatteryFull = faBatteryFull;
  faMinus = faMinus;
  faShareAlt = faShareAlt;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTelegramPlane = faTelegramPlane;
  faGithub = faGithub;
  faCalendarCheck = faCalendarCheck;
  @HostBinding('@routingAnimation') private routing;

  public info_l: string[] = INFO_L;
  public info_r: string[] = INFO_R;

  active = true;
}
