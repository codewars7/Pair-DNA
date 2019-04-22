const pairElement = (str) => {
  const pairs = [["A","T"],["T","A"],["C","G"],["G","C"]]
  let unpaired = str.split("")
  let newArr = [];
  unpaired.map(item => {
    pairs.map(item2 => (item == item2[0] ? newArr.push(item2) : null), console.log("this how you would add second expresison to second map"))
  })
  return newArr;
}

console.log(pairElement("GCG"))
