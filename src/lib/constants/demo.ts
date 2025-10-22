import { OptionType, Room } from "../types/demo";

export const mockRoomsData: Room[] = [
  {
    id: "5e4acb73-6176-446b-a81f-c389c82ebbe8",
    title: "COZINHA | COL. 01 E 02 ",
    image:
      "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/room/1742477205577.png",
    area: 14,
    customizations: [
      {
        id: "fbfc3b8e-4760-49fe-9ac1-ac715410bd8d",
        title: "PISO",
        roomId: "5e4acb73-6176-446b-a81f-c389c82ebbe8",
        zIndex: 1,
        order: 1,
      },
      {
        id: "a043b263-cf85-4610-9986-e80e9893066c",
        title: "BANCADA",
        roomId: "5e4acb73-6176-446b-a81f-c389c82ebbe8",
        zIndex: 1,
        order: 3,
      },
    ],
  },
  {
    id: "d8fc1ba0-c10a-4741-8924-996025abd26f",
    title: "QUARTO | COL 01 E 02",
    image:
      "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/room/1742477584566.png",
    area: 20.72,
    customizations: [
      {
        id: "9ca12695-6d1d-40f6-97e1-1e52e21703d5",
        title: "PISO",
        roomId: "d8fc1ba0-c10a-4741-8924-996025abd26f",
        zIndex: 1,
        order: 1,
      },
    ],
  },
  {
    id: "7e39d4f2-2216-4a41-979f-fd3fd36c3064",
    title: "SALA AMPLIADA | COL 01 E 02",
    image:
      "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/room/1742477972942.png",
    area: 32.66,
    customizations: [
      {
        id: "258d7c83-36e8-4cb4-82ed-b798366ec156",
        title: "PISO",
        roomId: "7e39d4f2-2216-4a41-979f-fd3fd36c3064",
        zIndex: 1,
        order: 2,
      },
      {
        id: "9af3e9ef-58bf-40a2-a626-5ba172d77abf",
        title: "FECHADURA DIGITAL",
        roomId: "7e39d4f2-2216-4a41-979f-fd3fd36c3064",
        zIndex: 1,
        order: 1,
      },
    ],
  },
  {
    id: "1bc84d5a-3dff-4d09-9681-d1e88565fb4f",
    title: "BANHO 01",
    image:
      "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/room/1753895546564.png",
    area: 8,
    customizations: [
      {
        id: "8003a8bc-0c8e-446a-b6a9-0bed2c7caa08",
        title: "CHUVEIRO",
        roomId: "1bc84d5a-3dff-4d09-9681-d1e88565fb4f",
        zIndex: 2,
        order: 6,
      },
      {
        id: "1c8c996d-cecb-46e0-9a39-8d96f9ed1a5c",
        title: "BANCADA E COMPL.",
        roomId: "1bc84d5a-3dff-4d09-9681-d1e88565fb4f",
        zIndex: 2,
        order: 3,
      },
      {
        id: "3d3dba4c-2dde-4c5c-ac71-015ba931900b",
        title: "PAREDES",
        roomId: "1bc84d5a-3dff-4d09-9681-d1e88565fb4f",
        zIndex: 1,
        order: 2,
      },
      {
        id: "cceb9e90-3946-48a9-baa9-e3f4e954e569",
        title: "PISO",
        roomId: "1bc84d5a-3dff-4d09-9681-d1e88565fb4f",
        zIndex: 1,
        order: 1,
      },
    ],
  },
];

export const mockOptionsData: Record<string, OptionType[]> = {
  "8003a8bc-0c8e-446a-b6a9-0bed2c7caa08": [
    {
      id: "955a2504-6ac4-4dfb-ae2e-f20c2f0832ee",
      customizationId: "8003a8bc-0c8e-446a-b6a9-0bed2c7caa08",
      image: null,
      title: "ITEM NÃO SERÁ INSTALADO",
      price: "0",
      supplierImage:
        "https://qzhzsaqzsgegpvhejxgb.supabase.co/storage/v1/object/public/plana-images/option/1740161713666.png",
      isDefault: true,
    },
    {
      id: "0a3a1ad8-69a0-420a-8b50-963add1c7560",
      customizationId: "8003a8bc-0c8e-446a-b6a9-0bed2c7caa08",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476886955.png",
      title:
        "CHUVEIRO COM TUBO RETO DE PAREDE ACQUA PLUS BLACK MATTE REF.: 1990.BL.CT.MT – DECA ",
      price: "1116.22",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476887627.png",
      isDefault: false,
    },
    {
      id: "5299797c-1961-42ae-a7ed-fa5d1808e8e9",
      customizationId: "8003a8bc-0c8e-446a-b6a9-0bed2c7caa08",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476925197.png",
      title:
        "CHUVEIRO COM TUBO RETO DE PAREDE ACQUA PLUS CR REF.: 1990.C.CT – DECA ",
      price: "769.66",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476925523.png",
      isDefault: false,
    },
  ],
  "1c8c996d-cecb-46e0-9a39-8d96f9ed1a5c": [
    {
      id: "7389f3d9-8c40-4d67-9469-d710f3de5724",
      customizationId: "1c8c996d-cecb-46e0-9a39-8d96f9ed1a5c",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477085808.png",
      title: "GRANITO BRANCO SIENA OU SIMILAR",
      price: "0",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477086267.jpg",
      isDefault: true,
    },
    {
      id: "e17c6914-6bd6-4fcd-a6d1-94a886ea1adb",
      customizationId: "1c8c996d-cecb-46e0-9a39-8d96f9ed1a5c",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477133351.png",
      title: "GRANITO PRETO SÃO GABRIEL",
      price: "1206.03",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477134167.jpg",
      isDefault: false,
    },
  ],
  "fbfc3b8e-4760-49fe-9ac1-ac715410bd8d": [
    {
      id: "26b5e946-11ae-4f87-99e3-2518c746ff56",
      customizationId: "fbfc3b8e-4760-49fe-9ac1-ac715410bd8d",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477299711.png",
      title: "LUMINOSITA SGR NAT 87,7X87,7CM - PORTINARI",
      price: "1362.61",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477300392.jpg",
      isDefault: false,
    },
    {
      id: "447c71f6-ef1b-4a23-adce-f870f0246833",
      customizationId: "fbfc3b8e-4760-49fe-9ac1-ac715410bd8d",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477354066.png",
      title: "CAMINHO SGR NAT 87,7X87,7CM - PORTINARI",
      price: "1324.56",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477354912.jpg",
      isDefault: false,
    },
  ],
  "9ca12695-6d1d-40f6-97e1-1e52e21703d5": [
    {
      id: "39532cde-1be7-45af-96ca-787d25810fa6",
      customizationId: "9ca12695-6d1d-40f6-97e1-1e52e21703d5",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477851967.png",
      title: "VINÍLICO SHANGHAI, LINHA URBAN - DURAFLOOR OU SIMILAR",
      price: "0",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477852955.jpg",
      isDefault: true,
    },
    {
      id: "815c7f02-367d-4225-8fa6-4d77a9f68898",
      customizationId: "9ca12695-6d1d-40f6-97e1-1e52e21703d5",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477928768.png",
      title: "VINÍLICO CINGAPURA, LINHA URBAN - DURAFLOOR",
      price: "2241.28",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477930034.jpg",
      isDefault: false,
    },
  ],
  "258d7c83-36e8-4cb4-82ed-b798366ec156": [
    {
      id: "6e9c0c3b-d3bf-4bab-87b2-613a20bd89dd",
      customizationId: "258d7c83-36e8-4cb4-82ed-b798366ec156",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742478160414.png",
      title: "PORC. WIND 80X80CM – CEUSA OU SIMILAR ",
      price: "0",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742478161534.jpg",
      isDefault: true,
    },
    {
      id: "92858904-57be-4cf7-a972-cdb993a18967",
      customizationId: "258d7c83-36e8-4cb4-82ed-b798366ec156",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742478231471.png",
      title: "STATUARIO ACETINADO 80X80CM - CEUSA",
      price: "5381.26",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742478232236.jpg",
      isDefault: false,
    },
  ],
  "9af3e9ef-58bf-40a2-a626-5ba172d77abf": [
    {
      id: "0c5029e4-d302-421f-a02b-5d2ab218df9a",
      customizationId: "9af3e9ef-58bf-40a2-a626-5ba172d77abf",
      image: null,
      title: "FECHADURA CONVENCIONAL  CROMADA, TIPO ALAVANCA OU SIMILAR",
      price: "0",
      supplierImage:
        "https://qzhzsaqzsgegpvhejxgb.supabase.co/storage/v1/object/public/plana-images/option/1740161713666.png",
      isDefault: true,
    },
    {
      id: "501f3fa2-ebf8-4fad-ae96-6a14e0b39c8c",
      customizationId: "9af3e9ef-58bf-40a2-a626-5ba172d77abf",
      image: null,
      title: "FECHADURA DIGITAL BIOMÉTRICA DE EMBUTIR YMC 420W - YALE ",
      price: "1406.53",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742478660691.jpg",
      isDefault: false,
    },
  ],
  "a043b263-cf85-4610-9986-e80e9893066c": [
    {
      id: "07830464-3dc2-467a-aa2f-5f8b4356972b",
      customizationId: "a043b263-cf85-4610-9986-e80e9893066c",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477444807.png",
      title: "BANCADA AMPLIADA GRANITO BRANCO SIENA",
      price: "1480",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477445575.jpg",
      isDefault: false,
    },
    {
      id: "222dd335-72fa-4e73-842e-0b68d3e63a53",
      customizationId: "a043b263-cf85-4610-9986-e80e9893066c",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477499304.png",
      title: "BANCADA AMPLIADA GRANITO PRETO SÃO GABRIEL",
      price: "2162.43",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742477499771.jpg",
      isDefault: false,
    },
  ],
  "3d3dba4c-2dde-4c5c-ac71-015ba931900b": [
    {
      id: "a2281f7a-d973-41b7-9703-8dc1f09e952d",
      customizationId: "3d3dba4c-2dde-4c5c-ac71-015ba931900b",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476684793.png",
      title: "WHITE PLAIN MATTE 30X60 RET – POTINARI OU SIMILAR ",
      price: "0",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476685686.jpg",
      isDefault: true,
    },
    {
      id: "8d078d89-6b94-432b-8073-512ef35204b0",
      customizationId: "3d3dba4c-2dde-4c5c-ac71-015ba931900b",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476735771.png",
      title: "DECORA WH LUX 8,2X25,7CM - PORTINARI",
      price: "2297.36",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476736785.jpg",
      isDefault: false,
    },
    {
      id: "3470892e-294c-4aaf-9cc6-cfad0c652d7b",
      customizationId: "3d3dba4c-2dde-4c5c-ac71-015ba931900b",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476784392.png",
      title: "MC FILLET BL MATTE 29,6x29,9CM - PORTINARI",
      price: "6193.57",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476785851.jpg",
      isDefault: false,
    },
  ],
  "cceb9e90-3946-48a9-baa9-e3f4e954e569": [
    {
      id: "251b0a7a-3ef0-4553-b62c-c595b373b9cd",
      customizationId: "cceb9e90-3946-48a9-baa9-e3f4e954e569",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476524674.png",
      title: "CAMINHO SGR NAT 87,7X87,7CM - PORTINARI",
      price: "676.33",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476525451.jpg",
      isDefault: false,
    },
    {
      id: "31357ed9-ebdf-45d2-841c-d05229119932",
      customizationId: "cceb9e90-3946-48a9-baa9-e3f4e954e569",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476580831.png",
      title: "STATUARIO ACETINADO 80X80CM - CEUSA",
      price: "869.66",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476581642.jpg",
      isDefault: false,
    },
    {
      id: "71f4c17f-228a-4132-af07-23af4a39d0bf",
      customizationId: "cceb9e90-3946-48a9-baa9-e3f4e954e569",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476482304.png",
      title: "TRAVERTINO VEINS 80X80CM - CEUSA",
      price: "1300.00",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476483002.jpg",
      isDefault: false,
    },
    {
      id: "833c0723-4159-4b31-beff-112fd74c4d25",
      customizationId: "cceb9e90-3946-48a9-baa9-e3f4e954e569",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476337657.png",
      title: "LUMINOSITA SGR NAT 87,7X87,7CM - PORTINARI",
      price: "1220.20",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476338264.jpg",
      isDefault: false,
    },
    {
      id: "f113dc01-86e2-49ab-ad26-3f85ac535361",
      customizationId: "cceb9e90-3946-48a9-baa9-e3f4e954e569",
      image:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476422977.png",
      title: " PORC. WIND ACT RET, 80X80CM - CEUSA OU SIMILAR",
      price: "2100",
      supplierImage:
        "https://smyklcytdzgtezizofcc.supabase.co/storage/v1/object/public/plana-images/option/1742476423884.jpg",
      isDefault: true,
    },
  ],
};
