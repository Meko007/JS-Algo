const validatePIN = (pin: string): boolean => /^\d{4}(\d{2})?$/.test(pin);
