 window.onload = function() {
     var container = document.getElementById('all_wrap');
     var list = document.getElementById('img_wrap');
     var button = document.getElementById('buttons_wrap').getElementsByTagName('span');
     var prev = document.getElementById('prev');
     var next = document.getElementById('next');
     var index = 1;
     var animated = false;
     var timer;

     function animate(offset) {
         animated = true;

         var new_left = parseInt(list.style.left) + offset;
         var time = 300;
         var interval = 4;
         var speed = offset / (time / interval);

         function go() {
             if ((speed < 0 && parseInt(list.style.left) > new_left) || (speed > 0 && parseInt(list.style.left) < new_left)) {
                 list.style.left = parseInt(list.style.left) + speed + 'px';
                 setTimeout(go, interval);
             } else {
                 animated = false;
                 list.style.left = new_left + 'px';
                 if (new_left > -500) {
                     list.style.left = -2500 + 'px';
                 };
                 if (new_left < -2500) {
                     list.style.left = -500 + 'px';
                 };
             }
         }

         go();

     };

     function showbutton() {
         for (var i = 0; i < button.length; i++) {
             if (button[i].className == 'on') {
                 button[i].className = '';
                 break;
             };
         }
         button[index - 1].className = 'on';

     }

     for (var i = 0; i < button.length; i++) {
         button[i].onclick = function() {
             if (this.className == 'on') {
                 return;
             };
             var myIndex = parseInt(this.getAttribute('index'));
             var offset = -500 * (myIndex - index);
             if (!animated) {
                 animate(offset);
             };
             index = myIndex;
             showbutton();
         }
     };

     next.onclick = function() {
         if (!animated) {
             animate(-500);
         };

         if (index == 5) {
             index = 1;
         } else {
             index += 1;
         };
         showbutton();
     };

     function play() {
             timer = setInterval(function() {
                 next.onclick();
             }, 3000);
         } //自动播放

     function stop() {
             clearInterval(timer);
         } //播放停止

     prev.onclick = function() {
         if (!animated) {
             animate(500);
         };
         if (index == 1) {
             index = 5;
         } else {
             index -= 1;
         };
         showbutton();
     };

     container.onmouseover = stop;
     container.onmouseout = play;

     play();
 };
