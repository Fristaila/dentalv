export { setAttr };

function setAttr(toWhom, attr, partAttrVal, newAttr, newAttrVal) {
  if (toWhom.attributes.getNamedItem(attr) !== null) {
    const name     = toWhom.attributes.getNamedItem(attr).value;
    const consists = name.indexOf(partAttrVal);

    if (consists > -1) {
      toWhom.setAttribute(newAttr, newAttrVal);
    }
  }
}
