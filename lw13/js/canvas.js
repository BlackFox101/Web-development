window.onload = () => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  Kyle();
  Cartman();

  function Kyle() {
    //Штаны
    ctx.beginPath();
    ctx.rect(230, 310, 150, 90);
    ctx.strokeStyle = '#0c6863';
    ctx.fillStyle = '#0c6863';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Ноги
    ctx.beginPath();
    ctx.moveTo(320, 400);
    ctx.quadraticCurveTo(280,387,220, 400)
    ctx.strokeStyle = '#312c33';
    ctx.fillStyle = '#312c33';
    ctx.fill()
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(270, 400);
    ctx.quadraticCurveTo(350,390,390, 400)
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Курта
    ctx.beginPath();
    ctx.moveTo(230, 300);
    ctx.quadraticCurveTo(205,335,205, 360)
    ctx.lineTo(230, 360);
    ctx.lineTo(220, 375);
    ctx.quadraticCurveTo(320,390,390, 370)
    ctx.lineTo(397, 360);
    ctx.quadraticCurveTo(403,332,370, 290)
    ctx.strokeStyle = '#ef570e';
    ctx.fillStyle = '#ef570e';
    ctx.fill()
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(301, 320);
    ctx.lineTo(301, 385);
    ctx.strokeStyle = '#130f0e';
    ctx.fillStyle = '#130f0e';
    ctx.fill()
    ctx.stroke();
    ctx.closePath();

    //------------------------------------------------------------

    //Подмышка левая
    ctx.beginPath();
    ctx.moveTo(232, 333);
    ctx.quadraticCurveTo(225,347,226, 360)
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = '#3c383c';
    ctx.fillStyle = '#3c383c';
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Левая рука
    ctx.beginPath();
    ctx.arc(215, 360, 14, 0, 2 * Math.PI);
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#40ae35';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(225, 357, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Подмышка правая
    ctx.beginPath();
    ctx.moveTo(370, 333);
    ctx.quadraticCurveTo(376,349,377, 360)
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = '#3c383c';
    ctx.fillStyle = '#3c383c';
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Правая рука
    ctx.beginPath();
    ctx.arc(387, 363, 14, 0, 2 * Math.PI);
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#40ae35';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(376, 360, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Воротник
    ctx.beginPath();
    ctx.moveTo(228, 300);
    ctx.quadraticCurveTo(250,330,290, 337);
    ctx.quadraticCurveTo(299,337,300, 333);
    ctx.quadraticCurveTo(310,342,350, 325);
    ctx.quadraticCurveTo(374,312,378, 300);
    ctx.quadraticCurveTo(381,285,370, 290);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#00a53f';
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Карман левый
    ctx.beginPath();
    ctx.moveTo(252, 342);
    ctx.lineTo(279, 342);
    ctx.lineTo(279, 370);
    ctx.lineTo(252, 370);
    ctx.lineTo(252, 342);
    ctx.lineTo(265, 355);
    ctx.lineTo(279, 342);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Карман правый
    ctx.beginPath();
    ctx.moveTo(321, 342);
    ctx.lineTo(344, 342);
    ctx.lineTo(344, 370);
    ctx.lineTo(320, 370);
    ctx.lineTo(321, 342);
    ctx.lineTo(333, 355);
    ctx.lineTo(344, 342);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------.

    //Голова
    ctx.beginPath();
    ctx.arc(300, 230, 100, 0, 2 * Math.PI);
    ctx.strokeStyle = '#ffedbf';
    ctx.fillStyle = '#ffedbf';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Шапка
    ctx.beginPath();
    ctx.moveTo(210, 201);
    ctx.lineTo(210, 140);
    ctx.arc(230, 140, 20, 0, 1.5 * Math.PI);
    ctx.lineTo(370, 120);
    ctx.moveTo(370, 120);
    ctx.arc(370, 140, 20, 0, 2 * Math.PI);
    ctx.lineTo(390, 200);
    ctx.lineTo(210, 200);
    ctx.strokeStyle = '#43b136';
    ctx.fillStyle = '#43b136';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(208, 220, 15, 45, Math.PI / 8, 0, 2 * Math.PI);
    ctx.moveTo(405, 215);
    ctx.ellipse(390, 220, 15, 45, Math.PI / -8, 0, 2 * Math.PI);
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(223, 210);
    ctx.lineTo(223, 150);
    ctx.lineTo(377, 150);
    ctx.lineTo(377, 210);
    ctx.quadraticCurveTo(300,195,223, 210);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#01a640';
    ctx.fillStyle = '#01a640';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //------------------------------------------------------------

    //Лицо
    ctx.beginPath();
    ctx.ellipse(280, 233, 23, 28, Math.PI / 4, 0, 2 * Math.PI);
    ctx.moveTo(331, 233);
    ctx.ellipse(331, 233, 23, 28, Math.PI / -5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(290, 233, 2.3, 0, 2 * Math.PI);
    ctx.moveTo(320, 233);
    ctx.arc(320, 233, 2.3, 0, 2 * Math.PI);
    ctx.strokeStyle = '#211a21';
    ctx.fillStyle = '#211a21';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250, 210);
    ctx.lineTo(270, 200);
    ctx.moveTo(350, 210);
    ctx.lineTo(330, 200);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#282035';
    ctx.fillStyle = '#282035';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(280, 290);
    ctx.quadraticCurveTo(285,300,300, 310);
    ctx.quadraticCurveTo(319,305,330, 290);
    ctx.quadraticCurveTo(310,288,280, 290);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#282035';
    ctx.fillStyle = '#282035';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(287, 291);
    ctx.quadraticCurveTo(285,300,294, 298);
    ctx.lineTo(295, 291);
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(297, 291);
    ctx.quadraticCurveTo(293,302,306, 298);
    ctx.quadraticCurveTo(312,290,299, 291);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(310, 291);
    ctx.lineTo(310, 298);
    ctx.lineTo(318, 297);
    ctx.lineTo(320, 291);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(321, 291);
    ctx.lineTo(328, 291);
    ctx.quadraticCurveTo(328,295,319.5, 297);
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------
  }
  
  function Cartman() {
    //Штаны
    ctx.beginPath();
    ctx.moveTo(480, 350)
    ctx.lineTo(490, 400);
    ctx.lineTo(715, 400);
    ctx.lineTo(730, 350);
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = '#784833';
    ctx.fillStyle = '#784833';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Куртка
    ctx.beginPath();
    ctx.moveTo(500, 255);
    ctx.quadraticCurveTo(470,250,450, 300);
    ctx.quadraticCurveTo(470,340,470, 350);
    ctx.quadraticCurveTo(475,355,475, 355);
    ctx.quadraticCurveTo(500,380,560, 385);
    ctx.lineTo(600, 385);
    ctx.quadraticCurveTo(625,380,650, 372);
    ctx.quadraticCurveTo(700,370,700, 368);
    ctx.quadraticCurveTo(700,370,730, 362);
    ctx.quadraticCurveTo(750,350,745, 300);
    ctx.quadraticCurveTo(735,300,745, 291);
    ctx.quadraticCurveTo(737,291,735, 284);
    ctx.quadraticCurveTo(720,255,700, 260);
    ctx.strokeStyle = '#da2344';
    ctx.fillStyle = '#da2344';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(608, 300);
    ctx.lineTo(606, 386);
    ctx.moveTo(599, 326);
    ctx.ellipse(599, 326, 3, 1.5, Math.PI / 2, 0, 2 * Math.PI);
    ctx.moveTo(602, 350);
    ctx.ellipse(602, 350, 3, 1.5, Math.PI / 2, 0, 2 * Math.PI);
    ctx.moveTo(599, 375);
    ctx.ellipse(599, 375, 3, 1.5, Math.PI / 2, 0, 2 * Math.PI);
    ctx.strokeStyle = '#231e21';
    ctx.fillStyle = '#231e21';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Ноги
    ctx.beginPath();
    ctx.moveTo(720, 400);
    ctx.quadraticCurveTo(650,385,605, 400);
    ctx.quadraticCurveTo(590,387,485, 394);
    ctx.quadraticCurveTo(480,399,490, 400);
    ctx.strokeStyle = '#383138';
    ctx.fillStyle = '#383138';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Левая рука
    ctx.beginPath();
    ctx.moveTo(450, 290)
    ctx.quadraticCurveTo(440,315,465, 326);
    ctx.quadraticCurveTo(490,327,500, 325);
    ctx.quadraticCurveTo(505,320,500, 315);
    ctx.quadraticCurveTo(497,310,495, 305);
    ctx.quadraticCurveTo(470, 280, 450, 290);
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = '#f9dc02';
    ctx.fillStyle = '#f9dc02';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Правая рука
    ctx.beginPath();
    ctx.moveTo(750, 290);
    ctx.lineTo(720, 295);
    ctx.quadraticCurveTo(715,310,705, 320);
    ctx.quadraticCurveTo(697,330,719, 329);
    ctx.quadraticCurveTo(740,345,760, 333);
    ctx.quadraticCurveTo(760,300,750, 290);
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = '#f9dc02';
    ctx.fillStyle = '#f9dc02';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Голова
    ctx.beginPath();
    ctx.ellipse(600, 220, 120, 100, Math.PI, 0, 2 * Math.PI);
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = '#ffedbf';
    ctx.fillStyle = '#ffedbf';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Шапка
    ctx.beginPath();
    ctx.ellipse(600, 220, 120, 100, Math.PI,  2.05 * Math.PI, 0.9 * Math.PI);
    ctx.quadraticCurveTo(600,150,483, 202);
    ctx.strokeStyle = '#45aeb6';
    ctx.fillStyle = '#45aeb6';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(480, 204);
    ctx.lineTo(478, 210);
    ctx.quadraticCurveTo(600, 150, 718, 197);
    ctx.lineTo(715, 190);
    ctx.quadraticCurveTo(600, 145, 480, 202);
    ctx.strokeStyle = '#fdde00';
    ctx.fillStyle = '#fdde00';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(600, 110);
    ctx.quadraticCurveTo(587, 111, 585, 117);
    ctx.quadraticCurveTo(580, 116, 570, 124);
    ctx.quadraticCurveTo(567, 127, 570, 130);
    ctx.quadraticCurveTo(579, 130, 587, 125);
    ctx.lineTo(587, 132);
    ctx.quadraticCurveTo(595, 129, 597, 127);
    ctx.quadraticCurveTo(603, 133, 613, 127);
    ctx.lineTo(622, 127);
    ctx.lineTo(626, 122);
    ctx.quadraticCurveTo(617, 115, 613, 117);
    ctx.quadraticCurveTo(615, 112, 600, 108);
    ctx.lineTo(600, 110);
    ctx.strokeStyle = '#fdde00';
    ctx.fillStyle = '#fdde00';
    ctx.fill();
    ctx.stroke();
    //------------------------------------------------------------

    //Лицо
    ctx.beginPath();
    ctx.ellipse(570, 208, 22, 27, Math.PI / 4, 0, 2 * Math.PI);
    ctx.moveTo(620, 208);
    ctx.ellipse(620, 209, 22, 28, Math.PI / -5, 0, 2 * Math.PI);
    ctx.strokeStyle = '#b6917d';
    ctx.fillStyle = '#b6917d';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(570, 210, 23, 28, Math.PI / 4, 0, 2 * Math.PI);
    ctx.moveTo(620, 208);
    ctx.ellipse(620, 210, 23, 28, Math.PI / -5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(580, 208, 2.3, 0, 2 * Math.PI);
    ctx.moveTo(610, 208);
    ctx.arc(610, 208, 2.3, 0, 2 * Math.PI);
    ctx.strokeStyle = '#211a21';
    ctx.fillStyle = '#211a21';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(600, 220, 115, 89, 0, Math.PI / 6,   0.79 * Math.PI);
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = '#282035';
    ctx.fillStyle = '#282035';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(617, 275);
    ctx.quadraticCurveTo(585, 270, 573, 279);
    ctx.lineTo(589, 293);
    ctx.quadraticCurveTo(597, 294, 603, 296);
    ctx.quadraticCurveTo(611, 296.5, 617, 293);
    ctx.quadraticCurveTo(623, 285, 625, 278);
    ctx.quadraticCurveTo(623, 275, 617, 275);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#282035';
    ctx.fillStyle = '#282035';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(620, 277);
    ctx.quadraticCurveTo(615, 278, 607, 277);
    ctx.lineTo(607, 282);
    ctx.lineTo(618, 282);
    ctx.quadraticCurveTo(622, 282, 620, 277);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(604, 278);
    ctx.lineTo(604, 282);
    ctx.quadraticCurveTo(590, 282, 593, 280);
    ctx.quadraticCurveTo(593, 275, 604, 278);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(590, 277);
    ctx.quadraticCurveTo(585, 278, 583, 281);
    ctx.quadraticCurveTo(591, 284, 590, 277);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(630, 299);
    ctx.quadraticCurveTo(610, 305, 580, 299);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#282035';
    ctx.stroke();
    //------------------------------------------------------------
  }
}
