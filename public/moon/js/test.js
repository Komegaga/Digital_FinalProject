$(function(){// $ methods go here...
	
// test down scroll	
	$('#poll').click(function(){
        $('html,body').animate({scrollTop:$('#one').offset().top},800);
    });
	
	let items = [item1, item2, item3, item4, item5,
				item6, item7, item8, item9];

	let score = 0;

	for (let item of items){
		$(item).click(function Change(){
			if(item.style.backgroundColor == "red"){
				item.style.backgroundColor = "#192024";
				score -= 1;
			} else {
				item.style.backgroundColor = "red"
				score += 1;
			} 
		});
	}
		
	$('#submit').click(function Change(){

		if (score > 4 ){
			alert("你很懂越南喔！");
		} else {
			 $('html,body').animate({scrollTop:$('#two').offset().top},800);
			//location.href = "left-sidebar.html";
		}

	});

	
});