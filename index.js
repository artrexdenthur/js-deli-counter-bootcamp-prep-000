function takeANumber(curLine, newName) {
  curLine.push(newName);
  return `Welcome, ${newName}. You are number ${curLine.length} in line.`;
}

function nowServing(curLine) {
  if(curLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return curLine.shift();
  }
}

function currentLine(curLine) {
  if(curLine.length < 1) {
    return "The line is currently empty."
  } else {
    
  }
}