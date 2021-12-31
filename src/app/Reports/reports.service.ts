import { reportModel } from "./reports.model";

export class reportService {
    reportlist: reportModel[] = [
        {
            Id: 1, Product: "mobile", Avail: 1253, Required: 55, Distributor: "lokanadh"
        },
        {
            Id: 2, Product: "laptops", Avail: 1344, Required: 555, Distributor: "deeraj"
        },
        {
            Id: 3, Product: "telivisons", Avail: 154, Required: 35, Distributor: "mallesh"
        },
        {
            Id: 4, Product: "headphones", Avail: 334, Required: 205, Distributor: "srinivasu"
        },
        {
            Id: 5, Product: "soundboxes", Avail: 24, Required: 15, Distributor: "bhagavath"
        },
    ]
    getReports(): reportModel[] {
        return this.reportlist;
    }
    createReport(createdetail: reportModel) {
        createdetail.Id = this.reportlist.length + 1
        this.reportlist.push(createdetail);
    }
    updateReport(index: number, createdetail: reportModel) {
        this.reportlist[index] = createdetail;
    }
    deleteReport(index: number) {
        this.reportlist.splice(index, 1);
    }
    getElementById(id: number): reportModel {
        let reportdetails = this.reportlist.filter(x => x.Id == id)[0]
        return reportdetails;
    }
}