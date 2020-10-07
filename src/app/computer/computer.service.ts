import { Injectable } from '@angular/core';
import { Computer } from './model/computer.model';
import { CPU } from './model/cpu.model';
import { Motherboard } from './model/motherboard.model';
import { Ram } from './model/ram.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computers: Computer[] = [
    {
      id: '1',
      jenis: 'GPU',
      foto: ['https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-04-24-17-31/digitalfoundry-best-graphics-card-every-amd-nvidia-tested-7001-1587745896837.jpg/EG11/thumbnail/750x422/format/jpg/quality/60'],
      merk: "NiVidia",
      model: "RTX2080 Ti",
      harga: 2500000,
      stok: 10
    },
    {
      id: '2',
      jenis: 'GPU',
      foto: ['https://venturebeat.com/wp-content/uploads/2018/04/evga-gtx-1080-100663485-orig.png?fit=400%2C259&strip=all'],
      merk: "GeForce",
      model: "GTX 1080",
      harga: 2000000,
      stok: 1
    },
    {
      id: '3',
      jenis: 'CPU',
      foto: ['https://cdn11.bigcommerce.com/s-0yiknm/images/stencil/1280x1280/products/11376/10579/i5__15260.1522247697.jpg?c=2'],
      merk: "Intel",
      model: "i5",
      harga: 3000000,
      stok: 15
    },
    {
      id: '4',
      jenis: 'Motherboard',
      foto: ['https://cf.shopee.co.id/file/de58ea482d2186ce5344cc20abe2b1d3'],
      merk: "MSI",
      model: "LGA 1155",
      harga: 700000,
      stok: 2
    },
    {
      id: '5',
      jenis: 'RAM',
      foto: ['https://www.tweaktown.com/images/news/5/9/59237_02_geil-reveal-asus-certified-evo-rog-rgb-ram.jpg'],
      merk: "ROG",
      model: "Evo X ROG",
      harga: 2600000,
      stok: 7
    },
    {
      id: '6',
      jenis: 'Motherboard',
      foto: ['https://i1.wp.com/res.cloudinary.com/murdockcruz/image/upload/v1590814362/Mobo%20Z490%20Murah/Gigabyte_Z490_UD_rqdrkw.jpg?resize=599%2C750&ssl=1'],
      merk: "GigaByte",
      model: "Z490",
      harga: 4000000,
      stok: 0
    },
  ];
  cpus: CPU[] = [
    {
      id: '3',
      baseClock: '4.0',
      boostClock: '4.0',
      core: 4,
      thread: 8,
    }
  ];

  motherboards: Motherboard[] = [
    {
      id: '4',
      chipset: 'Intel H61',
      processorAccess: ['Intel Pentium HT', 'Intel Core PG', 'Intel Core i3', 'Intel Core i5', 'Intel Core i7']
    },
    {
      id: '6',
      chipset: 'Intel Z490',
      processorAccess: ['Intel Core i3', 'Intel Core i5', 'Intel Core i7']
    }
  ];

  rams: Ram[] = [
    {
      id: '5',
      speed: 'PC-19200'
    }
  ];

  constructor() { }

  getAllComputers(){
    // console.log(this.computers);
    // console.log(this.cpus);
    // console.log(this.rams);
    // console.log(this.motherboards);
    return [...this.computers];
  }

  getComputer(computerId: string){
    return this.computers.find(computer => {
      return computer.id === computerId;
    })
  }

  getAllRams(){
    return [...this.rams];
  }

  getRam(ramId: string){
    return this.rams.find(ram => {
      return ram.id === ramId;
    })
  }

  getAllMotherboards(){
    return [...this.motherboards];
  }

  getMotherBoard(moboId: string){
    return this.motherboards.find(mobo => {
      return mobo.id === moboId;
    })
  }

  getAllCpus(){
    return [...this.cpus];
  }

  getCpu(cpuId: string){
    return this.rams.find(cpu => {
      return cpu.id === cpuId;
    })
  }

  deleteComputer(computerId: string, jenis: string){
    // console.log("masuk service :" + computerId);
    this.computers = this.computers.filter(computer => {
      if(jenis === 'CPU'){
        this.cpus = this.cpus.filter(cpu => {
          return cpu.id !== computerId;
        })
      }else if(jenis === 'Motherboard'){
        this.motherboards = this.motherboards.filter(mobo => {
          return mobo.id !== computerId;
        })
      }else if(jenis === 'RAM'){
        this.rams = this.rams.filter(ram => {
          return ram.id !== computerId;
        })
      }
      return computer.id !== computerId;
    })
  }
}
