import { library } from "@fortawesome/fontawesome-svg-core";

import { faHeart as faOpenHeart, faStar as faOpenStar} from "@fortawesome/free-regular-svg-icons";
import { faYoutube,faGoogle,faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
    faSearch,
    faArrowRight,
    faHeart,
    faGlobe,
    faBookOpen,
    faStar,
    faSignOutAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export default library.add(
    faSearch,
    faArrowRight,
    faOpenHeart,
    faHeart,
    faGlobe,
    faBookOpen,
    faYoutube, 
    faStar,
    faOpenStar,
    faGoogle,
    faSignOutAlt,
    faUser,
    faFacebook
);
