// ==UserScript==
// @name     TwitchClaim
// @version  1
// @grant    none
// ==/UserScript==
setTimeout(function () {
  console.log("we in");
  var claimButton = document.querySelectorAll('[data-test-selector="DropsCampaignInProgressRewardPresentation-claim-button"]');
  
  if(claimButton.length == 1) {
    console.log("Im a claimooooooor");
    claimButton[0].click();
  }
  else {
  	console.log("not cooked");
  }
  location.reload();
}, 300000);
