import { Injectable } from "@angular/core";
import { DepartmentModel } from "./department.model";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()

export class DepartmentService {
    constructor(private firestore: AngularFirestore) {

    }
    getAll() {
        return this.firestore.collection('department').snapshotChanges();
    }
    getById(id: string) {
        return this.firestore.doc('department/' + id).valueChanges();

    }
    create(department: DepartmentModel) {
        return this.firestore.collection('department').add({ ...department });
    }
    update(department: DepartmentModel) {
        return this.firestore.doc('department/' + department.id).update({ ...department });
    }
    delete(id: string) {
        return this.firestore.doc('department/' + id).delete();
    }

}