'use strict';
var $ = require('jquery');

$(document).ready( function () {
    var BubbleShoot = window.BubbleShoot || {};
    BubbleShoot.Game = ( function () {
        var Game = function () {
            this.init = function () {
                var startGame = function () {
                    //
                };
                $('.game-start__button > button').on('click', startGame );
            };
        };
        return Game;
    });
});
