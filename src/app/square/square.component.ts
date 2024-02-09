import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameServiceService} from "../game-service.service";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() row: number = 0;
  @Input() col: number = 0;
  @Output() squareClicked: EventEmitter<{ row: number; col: number }> = new EventEmitter();

  content: 'X' | 'O' |'' = '';

  constructor(private gameService: GameServiceService) { }

  onSquareClick() {
    if (this.gameService.isGameInProgress() && this.gameService.isFieldEmpty(this.row, this.col)) {
      this.content = this.gameService.currentPlayer;
      this.gameService.makeMove(this.row, this.col);
    }
  }
}
