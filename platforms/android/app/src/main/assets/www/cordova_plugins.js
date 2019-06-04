cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-imagepicker.ImagePicker",
      "file": "plugins/cordova-plugin-imagepicker/www/imagepicker.js",
      "pluginId": "cordova-plugin-imagepicker",
      "clobbers": [
        "plugins.imagePicker"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-imagepicker": "1.1.0"
  };
});