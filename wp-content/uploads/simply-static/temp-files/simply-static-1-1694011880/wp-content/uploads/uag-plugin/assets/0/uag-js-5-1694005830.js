document.addEventListener("DOMContentLoaded", function(){ window.addEventListener("DOMContentLoaded", function(){
	UAGBTimelineClasses( {"block_id":"75027472-8b0f-433d-b841-e4ad5e81778f","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-75027472-8b0f-433d-b841-e4ad5e81778f' );
});
window.addEventListener("resize", function(){
	UAGBTimelineClasses( {"block_id":"75027472-8b0f-433d-b841-e4ad5e81778f","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-75027472-8b0f-433d-b841-e4ad5e81778f' );
});
var selector = document.querySelectorAll( '.uagb-block-2a623d93' );
if ( selector.length > 0 ) {

	var blockquote__tweet = selector[0].getElementsByClassName("uagb-blockquote__tweet-button");

	if ( blockquote__tweet.length > 0 ) {

		blockquote__tweet[0].addEventListener("click",function(){	
			var request_url = "https://twitter.com/share?url="+ encodeURIComponent("http://localhost/akuendje/category/musicas")+"&text="+("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.")+"&via="+("");
			window.open( request_url );
		});
	}
}
 });