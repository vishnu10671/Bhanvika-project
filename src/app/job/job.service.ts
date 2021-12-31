
import { JobModel } from "./job.model";

export class JobService {
    jobList: JobModel[] = [
        { Id: 1, Employee: "Sreeram", Company: "Tcs", Location: "Mumbai", Salary: 1200000, Designation: "Fullstakedevloper" },
        { Id: 2, Employee: "Vishnu", Company: "Accenture", Location: "Hyderbad", Salary: 700000, Designation: "Angulardevloper" },
        { Id: 3, Employee: "Raju", Company: "Infosis", Location: "Pune", Salary: 600000, Designation: "Devopsengib" },
        { Id: 4, Employee: "Naveen", Company: "Genpact", Location: "Mumbai", Salary: 500000, Designation: "Tester" },
        { Id: 5, Employee: "Ramprasad", Company: "CogniZent", Location: "Delhi", Salary: 900000, Designation: "javadevloper" },
        { Id: 6, Employee: "Mohan", Company: "IBM", Location: "Bengulure", Salary: 1000000, Designation: "DotnetDevloper" }
    ]
    getJobs(): JobModel[] {
        return this.jobList;
    }
    getElementById(id: number): JobModel {
        let jobdetails = this.jobList.filter(x => x.Id == id)[0];
        return jobdetails;
    }
    createJob(jobmodel: JobModel) {
        jobmodel.Id = this.jobList.length + 1;
        this.jobList.push(jobmodel);
    }
    updatedJob(index: number, jobmodel: JobModel) {
        this.jobList[index] = jobmodel;
    }
    deleteJob(index: number) {
        this.jobList.splice(index, 1);
    }
}