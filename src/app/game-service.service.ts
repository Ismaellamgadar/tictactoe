import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  currentPlayer: 'X' | 'O' = 'X';
  board: ('X' | 'O' | '')[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  winner: 'X' | 'O' | '' = '';

  constructor() { }

  switchPlayerTurn(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    console.log('Current Player:', this.currentPlayer)
  }

  makeMove(row: number, col: number): void {
    if (!this.winner && this.isFieldEmpty(row, col)) {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner();
      this.switchPlayerTurn();
    }
  }

  isFieldEmpty(row: number, col: number) : boolean {
    return this.board[row][col] === '';
  }

  isGameInProgress(): boolean {
    return !this.winner && this.board.some(row => row.includes(''));
  }

  checkWinner(): void {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] !== '' &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        this.winner = this.board[i][0];
        console.log('Winner:', this.winner);
        return;
      }

      if (
        this.board[0][i] !== '' &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        this.winner = this.board[0][i];
        console.log('Winner:', this.winner);
        return;
      }
    }

    if (
      this.board[0][0] !== '' &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      this.winner = this.board[0][0];
      console.log('Winner:', this.winner);
      return;
    }

    if (
      this.board[0][2] !== '' &&
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      this.winner = this.board[0][2];
      console.log('Winner:', this.winner);
    }
    }
  }
