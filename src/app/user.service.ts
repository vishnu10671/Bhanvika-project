import { UserModel } from "./user.model"


export class UserService {
    listuser: UserModel[] = [
        { Id: 1, Name: "Sreeram", Mobile: 898765546, Course: "Angular", Institute: "NareshIt", Location: "Ammerpet" },
        { Id: 2, Name: "Vishnu", Mobile: 7700777546, Course: "Python", Institute: "CbsAcadamy", Location: "DilsuKhnagar" },
        { Id: 3, Name: "Raju", Mobile: 6777765546, Course: "DevOps", Institute: "Lmi", Location: "Ammerpet" },
        { Id: 4, Name: "Naveen", Mobile: 6308365546, Course: "React", Institute: "Glitg", Location: "Dilsukhnagar" },
        { Id: 5, Name: "Ramprasad", Mobile: 7799452546, Course: "Dotnet", Institute: "NareshIt", Location: "Ammerpet" },

    ]
    getUsers() {
        return this.listuser;
    }
    getElementById(id: number) {
        let userDeatils = this.listuser.filter(x => x.Id == id)[0]
        return userDeatils;
    }
}
