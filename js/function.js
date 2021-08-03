$(function () {
    
	//로딩 애니메이션
	$(".loading > ol").fadeOut();
	$(".loading").delay(350).fadeOut(1500, function(){
		$(this).remove();
	});

  // header 영역
  const $gnb = $('header > .container > nav > .gnb');
  const $lnb = $('header > .container > nav .lnb');
  const $bg_lnb = $('header > .bg_lnb');

  $gnb.on('mouseover', function(){
    $lnb.stop().slideDown(300);
    $bg_lnb.stop().slideDown(300);
  });
  $gnb.on('mouseout', function(){
    $lnb.stop().slideUp(300);
    $bg_lnb.stop().slideUp(300);
  });

  $bg_lnb.on('mouseover', function(){
    $bg_lnb.stop().fadeIn(50);
    $lnb.stop().fadeIn(50);
  });

  $bg_lnb.on('mouseout', function(){
    $lnb.stop().fadeOut(50);
    $bg_lnb.stop().stop().slideUp(300);
  });

  // logo에 대한 click 이벤트 구문
  $('header > .container > .logo').on('click', function(){
      $('html,body').stop().animate({scrollTop:0});
  });

  $('footer > .footlogo > a').on('click', function(){
      $('html,body').stop().animate({scrollTop:0});
  });

  // load 이벤트는 화면에 내용이 나타난 시점에 발생
  $(window).on('load', function(){

      // 이벤트 강제발생 API
      $('header > .container > .logo ').trigger('click');
  });

  // top 버튼에 대한 click 이벤트 구문
  $('.top').on('click', function(){
    $('html,body').stop().animate({scrollTop:0});
  });

  $(window).scroll(function(){
    if($(this).scrollTop() < 1){
      $('.top').fadeOut();
    }else{
      $('.top').fadeIn();
    }
  });
  $('.top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  // gnb, lnb 메뉴 기본기능 방지
  $('header > .container > nav > .gnb > li > a').on('click', function(evt){
    evt.preventDefault();
  });
  $('header > .container > nav .lnb > li > a').on('click', function(evt){
    evt.preventDefault();
  });
    
  // cont1 영역
  const $indicator = $('.cont1 > .visual > .visual-pagination > li > a');
  let nowIdx = 0;
  
  const slideFn = function () {
    const $container = $('.cont1 > .visual > .visual-container');
    const $slides = $('.cont1 > .visual > .visual-container > li');
    
    $container.stop().animate({top:-500},function(){
      $slides.eq(0).appendTo($container);
      $container.css({top:0});
    });

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  };

  $indicator.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    slideFn();
  });

  // auto play
  const $btnAuto = $('.cont1 > .visual > .auto-play');

  let intervalKey;

  $btnAuto.on('click', function(){
    
    if($(this).hasClass('pause')){
      clearInterval(intervalKey);
      $(this).removeClass('pause');
      
    }else{
      autoPlay();
      $(this).addClass('pause');
    }

  });

  // 자동재생
  const autoPlay = function(){
    intervalKey = setInterval(function(){

      if(nowIdx<3){
        nowIdx++;
      }else{
        nowIdx=0;
      }
  
      slideFn();
    },3000);
  };

  $(window).on('load', function(){
    autoPlay();
  });
    
  $('.cont1 > .visual > .visual-container > li > a').on('click', function(evt){
    evt.preventDefault();
  });
    
  // cont2 영역
  // mnu
  const $mnu = $('.cont2 > .mnu > li > a');
  const $mnu_all = $('.cont2 > .all');

  let mnuIdx = 0;

  $mnu.on('click', function(evt){
    evt.preventDefault();

    mnuIdx = $mnu.index(this);

    $mnu.eq(mnuIdx).parent().addClass('on').siblings().removeClass('on');

    $mnu_all.eq(mnuIdx).show().siblings('.all').hide();
    bestIdx = 0;
  });

  $(window).on('load', function(){
    $mnu_all.hide();

    $mnu_all.filter('.on').show();
  });

  // 슬라이드
  const $cofMnu = $('.cont2 > .all-coffee > .mnubox > .coffee');
  const $beMnu = $('.cont2 > .all-beverage > .mnubox > .beverage');
  const $iceMnu = $('.cont2 > .all-icecream > .mnubox > .icecream');
  const $deMnu = $('.cont2 > .all-dessert > .mnubox > .dessert');
  const $paMnu = $('.cont2 > .all-paiksccino > .mnubox > .paiksccino');

  let bestIdx = 0;

  // 이전다음 버튼
  const $btnPrev1 = $('.cont2 > .all-coffee > .btn > .prev');
  const $btnNext1 = $('.cont2 > .all-coffee > .btn > .next');
  const $btnPrev2 = $('.cont2 > .all-beverage > .btn > .prev');
  const $btnNext2 = $('.cont2 > .all-beverage > .btn > .next');
  const $btnPrev3 = $('.cont2 > .all-icecream > .btn > .prev');
  const $btnNext3 = $('.cont2 > .all-icecream > .btn > .next');
  const $btnPrev4 = $('.cont2 > .all-dessert > .btn > .prev');
  const $btnNext4 = $('.cont2 > .all-dessert > .btn > .next');
  const $btnPrev5 = $('.cont2 > .all-paiksccino > .btn > .prev');
  const $btnNext5 = $('.cont2 > .all-paiksccino > .btn > .next');

  // coffee 이전 버튼
  $btnPrev1.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);
    
    if(bestIdx > 0){
      bestIdx--;
    }else{
      bestIdx = 0;
    }
    
    $cofMnu.stop().animate({
    left : -480*bestIdx
    });
  });

  // coffee 다음 버튼
  $btnNext1.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);

    if(bestIdx < 3){
      bestIdx++;
    }else{
      bestIdx = 3;
    }

    $cofMnu.stop().animate({
    left : -480*bestIdx
    });
  });

  // beverage 이전 버튼
  $btnPrev2.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);
    
    if(bestIdx > 0){
      bestIdx--;
    }else{
      bestIdx = 0;
    }
    
    $beMnu.stop().animate({
    left : -480*bestIdx
    });
  });
  
  // beverage 다음 버튼
  $btnNext2.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);

    if(bestIdx < 3){
      bestIdx++;
    }else{
      bestIdx = 3;
    }

    $beMnu.stop().animate({
    left : -480*bestIdx
    });
  });
  
  // icecream 이전 버튼
  $btnPrev3.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);
    
    if(bestIdx > 0){
      bestIdx--;
    }else{
      bestIdx = 0;
    }
    
    $iceMnu.stop().animate({
      left : -480*bestIdx
    });
  });
  
  // icecream 다음 버튼
  $btnNext3.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);
    
    if(bestIdx < 2){
      bestIdx++;
    }else{
      bestIdx = 2;
    }
    
    $iceMnu.stop().animate({
      left : -480*bestIdx
    });
  });

  // dessert 이전 버튼
  $btnPrev4.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);
    
    if(bestIdx > 0){
      bestIdx--;
    }else{
      bestIdx = 0;
    }
    
    $deMnu.stop().animate({
    left : -480*bestIdx
    });
  });
  
  // dessert 다음 버튼
  $btnNext4.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);

    if(bestIdx < 3){
      bestIdx++;
    }else{
      bestIdx = 3;
    }

    $deMnu.stop().animate({
    left : -480*bestIdx
    });
  });

  // paiksccino 이전 버튼
  $btnPrev5.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);
    
    if(bestIdx > 0){
      bestIdx--;
    }else{
      bestIdx = 0;
    }
    
    $paMnu.stop().animate({
    left : -480*bestIdx
    });
  });
  
  // paiksccino 다음 버튼
  $btnNext5.on('click', function(evt){
    evt.preventDefault();
    
    // bestIdx = $slideMnu.index(this);

    if(bestIdx < 3){
      bestIdx++;
    }else{
      bestIdx = 3;
    }

    $paMnu.stop().animate({
    left : -480*bestIdx
    });
  });
  
  // coffee a에 대한 click 이벤트
  const $coffee = $('.cont2 > .all-coffee > .mnubox > .coffee > li > a');
  const $tbox1 = $('.cont2 > .all-coffee .tbox');
  const $close1 = $('.cont2 > .all-coffee .tbox > a');

  $coffee.on('click', function (evt) {
    evt.preventDefault();

    $tbox1.stop().fadeIn(300);
  });

  $close1.on('click', function (evt) {
    evt.preventDefault();

    $tbox1.stop().fadeOut(300);
  });

  // beverage a에 대한 click 이벤트
  const $beverage = $('.cont2 > .all-beverage > .mnubox > .beverage > li > a');
  const $tbox2 = $('.cont2 > .all-beverage .tbox');
  const $close2 = $('.cont2 > .all-beverage .tbox > a');

  $beverage.on('click', function (evt) {
    evt.preventDefault();

    $tbox2.stop().fadeIn(300);
  });

  $close2.on('click', function (evt) {
    evt.preventDefault();

    $tbox2.stop().fadeOut(300);
  });

  // icecream a에 대한 click 이벤트
  const $icecream = $('.cont2 > .all-icecream > .mnubox > .icecream > li > a');
  const $tbox3 = $('.cont2 > .all-icecream .tbox');
  const $close3 = $('.cont2 > .all-icecream .tbox > a');

  $icecream.on('click', function (evt) {
    evt.preventDefault();

    $tbox3.stop().fadeIn(300);
  });

  $close3.on('click', function (evt) {
    evt.preventDefault();

    $tbox3.stop().fadeOut(300);
  });

  // dessert a에 대한 click 이벤트
  const $dessert = $('.cont2 > .all-dessert > .mnubox > .dessert > li > a');
  const $tbox4 = $('.cont2 > .all-dessert .tbox');
  const $close4 = $('.cont2 > .all-dessert .tbox > a');

  $dessert.on('click', function (evt) {
    evt.preventDefault();

    $tbox4.stop().fadeIn(300);
  });

  $close4.on('click', function (evt) {
    evt.preventDefault();

    $tbox4.stop().fadeOut(300);
  });

  // paiksccino a에 대한 click 이벤트
  const $paiksccino = $('.cont2 > .all-paiksccino > .mnubox > .paiksccino > li > a');
  const $tbox5 = $('.cont2 > .all-paiksccino .tbox');
  const $close5 = $('.cont2 > .all-paiksccino .tbox > a');

  $paiksccino.on('click', function (evt) {
    evt.preventDefault();

    $tbox5.stop().fadeIn(300);
  });

  $close5.on('click', function (evt) {
    evt.preventDefault();

    $tbox5.stop().fadeOut(300);
  });


  // .allmnu 기본기능 방지
  $('.cont2 > .allmnu').on('click', function(evt){
    evt.preventDefault();
  });


  // cont3 영역
  const $slide = $('.cont3 > .slide > .slide-container > li');
  const $storyIndic = $('.cont3 > .slide > .pagination > li > a');
  const $btnPrev = $('.cont3 > .slide > .story-prev');
  const $btnNext = $('.cont3 > .slide > .story-next');

  let storIdx = 0;

  // 페이드 함수
  const fadeFn = function(){
    // 이전 슬라이드 사라지게
    $slide.filter('.on').stop().fadeOut(200).removeClass('on');

    // 이번에 나타날 슬라이드
    $slide.eq(storIdx).stop().fadeIn().addClass('on');

    $storyIndic.eq(storIdx).parent().addClass('on').siblings().removeClass('on');
  };

  $storyIndic.on('click', function(evt){
    evt.preventDefault();

    storIdx = $storyIndic.index(this);

    fadeFn();
  });

  // 이전버튼
  $btnPrev.on('click', function(evt){
    evt.preventDefault();

    if (storIdx > 0) {
      storIdx--;
    } else {
      storIdx = 3;
    }

    fadeFn();
  });

    // 다음버튼
  $btnNext.on('click', function(evt){
    evt.preventDefault();

    if (storIdx < 3) {
      storIdx++;
    } else {
      storIdx = 0;
    }

    fadeFn();
  });


  // footer 영역
  // 패밀리사이트
  $('footer > .family_site > a').click(function(evt) {
    evt.preventDefault();
		$('footer > .family_site > .fmenu').slideToggle(300);
	})
});