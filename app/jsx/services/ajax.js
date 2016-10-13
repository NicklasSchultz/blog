import {urls} from './urls.js'
const CACHE_TYPES: {
    "PROMOTED": "PROMOTED",
    "DESTINATIONS": "DESTINATIONS",
    "TEXTS": "TEXTS",
    "BLOGS": "BLOGS",
    "FAVORITES": "FAVORITES",
    "ABOUT": "ABOUT"
}
let cache = [];
export function ajax(options) {
    return new Promise(function (resolve, reject) {
        $.ajax(options).done(resolve).fail(reject);
    });
}

export function getDestinations() {
    if(cache[CACHE_TYPES.DESTINATIONS]) {
        return Promise.resolve(cache[CACHE_TYPES.DESTINATIONS]);
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urls.destinations,
            dataType: "json",
            cache: true
        }).done(function(data){
            cache["destinations"] = data;
            resolve(data);
        }).fail(reject);
    });
}

export function getPromoted() {
    if(cache[CACHE_TYPES.PROMOTED]) {
        return Promise.resolve(cache[CACHE_TYPES.PROMOTED]);
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urls.promoted,
            dataType: "json",
            cache: true
        }).done(resolve).fail(reject);
    });
}

export function getFavorites() {
    if(cache[CACHE_TYPES.FAVORITES]) {
        return Promise.resolve(cache[CACHE_TYPES.FAVORITES]);
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urls.favorites,
            dataType: "json",
            cache: true
        }).done(resolve).fail(reject);
    });
}

export function getBlogs() {
    if(cache[CACHE_TYPES.BLOGS]) {
        return Promise.resolve(cache[CACHE_TYPES.BLOGS]);
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urls.blogs,
            dataType: "json",
            cache: true
        }).done(resolve).fail(reject);
    });
}


export function getTexts() {
    if(cache[CACHE_TYPES.TEXTS]) {
        return Promise.resolve(cache[CACHE_TYPES.TEXTS]);
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urls.text,
            dataType: "json",
            cache: true
        }).done(resolve).fail(reject);
    });
}
export function getTextById(id) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urls.text + "/" + id,
            dataType: "json",
            cache: true
        }).done(resolve).fail(reject);
    });
}

export function getAbout() {
    if(cache[CACHE_TYPES.ABOUT]) {
        return Promise.resolve(cache[CACHE_TYPES.ABOUT]);
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urls.about,
            dataType: "json",
            cache: true
        }).done(resolve).fail(reject);
    });
}