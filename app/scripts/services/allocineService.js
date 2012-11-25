'use strict';

kiriataApp.factory('allocineService', ['$resource', function ($resource) {

    var urlRoot = 'http://api.allocine.fr/rest/v3/:action';
    var partner = 'YW5kcm9pZC12M3M';

    var allocine = $resource(urlRoot,
        {partner:partner, callback:'JSON_CALLBACK', format:'json'},
        {get:{method:'JSONP'}});

    var searchWithAllocine = function (word, options) {
        return allocine.get({action:'search', q:word}, options.success, options.error);
    };

    var fetchMovieDetail = function(code, options){
        return allocine.get({action:'movie', code:code, profile:'small'}, options.success, options.error);
    };

    return {
        search : searchWithAllocine,
        movieDetail : fetchMovieDetail
    };

}]);
