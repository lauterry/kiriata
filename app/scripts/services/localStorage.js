'use strict';

mockedKiriataApp.factory('localStorageService', ['$rootScope',  function ($rootScope) {

    var prefix = 'kiriata';


    // Checks the browser to see if local storage is supported
    var browserSupportsLocalStorage = function () {
        try {
            return ('localStorage' in window && window['localStorage'] !== null);
        } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error',e.Description);
            return false;
        }
    };

    // Directly adds a value to local storage
    // If local storage is not available in the browser use cookies
    // Example use: localStorageService.add('library','angular');
    var addToLocalStorage = function (key, value) {

        // If this browser does not support local storage use cookies
        if (!browserSupportsLocalStorage()) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
            return false;
        }

        // 0 and "" is allowed as a value but let's limit other falsey values like "undefined"
        if (!value && value !== 0 && value !== "") return false;

        try {
            localStorage.setItem(prefix + key, value);
        } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.Description);
            return false;
        }
        return true;
    };


    // Directly get a value from local storage
    // Example use: localStorageService.get('library'); // returns 'angular'
    var getFromLocalStorage = function (key) {
        if (!browserSupportsLocalStorage()) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning','LOCAL_STORAGE_NOT_SUPPORTED');
            return false;
        }

        var item = localStorage.getItem(prefix+key);
        if (!item) return null;
        return item;
    };



    // Remove an item from local storage
    // Example use: localStorageService.remove('library'); // removes the key/value pair of library='angular'
    var removeFromLocalStorage = function (key) {
        if (!browserSupportsLocalStorage()) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning','LOCAL_STORAGE_NOT_SUPPORTED');
            return false;
        }

        try {
            localStorage.removeItem(prefix+key);
        } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error',e.Description);
            return false;
        }
        return true;
    };

    // Remove all data for this app from local storage
    // Example use: localStorageService.clearAll();
    // Should be used mostly for development purposes
    var clearAllFromLocalStorage = function () {

        if (!browserSupportsLocalStorage()) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning','LOCAL_STORAGE_NOT_SUPPORTED');
            return false;
        }

        var prefixLength = prefix.length;

        for (var key in localStorage) {
            // Only remove items that are for this app
            if (key.substr(0,prefixLength) === prefix) {
                try {
                    removeFromLocalStorage(key.substr(prefixLength));
                } catch (e) {
                    $rootScope.$broadcast('LocalStorageModule.notification.error',e.Description);
                    return false;
                }
            }
        }
        return true;
    };

    // Public API here
    return {
        isSupported:browserSupportsLocalStorage,
        add:addToLocalStorage,
        get:getFromLocalStorage,
        remove:removeFromLocalStorage,
        clear:clearAllFromLocalStorage
    };
}]);
