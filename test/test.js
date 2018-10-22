'use strict'

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const Snacky = require('../src/snacky');

describe('#Snacky Test Running...', () => {
    let snackbar = new Snacky();
    it('Should create a simple snackbar', () => {
        expect(snackbar instanceof Snacky).to.equal(true);
        ((typeof snackbar).should.equal('object'));
    });
    it('Should have the \'show\' method', () => {
        ((typeof snackbar.show).should.equal('function'));
    });
    it('Should be able accept a message as argument in the \'show()\' method', () => {
        let snackbar = new Snacky().show('Hello world');
        expect(typeof snackbar).to.equal('object');
    });
});