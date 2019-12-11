import { Note } from "../src/app/classes/Note";

describe("Note", () => {
  it("values from number", () => {
    expect(Note.from(0).toString()).toBe("C1");
    expect(Note.from(1).toString()).toBe("C#1");
    expect(Note.from(2).toString()).toBe("D1");
    expect(Note.from(3).toString()).toBe("D#1");
    expect(Note.from(4).toString()).toBe("E1");
    expect(Note.from(5).toString()).toBe("F1");
    expect(Note.from(6).toString()).toBe("F#1");
    expect(Note.from(7).toString()).toBe("G1");
    expect(Note.from(8).toString()).toBe("G#1");
    expect(Note.from(9).toString()).toBe("A1");
    expect(Note.from(10).toString()).toBe("A#1");
    expect(Note.from(11).toString()).toBe("B1");
    expect(Note.from(12).toString()).toBe("C2");
    expect(Note.from(13).toString()).toBe("C#2");
    expect(Note.from(14).toString()).toBe("D2");
    expect(Note.from(15).toString()).toBe("D#2");
    expect(Note.from(16).toString()).toBe("E2");
    expect(Note.from(17).toString()).toBe("F2");
    expect(Note.from(18).toString()).toBe("F#2");
    expect(Note.from(19).toString()).toBe("G2");
    expect(Note.from(20).toString()).toBe("G#2");
    expect(Note.from(21).toString()).toBe("A2");
    expect(Note.from(22).toString()).toBe("A#2");
    expect(Note.from(23).toString()).toBe("B2");
    expect(Note.from(24).toString()).toBe("C3");
    expect(Note.from(25).toString()).toBe("C#3");
  });

  it("values from string", () => {
    expect(Note.from("C1").value).toBe(0);
    expect(Note.from("C#1").value).toBe(1);
    expect(Note.from("D1").value).toBe(2);
    expect(Note.from("D#1").value).toBe(3);
    expect(Note.from("E1").value).toBe(4);
    expect(Note.from("F1").value).toBe(5);
    expect(Note.from("F#1").value).toBe(6);
    expect(Note.from("G1").value).toBe(7);
    expect(Note.from("G#1").value).toBe(8);
    expect(Note.from("A1").value).toBe(9);
    expect(Note.from("A#1").value).toBe(10);
    expect(Note.from("B1").value).toBe(11);
    expect(Note.from("C2").value).toBe(12);
    expect(Note.from("C#2").value).toBe(13);
    expect(Note.from("D2").value).toBe(14);
    expect(Note.from("D#2").value).toBe(15);
    expect(Note.from("E2").value).toBe(16);
    expect(Note.from("F2").value).toBe(17);
    expect(Note.from("F#2").value).toBe(18);
    expect(Note.from("G2").value).toBe(19);
    expect(Note.from("G#2").value).toBe(20);
    expect(Note.from("A2").value).toBe(21);
    expect(Note.from("A#2").value).toBe(22);
    expect(Note.from("B2").value).toBe(23);
    expect(Note.from("C3").value).toBe(24);
    expect(Note.from("C#3").value).toBe(25);
  });

  it("value from value", () => {
    expect(Note.from(0).value).toBe(0);
    expect(Note.from(1).value).toBe(1);
    expect(Note.from(2).value).toBe(2);
    expect(Note.from(3).value).toBe(3);
    expect(Note.from(4).value).toBe(4);
    expect(Note.from(5).value).toBe(5);
    expect(Note.from(6).value).toBe(6);
    expect(Note.from(7).value).toBe(7);
    expect(Note.from(8).value).toBe(8);
    expect(Note.from(9).value).toBe(9);
    expect(Note.from(10).value).toBe(10);
    expect(Note.from(11).value).toBe(11);
    expect(Note.from(12).value).toBe(12);
    expect(Note.from(13).value).toBe(13);
    expect(Note.from(14).value).toBe(14);
    expect(Note.from(15).value).toBe(15);
    expect(Note.from(16).value).toBe(16);
    expect(Note.from(17).value).toBe(17);
    expect(Note.from(18).value).toBe(18);
    expect(Note.from(19).value).toBe(19);
    expect(Note.from(20).value).toBe(20);
    expect(Note.from(21).value).toBe(21);
    expect(Note.from(22).value).toBe(22);
    expect(Note.from(23).value).toBe(23);
    expect(Note.from(24).value).toBe(24);
    expect(Note.from(25).value).toBe(25);
    expect(Note.from(26).value).toBe(26);
    expect(Note.from(27).value).toBe(27);
    expect(Note.from(28).value).toBe(28);
    expect(Note.from(29).value).toBe(29);
    expect(Note.from(30).value).toBe(30);
  });

  it("add", () => {
    let _ = Note.from("F#2");
    expect(_.value).toBe(18);
    _.value += 2;
    expect(_.note).toBe("G");
    expect(_.name).toBe("G#");
    expect(_.octave).toBe(2);
    expect(_.value).toBe(20);
    expect(_.diez).toBeTruthy();
    expect(_.toString()).toBe("G#2");
  });

  it("sub", () => {
    let _ = Note.from("F#2");
    expect(_.value).toBe(18);
    _.value--;
    expect(_.note).toBe("F");
    expect(_.name).toBe("F");
    expect(_.octave).toBe(2);
    expect(_.value).toBe(17);
    expect(_.toString()).toBe("F2");
    expect(_.diez).toBeFalsy();
  });

  it("test 1", () => {
    let _ = Note.from("F2");
    expect(_.note).toBe("F");
    expect(_.name).toBe("F");
    expect(_.octave).toBe(2);
    expect(_.value).toBe(17);
    expect(_.toString()).toBe("F2");
    expect(_.diez).toBeFalsy();
  });

  it("test", () => {
    let _ = Note.from("C1");
    expect(_.value).toBe(0);
    expect(_.note).toBe("C");
    expect(_.name).toBe("C");
    expect(_.octave).toBe(1);
  });

  it('setters [name]', () => {
    let _ = Note.from("F#2");
    expect(_.value).toBe(18);
    _.name = 'G#';
    expect(_.value).toBe(20);
    expect(_.toString()).toBe('G#2');
  });

  it('setters [diez]', () => {
    let _ = Note.from("F#2");
    expect(_.value).toBe(18);
    _.diez = false;
    expect(_.value).toBe(17);
    expect(_.diez).toBe(false);
    expect(_.toString()).toBe('F2');
  });

  it('setters [octave]', () => {
    let _ = Note.from("C2");
    expect(_.value).toBe(12);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');

    _.octave = 1;
    expect(_.value).toBe(0);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');

    expect(_.toString()).toBe('C1');

    _.octave = 3;
    expect(_.value).toBe(24);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');

    expect(_.toString()).toBe('C3');
  });

  it('octave increment 1', () => {
    let _ = Note.from("C1");
    expect(_.value).toBe(0);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.octave).toBe(1);
    expect(_.toString()).toBe('C1');
    _.octave++;
    expect(_.value).toBe(12);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.toString()).toBe('C2');
    expect(_.octave).toBe(2);
  });

  it('octave increment 2', () => {
    let _ = Note.from("C2");
    expect(_.value).toBe(12);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.octave).toBe(2);
    expect(_.toString()).toBe('C2');
    _.octave++;
    expect(_.value).toBe(24);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.toString()).toBe('C3');
    expect(_.octave).toBe(3);
  });

  it('octave increment 3', () => {
    let _ = Note.from("C3");
    expect(_.value).toBe(24);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.octave).toBe(3);
    expect(_.toString()).toBe('C3');
    _.octave++;
    expect(_.value).toBe(36);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.toString()).toBe('C4');
    expect(_.octave).toBe(4);
  });

  it('octave decrement', () => {
    let _ = Note.from("C2");
    expect(_.value).toBe(12);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.octave).toBe(2);
    expect(_.toString()).toBe('C2');
    _.octave--;
    expect(_.value).toBe(0);
    expect(_.diez).toBe(false);
    expect(_.name).toBe('C');
    expect(_.toString()).toBe('C1');
    expect(_.octave).toBe(1);
  });
});
