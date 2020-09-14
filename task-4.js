function formatString (string, maxLength = 40) {
    // Write code under this line
    const breakSentence = string.split('');
    if (breakSentence.length > maxLength) {
          breakSentence.length = maxLength;
        return(breakSentence.join('') + ('...'));
    }
    else if (breakSentence.length - maxLength || breakSentence.length < maxLength) {
      return(breakSentence.join(''));
    }
  }
  
  //console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  //console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  //console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'