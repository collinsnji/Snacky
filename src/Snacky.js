/**
 * Snacky v0.0.1
 *
 * @author Collin Grimm
 * @copyright 2017 Collin Grimm (and other contributors)
 * @license MIT license https://collingrimm.me/LICENSE.txt
 */

"use strict";

/**
 * Snacky constructor. This creates a new snackbar with the default options.
 * It takes one argument, a message or text to display.
 *
 * Other options eg, duration, text color etc can be passes
 * in as an object, but are optional.
 *
 * @param {String} message Message to display in Snackbar
 */
function Snacky(message) {
    // Using this instead of var Snackbar = {...arguments[1]}
    // since Node.js does not support spread operator for objects yet
    var snackbar = Object.assign({}, arguments[1]);
    this.defaults = {
        message: "Snacky.js is awesome!",
        duration: 5000,
        textColor: "#FFFFFF",
        actionText: "Dismiss",
        backgroundColor: "#323232",
    }
    this.message = message || this.defaults.message;
    this.duration = snackbar.duration || this.defaults.duration;
    this.textColor = snackbar.color || this.defaults.textColor;
    this.backgroundColor = snackbar.background || this.defaults.backgroundColor;
    this.actionText = snackbar.actionText || this.defaults.actionText;
    this.showAction = snackbar.showAction || false;
    this.customClass = snackbar.customClass || "snackbar";
}

/**
 * Create a new HTML element and add a class to it
 *
 * @param {String} element Name of HTML tag to be created
 * @param {String} classname Classname to be appended to element
 * @returns HTMLElement
 */
Snacky.prototype.createNewElement = function(element, classname) {
    var el = document.createElement(element);
    el.classList.add(classname);
    return el;
}

/**
 * Appends the Snackbar to the page at the document's body element
 * @param {String} mesg An optional message to pass to the snackbar.
 * This is to avoid the creation of multiple instances
 */
Snacky.prototype.show = function(mesg) {
    var self = this;

    var body = document.querySelector("body");
    var container = self.createNewElement("div", self.customClass);
    var text = self.createNewElement("p", "snack-text");

    container.style.backgroundColor = self.backgroundColor;
    text.style.color = self.textColor;
    text.innerHTML = mesg || self.message;
    container.appendChild(text);

    // REVIEW: This is kinda a hacky method, but it works xD
    if (!!self.showAction) {
        var actionButton = self.createNewElement("button", "action-button");
        actionButton.innerHTML = self.actionText;
        container.appendChild(actionButton);
    }

    body.appendChild(container);

    // Remove the snackbar from the page
    setTimeout(function() {
        container.style.animation = "hide-snackbar 300ms forwards";
        setTimeout(function() {
            body.removeChild(container);
        }, self.duration / 10);
    }, self.duration - 1000);
}

module.exports = Snacky;