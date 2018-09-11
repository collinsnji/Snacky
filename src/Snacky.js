/**!
 * Snacky.js - Material Design snackbar module
 *
 * @author Collin Grimm
 * @copyright (c) 2017 - Present Collin Grimm
 * @license MIT license https://collingrimm.me/LICENSE.txt
*/
"use strict";
let timer, container, body;

/**
 * @module Snacky
 * @kind class
 * @description Main Snacky.js class where all methods are defined
*/
class Snacky {
    constructor(config = null) {
        let defaultConfigs = {
            duration: 5000,
            textColor: "#FFFFFF",
            backgroundColor: "#323232",
            customClass: 'snackbar',
            actionText: 'Dismiss',
            actionButton: false
        }
        this.options = { ...defaultConfigs, ...config }
    }
    static Element(element, attr) {
        let elm = document.createElement(element);
        if (typeof attr === 'object') {
            for (let i in attr) { elm.setAttribute(i, attr[i]); }
        }
        else { element.classList.add(attr); }
        return elm;
    }
    /**
     * Write a message in the snackbar
     * @param {string} message Message to display in snackbar
     * @returns {Function} timer
     */
    show(message = 'Hello World') {
        body = document.querySelector('body');
        container = Snacky.Element('div', { class: this.options.customClass });
        const text = Snacky.Element('p', { class: 'snack-text' });

        container.style.backgroundColor = this.options.backgroundColor;
        text.style.color = this.options.textColor;
        text.innerHTML = message;
        container.appendChild(text);

        if (this.options.actionButton) {
            let actionButton = Snacky.Element('button', { class: 'action-button' });
            actionButton.innerHTML = this.options.actionText;
            ['click', 'ontouchstart'].forEach((event) => {
                actionButton.addEventListener(event, (e) => {
                    if (this.options.action) {
                        e.preventDefault();
                        return this.options.action();
                    }
                    Snacky.Dismiss();
                    e.preventDefault();
                }, false);
            });
            container.appendChild(actionButton);
        }

        body.appendChild(container);
        return timer = (setTimeout(() => {
            container.style.animation = 'hide-snackbar 300ms forwards';
            setTimeout(() => {
                body.removeChild(container);
            }, this.options.duration / 10);
        }, this.options.duration - 1000));
    }
    static Dismiss() {
        body.removeChild(container);
        clearTimeout(timer);
    }
}

module.exports = Snacky;