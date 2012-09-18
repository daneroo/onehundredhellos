
(function(){

    $(document).ready(function(){
        setupOrientationHandler();
    });

    function setupOrientationHandler(){
        function orientationChange(){
            MBP.scaleFix();
            MBP.hideUrlBar();
        }

        // bind to event
        $(window).bind('orientationchange', orientationChange);
        // invoke on Setup.
        orientationChange();
    }
})();

