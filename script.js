let player = document.getElementById("player");
let bullet = document.getElementById("bullet");
let gameArea = document.getElementById("game-area");

let playerSpeed = 5;  // 飛行器的移動速度
let bulletSpeed = 3;  // 子彈的速度
let bulletVisible = false;

document.addEventListener("keydown", function(event) {
    let playerRect = player.getBoundingClientRect();
    
    // 左右控制
    if (event.key === "ArrowLeft" && playerRect.left > 0) {
        player.style.left = (playerRect.left - playerSpeed) + "px";
    }
    if (event.key === "ArrowRight" && playerRect.right < gameArea.offsetWidth) {
        player.style.left = (playerRect.left + playerSpeed) + "px";
    }

    // 開火
    if (event.key === " " && !bulletVisible) {
        shootBullet();
    }
});

function shootBullet() {
    let playerRect = player.getBoundingClientRect();
    bullet.style.left = playerRect.left + playerRect.width / 2 - bullet.offsetWidth / 2 + "px";
    bullet.style.bottom = playerRect.bottom + "px";
    b
