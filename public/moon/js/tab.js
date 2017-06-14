$(function(){// $ methods go here...
	

	$(".ui-tabs").tabs({
               heightStyle:"fill",
               collapsible:true,
               hide:"slideUp"
    });
        // select: function(event, ui) {
        //     $(ui.panel).animate({opacity:0.1});
        // },
        // show: function(event, ui) {
        //     $(ui.panel).animate({opacity:1.0},1000);
        // }

    $("#tab1").tabs({
               heightStyle:"fill",
               collapsible:true,
               hide:"slideUp"
    });
   

	$('.tabs .tab-links a').click(function(e){
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });


});