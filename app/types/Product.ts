export type Product = {
    _id: { $oid: string };
    images: {
      small: {
        url: string;
        width: string;
        height: string;
      };
      medium: {
        url: string;
        width: string;
        height: string;
      };
      large: {
        url: string;
        width: string;
        height: string;
      };
    };
    description: string;
    metadata: {
      key: string;
      value: string | { $date: string } | { UPCListElement: string[] };
    }[];
    binding: string;
    brand: string;
    catalognumberlist: { CatalogNumberListElement: string[] };
    ean: string;
    esrbagerating: string;
    feature: string[];
    format: string;
    genre: string;
    hardwareplatform: string;
    label: string;
    price?: number;
    currency: string;
    manufacturer: string;
    model: string;
    mpn: string;
    numberofitems: number;
    operatingsystem: string;
    packagequantity: string;
    partnumber: string;
    platform: string[];
    productgroup: string;
    producttypename: string;
    publisher: string;
    releasedate: { $date: string };
    studio: string;
    title: string;
    upc: string;
    upclist: { UPCListElement: string[] };
    category: string;
    salesrank: number;
  };