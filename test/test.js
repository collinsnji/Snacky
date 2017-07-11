'use strict'

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var Snacky = require('../src/Snacky');

describe('#Snacky Test Running...', () => {
    it('Should create a simple snackbar', () => {
        let snackbar = new Snacky();
        expect(snackbar instanceof Snacky).to.equal(true);
        ((typeof snackbar).should.equal('object'));
    });
    // TODO Take a critical look at this test case
    it('Should use default settings if none is/are supplied', () => {
        let snackbar = new Snacky();
        expect(snackbar['message']).to.equals('Snacky.js is awesome!');
    });
    it('Should have the \'show\' method', () => {
        let snackbar = new Snacky();
        ((typeof snackbar.show).should.equal('function'));
    });
    it('Should create a new snacky container', () => {
        let snackbar = new Snacky();
        (snackbar.createNewElement('div', 'snackbar').toString()).should.equal('[object HTMLDivElement]');
    });
    it('Should be able accept a message as argument in the \'show()\' method', () => {
        let snackbar = new Snacky().show('Hello world');
        expect(typeof snackbar).to.equal('undefined');
    });
});