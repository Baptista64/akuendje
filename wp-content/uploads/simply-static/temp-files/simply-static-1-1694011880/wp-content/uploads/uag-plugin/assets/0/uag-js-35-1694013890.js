document.addEventListener("DOMContentLoaded", function(){ window.addEventListener("DOMContentLoaded", function(){
	UAGBTimelineClasses( {"block_id":"fbde8e62-fc3a-4845-a0ef-7638f7a6640d","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-fbde8e62-fc3a-4845-a0ef-7638f7a6640d' );
});
window.addEventListener("resize", function(){
	UAGBTimelineClasses( {"block_id":"fbde8e62-fc3a-4845-a0ef-7638f7a6640d","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-fbde8e62-fc3a-4845-a0ef-7638f7a6640d' );
});
var selector = document.querySelectorAll( '.uagb-block-c2670e23' );
if ( selector.length > 0 ) {

	var blockquote__tweet = selector[0].getElementsByClassName("uagb-blockquote__tweet-button");

	if ( blockquote__tweet.length > 0 ) {

		blockquote__tweet[0].addEventListener("click",function(){	
			var request_url = "https://twitter.com/share?url="+ encodeURIComponent("http://localhost/akuendje/sobre")+"&text="+("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.")+"&via="+("");
			window.open( request_url );
		});
	}
}
 });