function reachDestination(distance, speed) {
  let hours = distance / speed;
  if(hours < 0.7) {
    return 'The train will be there in 0.5 hours.';
  } else if (hours === 1) {
    return `The train will be there in ${hours} hour.`;
  } else if (hours * 10 % 10 === 0) {
    return `The train will be there in ${hours} hours.`;
  } else {
    hours = Math.round(hours * 10) / 10;
    let lastDigit = (hours * 10 % 10);
    if(lastDigit === 1 || lastDigit === 2 || lastDigit === 8 || lastDigit === 9) {
      hours = Math.round(hours);
    } else if(lastDigit === 3 || lastDigit === 4 || lastDigit === 6 || lastDigit === 7) {
      hours = Math.floor(hours);
      hours = hours + 5/10;
    }
    if(hours === 1) {
      return `The train will be there in ${hours} hour.`;
    }
    return `The train will be there in ${hours} hours.`;
  }
}