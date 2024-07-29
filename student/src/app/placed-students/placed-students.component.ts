import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-placed-students',
  templateUrl: './placed-students.component.html',
  styleUrl: './placed-students.component.css'
})
export class PlacedStudentsComponent {
  students: any[] = [];

  ngOnInit() {
    this.loadStaticFile();
  }

  loadStaticFile() {
    // Adjust the path based on your project structure
    const filePath = '/assets/not paid _SY B.Tech Students.xlsx';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.responseType = 'blob';

    xhr.onload = (e) => {
      const blob = xhr.response;
      const reader = new FileReader();
      reader.onload = (event) => {
        const bstr = event.target!.result as string;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.students = XLSX.utils.sheet_to_json(ws, { header: 1 });
      };
      reader.readAsBinaryString(blob);
    };
    xhr.send();
  }
}