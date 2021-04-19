// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      let currentBase = this.dna[Math.floor(Math.random() * this.dna.length)];
      let newBase = returnRandBase();
      let index = this.dna.indexOf(currentBase);
      if (currentBase !== newBase) {
        this.dna[index] = newBase;
      } else {
        this.mutate();
      }
    },
    compareDNA(newPaequor) {
      let commonBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === newPaequor.dna[i]) {
          commonBases ++;
        }
      }
      let percentage1 = Math.round(commonBases / 15 * 100);
      console.log(`Specimen #${this.specimenNum} and specimen #${newPaequor.specimenNum} have ${percentage1}% DNA in common.`)
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
         count ++;
        }
      }
     let percentage2 = Math.round(count / 15 * 100);
     if (percentage2 >= 60){
       return true;
     } else {
       return false;
     }
    },
  }
};
