function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}
function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}

document.getElementById("openTabButton").addEventListener("click", function() {
    // Replace 'https://example.com' with the URL you want to open in the new tab
    window.open('https://maps.app.goo.gl/AQuD9BWh5hs1jxUi9', '_blank');
} )