// bold
function toggleBold() {
  const editor = document.getElementsByClassName("textbox")[0]; // Assuming there's only one element with the class "textbox"
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  // Check if the selected text is already bold
  const isBold = selectionIsBold();

  if (isBold) {
    // Remove bold style
    document.execCommand("bold", false, null);
  } else {
    // Apply bold style
    document.execCommand("bold", false, null);
  }
}

function selectionIsBold() {
  let isBold = false;
  if (document.queryCommandState) {
    isBold = document.queryCommandState("bold");
  }
  return isBold;
}


// italic
function toggleItalic() {
  const editor = document.getElementsByClassName("textbox")[0]; // Assuming there's only one element with the class "textbox"
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  // Check if the selected text is already italic
  const isItalic = selectionIsItalic();

  if (isItalic) {
    // Remove italic style
    document.execCommand("italic", false, null);
  } else {
    // Apply italic style
    document.execCommand("italic", false, null);
  }
}

function selectionIsItalic() {
  let isItalic = false;
  if (document.queryCommandState) {
    isItalic = document.queryCommandState("italic");
  }
  return isItalic;
}


//underline
function toggleUnderline() {
  const editor = document.getElementsByClassName("textbox")[0]; // Assuming there's only one element with the class "textbox"
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  // Check if the selected text is already underlined
  const isUnderline = selectionIsUnderline();

  if (isUnderline) {
    // Remove underline style
    document.execCommand("underline", false, null);
  } else {
    // Apply underline style
    document.execCommand("underline", false, null);
  }
}

function selectionIsUnderline() {
  let isUnderline = false;
  if (document.queryCommandState) {
    isUnderline = document.queryCommandState("underline");
  }
  return isUnderline;
}

// bullet list
function insertBulletList() {
  const editor = document.getElementsByClassName("textbox")[0]; // Assuming there's only one element with the class "textbox"
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const startNode = range.startContainer;
  const startOffset = range.startOffset;

  // Check if the cursor is already within a list
  const isInList = cursorIsInList();

  if (!isInList) {
    // Insert <ul> at the cursor position
    const ulElement = document.createElement("ul");
    const liElement = document.createElement("li");
    liElement.innerHTML = '&nbsp;'; // Inserting a non-breaking space to make the bullet visible
    ulElement.appendChild(liElement);
    range.deleteContents();
    range.insertNode(ulElement);
  }

  // Place the cursor inside the first <li> element
  const newRange = document.createRange();
  newRange.setStart(ulElement.firstChild, 0);
  newRange.collapse(true);
  selection.removeAllRanges();
  selection.addRange(newRange);
}

function cursorIsInList() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const startNode = range.startContainer;
    const parentElement = startNode.parentElement;
    return parentElement.nodeName.toLowerCase() === 'li';
  }
  return false;
}

// Event listener to trigger the insertion of bullet list
document.getElementsByClassName('bullet-list-button').addEventListener('click', insertBulletList);
