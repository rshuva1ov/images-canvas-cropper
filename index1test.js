
// Get canvas element and its 2D context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const etx = canvas.getContext('2d');

// Variables to store position of four control points
let controlPoints = [
  { x: 50, y: 50 },
  { x: 150, y: 50 },
  { x: 150, y: 150 },
  { x: 50, y: 150 }
];

canvas.width = 1000;
canvas.height = 600;
let draggingIndex = -1;

// Load image onto canvas
const image = new Image();
image.src = 'cat.jpeg';
image.onload = () => {
  // Draw the image onto the canvas
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  // Draw control points and lines
  drawControlPoints();
  cropImageWithOurControls();
};

// Draw control points and connecting lines
function drawControlPoints() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Draw control points
  ctx.fillStyle = 'red';
  controlPoints.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  });

  // Draw lines
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(controlPoints[0].x, controlPoints[0].y);
  controlPoints.forEach(point => {
    ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.stroke();
}

// Event listener for dragging control points
canvas.addEventListener('mousedown', startDragging);
canvas.addEventListener('mousemove', dragControlPoint);
canvas.addEventListener('mouseup', stopDragging);

// Check if mouse is near any control point
function startDragging(e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  controlPoints.forEach((point, index) => {
    if (Math.abs(point.x - mouseX) <= 5 && Math.abs(point.y - mouseY) <= 5) {
      draggingIndex = index;
    }
  });
}

// Update the position of the dragging control point
function dragControlPoint(e) {
  if (draggingIndex >= 0) {
    const rect = canvas.getBoundingClientRect();
    controlPoints[draggingIndex].x = e.clientX - rect.left;
    controlPoints[draggingIndex].y = e.clientY - rect.top;
    drawControlPoints();
  }
}

// Stop dragging
function stopDragging() {
  draggingIndex = -1;
}

function cropImageWithOurControls() {
  // Обрезаем изображение по указанным координатам
  // Пример координат для 4 объектов: [x1, y1, x2, y2, x3, y3, x4, y4]
  var coordinates = controlPoints;
  etx.beginPath();
  etx.moveTo(coordinates[0], coordinates[1]);
  etx.lineTo(coordinates[2], coordinates[3]);
  etx.lineTo(coordinates[4], coordinates[5]);
  etx.lineTo(coordinates[6], coordinates[7]);
  etx.closePath();
  etx.clip();

  // Создаем новый объект изображения, содержащий обрезанную область
  var croppedImage = new Image();
  croppedImage.src = canvas.toDataURL();

  // Добавляем обрезанное изображение на страницу
  document.body.appendChild(croppedImage);
};


