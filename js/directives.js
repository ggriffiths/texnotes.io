myApp.directive("texBind", function() {
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
            $scope.$watch($attrs.texBind, function(value) {
                //var $script = angular.element("<script type='math/tex'>").html(value == undefined ? "Empty" : value);
                var $script = angular.element("<script type='math/tex'>").html(value == undefined ? "" : value);

                // Intialize div html
                $element.html("");

                // Add script onto element
                $element.append($script);
                
                // Render Automatically
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, $element[0]]);




                
                /* RENDER IF IT'S BEEN 5 SECONDS
                
                //init lastTime
                if( $scope.lastTime==undefined) $scope.lastTime=0;

                //get current timestamp
                var timeNow = new Date().getTime();

                // Check if been it's been 5 seconds
                if(($scope.lastTime+5000)<= timeNow){
                    // Render new stuff
                    MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);

                    // New timer
                    $scope.lastTime = timeNow;

                    // Save what's been generated
                    $scope.tempDiv = document.getElementById($element[0].id).innerHTML;
                }
                $element.html($scope.tempDiv);*/

                /* RENDER EVERY delay_count CHARACTERS 
                var delay_count = 5;
                // Create counter if not initialized
                if($scope.i==undefined){
                    $scope.i=0;
                    $scope.tempDiv=document.getElementById($element[0].id).innerHTML;;
                }

                // Only rerender every delay_count characters
                if($scope.i>=delay_count){
                    // Render
                    MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
                    $scope.tempDiv = document.getElementById($element[0].id).innerHTML;
                    $scope.i=0;
                }
                else{
                    // Don't Render
                    $scope.i++;
                    $element.html($scope.tempDiv);
                }*/
            });
        }]
    };
});