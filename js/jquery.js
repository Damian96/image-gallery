var slide_images = new Array();
var i=0;
var new_src = 0;
var z = 0;
var curr_img = $("#main-img");
var flag2 = 0;
var a = $( window ).innerWidth();
var b = $( window ).innerHeight();
var c = $( window ).scrollTop();

if((a>=780) && (a<1280)){
	var thumb_w = 80;
	var thumb_h = 30;
}else if(a<=1349){
	var thumb_w = 100;
	var thumb_h = 50;
}else{
	var thumb_w = 250;
	var thumb_h = 200;
}

$(".gallery-img").each(function(){
	slide_images[i] = $(this);
	i++;
});

var num_of_imgs = slide_images.length;

$(".gallery-img").click(function(){
	var a = $( window ).innerWidth();
	var b = $( window ).innerHeight();
	var c = $( window ).scrollTop();
	var w = a*2/4;
	var h = b*3.5/4;
	var l = (a/2) - (w/2);
	var t = c + (b/2) - (h/2);
	var main_w = w - 50;
	var main_h = h - 250;
	var src = $(this).attr("src");
	
	$("#overlay").show();
	$("#thumbnails").show();
	
	$("#gallery").show();
	$("#gallery").css({ "width": w,"height": h,"top": t,"left": l });

	var exit_left = ($("#exit").width()/2)*(-1);
	var exit_top = ($("#exit").height()/2)*(-1);
	
	$("#exit").css({ "margin-top": exit_top, "margin-left": exit_left });
	
	var pl = (w - main_w) / 2;
	var nl = pl + main_w - 27;
	var at = (main_h/2) - 57/2;
	
	$("#next").css({ "left": nl, "top": at });
	$("#prev").css({ "left": pl, "top": at });
	
	
	$("#main-img").attr("src",src);
	$("#main-img").css({ "width": main_w, "height": main_h, "margin": "auto", "margin-top": "50px", "margin-bottom": "30px"});
	
	
	$("#thumbnails").css( "margin-bottom", 	"10px");
	$(".thumbnail").each(function(){
		$(this).width(thumb_w);
		$(this).height(thumb_h);
		i++;
	});
});


$("#exit").click(function(){
	$("#gallery").hide();
	$("#overlay").hide();
});

$("#overlay").click(function(){
    $("#gallery").hide();
    $(this).hide();
});

$(".thumbnail").click(function(src){
	src = $(this).attr("src");
	$("#main-img").attr("src",src);
	flag2 = 1;
});

$("#next").click(function(){
	j=0;
	var flag = 0;
	while ((flag!=1) && (j<=num_of_imgs)){
		if($("#main-img").attr("src") == slide_images[j].attr("src")){
			if(j==(num_of_imgs - 1)){
				j = 0;;
			}else{
				j++;
			}
			var new_src = slide_images[j].attr("src");
			$("#main-img").attr("src",new_src);
			flag = 1;
		}
		j++;
	}
});

$("#prev").click(function(){
	j=0;
	var flag = 0;
	while ((flag!=1) && (j<=num_of_imgs)){
		if($("#main-img").attr("src") == slide_images[j].attr("src")){
			if(j==0){
				j = (num_of_imgs - 1);
			}else{
				j--;
			}
			new_src = slide_images[j].attr("src");
			$("#main-img").attr("src",new_src);
			flag = 1;
		}
		j++;
	}
});

$(document).keydown(function(e) {
    switch(e.which) {
        case 8:
            $("#gallery").hide();
            $("#overlay").hide();
        break;
        case 27: // escape
            $("#gallery").hide();
            $("#overlay").hide();
        break;
            
        case 37: // left
            j=0;
            var flag = 0;
            while ((flag!=1) && (j<=num_of_imgs)){
                if($("#main-img").attr("src") == slide_images[j].attr("src")){
                    if(j==0){
                        j = (num_of_imgs - 1);
                    }else{
                        j--;
                    }
                    new_src = slide_images[j].attr("src");
                    $("#main-img").attr("src",new_src);
                    flag = 1;
                }
                j++;
            }
        break;

        case 39: // right
            j=0;
            var flag = 0;
            while ((flag!=1) && (j<=num_of_imgs)){
                if($("#main-img").attr("src") == slide_images[j].attr("src")){
                    if(j==(num_of_imgs - 1)){
                        j = 0;
                    }else{
                        j++;
                    }
                    var new_src = slide_images[j].attr("src");
                    $("#main-img").attr("src",new_src);
                    flag = 1;
                }
                j++;
            }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});