export const OfferTagSVG = ({ product }) => {
    let size = 0.8;
    let percent = ((1-(product.offer.off_price/product.price))*100).toFixed(0);
    return (

        <div
            style={{
                position: 'absolute',
                left: '-3px',
                top: '-3px'
            }}

            dangerouslySetInnerHTML={{
                __html: `
            <svg
   width="${69*size}"
   height="${100*size}"
   viewBox="0 0 18.25625 26.458333"
   version="1.1"
   id="svg5"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">

  <defs
     id="defs2">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient32023">
      <stop
         style="stop-color:#d40000;stop-opacity:1;"
         offset="0"
         id="stop32019" />
      <stop
         style="stop-color:#ff5858;stop-opacity:1"
         offset="1"
         id="stop32021" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       id="linearGradient3131">
      <stop
         style="stop-color:#bd7104;stop-opacity:1"
         offset="0"
         id="stop3127" />
      <stop
         style="stop-color:#ef9f15;stop-opacity:1;"
         offset="0.36254054"
         id="stop8171" />
      <stop
         style="stop-color:#ffffff;stop-opacity:1"
         offset="0.51524526"
         id="stop8105" />
      <stop
         style="stop-color:#efc922;stop-opacity:1;"
         offset="0.64656883"
         id="stop8237" />
      <stop
         style="stop-color:#efff33;stop-opacity:1"
         offset="1"
         id="stop3129" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3131"
       id="linearGradient4444"
       gradientUnits="userSpaceOnUse"
       x1="49.485516"
       y1="34.191456"
       x2="25.202202"
       y2="40.698151"
       spreadMethod="reflect" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient32023"
       id="linearGradient32025"
       x1="11.644253"
       y1="20.500895"
       x2="15.35576"
       y2="19.513283"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.2386184,0,0,1.2386184,-6.9053639,-5.5791884)" />
  </defs>
  <g
     inkscape:label="Camada 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:url(#linearGradient32025);fill-opacity:1;stroke:#960000;stroke-width:0.327717px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 5.4834509,10.827619 7.8127671,-0.0558 V 25.950907 L 9.1666128,21.653886 5.7624782,25.727684 Z"
       id="path9692" />
    <path
       sodipodi:type="star"
       style="fill:url(#linearGradient4444);fill-opacity:1;fill-rule:nonzero;stroke:#fbb000;stroke-width:1.6;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path856"
       inkscape:flatsided="false"
       sodipodi:sides="10"
       sodipodi:cx="38.825012"
       sodipodi:cy="35.589596"
       sodipodi:r1="20.011526"
       sodipodi:r2="25.988995"
       sodipodi:arg1="0.87354128"
       sodipodi:arg2="1.1877005"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 51.674729,50.930585 -3.135195,8.764112 -8.336089,-4.141106 -7.687843,5.247494 -4.309956,-8.250056 -9.303995,-0.273488 1.362433,-9.207764 -7.366338,-5.690008 6.514419,-6.64842 -2.614989,-8.933137 9.178119,-1.549605 3.135195,-8.764112 8.33609,4.141106 7.687842,-5.247494 4.309957,8.250055 9.303995,0.273489 -1.362433,9.207764 7.366337,5.690008 -6.514419,6.648419 2.614989,8.933138 z"
       transform="matrix(0.32771778,0,0,0.32771778,-3.6686466,-2.7889148)" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.58282px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:#ac7600;stroke-width:0.991674;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
       x="3.0121944"
       y="14.379899"
       id="text26686"><tspan
         sodipodi:role="line"
         id="tspan26684"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';fill:#ffffff;fill-opacity:1;stroke:#ac7600;stroke-width:0.991674;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
         x="3.0121944"
         y="14.379899">OFF</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:5.70745px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:#be7d00;stroke-width:0.896308;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
       x="3.7939906"
       y="8.5538549"
       id="text12476"
       transform="scale(0.94721485,1.0557267)"><tspan
         sodipodi:role="line"
         id="tspan12474"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';fill:#ffffff;stroke:#be7d00;stroke-width:0.896308;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
         x="2.7939906;text-align:center;"
         y="8.5538549">${percent}%</tspan></text>
  </g>
</svg>

            `
            }}>

        </div>

    );
}