
$(document).ready(function(){
	$("#add-items").click(function(){
        var input = $(".main-input").val();
		if(typeof input === "string" && input.length > 0){
            list = $("<span>")
            list.text(input);
            list.addClass(input);
            list.attr("data-toggle", "modal");
            list.attr("data-target", "#changeModal");
            var exitButton = $("<button>x</button>")
            exitButton.addClass(input);
            newLine = $("<br>")
            newLine.addClass(input);
            $(".add-here").append(list).append(exitButton).append(newLine);

            $("span").click(function(){
                $(".secondary-input").val(null);
                var thisSpan = this;
                var thisSpanClass = thisSpan.className;
                $(".secondary-input").attr("placeholder", thisSpanClass);
            
                $("#change-items").click(function(){
                    var updated = $(".secondary-input").val();
                    $(thisSpan).text(updated);
                    $(thisSpan).addClass(updated);
                    thisSpan = null;
                    $('#changeModal').modal('hide');
                    $(".secondary-input").attr("placeholder", null);
                    thisSpanClass = null;
                })
            });

            $('.add-here').find("button").click(function(){
                var thisClass = this.className;
                const elements = document.getElementsByClassName(thisClass);
                while (elements.length > 0) elements[0].remove();
            })
        }
		else {
            alert("Please enter a valid item");
		}
	});
}); 