export default async function moveElementFromTo(img, from, to, dir = 1) {

    //   let rect = img.getBoundingClientRect();
    let fromRect = from.getBoundingClientRect();
    let toRect = to.getBoundingClientRect();

    let _img = document.createElement("img")
    _img.src = img.src;
    _img.classList.add('fromToAnimated')

    let updatePosition = {
        left: fromRect.left,
        top: fromRect.top,
        width: fromRect.width,
        height: fromRect.height
    }

    SetStyles();

    UpdatePosition();

    document.body.append(_img);


    let duracao = 0.5;
    let time = 0;
    while (time < duracao) {
        await window.waitForEndOfFrame();
        time += 0.016;
        toRect = to.getBoundingClientRect();
        fromRect = from.getBoundingClientRect();
        let progress = dir == 1 ? time / duracao : (duracao - time) / duracao;
        updatePosition.left = window.mathf.smoothStep(fromRect.left, toRect.left, progress);
        updatePosition.top = window.mathf.smoothStep(fromRect.top, toRect.top, progress);
        updatePosition.width = window.mathf.sphereLerp(fromRect.width, toRect.width, progress);
        updatePosition.height = window.mathf.sphereLerp(fromRect.height, toRect.height, progress);
        UpdatePosition();
    }

    _img.remove();

    function UpdatePosition() {
        _img.style = `
        width: ${updatePosition.width}px;
        height: ${updatePosition.height}px;
        top: ${updatePosition.top}px;
        left: ${updatePosition.left}px;
        `;
    }

    function SetStyles() {

        let style = document.getElementById("animation_product_add");

        if (style == undefined) {
            style = document.createElement("style");
            style.id = 'animation_product_add';
            document.body.append(style);

            style.innerHTML = `

            .fromToAnimated {
                position: fixed;
                z-index: 100;
                box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.333);
                background-color: white;
                animation: adicao-carrinho-fade-in 0.6s ease-out;
                pointer-events: none;
                opacity: 0.8;
            }

            @keyframes adicao-carrinho-fade-in {
                0% {
                    opacity: 0;
                    transform: scale(1);
                }
                15% {
                    opacity: 1;
                  
                }
                50% {
                    box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.333);
                    transform: scale(1.3);
                }

                100% {
                    box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.333);
                    transform: scale(1);
             
                }
            }`;
        }

    }

};

