//Adaptive functions
	let move_array=[];
if($('*[data-move]')){
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
			$(this).attr('data-move-index',index);
			move_array[index]={
				'parent':$(this).parent(),
				"index":$(this).index()
			};
		}
	});
}
function dynamic_adaptive(){
		let w=$(window).outerWidth();
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
				let dat_array=$(this).data('move').split(',');
				let dat_parent=$('.'+dat_array[0]);
				let dat_index=dat_array[1];
				let dat_bp=dat_array[2];
			if(w<dat_bp){
				if(!$(this).hasClass('js-move_done_'+dat_bp)){
					if(dat_index>0){
						$(this).insertAfter(dat_parent.find('*').eq(dat_index-1));
					}else{
						$(this).prependTo(dat_parent);
					}
					$(this).addClass('js-move_done_'+dat_bp);
				}
			}else{
				if($(this).hasClass('js-move_done_'+dat_bp)){
					dynamic_adaptive_back($(this));
					$(this).removeClass('js-move_done_'+dat_bp);
				}
			}
		}
	});
}
function dynamic_adaptive_back(el){
		let index_original=el.data('move-index');
		let move_place=move_array[index_original];
		let parent_place=move_place['parent'];
		let index_place=move_place['index'];
	if(index_place>0){
		el.insertAfter(parent_place.find('*').eq(index_place-1));
	}else{
		el.prependTo(parent_place);
	}
}
$(window).resize(function(event) {
	dynamic_adaptive();
});
	dynamic_adaptive();

//console.log(move_array);

/*
function dynamic_adaptive_back_all(){
	$.each($('*[data-move]'), function(index, val) {
			let index_original=$(this).data('move-index');
			let move_place=move_array[index_original];
			let parent_place=move_place['parent'];
			let index_place=move_place['index'];
		if(index_place>0){
			$(this).insertAfter(parent_place.find('*').eq(index_place-1));
		}else{
			$(this).prependTo(parent_place);
		}
	});
}
*/;
//Menu


var iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
   var delay = 500;
   var body = document.querySelector("body");
   var menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", function (e) {
      if (!body.classList.contains('_wait')) {
         body_lock(delay);
         iconMenu.classList.toggle("active");
         menuBody.classList.toggle("active");
      }
   });
}

;

function menu_close() {
   var iconMenu = document.querySelector(".icon-menu");
   var menuBody = document.querySelector(".menu__body");
   iconMenu.classList.remove("active");
   menuBody.classList.remove("active");
} //=================
//BodyLock


function body_lock(delay) {
   var body = document.querySelector("body");

   if (body.classList.contains('lock')) {
      body_lock_remove(delay);
   } else {
      body_lock_add(delay);
   }
}

function body_lock_remove(delay) {
   var body = document.querySelector("body");

   if (!body.classList.contains('_wait')) {
      var lock_padding = document.querySelectorAll("._lp");
      setTimeout(function () {
         for (var index = 0; index < lock_padding.length; index++) {
            var el = lock_padding[index];
            el.style.paddingRight = '0px';
         }

         body.style.paddingRight = '0px';
         body.classList.remove("lock");
      }, delay);
      body.classList.add("_wait");
      setTimeout(function () {
         body.classList.remove("_wait");
      }, delay);
   }
}

function body_lock_add(delay) {
   var body = document.querySelector("body");

   if (!body.classList.contains('_wait')) {
      var lock_padding = document.querySelectorAll("._lp");

      for (var index = 0; index < lock_padding.length; index++) {
         var el = lock_padding[index];
         el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }

      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      body.classList.add("lock");
      body.classList.add("_wait");
      setTimeout(function () {
         body.classList.remove("_wait");
      }, delay);
   }
} //=================

//=====затемнение фона hedera
let upButton = document.querySelector('.header');  /*нашли хедер*/

window.onscroll = function () {            /*функция при прокручивании*/
   if (window.pageYOffset > 80) {				/* если прокрутил больше чем на 200px*/
      upButton.classList.add('dark');		/*добавялется класс нашей кнопке и она появляется*/
   } else {
      upButton.classList.remove('dark'); /* если меньше то класс удаляется и кнопка исчезает*/
   }
};
// upButton.onclick = function () {
//    window.scrollTo(0, 0);  		/*при нажатии на кпноку прокрутить в начало координат*/
// };
;
