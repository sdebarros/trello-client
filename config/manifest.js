/*jshint node:true*/
'use strict';

module.exports = function() {
  return {
    name: "Trello PWA",
    short_name: "Trello PWA",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#0079bf",
    theme_color: "#0079bf",
    icons: [{
      src: "/images/icons/icon-600x600.png",
      sizes: "600x600",
      type: "image/png"
    }, {
      src: "/images/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    }]
  };
}
