import { Utils } from '../app/Utils'

describe('Utils test suite', () => {
  test('first test', () => {
    const result = Utils.toUpperCase('abc')
    expect(result).toBe('ABC')
  });

  test('pares simple URL', () => {
    const parsedUrl = Utils.parseURL('http://localhost8080/login');
    expect(parsedUrl.href).toBe('http://localhost8080/login');
    expect(parsedUrl.port).toBe('8080');
    expect(parsedUrl.protocol).toBe('http');

  })
})