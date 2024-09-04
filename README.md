# js-image-magnify

This package enables you to magnifiy on images, for example in product pages or galleries.
![Screenshot (46)](https://github.com/user-attachments/assets/efe0efb1-09bd-4d45-8445-c4693dc6915b)


In [js-image-magnify-example](https://github.com/fatemeh-khoshkam/js-image-magnify-example) we use this package.
You may want to inspect that to learn more.

## Installation

Include it in your project:

```html
<link
  rel="stylesheet"
  href="https://raw.githubusercontent.com/fatemeh-khoshkam/js-image-magnify/main/style.css"
/>
<script src="https://raw.githubusercontent.com/fatemeh-khoshkam/js-image-magnify/main/index.js"></script>
```

## Usage

```html
<div class="container">
  <!-- The area that indicates where to magnify on the image  -->
  <div class="squareZoom"></div>
  <!-- The image you want to magnify on it -->
  <img src="img/picture.jpg" alt="picture" class="img" />
  <!-- The place of showing magnified area -->
  <div class="showZoomImg" style="background-image: url(img/picture.jpg)"></div>
</div>
```
