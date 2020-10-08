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
      foto: [
        'https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-04-24-17-31/digitalfoundry-best-graphics-card-every-amd-nvidia-tested-7001-1587745896837.jpg/EG11/thumbnail/750x422/format/jpg/quality/60',
        'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/2080-ti/gallery/geforce-rtx-2080-ti-gallery-c-641-u@2x.jpg'
      ],
      merk: "NiVidia",
      model: "RTX2080 Ti",
      harga: 2500000,
      stok: 10
    },
    {
      id: '2',
      jenis: 'GPU',
      foto: [
              'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/3/16/16260403/16260403_c1882982-db5e-48b8-8362-f7cccb44f07e_1000_1000.png', 
              'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/4/16/4474515/4474515_07a105d6-9243-4066-b2a4-6789fbe3192d_1000_1000.png',
              'https://c1.neweggimages.com/ProductImage/14-487-335-S99.jpg'
            ],
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

  getAllComputersHasStok(){
    const newData = [];
    length = this.computers.length;
    for(var i = 0; i < length; i++){
      if(this.computers[i].stok !== 0){
        newData.push(this.computers[i]);
      }
    }
    return [...newData];
  }

  getComputer(computerId: string){
    return this.computers.find(computer => {
      return computer.id === computerId;
    })
  }

  getRam(ramId: string){
    return this.rams.find(ram => {
      return ram.id === ramId;
    })
  }

  getMotherBoard(moboId: string){
    return this.motherboards.find(mobo => {
      return mobo.id === moboId;
    })
  }

  getCpu(cpuId: string){
    return this.cpus.find(cpu => {
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

  addProduct(computer: Computer){
    this.computers.push({      
      id: computer.id,      
      jenis: computer.jenis,      
      foto: computer.foto.split(","),
      merk: computer.merk,
      model: computer.model,
      harga: computer.harga,
      stok: computer.stok,
    }); 
  }

  addCpuData(cpuId: string, cpu: CPU){
    this.cpus.push({
      id: cpuId,
      baseClock: cpu.baseClock,
      boostClock: cpu.boostClock,
      core: cpu.core,
      thread: cpu.thread,
    });
  }

  addMoboData(moboId: string, mobo: Motherboard){
    this.motherboards.push({
      id: moboId,
      chipset: mobo.chipset,
      processorAccess: mobo.processorAccess.split(","),
    })
  }

  addRamData(ramId: string,ram: Ram){
    this.rams.push({
      id: ramId,
      speed: ram.speed,
    });
  }

  updateGPU(id: string, gpu: Computer){
    length = this.computers.length;
    for(var i = 0; i < length; i++){
      if(this.computers[i].id === id){
        this.computers[i].foto = gpu.foto.split(",");
        this.computers[i].merk = gpu.merk;
        this.computers[i].model = gpu.model;
        this.computers[i].harga = gpu.harga;
        this.computers[i].stok = gpu.stok;
      }
    }
  }
}
