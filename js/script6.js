$('.tabSet').each(function(){
    let tapDiv=$(this);   //tabSet(2개)을 this로 담음
    let anchors=tapDiv.find('.tabs a');  //a(모든 li)를 anchors 이름으로 담음
    let panelDivs=tapDiv.find('.panel');
    let lastAnchor;
    let lastPanel;

    lastAnchor=anchors.filter('.on'); // a태그에 .on있는것들을 골라서 lastAnchor에 넣음
    lastPanel=$(lastAnchor.attr('href')); //href 속성값을 갖고있는 lastAnchor를 lastPanel에 넣음

    panelDivs.hide();
    lastPanel.show();
    
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