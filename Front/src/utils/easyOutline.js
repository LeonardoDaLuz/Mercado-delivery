
var _outline = false;
var _outline_style = null;
window.onkeydown = (e) => {
    if (e.key === "'") {
        _outline = !_outline;
        if (_outline) {
            _outline_style = document.createElement("style");
            _outline_style.innerHTML = `* {
        outline: 1px solid rgba(255, 3, 3, 0.25);;
      }
    `;
            document.body.append(_outline_style);
        } else {
            _outline_style.remove();
        }
        console.log(e.key);
    }
}
