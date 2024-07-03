const createEnv = () => {
  const envVars = Object.entries(import.meta.env).reduce((prev, current) => {
    const [key, value] = current;
    if (key.startsWith('VITE_APP_')) {
      const _key = key.replace('VITE_APP_', '');
      prev[_key] = value;
    }
    return prev;
  }, {} as ImportMetaEnv);

  const safeParse = (value: ImportMetaEnv) => {
    return Object.entries(value).reduce((prev, current) => {
      const [key, value] = current;
      if (value === 'true' || value === 'false') {
        return { ...prev, [key]: value === 'true' };
      }
      return { ...prev, [key]: value };
    }, {} as ImportMetaEnv);
  }

  return safeParse(envVars)
}

export const env = createEnv()
