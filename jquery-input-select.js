$(function(){
    $(".select-box em").on("click",function(e){
        if($(this).parent().hasClass("page")){
            var dlH = $(this).next("dl").height();      
            $(this).next("dl").show(500).css({
                "top":-dlH+"px"
            });
        }
        $(this).find("i").toggleClass("transform");
        $(this).next("dl").show(500); 
        e.stopPropagation();
    });  
    $(".select-box dt").on("click",function(){
        var sText=$(this).html();
        var sTitle_2=$(this).parent('dl').prev("em").children("b");
        sTitle_2.html(sText);
        $(this).parent('dl').hide();
        $(this).parent('dl').prev("em").children("i").toggleClass("transform");  
    });
    $(document).click(function(){
        $(".select-box dl").hide();  
        $(".select-box em").find("i").removeClass("transform");
    }); 
});