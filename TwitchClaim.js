// ==UserScript==
// @name     TwitchClaim
// @version  1
// @grant    none
// ==/UserScript==

var reload_ = function() {
  console.log("reloading");
	location.reload();
}
setTimeout(function () {
//confirm script running 
  console.log("we in");
  var claimButton = document.querySelectorAll('[data-test-selector="DropsCampaignInProgressRewardPresentation-claim-button"]');
//check for claim button
  if(claimButton.length == 1) {
    console.log("Im a claimooooooor");
		claimButton[0].click();
    console.log("claimed");
  }
  else {
  	console.log("not cooked");
  }
 //1 second pause to allow for claim
  setTimeout(reload_, 1000);
}, 300000);
