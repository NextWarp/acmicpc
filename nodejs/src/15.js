function reverse(text){
    if (!text) return '';
    return text[text.length - 1] + reverse(text.substring(0, text.length - 1));
}
  
  console.log(reverse('awesome')) // 'emosewa'
  console.log(reverse('rithmschool')) // 'loohcsmhtir'