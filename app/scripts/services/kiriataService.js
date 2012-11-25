'use strict';

kiriataApp.factory('kiriataService', ['$resource', function($resource) {

    var urlRoot = 'http://localhost:port/kiriata/:action';
    var partner = 'YW5kcm9pZC12M3M';

    var kiriata = $resource(urlRoot,
        {port:':8000'},
        {create : { method : 'POST' },
         remove : { method : 'DELETE'}});

    var fetch = function (options) {
        return kiriata.query({action:'movies'}, options.success, options.error);
    };

    var save = function(movie, options){
        return kiriata.create({action:'movies'}, movie, options.success, options.error);
    };

    var remove = function(code, options){
        return kiriata.delete({action:'movies'}, code, options.success, options.error);
    }

    return {
        fetch : fetch,
        save : save,
        remove : remove
    };
}]);
