'use strict';

kiriataApp.factory('allocineService', ['$resource', function ($resource) {

    var urlRoot = 'http://api.allocine.fr/rest/v3/:action';
    var partner = 'YW5kcm9pZC12M3M';

    var allocine = $resource(urlRoot,
        {partner:partner, callback:'JSON_CALLBACK', format:'json'},
        {get:{method:'JSONP'}});

    var searchWithAllocine = function (keywork) {
        return allocine.get({action:'search', q:keywork});
    };

    var fetchMovieDetail = function(code){
        return allocine.get({action:'movie', code:code, profile:'small'});
    };

    return {
        search : searchWithAllocine,
        movieDetail : fetchMovieDetail
    };

}]);
