// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {
  // Character sets for password generation
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // Create a variable for the character set based on selected options
  let charSheet = "";

  if (options.includeUppercase) charSheet += uppercase;
  if (options.includeLowercase) charSheet += lowercase;
  if (options.includeNumbers) charSheet += numbers;
  if (options.includeSpecialChars) charSheet += specialChars;


  if (charSheet === "") {
    throw new Error("At least one character type must be selected.");
  }

  // Generate the password based on the selected criteria
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSheet.length);
    password += charSheet[randomIndex];
  }
  return password;
};

