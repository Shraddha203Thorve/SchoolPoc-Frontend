import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
    return (
        <div>

            <a
                href="https://www.youtube.com/user/persistentsys"
                className="youtube social"
            >
                <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a
                href="https://www.facebook.com/persistentsys/"
                className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="https://twitter.com/Persistentsys?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
            >
                <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
        </div>
    );
}