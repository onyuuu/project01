$(function(){
    const slideLists=$('.slideList li');
    const prevbtn=$('.btnSlidePrev');
    const nextbtn=$('.btnSlideNext');
    const btnSlideppbtn=$('.btnSlidepp');
    let current=0;
    let setIntervalId=undefined;
    let ppbtn=true;

    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prev=slideLists.eq(current);
            move(prev, 0, '-100%');
            current++;
            if(current==8){current=0}
            let next=slideLists.eq(current);
            move(next, '100%', 0);
        },2000);
    }

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500);
    }

    //마우스 올리면 멈춤
    $('.slideArea').hover(function(){
        clearInterval(setIntervalId);
    }, function(){
        timer();
    });

    //다음 슬라이드 버튼
    nextbtn.click(function(){
        let prev=slideLists.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current==8){current=0}
        let next=slideLists.eq(current);
        move(next, '100%', 0)
    });

    //이전 슬라이드 버튼
    prevbtn.click(function(){
        let prev=slideLists.eq(current);
        move(prev, 0, '100%');
        current--;
        if(current==-8){current=0}
        let next=slideLists.eq(current);
        move(next, '-100%', 0)
    });

    //슬라이드 정지,재생 버튼
    btnSlideppbtn.click(function(){
        if(ppbtn==true){
            $(this).addClass('add');
            clearInterval(setIntervalId);
            ppbtn=false;

        }else{
            $(this).removeClass('add');
            timer();
            ppbtn=true;
        }
    });
});



// 지도

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.4966662, 126.78723), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var markerPosition  = new kakao.maps.LatLng(37.4966662, 126.78723); 
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);





//최신 일자리 정책/정보 모아보기 탭

$(".tabSet .play>li:eq(1)").click(function(){
    clearTimeout(rolling);  
    return false;   
});

$('.tabSet').each(function(){
    let tapDiv=$(this);   //tabSet(2개)을 this로 담음
    let anchors=tapDiv.find('.tabs div a');  //a(모든 li)를 anchors 이름으로 담음
    let panelDivs=tapDiv.find('.panel');
    let lastAnchor;
    let lastPanel;

    lastAnchor=anchors.filter('.on'); // a태그에 .on있는것들을 골라서 lastAnchor에 넣음
    lastPanel=$(lastAnchor.attr('href')); //href 속성값을 갖고있는 lastAnchor를 lastPanel에 넣음

    panelDivs.hide(); // (css 12, 13 주석) 없을때
    lastPanel.show(); // (css 12, 13 주석) 없을때
    
    anchors.click(function(e){ 
        e.preventDefault();    //a태그 링크이동 기능을 막아둠
        let currentAnchor=$(this); //this는 클릭한 anchors를 말함
        let currentPanel=$(currentAnchor.attr('href'));
        lastAnchor.removeClass('on'); //현재보이고있는것에서 on 없앰
        currentAnchor.addClass('on');  //

        lastPanel.hide();
        currentPanel.show();

        lastAnchor=currentAnchor; //글자들이 계속 겹쳐보이는 것을 해결
        lastPanel=currentPanel;
    });
});
