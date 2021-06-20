export const OfferTagSVG3 = ({ product, color = '#FFFFF' }) => {
   let size = 0.7;
   let percent = ((1 - (product.offer.off_price / product.price)) * 100).toFixed(0);
   percent = percent<10?" "+percent:percent;
   return (

      <div
         style={{
            position: 'relative',
            left: '0px',
            top: '0px',
            marginBottom: '10px',
            filter: 'drop-shadow(1px 3px 2px rgba(0,0,0,0.5))'

         }}

         dangerouslySetInnerHTML={{
            __html: `
            <svg
   width="${69 * size}"
   height="${84 * size}"
   viewBox="0 0 17.991667 17.46251"
   version="1.1"
   id="svg5"
   sodipodi:docname="offerTag3.svg"
   inkscape:version="1.1 (c68e22c387, 2021-05-23)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview22"
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     inkscape:pageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="0"
     showgrid="false"
     inkscape:zoom="8.24"
     inkscape:cx="50.182039"
     inkscape:cy="40.716019"
     inkscape:window-width="1920"
     inkscape:window-height="1013"
     inkscape:window-x="1791"
     inkscape:window-y="-9"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Camada 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       sodipodi:type="star"
       style="fill:#eb2328;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.6;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
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
       transform="matrix(0.34567531,0,0,0.34427473,-4.4461222,-3.5387181)" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:5.58282px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.991674;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
       x="30.00"
       y="13.962474"
       id="text26686"><tspan
         sodipodi:role="line"
         id="tspan26684"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.991674;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
         x="3.2"
         y="13.7">OFF</tspan></text>
    <text
      text-anchor="central"
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:5.70745px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.896308;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
       x="2.7261927"
       y="8.1888781"
       id="text12476"
       transform="scale(0.94721485,1.0557267)"><tspan
         sodipodi:role="line"
         id="tspan12474"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';fill:#ffffff;stroke:none;stroke-width:0.896308;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"
         x="3.4"
         y="8.1888781">${percent}%</tspan></text>
  </g>
</svg>
            `
         }}>

      </div>

   );
}