const preventEnterSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
  if (e.key === 'Enter') e.preventDefault();
};

export default preventEnterSubmit;
