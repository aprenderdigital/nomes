$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "slide",
        //enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 1 ) {
                $('.steps ul').addClass('step-2');
            } else {
                $('.steps ul').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.steps ul').addClass('step-3');
            } else {
                $('.steps ul').removeClass('step-3');
            }

            if ( newIndex === 3 ) {
                $('.steps ul').addClass('step-4');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-4');
                $('.actions ul').removeClass('step-last');
            }
            
            var form = document.getElementById("formulario");
            //form.validate().settings.ignore = ":disabled,:hidden";
            if (!form.checkValidity()) {
                document.getElementById("idMsgErro").className = "msgShowErro";
            }
            else {
                document.getElementById("p2Email").innerHTML =  document.getElementById("email").value;
            }
            return form.checkValidity(); 
        },
        onFinished: function (event, currentIndex) {
            window.location.href = data["u"];
        },
        labels: {
            finish: "Terminar",
            next: "Enviar",
            previous: "Anterior"
        }
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function(){
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
    })
})
function desligaErro() {
    document.getElementById("idMsgErro").className = "msgHideErro";
}
