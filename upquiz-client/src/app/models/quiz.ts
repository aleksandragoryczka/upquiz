export class Quiz {
  idquiz: number;
  pin: number;
  quiztitle: string;
  quizdescription: string;
  sumofpoints: number;
  quizicon: null;
  iduser: number;

  public constructor() {
    this.idquiz = 0;
    this.pin = 0;
    this.quiztitle = '';
    this.quizdescription = '';
    this.sumofpoints = 0;
    this.quizicon = null;
    this.iduser = 0;
  }
}
