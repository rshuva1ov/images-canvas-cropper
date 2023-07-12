// Создаем элемент canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

// Загружаем изображение
var image = new Image();
image.src = 'cat.jpeg';
image.width = 1000;
image.height = 600;

document.body.appendChild(image);

// Ждем, пока изображение загрузится
image.onload = function() {
  // Устанавливаем размеры холста равными размерам изображения
  canvas.width = image.width;
  canvas.height = image.height;

//   // Рисуем изображение на холсте
//   ctx.drawImage(image, 0, 0);

  let controlPoints = [
    { x: 1150, y: 50 },
    { x: 55150, y: 50 },
    { x: 150, y: 150 },
    { x: 50, y: 150 }
  ];
  // Обрезаем изображение по указанным координатам
  // Пример координат для 4 объектов: [x1, y1, x2, y2, x3, y3, x4, y4]
//   ctx.beginPath();
//   ctx.moveTo(controlPoints[0].x, controlPoints[0].x);
//   ctx.lineTo(controlPoints[1].x, controlPoints[1].x);
//   ctx.lineTo(controlPoints[2].x, controlPoints[2].x);
//   ctx.lineTo(controlPoints[3].x, controlPoints[3].x);
//   ctx.closePath();
//   ctx.clip();

//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   // Создаем новый объект изображения, содержащий обрезанную область
//   var croppedImage = new Image();
//   croppedImage.src = canvas.toDataURL();
//   console.log(canvas.toDataURL());

//   // Добавляем обрезанное изображение на страницу
//   document.body.appendChild(croppedImage);
};


// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// let circlePath = new Path2D();
// circlePath.arc(150, 75, 75, 0, 2 * Math.PI);
// let squarePath = new Path2D();
// squarePath.rect(85, 10, 130, 130);

// ctx.clip(circlePath);
// // Set the clip to be the intersection of the circle and the square
// // ctx.clip(squarePath);

// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, canvas.width, canvas.height);
