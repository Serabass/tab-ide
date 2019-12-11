enum NoteName {
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
}

export class Note {
  public value: number;

  public static from(notation: string | number) {
    return new Note(notation);
  }

  public constructor(notation: string | number) {
    switch (typeof notation) {
      case "string":
        let rgx = /([A-G]#?)(\d+)/i;
        let [, note, octave] = notation.match(rgx);
        let v = NoteName[note];

        v += (+octave - 1) * 12;
        this.value = v;
        break;

      case "number":
        this.value = notation;
        break;
    }
  }

  public get index() {
    return this.value % 12;
  }

  public get note() {
    let [, name] = this.name.match(/^([A-G])/);
    return name;
  }

  public get name() {
    let [, name, diez] = NoteName[this.index].match(/^([A-G])(#)?/);
    return name + (diez || "");
  }

  public set name(value: string) {
    let v = NoteName[value];
    v += (this.octave - 1) * 12;
    this.value = v;
  }

  public get diez(): boolean {
    return /^[A-G]#$/.test(this.name);
  }

  public set diez(value: boolean) {
    let n = this.note + (value ? '#' : '');
    let v = NoteName[n];
    v += (this.octave - 1) * 12;
    this.value = v;
  }

  public get octave(): number {
    return Math.floor(this.value / 12) + 1;
  }

  public set octave(value: number) {
    if(value > this.octave) {
      this.value = (value * 12) - 12;
    } else if (value < this.octave) {
      this.value -= value * 12;
    }
  }

  public toString() {
    return this.name + this.octave;
  }
}
