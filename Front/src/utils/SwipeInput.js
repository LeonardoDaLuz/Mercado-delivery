
var touchStart = false;
var touchStartPosition = { x: 0, y: 0 };
var swipeDirection = { x: 0, y: 0 };
var initialized = false;

export default class SwipeInput {


    static initialize() {
        if (!initialized) {
            window.addEventListener("mousedown", (e) => {
                SwipeInput.startMouseSwipe(e);
            });
            window.addEventListener("touchstart", (e) => {
                SwipeInput.startMouseSwipe(e);
            });
            window.addEventListener("mousemove", (e) => {
                if (touchStart) {

                    swipeDirection = { x: e.clientX - touchStartPosition.x, y: e.clientY - touchStartPosition.y }
                }
            });
            window.addEventListener("touchmove", (e) => {

                if (touchStart) {
                    swipeDirection = { x: e.touches[0].clientX - touchStartPosition.x, y: e.touches[0].clientY - touchStartPosition.y }

                }
            });
            window.addEventListener('mouseup', (e) => {
                SwipeInput.stop();
            });
            window.addEventListener('touchend', (e) => {
                SwipeInput.stop();
            });
            initialized = true;
        }
    }

    static startMouseSwipe(e) {   
        touchStart = true;
        touchStartPosition.x = e.type==="mousedown"?e.clientX: e.touches[0].clientX;
        touchStartPosition.y = e.type==="mousedown"?e.clientY: e.touches[0].clientY;
    }

    static stop() {
        touchStart = false;
        swipeDirection = { x: 0, y: 0 };
        touchStartPosition = { x: 0, y: 0 };
    }


    static onDirection(dir, callback) {

        SwipeInput.initialize();

        var arrowFunction = (e) => {
            let confirm = false;

            if (dir.x !== 0) {
                if (dir.x < 0) {
                    if (swipeDirection.x < dir.x)
                        confirm = true;
                } else {
                    if (swipeDirection.x > dir.x)
                        confirm = true;
                }
            }

            if (dir.y !== 0) {
                if (dir.y < 0) {
                    if (swipeDirection.y < dir.y)
                        confirm = true;
                } else {
                    if (swipeDirection.y > dir.y)
                        confirm = true;
                }
            }

            if (touchStart && confirm) {
                callback();
                SwipeInput.stop();
            }
        };

        window.addEventListener('mousemove', arrowFunction);
        window.addEventListener('touchmove', arrowFunction);
    }


}


