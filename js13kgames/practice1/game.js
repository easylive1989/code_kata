const c = document.getElementById("c");
const ctx = c.getContext("2d");

// 設定 Canvas 大小
c.width = 480;
c.height = 320;

let lastTime;

// 遊戲狀態
let x = c.width / 2;
let y = c.height / 2;

let armAngle = 0;

let state = "init"

addEventListener("keydown", (e) => {
    if (e.code === "Space" && state === "init") {
        state = "game";
    } else if (e.code === "Space" && state === "gameover") {
        state = "init";
    } else if (e.code === "Space" && state === "game") {
        state = "gameover";
    }
});

// 隨機生成星星位置
starPositions = [];
for (let i = 0; i < 20; i++) {
    const x = Math.random() * c.width;
    const y = Math.random() * c.height;
    starPositions.push({ x, y });
}

function update(dt) {
    armAngle += dt;
}

// 遊戲迴圈
function draw() {
    // 清除畫面
    ctx.clearRect(0, 0, c.width, c.height);

    const gradient = ctx.createLinearGradient(0, 0, 0, c.height);
    gradient.addColorStop(0, "rgba(118, 118, 145, 1)");     // 頂部：深藍
    gradient.addColorStop(1, "rgba(25, 25, 136, 1)");     // 底部：稍亮
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, c.width, c.height);


    for (let i = 0; i < 20; i++) {
        drawStar(starPositions[i].x, starPositions[i].y, "rgba(255, 255, 255, 1)");
    }

    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fill();
    ctx.closePath();

    ctx.fillRect(c.width / 2 - 20, c.height / 2 + 20, 40, 60)

    ctx.fillRect(c.width / 2 - 20, c.height / 2 + 80, 10, 30)
    ctx.fillRect(c.width / 2 + 10, c.height / 2 + 80, 10, 30)

    ctx.save();
    ctx.translate(c.width / 2 + 20, c.height / 2 + 20);
    ctx.rotate(armAngle);
    ctx.fillStyle = "rgba(255, 0, 0, 1)";
    ctx.fillRect(0, 0, 10, 30)
    ctx.restore();


    // 畫一段文字
    drawText("Hello js13k!");
}

function drawText(text) {
    ctx.font = "16px monospace";
    ctx.fillStyle = "#fff";
    ctx.fillText(text, 10, 25);
}

function gameLoop(timestamp) {
    requestAnimationFrame(gameLoop);
    if (!lastTime) {
        lastTime = timestamp; // 第一幀只記錄時間，不更新
        return;
    }
    // 計算自上一幀經過的秒數
    const dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    switch (state) {
        case "init":
            updateInit(dt);
            drawInit();
            break;
        case "game":
            update(dt);
            draw();    // 繪製畫面
            break;
        case "gameover":
            updateGameover(dt);
            drawGameover();
            break;
    }
}

function drawInit() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawText("Press Space to Start");
}

function drawGameover() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawText("Game Over");
}

function updateInit(dt) {

}

function updateGameover(dt) {

}

// 啟動
requestAnimationFrame(gameLoop); // 請瀏覽器在下一幀呼叫我

function drawStar(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
