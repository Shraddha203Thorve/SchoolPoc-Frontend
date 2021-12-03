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
                href="https://www.youtube.com/c/jamesqquick"
                className="youtube social"
            >
                <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>

            <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
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