// This work is licensed under a Creative Commons Attribution 3.0 Unported License,
// see http://creativecommons.org/licenses/by/3.0/deed.en_GB
// Dave Raggett <dsr@w3.org> March 2013

// images must be from same domain as web page for security reasons
// chroma-key attribute is hex color or rgb color
// delta is optional attribute for range (plus or minus delta)
//Modificação leo Luz
export default function MakeChroma(image) {

      var key = get_chroma_key(image);
      var alpha = image.getAttribute("data-alpha");

      if (!key  && !alpha)
        return;

      var d = get_delta(image);
      console.log("key = " + JSON.stringify(key) + " delta = " + d);

      // create canvas for the copy of the image
      var canvas = document.createElement("canvas");
      canvas.setAttribute("width", image.width);
      canvas.setAttribute("height", image.height);

      var id = image.id;
      canvas.className = image.className;

      // preserve alt attribute if provided
      var alt = image.getAttribute("alpha");

      if (alt)
        canvas.textContent = alt;

      image.parentNode.insertBefore(canvas, image);
      image.parentNode.removeChild(image);

      // preserve id and class for styling and event handlers
      canvas.id = id;

      var ctx = canvas.getContext('2d');

      // copy image to canvas
      ctx.drawImage(image, 0, 0);

      if (key)
        apply_key(canvas, ctx, key, d);
      else if (alpha)
        apply_alpha(canvas, ctx, alpha);   
  

  function start ()
  {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; ++i)
    {
      var image = images[i];
      var key = get_chroma_key(image);
      var alpha = image.getAttribute("data-alpha");

      if (!key  && !alpha)
        continue;

      var d = get_delta(image);
      console.log("key = " + JSON.stringify(key) + " delta = " + d);

      // create canvas for the copy of the image
      var canvas = document.createElement("canvas");
      canvas.setAttribute("width", image.width);
      canvas.setAttribute("height", image.height);

      var id = image.id;
      canvas.className = image.className;

      // preserve alt attribute if provided
      var alt = image.getAttribute("alpha");

      if (alt)
        canvas.textContent = alt;

      image.parentNode.insertBefore(canvas, image);
      image.parentNode.removeChild(image);
      --i;  // compensate for removal from images array

      // preserve id and class for styling and event handlers
      canvas.id = id;

      var ctx = canvas.getContext('2d');

      // copy image to canvas
      ctx.drawImage(image, 0, 0);

      if (key)
        apply_key(canvas, ctx, key, d);
      else if (alpha)
        apply_alpha(canvas, ctx, alpha);
    }
  }

  function apply_alpha (canvas, ctx, alpha)
  {
    var alpha_image = new Image();
    alpha_image.onload = function ()
    {
      // executes when the alpha image has loaded
      let alpha_canvas = document.createElement("canvas");
      alpha_canvas.setAttribute("width", alpha_image.width);
      alpha_canvas.setAttribute("height", alpha_image.height);
      canvas.parentNode.insertBefore(alpha_canvas, canvas);
      var alpha_ctx = alpha_canvas.getContext('2d');
      alpha_ctx.drawImage(alpha_image, 0, 0);

      // now use green channel of aimage as alpha
      var frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var alpha_frame = alpha_ctx.getImageData(0, 0, alpha_canvas.width, alpha_canvas.height);

      for (var j = 0; j < frame.data.length; j += 4)
        frame.data[j + 3] = alpha_frame.data[j + 1];

      ctx.putImageData(frame, 0, 0);
      alpha_canvas.parentNode.removeChild(alpha_canvas);
    };

    alpha_image.src = alpha;
  }

  function apply_key  (canvas, ctx, key, d)
  {
    var frame = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (var j = 0; j < frame.data.length; j += 4)
    {
      var r = frame.data[j];
      var g = frame.data[j+1];
      var b = frame.data[j+2];

      if (key.r - d <= r && r < key.r + d &&
          key.g - d <= g && g < key.g + d &&
          key.b - d <= b && b < key.b + d)
      {
        frame.data[j + 3] = 0;
      }
    }

    ctx.putImageData(frame, 0, 0);
  }

  function get_chroma_key(image)
  {
    var n, p = parseInt, color = image.getAttribute("data-chroma-key");

    if (n = /^\s*#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(color))
      return {r:p(n[1],16), g:p(n[2],16), b:p(n[3],16)}; 

    if (n = /^\s*#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(color))
      return {r:p(n[1],16)*17, g:p(n[2],16)*17, b:p(n[3],16)*17};

    if (n = /^\s*rgb\(\s*([\d]+)\s*,\s*([\d]+)\s*,\s*([\d]+)\s*\)/.exec(color))
      return {r:p(n[1]), g:p(n[2]), b:p(n[3])};

    if (n = /^\s*rgba\(\s*([\d]+)\s*,\s*([\d]+)\s*,\s*([\d]+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)/.exec(color))
      return {r:p(n[1]), g:p(n[2]), b:p(n[3]), a:p(n[4])};

    return null;
  }

  function get_delta (image)
  {
    var delta = image.getAttribute("data-delta");

    if (delta == null)
      return 10;

    delta = parseInt(delta);
    return isNaN(delta) ? 10 : delta;
  }
  
};