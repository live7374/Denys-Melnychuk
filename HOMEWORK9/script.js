


$(document).ready(function(){

    //Task 1
    $('a[href^="https://"]').attr('target', '_blank')
    
    
    
    //Task 2
    $('.head').css ('background', 'green')
    $('.inner').css ('font', '35px blue')
    
    
    //$('h2.head').find('.inner).css()
    
    
    
    //Task 3
    
    
    $('h3+div').each(function(){
        let $divElems = $(this);
        console.log(this);
        $divElems.prev().before($divElems);
    
    })
    
    
    // $('#t3').find('div').css('border', 'solid 2px blue');
    
    // $('#t3').find('div').prependTo('h3');
    
    // });
    
    
    //Task 4
    
    const $checkbox = $(':checkbox');
    $checkbox.on('click', function(){
        if ($(':checkbox:checked').length == 3) {
            $checkbox.attr('disabled', 'true');
        }
    });
    
    });
    
    