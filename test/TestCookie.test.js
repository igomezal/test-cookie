import { expect } from '@open-wc/testing';

describe('cookie', () => {
    it('works', () => {
        document.cookie = 'shouldwork=itworks';
        expect(document.cookie).to.include('itworks');
    });

    it('check it really works', () => {
        document.cookie = 'shouldwork=itworks';
        expect(document.cookie).to.include('itworksnew');
    });
});