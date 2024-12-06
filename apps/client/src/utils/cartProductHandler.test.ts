//import { describe, test, expect } from "node:test";
import {describe, expect, test} from '@jest/globals';
import { currencyFormat } from "./currencyFormat";
import { incrementArticle, decrementArticle, sumTotalProduct, dateGTFormat } from "./cartProductHandler";



describe('5 homework tests', () => {
    test('increment product', () => {
        expect(incrementArticle(1)).toBe(2);
    })

    test('decrement product', () => {
        expect(decrementArticle(2)).toBe(1);
    })

    test('dollar format', () => {
        expect(currencyFormat(10)).toBe("$10.00")
    })
    test('sum total products', () => {
        expect(sumTotalProduct(10,20)).toBe(30)
    })

    test('new Date() to DD/MM/YYYY', () => {
        expect(dateGTFormat(new Date())).toBe('05/12/2024')
    })
})