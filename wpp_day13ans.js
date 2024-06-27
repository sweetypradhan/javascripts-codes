function vowel_Count(str) {

    return str.replace(/[^aeiou]/g, "").length; //This method replaces all characters that are not vowels with an empty string and the resulting string contains only the vowels from the original string.

  }
  
  console.log(vowel_Count("Namaste"));
  console.log(vowel_Count("Hello"));