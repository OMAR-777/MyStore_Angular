export class OrderInfo {
    fullName: string;
    address: string;
    totalCost?: number;
  
    constructor() {
      this.fullName = '';
      this.address = '';
      this.totalCost = -1;
    }
  }