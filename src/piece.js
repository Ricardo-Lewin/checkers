class Piece {
  constructor(color) {
    if (color !== 'black' && color !== 'white') {
      throw new Error('must be black or white');
    }
    this.color = color;
    this.isKing = false;
  }
}

export default Piece;
