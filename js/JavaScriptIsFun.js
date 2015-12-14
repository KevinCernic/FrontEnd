/**
 * Created by Uporabnik on 12.12.2015.
 */
$(document).ready(function(){
    var val=4;
    $('#plus').click(function(){

       $('.Chat-log').html("<div class='modal fade' tabindex='-1' role='dialog'> <div class='modal-dialog'> <div class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <h4 class='modal-title'>Add new team </h4> </div> <div class='modal-body'> <input class='text-box u-width-full' type='text' id='text-box-1'> <i class=' error-sign fa fa-exclamation-circle fa-2x'></i> <p class='text-error'>The name is awesome, but it is already taken.</p> </div>  <div class='modal-footer'>  <div class='button-container'><div class='button -blue center' data-dismiss='modal'>Add Team</div></div> </div>  </div>  </div> </div> ").appendTo("body");
        $('.modal').modal('show');

        $('.button').click(function(){

            var teamName= $('.text-box').val();
           /*alert(teamName);*/
            var stringTabs="tabs-"
            var stringNumber=val;
            val++;
            var resoult = stringTabs.concat(stringNumber);



            $(function() {
                $( "#tabs" ).tabs();
            });

        });

    });
    $(function() {
        $( "#tabs" ).tabs();
    });

});

