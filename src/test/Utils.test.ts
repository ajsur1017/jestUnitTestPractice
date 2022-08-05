import { Utils } from '../app/Utils'

describe('Utils test suite', () => {
  test('first test', () => {
    const result = Utils.toUpperCase('abc')
    expect(result).toBe('ABC')
  });

  test('parse simple URL', () => {
    const parsedUrl = Utils.parseURL('http://localhost:8080/login');
    expect(parsedUrl.href).toBe('http://localhost:8080/login');
    expect(parsedUrl.port).toBe('8080');
    expect(parsedUrl.protocol).toBe('http:'); // toBe is used to test primitave values
    expect(parsedUrl.query).toEqual({}); // toEqual is used to test objects
  });

  test('parse URL with query', () => {
    const parsedUrl = Utils.parseURL('http://localhost:8080/login?user=user&password=pass');
    const expectedQuery = {
      user: 'user',
      password: 'pass'
    };
    expect(parsedUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toBe(expectedQuery)
  })
});