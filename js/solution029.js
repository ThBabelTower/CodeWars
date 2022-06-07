function remove (string) {
    if (string.endsWith('!')) {
      string = string.slice(0, -1)
    }
    return string;
  }