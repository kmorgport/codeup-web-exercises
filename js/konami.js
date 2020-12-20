var global = {

    konami: function() {
        //the key strokes to enter
        var konamikeys = [38,38,40,40,37,39,37,39,66,65,13],
            //state set to false
            started = false,
            //code that'll count down keys set to zero
            count = 0;

        $(document).keydown(function(e){
            //sets reset feature that resets code if messed up
            var reset = function() {
                started = false;
                count = 0;
                return;
            };

            key = e.keyCode;

            // Begin watching if first key in sequence was pressed.
            //if started is false
            if(!started){
                //if key stroke is 38
                if(key == 38){
                    //started state becomes true
                    started = true;
                }
            }

            // If we've started, pay attention to key presses, looking for right sequence.
            if (started){
                //count in brackets annotates index number, if the corect key correlates to correct index number
                if (konamikeys[count] == key){
                    count++;
                } else {
                    // Incorrect key, restart.
                    reset();
                }
                if (count == 11){
                    // Success!
                    alert('You have added 30 lives!');
                    $('body').addClass('bg1')
                    $()
                    reset();
                }
            } else {
                reset();
            }
        });
    }
}

global.konami();