import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  data = [
    {
      firstName: "Carlos",
      secondName: "Alberto",
      surname: "Gómez",
      secondLastName: "Pérez",
      birthdate: "1985-05-14",

      gender: {
        itemId: "GEN_M",
        value: "Masculino"
      },

      identificationNumber: "2514 89632 0101",
      taxIdentifier: "458963-2",
      email: "carlos.gomez@example.com",
      phoneNumber: "+502 5544-3322",
      civilStatus: "Casado",

      residentialAddress:
        "3ra Avenida 4-12 Zona 1, Ciudad de Guatemala",

      employmentType: {
        itemId: "EMP_01",
        value: "Asalariado"
      },

      monthlyIncome: 8500,

      businessData: {
        businessName: "Distribuidora El Sol",
        address:
          "Calzada Roosevelt 12-45 Zona 11, Ciudad de Guatemala",
        yearsInBusiness: 5
      },

      creditId: "CRE-2026-001",
      loanAmount: 25000,
      interestRate: 12.5,
      termMonths: 24,
      startDate: "2026-01-10",
      dueDate: "2026-10-10",
      currentBalance: 16500,
      creditStatus: "Al día",
      isActive: true,

      creditHistory: [
        {
          pastCreditId: "CRE-2023-894",
          amount: 10000,
          status: "Cancelado",
          behavior: "Excelente"
        }
      ]
    },

    {
      firstName: "María",
      secondName: "Elena",
      surname: "López",
      secondLastName: "Hernández",
      birthdate: "1992-09-22",

      gender: {
        itemId: "GEN_F",
        value: "Femenino"
      },

      identificationNumber: "3021 45781 0101",
      taxIdentifier: "895623-1",
      email: "maria.lopez@example.com",
      phoneNumber: "+502 4411-2233",
      civilStatus: "Soltera",

      residentialAddress:
        "Avenida Las Américas 15-20 Zona 13, Ciudad de Guatemala",

      employmentType: {
        itemId: "EMP_02",
        value: "Profesional Independiente"
      },

      monthlyIncome: 12000,

      businessData: {
        businessName: "Consultoría Financiera ML",
        address:
          "Edificio Las Pilas, Oficina 402 Zona 10, Ciudad de Guatemala",
        yearsInBusiness: 3
      },

      creditId: "CRE-2026-002",
      loanAmount: 50000,
      interestRate: 11,
      termMonths: 36,
      startDate: "2026-03-15",
      dueDate: "2026-10-15",
      currentBalance: 42000,
      creditStatus: "Al día",
      isActive: true,

      creditHistory: []
    }
  ];


  calcularEdad(fechaNacimiento: string): number {

    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }

    return edad;
  }


  nombreCompleto(persona: any): string {

    return `${persona.firstName} 
            ${persona.secondName} 
            ${persona.surname} 
            ${persona.secondLastName}`;
  }
}