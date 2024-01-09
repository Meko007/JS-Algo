const validateHello = (greetings: string): boolean => {
    return /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i.test(greetings);
  };