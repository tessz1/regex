import Validator from '../validator';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('should return true for valid usernames', () => {
    const validUsernames = ['john_doe', 'jane-doe', 'user'];

    validUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(true);
    });
  });

  test('should return false for usernames containing digits of length 4 or more', () => {
    const invalidUsernames = ['user1234', 'johndoe1234', 'username_12345'];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });

  test('should return false for usernames starting or ending with a digit, underscore, or hyphen', () => {
    const invalidUsernames = ['_username', '-user', 'johndoe_', 'janedoe-', 'user_'];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });

  test('should return false for usernames containing special characters other than underscore or hyphen', () => {
    const invalidUsernames = ['user$123', 'johndoe@', 'username%'];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });
});
