import { Note } from "./Note";
import { ChordSize } from "./ChordSize";

export class Chord {
  public notes: Note[] = [];

  public size: ChordSize = ChordSize.Whole;

  public dotted: boolean = false;

  public static from(notation: string | string[] | number[]) {
    return new Chord(notation);
  }

  public constructor(notation: string | string[] | number[]) {
    let notes: (string | number)[];
    switch (typeof notation) {
      case "string":
        notes = notation.split(/\s*,\s*/);
        break;
      case "object":
        if (notation instanceof Array) {
          notes = notation;
        }
    }

    this.notes = notes.map(n => Note.from(n));
  }

  public toString() {
    return this.notes.map(n => n.toString()).join(', ');
  }
}
