import { Chord } from "../src/app/classes/Chord";

describe('Chord', () => {
  it('simple from string', () => {
    let _ = Chord.from('C1,E1,G1');
    expect(_.notes[0].toString()).toBe('C1');
    expect(_.notes[1].toString()).toBe('E1');
    expect(_.notes[2].toString()).toBe('G1');
    expect(_.toString()).toBe('C1, E1, G1');
  });

  it('simple from string array', () => {
    let _ = Chord.from(['C1', 'E1', 'G1']);
    expect(_.notes[0].toString()).toBe('C1');
    expect(_.notes[1].toString()).toBe('E1');
    expect(_.notes[2].toString()).toBe('G1');
    expect(_.toString()).toBe('C1, E1, G1');
  });

  it('simple from number array', () => {
    let _ = Chord.from([1, 3, 5]);
    expect(_.notes[0].toString()).toBe('C#1');
    expect(_.notes[1].toString()).toBe('D#1');
    expect(_.notes[2].toString()).toBe('F1');
    expect(_.toString()).toBe('C#1, D#1, F1');
  });
});
