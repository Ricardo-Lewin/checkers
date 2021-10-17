import Piece from '../piece';

describe('Piece', () => {
  describe('constructor params', () => {
    it('accepts white as a color', () => {
      expect(new Piece('white').color).toBe('white');
    });

    it('accepts black as a color', () => {
      expect(new Piece('black').color).toBe('black');
    });

    it('throws an error if not given a color', () => {
      expect(() => new Piece()).toThrow();
    });

    it('throws an error if not given white or black', () => {
      expect(() => new Piece('green')).toThrow();
    });

    it('throws an error if given red',  () => {
      expect(() => new Piece('red')).toThrow();
    });

    it.each`
      color    
      ${'white'}
      ${'black'}
    `('defaults to isKing false', ({color}) => {
      expect(new Piece(color).isKing).toBe(false);
    })
  });
});
