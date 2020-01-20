(function(){
    "use strict";

    $('[data-toggle="sidebar"]').click(function(event){
        event.prevenntDefault();
        $('.app').toggleClass('sidebar-toggled');

    });
})();