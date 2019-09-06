"use strict";

let vid = document.querySelector("video");
let videoDuration;

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  loadVideo();
}

function loadVideo() {
  console.log("loadVideo");
  vid.addEventListener("canplaythrough", videoLoaded);
}

function videoLoaded() {
  console.log("Loaded");
  videoDuration = vid.duration;

  console.log(videoDuration);
}

let scrollDistance =
  document.querySelector(".outerVideoContainer").scrollHeight -
  document.querySelector(".outerVideoContainer").clientHeight;
console.log("scrollDistance", scrollDistance);

document
  .querySelector(".outerVideoContainer")
  .addEventListener("scroll", scrollFunc);

function scrollFunc(evt) {
  let scrolltopRatio = evt.target.scrollTop / scrollDistance;
  vid.currentTime = scrolltopRatio * videoDuration;
  console.log(scrolltopRatio);
}
