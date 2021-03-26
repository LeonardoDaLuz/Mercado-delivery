import './blackFade.css';

var fadeElement = null;

export default function fade(on) {
    if (fadeElement == null) {
        fadeElement = document.createElement("div");
        fadeElement.classList.add("black-fade");
        fadeElement.classList.add("show");
        document.body.appendChild(fadeElement);
    }
}