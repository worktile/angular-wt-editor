var wtEditor = angular.module("wt-editor", []);

angular.module("wt-editor")
    .directive("wt-editor", [function () {
        return {
            require: ['wtEditor', '^ngModel'],
            controller: [function() {

            }],
            scope: {
                ngModel: "ngModel"
            },
            link: function (scope, element, attrs, ctrls) {

            }
        };
    }]);