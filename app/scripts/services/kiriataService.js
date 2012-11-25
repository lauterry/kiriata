'use strict';

kiriataApp.factory('kiriataService', ['$resource', function($resource) {

    var urlRoot = 'http://localhost:port/kiriata/:action';
    var partner = 'YW5kcm9pZC12M3M';

    var kiriata = $resource(urlRoot,
        {port:':8000'},
        {create : { method : 'POST' },
         remove : { method : 'DELETE'}});

    var fetch = function () {
        return kiriata.query({action:'movies'});
    };

    var save = function(movie){
        return kiriata.create({action:'movies'}, movie);
    };

    var remove = function(code){
        return kiriata.delete({action:'movies'}, code);
    }

    return {
        fetch : fetch,
        save : save,
        remove : remove
    };
}]);
