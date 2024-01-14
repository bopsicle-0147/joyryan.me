const youtubeChannel = document.getElementById("youtube channel");
const twitterAccount = document.getElementById("twitter account");
const learnMore = document.getElementById("Learn More Button");

youtubeChannel.addEventListener("click", openYtNewTab);
twitterAccount.addEventListener("click", openTwitterNewTab);
learnMore.addEventListener("click", openYtNewTab);


function openYtNewTab() {
    window.open("https://youtube.com/@oliviajoyryan_", "_blank");
}

function openTwitterNewTab() {
    window.open("https://twitter.com/@oliviajoyryan", "_blank");
}
