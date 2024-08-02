"use strict";

var _swiperBundleMin = _interopRequireDefault(require("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swiper = new _swiperBundleMin["default"](".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});