const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = canvas.width =600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "./shadow_dog.png";


//从画布的左上角 (0, 0) 开始，清除一个宽度为 CANVAS_WIDTH 和高度为 CANVAS_HEIGHT 的矩形区域
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.fillRect(50,50,100,100);
    
}