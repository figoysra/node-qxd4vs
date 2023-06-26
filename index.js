function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

console.log(
  distance(
    -6.388088697609384,
    106.79275169350274,
    -6.388877701375291,
    106.79440393414352
  )
);

const dataa = [
  { name: 'LNSW', age: 17 },
  { name: 'LNSW', age: 17 },
  { name: 'lnsw', age: 35 },
];

console.log([...new Set(dataa.map((x) => x.name.toLowerCase()))]);

const data = [
  {
    name: `Bulan ke 1`,
    data: [],
  },
  {
    name: `Bulan ke 2`,
    data: [''],
  },
  {
    name: `Bulan ke 3`,
    data: [''],
  },
  {
    name: `Bulan ke 4`,
    data: [''],
  },
];
data[0].data.push('daniw');
console.log('rossi', data[0]);

for (let i = 0; i < 3; i++) {
  console.log((i + 1) * 3);
}

const arrayOne = [
  { value: '4a55eff3-1e0d-4a81-9105-3ddd7521d642', display: 'Jamsheer' },
  { value: '644838b3-604d-4899-8b78-09e4799f586f', display: 'Muhammed' },
  { value: 'b6ee537a-375c-45bd-b9d4-4dd84a75041sd', display: 'a', no: 1 },
  { value: 'e97339e1-939d-47ab-974c-1b68c9cfb536', display: 'Ajmal' },
  { value: 'a63a6f77-c637-454e-abf2-dfb9b543af6c', display: 'Ryan' },
];

const arrayTwo = [
  { value: '4a55eff3-1e0d-4a81-9105-3ddd7521d642', display: 'Jamsheer' },
  { value: '644838b3-604d-4899-8b78-09e4799f586f', display: 'Muhammed' },
  { value: 'b6ee537a-375c-45bd-b9d4-4dd84a75041d', display: 'Ravi' },
  { value: 'e97339e1-939d-47ab-974c-1b68c9cfb536', display: 'Ajmal' },
];

const results = arrayOne.filter(
  ({ value: id1 }) => !arrayTwo.some(({ value: id2 }) => id2 === id1)
);

console.log(results);

arrayOne.filter(
  ({ value: id1 }) => !arrayTwo.some(({ value: id2 }) => id2 === id1)
);

// console.log(JSON.parse("['created_by', 'created_at']"));

for (let key of [['created_by']]) {
  console.log(key);
}

console.log('[created_by'.replace(/[^\w\s]/gi, ''));

let names = ['[created_by', '=', '78', 'AND]'];
const baz = names.map((element) => element.replace(/[`\[\]]/gi, ''));

console.log(baz[2]);

let json = [{ name: 'John', age: 30, car: null }];

json = json.map(({ name, age, car }) => ({
  nama: name,
  age,
  car,
}));

const created_date = '2022-12-13T20:40:33.975Z';

console.log(
  new Date(created_date).toLocaleDateString('id', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
);

let limitSaldo, flagUnlimited;

console.log((limitSaldo = 0), (flagUnlimited = true));

console.log(new Date('2021-12-31T17:00:00.000Z').getFullYear());

const MoneyFormatter = new Intl.NumberFormat('id', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 1,
  maximumFractionDigits: 21,
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 21,
});

console.log(MoneyFormatter.format(1097500.0), 'tes round');

console.log(new Date().toLocaleDateString('en-ca'));

const f = '["created_at", "created_by"]';

JSON.parse(f);
console.log(JSON.parse(f));

const a = 'NGU20221200001';
console.log(a.replace('NGU', ''));

let variance_amt = 1000000 - 50000;

console.log(Math.abs(variance_amt));

console.log(new Date().getFullYear() + 1);

const ip = 1.9;
if (ip > 3.5 && ip <= 4.0) {
  console.log('lulus');
} else if (ip > 2.75 && ip <= 3.5) {
  console.log('lulus sangat memuaskan');
} else if (ip > 2.0 && ip <= 2.75) {
  console.log('lulus dengan pujian');
}

const duit = '-299i';

// const kursJPY = (duit / 100).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

// console.log(kursJPY, 'KURS');

var Str = '[tea0]';

var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;

// removing character 'o'
var newStr = Str.replace(/[\[\]']+/g, '');

console.log(newStr);

const parse = {
  DOKUMEN: {
    IDPERMOHONAN: 'f92cd7d2-e557-796e-89fa-cf3885e5570e',
    NOPERMOHONAN: '30103S8370AE82022052000003',
    WKPERMOHONAN: '20220520143134',
    JNSPERMOHONAN: '03999',
    SERI: 0,
    HEADER: {
      PERUSAHAAN: {
        ID: '027681030529000',
        NAMA: {},
        ALAMAT: 'DESA GEMBONG, RT 01, RW 01',
        KOTA: '3303',
        PROVINSI: 'JAWA TENGAH',
        JENIS: 'LAINNYA',
        JNSAPI: '02',
        NOAPI: '',
        PJAWAB: {
          NAMA: 'Suprihatin',
          JABATAN: 'Direktur',
          ALAMAT: 'Desa Gembong',
          KOTA: '3174',
          EMAIL: 'suprihatin0402@gmail.com',
        },
      },
      PPJK: { NMPPJK: '', ALPPJK: '', NOPPJK: '', TGPPJK: '', IDPPJK: '' },
      PEMASOK: {
        NMPEMASOK: 'BOBOIBOTS',
        ALPEMASOK: 'JALAN KRAMAT',
        NEGPEMASOK: 'MY',
      },
      PENGIRIM: {
        NMPENGIRIM: 'BOBOIBOTS',
        ALPENGIRIM: 'JALAN KRAMAT',
        NEGPENGIRIM: 'MY',
      },
      ANGKUT: {
        MODA: 1,
        NMANGKUT: 'XX2099',
        BENDERA: 'MY',
        TGTIBA: '20220524',
        NOANGKUT: '123TEST',
      },
      PELABUHAN: {
        ASAL: 'IDKDR',
        MUAT: 'IDTPP',
        BONGKAR: 'MYSIP',
        TRANSIT: '',
        TTIMBUN: 'TPBB',
      },
      GA: {
        KARANTINA: {
          UPT: '0601',
          UPTMUAT: '0601',
          KPBC: '110600',
          KPBCMUAT: '040300',
          BRUTO: '10.0000',
          INSTALASI: { NAMA: 'TEST KH', ALAMAT: 'TEST KH' },
          PEMERIKSAAN: {
            LOKASI: '1',
            ALAMAT: 'KAWASAN PABEAN',
            TGPERIKSA: '2022-05-24',
          },
          KEGIATAN: '1',
          PERUNTUKAN: '1',
          NILAI: '1004.10',
          ANGKUTTRANSIT: { MODA: '', NMANGKUT: '', NOANGKUT: '', BENDERA: '' },
        },
      },
      PROFIL: { NIB: '9120100781919', STATUSIMPBC: 'LAINNYA', SKOR: '-' },
    },
    ITEMS: {
      BARANG: [
        {
          SERI: 1,
          KDHS: '01061220',
          IDBARANG: '26226',
          URAIAN: 'BINATANG ANJING LAUT',
          JMLSATUAN: '100.0000',
          JNSSATUAN: 'KGM',
          JMLKEMAS: '25.00',
          JNSKEMAS: '3H',
          NEGASALBRG: 'ID',
          NETTO: '10.0000',
          KURS: { KODE: 'USD', NILAI: '14566.0000' },
          HARGA: '2.50',
          GA: {
            KARANTINA: {
              NMLOKAL: 'Daging Sapi',
              NMLATIN: '',
              BENTUK: '',
              UKURAN: '',
              KLASIFIKASI: 2,
              JNSIKAN: '',
              JENIS: '',
              PERUNTUKAN: '',
              KOMODITI: '',
              ID_KOMODITI: '10481',
              BAHAN_KEMASAN: '',
              SATUAN: 'Kilogram',
              JMLSATUAN: '100.0000',
            },
          },
        },
      ],
    },
    CONTLIST: { CONT: [] },
    DAFTARKEMASAN: {
      KEMASAN: [{ SERI: '1', JMLKEMASAN: '100', JNSKEMASAN: '3H' }],
    },
    DOKUMENLAMPIRAN: { DOK: [] },
  },
};

console.log('PARSe', parse);
const int = '2002-01-11';

const tglDoc = new Date('2002-01-11');

console.log(tglDoc);

const pungutan = [
  {
    jenis_pungutan: 'BEA MASUK',
    dibayar: 0,
    ditg_pemerintah: 0,
    ditangguhkan: 0,
    berkala: 0,
    dibebaskan: 0,
    tdk_dipungut: 0,
    sdh_dilunasi: 0,
    dijaminkan: 0,
    ditunda: 0,
    plktn_pita_cukai: 0,
    bebas: 0,
  },
  {
    jenis_pungutan: 'CUKAI',
    dibayar: 0,
    ditg_pemerintah: 0,
    ditangguhkan: 0,
    berkala: 0,
    dibebaskan: 0,
    tdk_dipungut: 0,
    sdh_dilunasi: 0,
    dijaminkan: 0,
    ditunda: 0,
    plktn_pita_cukai: 0,
    bebas: 0,
  },
  {
    jenis_pungutan: 'BMT',
    dibayar: 2118.06,
    ditg_pemerintah: 0,
    ditangguhkan: 24660.27,
    berkala: 18608.67,
    dibebaskan: 0,
    tdk_dipungut: 0,
    sdh_dilunasi: 0,
    dijaminkan: 0,
    ditunda: 0,
    plktn_pita_cukai: 0,
    bebas: 0,
  },
  {
    jenis_pungutan: 'PPNBM',
    dibayar: 0,
    ditg_pemerintah: 0,
    ditangguhkan: 0,
    berkala: 0,
    dibebaskan: 0,
    tdk_dipungut: 0,
    sdh_dilunasi: 0,
    dijaminkan: 0,
    ditunda: 0,
    plktn_pita_cukai: 0,
    bebas: 0,
  },
  {
    jenis_pungutan: 'PPH',
    dibayar: 0,
    ditg_pemerintah: 0,
    ditangguhkan: 0,
    berkala: 0,
    dibebaskan: 0,
    tdk_dipungut: 0,
    sdh_dilunasi: 0,
    dijaminkan: 0,
    ditunda: 0,
    plktn_pita_cukai: 0,
    bebas: 0,
  },
  {
    jenis_pungutan: 'PPN',
    dibayar: 0,
    ditg_pemerintah: 0,
    ditangguhkan: 0,
    berkala: 0,
    dibebaskan: 0,
    tdk_dipungut: 0,
    sdh_dilunasi: 0,
    dijaminkan: 0,
    ditunda: 0,
    plktn_pita_cukai: 0,
    bebas: 0,
  },
  {
    jenis_pungutan: 'TOTAL',
    dibayar: 2118.06,
    ditg_pemerintah: 0,
    ditangguhkan: 24660.27,
    berkala: 18608.67,
    dibebaskan: 0,
    tdk_dipungut: 0,
    sdh_dilunasi: 0,
    dijaminkan: 0,
    ditunda: 0,
    plktn_pita_cukai: 0,
    bebas: 0,
  },
];

const reducePungutan = pungutan.reduce((prev, next) => {
  return { ...prev, [next.jenis_pungutan]: next };
}, {});

console.log(reducePungutan, 'reduce pungutan');
