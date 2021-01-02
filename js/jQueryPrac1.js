"use strict"

$( "h3" ).hover(
    function() {
        $( 'div').addClass('float-right');
    }, function() {
        $( 'div' ).removeClass( "float-right" );
    }
);
