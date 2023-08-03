export default class Validator {
  validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;

    if (!usernameRegex.test(username)) {
      return false;
    }

    if (/\d{4,}/.test(username)) {
      return false;
    }

    if (/^[\d_-]|[\d_-]$/.test(username)) {
      return false;
    }

    return true;
  }
}

