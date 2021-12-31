import { CricketModel } from "./cricket.model";

export class CricketService {
    cricketersList: CricketModel[] = [
        { Id: 1, Name: "Sachin", Born: "Mumbai", Runs: 18426, Playingmatches: 463 },
        { Id: 2, Name: "Yuvaraj", Born: "Chandigharh", Runs: 8701, Playingmatches: 304 },
        { Id: 3, Name: "Virat", Born: "Delhi", Runs: 12169, Playingmatches: 254 },
        { Id: 4, Name: "Dhoni", Born: "Ranchi", Runs: 10773, Playingmatches: 350 },
        { Id: 5, Name: "Jadeja", Born: "Navagam", Runs: 2411, Playingmatches: 168 },
        { Id: 6, Name: "Rohith", Born: "Nagapur", Runs: 9205, Playingmatches: 227 }
    ]

    getAll(): CricketModel[] {
        return this.cricketersList;
    }
    getElementById(id: number): CricketModel {
        return this.cricketersList.filter(x => x.Id == id)[0];
    }
    createCricketer(cricketmodel: CricketModel) {
        cricketmodel.Id = this.cricketersList.length + 1;
        this.cricketersList.push(cricketmodel);
    }
    updateCricketer(index: number, cricketmodel: CricketModel) {
        this.cricketersList[index] = cricketmodel;
    }
    deleteCricketer(index: number) {
        this.cricketersList.splice(index, 1);
    }

}