angular.module('fp.resources')
    .factory('Message', [
        '$resource',
        'endpoint',
        function($resource, endpoint) {
            return $resource(
                endpoint + '/n/:namespace/messages/:message',
                {
                    namespace: '@namespace',
                    message: '@message'
                },
                {

                }
            );
        }
    ]);
