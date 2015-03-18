const {Cc,Ci} = require("chrome");

var { PrefsTarget } = require("sdk/preferences/event-target");
var target = PrefsTarget({ branchName: "extensions." + require("sdk/self").id + "." });
var simplePrefs = require('sdk/simple-prefs');

var dock = Cc["@mozilla.org/widget/macdocksupport;1"]
             .getService(Ci.nsIMacDockSupport);

target.on("badgeText", function(prefName) {
  dock.badgeText = target.prefs[prefName];
});
