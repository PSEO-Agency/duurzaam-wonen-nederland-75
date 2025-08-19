
export interface RALColor {
  name: string;
  hex: string;
  ralCode: string;
  category: string;
  popular?: boolean;
  description: string;
  applications?: string[];
  technicalInfo?: {
    [key: string]: string;
  };
  designTips?: string[];
}

export const ralColorCategories = {
  yellow: 'Geel',
  orange: 'Oranje', 
  red: 'Rood',
  violet: 'Violet',
  blue: 'Blauw',
  green: 'Groen',
  grey: 'Grijs',
  brown: 'Bruin',
  white: 'Wit',
  black: 'Zwart'
} as const;

export const ralColors: RALColor[] = [
  // Yellow RAL colors (1000-1037) - Complete series
  { name: 'Geelgroen', hex: '#BEBD7F', ralCode: 'RAL 1000', category: 'yellow', description: 'Een zachte geelgroene tint die goed past bij natuurlijke omgevingen.' },
  { name: 'Beige', hex: '#C2B078', ralCode: 'RAL 1001', category: 'yellow', description: 'Warme beige kleur voor een neutrale uitstraling.' },
  { name: 'Zandgeel', hex: '#C6A664', ralCode: 'RAL 1002', category: 'yellow', description: 'Natuurlijke zandkleur met warme uitstraling.' },
  { name: 'Signaalgeel', hex: '#E5BE01', ralCode: 'RAL 1003', category: 'yellow', description: 'Heldere gele kleur voor opvallende toepassingen.' },
  { name: 'Goudgeel', hex: '#CDA434', ralCode: 'RAL 1004', category: 'yellow', description: 'Rijke goudgele tint voor luxueuze uitstraling.' },
  { name: 'Honinggeel', hex: '#A98307', ralCode: 'RAL 1005', category: 'yellow', description: 'Warme honingkleur met natuurlijke uitstraling.' },
  { name: 'Maisgeel', hex: '#E4A010', ralCode: 'RAL 1006', category: 'yellow', description: 'Helder maisgeel voor vrolijke accenten.' },
  { name: 'Narcissengeel', hex: '#DC9D00', ralCode: 'RAL 1007', category: 'yellow', description: 'Levendige gele kleur geïnspireerd door narcissen.' },
  { name: 'Bruingeel', hex: '#EAAC54', ralCode: 'RAL 1011', category: 'yellow', description: 'Warme bruingele tint.' },
  { name: 'Citroengeel', hex: '#C7B446', ralCode: 'RAL 1012', category: 'yellow', description: 'Frisse citroengele kleur.' },
  { name: 'Parelwit', hex: '#EAE6CA', ralCode: 'RAL 1013', category: 'white', popular: true, description: 'Zachte parelwitte tint met subtiele warmte.' },
  { name: 'Ivoor', hex: '#E1CC4F', ralCode: 'RAL 1014', category: 'yellow', description: 'Klassieke ivoorkleur.' },
  { name: 'Licht ivoor', hex: '#E6D690', ralCode: 'RAL 1015', category: 'yellow', description: 'Lichte variant van ivoor.' },
  { name: 'Zwavelgeel', hex: '#EDFF21', ralCode: 'RAL 1016', category: 'yellow', description: 'Intens zwavelgeel voor opvallende toepassingen.' },
  { name: 'Saffraan geel', hex: '#F5D033', ralCode: 'RAL 1017', category: 'yellow', description: 'Rijke saffraan gele kleur.' },
  { name: 'Zink geel', hex: '#F8F32B', ralCode: 'RAL 1018', category: 'yellow', description: 'Metallic zink gele tint.' },
  { name: 'Grijsbeige', hex: '#9E9764', ralCode: 'RAL 1019', category: 'grey', description: 'Neutrale grijsbeige kleur.' },
  { name: 'Olijfgeel', hex: '#999950', ralCode: 'RAL 1020', category: 'yellow', description: 'Gedempte olijfgele tint.' },
  { name: 'Koolzaadgeel', hex: '#F3DA0B', ralCode: 'RAL 1021', category: 'yellow', description: 'Heldere koolzaadgele kleur.' },
  { name: 'Verkeer geel', hex: '#FCB821', ralCode: 'RAL 1023', category: 'yellow', description: 'Opvallende verkeersgele kleur voor signalering.' },
  { name: 'Oker geel', hex: '#AEA04B', ralCode: 'RAL 1024', category: 'yellow', description: 'Natuurlijke okergele tint.' },
  { name: 'Lumi geel', hex: '#FFFF00', ralCode: 'RAL 1026', category: 'yellow', description: 'Luminescerend geel voor speciale toepassingen.' },
  { name: 'Curry', hex: '#9D9101', ralCode: 'RAL 1027', category: 'yellow', description: 'Warme currygele kleur.' },
  { name: 'Meloen geel', hex: '#F4A900', ralCode: 'RAL 1028', category: 'yellow', description: 'Frisse meloengele tint.' },
  { name: 'Ginster geel', hex: '#F2A900', ralCode: 'RAL 1032', category: 'yellow', description: 'Heldere ginstergele kleur.' },
  { name: 'Dahlia geel', hex: '#F3A505', ralCode: 'RAL 1033', category: 'yellow', description: 'Rijke dahliagele tint.' },
  { name: 'Pastel geel', hex: '#EDDA74', ralCode: 'RAL 1034', category: 'yellow', description: 'Zachte pastelgele kleur.' },
  { name: 'Parelbeige', hex: '#6A5D4D', ralCode: 'RAL 1035', category: 'brown', description: 'Elegante parelbeige tint.' },
  { name: 'Parelgoud', hex: '#705335', ralCode: 'RAL 1036', category: 'brown', description: 'Luxueuze parelgouden kleur.' },
  { name: 'Zonnegeel', hex: '#F39800', ralCode: 'RAL 1037', category: 'yellow', description: 'Warme zonnegele tint.' },

  // Orange RAL colors (2000-2013) - Complete series
  { name: 'Geel oranje', hex: '#ED760E', ralCode: 'RAL 2000', category: 'orange', description: 'Levendige geel-oranje kleur.' },
  { name: 'Rood oranje', hex: '#C93C20', ralCode: 'RAL 2001', category: 'orange', description: 'Krachtige rood-oranje tint.' },
  { name: 'Vermiljoen', hex: '#CB2821', ralCode: 'RAL 2002', category: 'orange', description: 'Klassieke vermiljoenkleur.' },
  { name: 'Pastel oranje', hex: '#FF7514', ralCode: 'RAL 2003', category: 'orange', description: 'Zachte pastel oranje tint.' },
  { name: 'Zuiver oranje', hex: '#F44611', ralCode: 'RAL 2004', category: 'orange', description: 'Zuivere oranje kleur.' },
  { name: 'Lumi oranje', hex: '#FF2301', ralCode: 'RAL 2005', category: 'orange', description: 'Luminescerend oranje.' },
  { name: 'Parels oranje', hex: '#FF6600', ralCode: 'RAL 2007', category: 'orange', description: 'Parelmoeren oranje tint.' },
  { name: 'Helder rood oranje', hex: '#F75E25', ralCode: 'RAL 2008', category: 'orange', description: 'Heldere rood-oranje kleur.' },
  { name: 'Verkeer oranje', hex: '#F54021', ralCode: 'RAL 2009', category: 'orange', description: 'Verkeersoranje voor signalering.' },
  { name: 'Signaal oranje', hex: '#D84B20', ralCode: 'RAL 2010', category: 'orange', description: 'Signaal oranje kleur.' },
  { name: 'Diep oranje', hex: '#EC7C26', ralCode: 'RAL 2011', category: 'orange', description: 'Diepe oranje tint.' },
  { name: 'Zalm oranje', hex: '#E55137', ralCode: 'RAL 2012', category: 'orange', description: 'Zalmoranje kleur.' },

  // Red RAL colors (3000-3031) - Complete series
  { name: 'Vuurrood', hex: '#AF2B1E', ralCode: 'RAL 3000', category: 'red', description: 'Intens vuurrood voor krachtige uitstraling.' },
  { name: 'Signaalkrood', hex: '#A52019', ralCode: 'RAL 3001', category: 'red', description: 'Signaalrode kleur voor opvallende toepassingen.' },
  { name: 'Karmijnrood', hex: '#A2231D', ralCode: 'RAL 3002', category: 'red', description: 'Diepe karmijnrode tint.' },
  { name: 'Robijnrood', hex: '#9B111E', ralCode: 'RAL 3003', category: 'red', description: 'Elegante robijnrode kleur.' },
  { name: 'Purperrood', hex: '#75151E', ralCode: 'RAL 3004', category: 'red', description: 'Donkere purperrode tint.' },
  { name: 'Wijnrood', hex: '#722F37', ralCode: 'RAL 3005', category: 'red', popular: true, description: 'Rijke wijnrode kleur die warmte uitstraalt.' },
  { name: 'Zwart rood', hex: '#3E2723', ralCode: 'RAL 3007', category: 'red', description: 'Donkere zwart-rode tint.' },
  { name: 'Oxiderood', hex: '#7D2C14', ralCode: 'RAL 3009', category: 'red', description: 'Oxiderode kleur.' },
  { name: 'Bruinrood', hex: '#B32821', ralCode: 'RAL 3011', category: 'red', description: 'Warme bruinrode tint.' },
  { name: 'Beigerood', hex: '#C1876B', ralCode: 'RAL 3012', category: 'red', description: 'Zachte beigerode kleur.' },
  { name: 'Tomatrood', hex: '#A12312', ralCode: 'RAL 3013', category: 'red', description: 'Levendige tomaatrode tint.' },
  { name: 'Antiek rosa', hex: '#D36E70', ralCode: 'RAL 3014', category: 'red', description: 'Klassieke antiek roze kleur.' },
  { name: 'Licht rosa', hex: '#EA899A', ralCode: 'RAL 3015', category: 'red', description: 'Zachte licht roze tint.' },
  { name: 'Koraal rood', hex: '#B32821', ralCode: 'RAL 3016', category: 'red', description: 'Koraalrode kleur.' },
  { name: 'Rosa', hex: '#E63244', ralCode: 'RAL 3017', category: 'red', description: 'Heldere roze tint.' },
  { name: 'Aardbeirood', hex: '#D53032', ralCode: 'RAL 3018', category: 'red', description: 'Frisse aardbeirode kleur.' },
  { name: 'Verkeer rood', hex: '#CC0605', ralCode: 'RAL 3020', category: 'red', description: 'Verkeersrode kleur voor signalering.' },
  { name: 'Zalm rosa', hex: '#F56991', ralCode: 'RAL 3022', category: 'red', description: 'Zalm roze tint.' },
  { name: 'Helder rood', hex: '#CC2C24', ralCode: 'RAL 3024', category: 'red', description: 'Heldere rode kleur.' },
  { name: 'Lumi rood', hex: '#FF0000', ralCode: 'RAL 3026', category: 'red', description: 'Luminescerend rood.' },
  { name: 'Framboosrood', hex: '#C51D34', ralCode: 'RAL 3027', category: 'red', description: 'Framboosrode tint.' },
  { name: 'Zuiver rood', hex: '#CC2C24', ralCode: 'RAL 3028', category: 'red', description: 'Zuivere rode kleur.' },
  { name: 'Parels rood', hex: '#B32821', ralCode: 'RAL 3031', category: 'red', description: 'Parelmoeren rode tint.' },

  // Violet RAL colors (4000-4012) - Complete series
  { name: 'Rood lilac', hex: '#641C34', ralCode: 'RAL 4001', category: 'violet', description: 'Diepe rood-lilac tint.' },
  { name: 'Rood violet', hex: '#922B3E', ralCode: 'RAL 4002', category: 'violet', description: 'Krachtige rood-violette kleur.' },
  { name: 'Heide violet', hex: '#DE4C8A', ralCode: 'RAL 4003', category: 'violet', description: 'Natuurlijke heide violette tint.' },
  { name: 'Bord violet', hex: '#641C34', ralCode: 'RAL 4004', category: 'violet', description: 'Donkere bordeaux violette kleur.' },
  { name: 'Blauw lilac', hex: '#6C4675', ralCode: 'RAL 4005', category: 'violet', description: 'Subtiele blauw-lilac tint.' },
  { name: 'Verkeer violet', hex: '#A03472', ralCode: 'RAL 4006', category: 'violet', description: 'Verkeer violette kleur.' },
  { name: 'Purper violet', hex: '#4A192C', ralCode: 'RAL 4007', category: 'violet', description: 'Diepe purper violette tint.' },
  { name: 'Signaal violet', hex: '#924175', ralCode: 'RAL 4008', category: 'violet', description: 'Signaal violette kleur.' },
  { name: 'Pastel violet', hex: '#A18594', ralCode: 'RAL 4009', category: 'violet', description: 'Zachte pastel violette tint.' },
  { name: 'Telemagenta', hex: '#CF3476', ralCode: 'RAL 4010', category: 'violet', description: 'Moderne telemagenta kleur.' },
  { name: 'Parels violet', hex: '#8673A1', ralCode: 'RAL 4011', category: 'violet', description: 'Parelmoeren violette tint.' },
  { name: 'Bessen violet', hex: '#6C6874', ralCode: 'RAL 4012', category: 'violet', description: 'Natuurlijke bessenviolette kleur.' },

  // Blue RAL colors (5000-5026) - Complete series
  { name: 'Violet blauw', hex: '#354D73', ralCode: 'RAL 5000', category: 'blue', description: 'Diepe violet-blauwe tint.' },
  { name: 'Groen blauw', hex: '#1F3A93', ralCode: 'RAL 5001', category: 'blue', description: 'Groen-blauwe kleur.' },
  { name: 'Ultramarijn blauw', hex: '#20214F', ralCode: 'RAL 5002', category: 'blue', description: 'Intens ultramarijn blauw.' },
  { name: 'Saffierblauw', hex: '#1D1E33', ralCode: 'RAL 5003', category: 'blue', description: 'Elegante saffierblauwe tint.' },
  { name: 'Zwart blauw', hex: '#18171C', ralCode: 'RAL 5004', category: 'blue', description: 'Donkere zwart-blauwe kleur.' },
  { name: 'Signaalblauw', hex: '#1E2460', ralCode: 'RAL 5005', category: 'blue', description: 'Signaalblauwe kleur.' },
  { name: 'Briljant blauw', hex: '#4C9141', ralCode: 'RAL 5007', category: 'blue', description: 'Heldere briljant blauwe tint.' },
  { name: 'Grijs blauw', hex: '#26252D', ralCode: 'RAL 5008', category: 'blue', description: 'Gedempte grijs-blauwe kleur.' },
  { name: 'Azuur blauw', hex: '#025669', ralCode: 'RAL 5009', category: 'blue', description: 'Azuurblauwe tint.' },
  { name: 'Gentiaanblauw', hex: '#0E294B', ralCode: 'RAL 5010', category: 'blue', description: 'Diepe gentiaanblauwe kleur.' },
  { name: 'Staalblauw', hex: '#1F2A44', ralCode: 'RAL 5011', category: 'blue', popular: true, description: 'Industriële staalblauwe tint voor moderne uitstraling.' },
  { name: 'Lichtblauw', hex: '#3B83BD', ralCode: 'RAL 5012', category: 'blue', description: 'Frisse lichtblauwe kleur.' },
  { name: 'Kobaltblauw', hex: '#1E213D', ralCode: 'RAL 5013', category: 'blue', description: 'Rijke kobaltblauwe tint.' },
  { name: 'Duifblauw', hex: '#606E8C', ralCode: 'RAL 5014', category: 'blue', description: 'Subtiele duifblauwe kleur.' },
  { name: 'Hemelblauw', hex: '#2271B3', ralCode: 'RAL 5015', category: 'blue', description: 'Hemelblauwe tint.' },
  { name: 'Verkeer blauw', hex: '#1065A8', ralCode: 'RAL 5017', category: 'blue', description: 'Verkeersblauwe kleur.' },
  { name: 'Turkoois blauw', hex: '#3F888F', ralCode: 'RAL 5018', category: 'blue', description: 'Turkooisblauwe tint.' },
  { name: 'Capri blauw', hex: '#1B5583', ralCode: 'RAL 5019', category: 'blue', description: 'Capriblauwe kleur.' },
  { name: 'Oceaan blauw', hex: '#1D334A', ralCode: 'RAL 5020', category: 'blue', description: 'Oceaanblauwe tint.' },
  { name: 'Water blauw', hex: '#256D7B', ralCode: 'RAL 5021', category: 'blue', description: 'Waterblauwe kleur.' },
  { name: 'Nacht blauw', hex: '#252850', ralCode: 'RAL 5022', category: 'blue', description: 'Donkere nachtblauwe tint.' },
  { name: 'Verre blauw', hex: '#49678D', ralCode: 'RAL 5023', category: 'blue', description: 'Verre blauwe kleur.' },
  { name: 'Pastel blauw', hex: '#5D9B9B', ralCode: 'RAL 5024', category: 'blue', description: 'Zachte pastelblauwe tint.' },
  { name: 'Parels blauw', hex: '#2A6478', ralCode: 'RAL 5026', category: 'blue', description: 'Parelmoeren blauwe kleur.' },

  // Green RAL colors (6000-6038) - Complete series  
  { name: 'Patina groen', hex: '#316650', ralCode: 'RAL 6000', category: 'green', description: 'Natuurlijke patinagroene tint.' },
  { name: 'Smaragd groen', hex: '#287233', ralCode: 'RAL 6001', category: 'green', description: 'Rijke smaragdgroene kleur.' },
  { name: 'Loof groen', hex: '#2D5016', ralCode: 'RAL 6002', category: 'green', description: 'Natuurlijke loofgroene tint.' },
  { name: 'Olijf groen', hex: '#424632', ralCode: 'RAL 6003', category: 'green', description: 'Gedempte olijfgroene kleur.' },
  { name: 'Blauw groen', hex: '#1F3A93', ralCode: 'RAL 6004', category: 'green', description: 'Blauw-groene tint.' },
  { name: 'Mos groen', hex: '#2F4538', ralCode: 'RAL 6005', category: 'green', description: 'Natuurlijke mosgroene kleur.' },
  { name: 'Grijs olijf', hex: '#3E3B32', ralCode: 'RAL 6006', category: 'green', description: 'Grijs-olijfgroene tint.' },
  { name: 'Fles groen', hex: '#343B29', ralCode: 'RAL 6007', category: 'green', description: 'Donkere flesgroene kleur.' },
  { name: 'Bruin groen', hex: '#39352A', ralCode: 'RAL 6008', category: 'green', description: 'Bruin-groene tint.' },
  { name: 'Dennegroen', hex: '#31372B', ralCode: 'RAL 6009', category: 'green', popular: true, description: 'Klassieke denneboomgroene kleur, perfect voor traditionele woningen.' },
  { name: 'Gras groen', hex: '#35682D', ralCode: 'RAL 6010', category: 'green', description: 'Levendige grasgroene tint.' },
  { name: 'Reseda groen', hex: '#587246', ralCode: 'RAL 6011', category: 'green', description: 'Gedempte resedagroene kleur.' },
  { name: 'Zwart groen', hex: '#343E40', ralCode: 'RAL 6012', category: 'green', description: 'Donkere zwart-groene tint.' },
  { name: 'Riet groen', hex: '#6C7156', ralCode: 'RAL 6013', category: 'green', description: 'Natuurlijke rietgroene kleur.' },
  { name: 'Geel olijf', hex: '#47402E', ralCode: 'RAL 6014', category: 'green', description: 'Geel-olijfgroene tint.' },
  { name: 'Zwart olijf', hex: '#3B3C36', ralCode: 'RAL 6015', category: 'green', description: 'Zwart-olijfgroene kleur.' },
  { name: 'Turkoois groen', hex: '#1E5945', ralCode: 'RAL 6016', category: 'green', description: 'Turkooisgroene tint.' },
  { name: 'Mei groen', hex: '#4C9141', ralCode: 'RAL 6017', category: 'green', description: 'Frisse meigroene kleur.' },
  { name: 'Geel groen', hex: '#57A639', ralCode: 'RAL 6018', category: 'green', description: 'Geel-groene tint.' },
  { name: 'Pastel groen', hex: '#BDECB6', ralCode: 'RAL 6019', category: 'green', description: 'Zachte pastelgroene kleur.' },
  { name: 'Chroom groen', hex: '#2E3A23', ralCode: 'RAL 6020', category: 'green', description: 'Chroomgroene tint.' },
  { name: 'Bleek groen', hex: '#89AC76', ralCode: 'RAL 6021', category: 'green', description: 'Bleekgroene kleur.' },
  { name: 'Bruin olijf', hex: '#25221B', ralCode: 'RAL 6022', category: 'green', description: 'Bruin-olijfgroene tint.' },
  { name: 'Verkeer groen', hex: '#009639', ralCode: 'RAL 6024', category: 'green', description: 'Verkeersgroene kleur.' },
  { name: 'Varen groen', hex: '#3D642D', ralCode: 'RAL 6025', category: 'green', description: 'Varengroene tint.' },
  { name: 'Opaal groen', hex: '#015D52', ralCode: 'RAL 6026', category: 'green', description: 'Opaalsgroene kleur.' },
  { name: 'Licht groen', hex: '#84C3BE', ralCode: 'RAL 6027', category: 'green', description: 'Lichtgroene tint.' },
  { name: 'Pijnboom groen', hex: '#2C5545', ralCode: 'RAL 6028', category: 'green', description: 'Pijnboomgroene kleur.' },
  { name: 'Mint groen', hex: '#20603D', ralCode: 'RAL 6029', category: 'green', description: 'Mintgroene tint.' },
  { name: 'Signaal groen', hex: '#158466', ralCode: 'RAL 6032', category: 'green', description: 'Signaalgroene kleur.' },
  { name: 'Mint turkoois', hex: '#497E76', ralCode: 'RAL 6033', category: 'green', description: 'Mint turkooisgroene tint.' },
  { name: 'Pastel turkoois', hex: '#7FB5B5', ralCode: 'RAL 6034', category: 'green', description: 'Pastel turkooisgroene kleur.' },
  { name: 'Parels groen', hex: '#1C542D', ralCode: 'RAL 6035', category: 'green', description: 'Parelmoeren groene tint.' },
  { name: 'Parels opaal groen', hex: '#193737', ralCode: 'RAL 6036', category: 'green', description: 'Parels opaalsgroene kleur.' },
  { name: 'Zuiver groen', hex: '#008F39', ralCode: 'RAL 6037', category: 'green', description: 'Zuivere groene tint.' },
  { name: 'Lumi groen', hex: '#00BB2D', ralCode: 'RAL 6038', category: 'green', description: 'Luminescerend groen.' },

  // Grey RAL colors (7000-7048) - Complete series
  { name: 'Muisgrijs', hex: '#8D948D', ralCode: 'RAL 7000', category: 'grey', description: 'Neutrale muisgrijze kleur.' },
  { name: 'Zilvergrijs', hex: '#8A9597', ralCode: 'RAL 7001', category: 'grey', description: 'Elegante zilvergrijze tint.' },
  { name: 'Olijfgrijs', hex: '#7E7B52', ralCode: 'RAL 7002', category: 'grey', description: 'Olijfgrijze kleur.' },
  { name: 'Mosgrijs', hex: '#6C7059', ralCode: 'RAL 7003', category: 'grey', description: 'Mosgrijze tint.' },
  { name: 'Signaalgrijs', hex: '#969992', ralCode: 'RAL 7004', category: 'grey', description: 'Signaalgrijze kleur.' },
  { name: 'Muisgrijs', hex: '#646B63', ralCode: 'RAL 7005', category: 'grey', description: 'Donkere muisgrijze tint.' },
  { name: 'Beigegrijs', hex: '#6D6552', ralCode: 'RAL 7006', category: 'grey', description: 'Beigegrijze kleur.' },
  { name: 'Khakigrijs', hex: '#746643', ralCode: 'RAL 7008', category: 'grey', description: 'Khakigrijze tint.' },
  { name: 'Groengrijs', hex: '#4D5645', ralCode: 'RAL 7009', category: 'grey', description: 'Groengrijze kleur.' },
  { name: 'Tentgrijs', hex: '#4C514A', ralCode: 'RAL 7010', category: 'grey', description: 'Tentgrijze tint.' },
  { name: 'IJzergrijs', hex: '#434B4D', ralCode: 'RAL 7011', category: 'grey', description: 'IJzergrijze kleur.' },
  { name: 'Basaltgrijs', hex: '#4E5754', ralCode: 'RAL 7012', category: 'grey', description: 'Basaltgrijze tint.' },
  { name: 'Bruingrijs', hex: '#464531', ralCode: 'RAL 7013', category: 'grey', description: 'Bruingrijze kleur.' },
  { name: 'Leigrijs', hex: '#3C3C3C', ralCode: 'RAL 7015', category: 'grey', description: 'Leigrijze tint.' },
  { name: 'Antracietgrijs', hex: '#383E42', ralCode: 'RAL 7016', category: 'grey', popular: true, description: 'Moderne antracietgrijze kleur, zeer populair voor kozijnen.' },
  { name: 'Zwartgrijs', hex: '#23282B', ralCode: 'RAL 7021', category: 'grey', description: 'Zwartgrijze tint.' },
  { name: 'Betongrijs', hex: '#4C4A48', ralCode: 'RAL 7023', category: 'grey', description: 'Betongrijze kleur.' },
  { name: 'Grafietgrijs', hex: '#474A51', ralCode: 'RAL 7024', category: 'grey', description: 'Grafietgrijze tint.' },
  { name: 'Steen grijs', hex: '#8D8C7A', ralCode: 'RAL 7030', category: 'grey', description: 'Steengrijze kleur.' },
  { name: 'Blauw grijs', hex: '#5D6970', ralCode: 'RAL 7031', category: 'grey', description: 'Blauwgrijze tint.' },
  { name: 'Kiezel grijs', hex: '#B8B799', ralCode: 'RAL 7032', category: 'grey', description: 'Kiezelgrijze kleur.' },
  { name: 'Cement grijs', hex: '#7D8471', ralCode: 'RAL 7033', category: 'grey', description: 'Cementgrijze tint.' },
  { name: 'Geel grijs', hex: '#8F8B66', ralCode: 'RAL 7034', category: 'grey', description: 'Geelgrijze kleur.' },
  { name: 'Licht grijs', hex: '#C5C7C4', ralCode: 'RAL 7035', category: 'grey', popular: true, description: 'Lichtgrijze tint, zeer geschikt voor moderne uitstraling.' },
  { name: 'Platina grijs', hex: '#7F7679', ralCode: 'RAL 7036', category: 'grey', description: 'Platinagrijze kleur.' },
  { name: 'Stof grijs', hex: '#7D7F7D', ralCode: 'RAL 7037', category: 'grey', description: 'Stofgrijze tint.' },
  { name: 'Agaat grijs', hex: '#B5B8B1', ralCode: 'RAL 7038', category: 'grey', description: 'Agaatgrijze kleur.' },
  { name: 'Kwartsgrijs', hex: '#6C6960', ralCode: 'RAL 7039', category: 'grey', description: 'Kwartsgrijze tint.' },
  { name: 'Venstergrijs', hex: '#9DA1AA', ralCode: 'RAL 7040', category: 'grey', description: 'Venstergrijze kleur.' },
  { name: 'Verkeer grijs A', hex: '#8D948D', ralCode: 'RAL 7042', category: 'grey', description: 'Verkeersgrijze tint A.' },
  { name: 'Verkeer grijs B', hex: '#4E5452', ralCode: 'RAL 7043', category: 'grey', description: 'Verkeersgrijze kleur B.' },
  { name: 'Zijdegrijs', hex: '#CAC4B0', ralCode: 'RAL 7044', category: 'grey', description: 'Zijdegrijze tint.' },
  { name: 'Telegrauw 1', hex: '#909090', ralCode: 'RAL 7045', category: 'grey', description: 'Telegrijze kleur 1.' },
  { name: 'Telegrauw 2', hex: '#82898F', ralCode: 'RAL 7046', category: 'grey', description: 'Telegrijze tint 2.' },
  { name: 'Telegrauw 4', hex: '#D0D0D0', ralCode: 'RAL 7047', category: 'grey', description: 'Telegrijze kleur 4.' },
  { name: 'Parels muisgrijs', hex: '#898176', ralCode: 'RAL 7048', category: 'grey', description: 'Parels muisgrijze tint.' },

  // Brown RAL colors (8000-8029) - Complete series
  { name: 'Groenbruin', hex: '#826C34', ralCode: 'RAL 8000', category: 'brown', description: 'Groenbruine kleur.' },
  { name: 'Okerbruin', hex: '#955F20', ralCode: 'RAL 8001', category: 'brown', description: 'Okerbruine tint.' },
  { name: 'Signaalbruin', hex: '#6C3B2A', ralCode: 'RAL 8002', category: 'brown', description: 'Signaalbruine kleur.' },
  { name: 'Kleibruin', hex: '#734222', ralCode: 'RAL 8003', category: 'brown', description: 'Kleibruine tint.' },
  { name: 'Koperbruin', hex: '#8E402A', ralCode: 'RAL 8004', category: 'brown', description: 'Koperbruine kleur.' },
  { name: 'Dennenwortelsbruin', hex: '#633A34', ralCode: 'RAL 8007', category: 'brown', description: 'Dennenwortelsbruine tint.' },
  { name: 'Olijfbruin', hex: '#6F4F28', ralCode: 'RAL 8008', category: 'brown', description: 'Olijfbruine kleur.' },
  { name: 'Kastanjebruin', hex: '#59351F', ralCode: 'RAL 8011', category: 'brown', description: 'Kastanjebruine tint.' },
  { name: 'Roodbruin', hex: '#592321', ralCode: 'RAL 8012', category: 'brown', description: 'Roodbruine kleur.' },
  { name: 'Sepia bruin', hex: '#49392F', ralCode: 'RAL 8014', category: 'brown', description: 'Sepiabruine tint.' },
  { name: 'Mahonie bruin', hex: '#633A34', ralCode: 'RAL 8015', category: 'brown', description: 'Mahoniebruine kleur.' },
  { name: 'Mahonie', hex: '#4C2F27', ralCode: 'RAL 8016', category: 'brown', description: 'Mahonie tint.' },
  { name: 'Chocoladebruin', hex: '#45322E', ralCode: 'RAL 8017', category: 'brown', description: 'Chocoladebruine kleur.' },
  { name: 'Grijs bruin', hex: '#4A4C46', ralCode: 'RAL 8019', category: 'brown', description: 'Grijsbruine tint.' },
  { name: 'Zwart bruin', hex: '#292A2D', ralCode: 'RAL 8022', category: 'brown', description: 'Zwartbruine kleur.' },
  { name: 'Oranje bruin', hex: '#A65E2E', ralCode: 'RAL 8023', category: 'brown', description: 'Oranjebruine tint.' },
  { name: 'Beige bruin', hex: '#79553D', ralCode: 'RAL 8024', category: 'brown', description: 'Beigebruine kleur.' },
  { name: 'Bleek bruin', hex: '#755C48', ralCode: 'RAL 8025', category: 'brown', description: 'Bleekbruine tint.' },
  { name: 'Terra bruin', hex: '#4E3629', ralCode: 'RAL 8028', category: 'brown', description: 'Terrabruine kleur.' },
  { name: 'Parels koper', hex: '#763C28', ralCode: 'RAL 8029', category: 'brown', description: 'Parels koperbruine tint.' },

  // White RAL colors (9000-9018) - Complete series
  { name: 'Crèmewit', hex: '#FDF4E3', ralCode: 'RAL 9001', category: 'white', popular: true, description: 'Warme crèmewitte kleur, perfect voor traditionele woningen.' },
  { name: 'Grijswit', hex: '#E7EBDA', ralCode: 'RAL 9002', category: 'white', description: 'Grijswitte tint.' },
  { name: 'Signaallwit', hex: '#F4F4F4', ralCode: 'RAL 9003', category: 'white', description: 'Signaalwitte kleur.' },
  { name: 'Verkeerswit', hex: '#F1F0EA', ralCode: 'RAL 9016', category: 'white', popular: true, description: 'Zuiver verkeerswit, de meest gekozen kleur voor kozijnen.' },
  { name: 'Parels lichtgrijs', hex: '#E4E5E5', ralCode: 'RAL 9018', category: 'white', description: 'Parels lichtgrijze tint.' },

  // Black RAL colors (9004-9011) - Complete series
  { name: 'Signaallzwart', hex: '#282828', ralCode: 'RAL 9004', category: 'black', description: 'Signaalzwarte kleur.' },
  { name: 'Gitzwart', hex: '#0A0A0D', ralCode: 'RAL 9005', category: 'black', popular: true, description: 'Gitzwarte kleur voor een krachtige uitstraling.' },
  { name: 'Aluminiumwit', hex: '#A5A5A5', ralCode: 'RAL 9006', category: 'grey', description: 'Aluminiumwitte tint.' },
  { name: 'Grijsaluminium', hex: '#8F8F8F', ralCode: 'RAL 9007', category: 'grey', description: 'Grijsaluminium kleur.' },
  { name: 'Zuiver wit', hex: '#FFFFFF', ralCode: 'RAL 9010', category: 'white', description: 'Zuiver witte kleur.' },
  { name: 'Grafietwart', hex: '#1C1C1C', ralCode: 'RAL 9011', category: 'black', description: 'Grafiezwarte tint.' }
];

export const woodlookColors: RALColor[] = [
  {
    name: 'Golden Oak',
    hex: '#C19A6B',
    ralCode: 'Folie 2178-001',
    category: 'woodlook',
    popular: true,
    description: 'Warme eikenhouttint met natuurlijke nerftextuur voor een klassieke uitstraling.',
    applications: ['Jaren \'30 woningen', 'Landhuizen', 'Villa\'s', 'Gerenoveerde boerderijen'],
    technicalInfo: {
      'Foliecode': '2178-001',
      'RGB': '193, 154, 107',
      'CMYK': '0, 20, 45, 24',
      'HEX': '#C19A6B',
      'Textuur': 'Houtnerf'
    },
    designTips: [
      'Combineer met donkergroene of rode bakstenen voor een klassieke look',
      'Perfect voor landelijke en traditionele architectuur',
      'Gebruik binnen dezelfde kleur of contrasteer met wit',
      'Combineer met natuurlijke materialen zoals natuursteen raamdorpels'
    ]
  },
  {
    name: 'Noten',
    hex: '#654321',
    ralCode: 'Folie 2178-007',
    category: 'woodlook',
    description: 'Rijke, donkere houtlook die diepte en karakter aan uw woning toevoegt.',
    applications: ['Moderne landhuizen', 'Exclusieve woningen', 'Renovaties', 'Luxe uitstraling'],
    technicalInfo: {
      'Foliecode': '2178-007',
      'RGB': '101, 67, 33',
      'CMYK': '0, 34, 67, 60',
      'HEX': '#654321',
      'Textuur': 'Houtnerf'
    },
    designTips: [
      'Combineer met lichte gevelmaterialen voor contrast',
      'Ideaal voor moderne en exclusieve architectuur',
      'Binnen wit gebruiken voor een licht interieur',
      'Past goed bij donkere dakpannen'
    ]
  },
  {
    name: 'Mahonie',
    hex: '#C04000',
    ralCode: 'Folie 2097-013',
    category: 'woodlook',
    description: 'Roodbruine houtlook met subtiele nerven voor een elegante afwerking.',
    applications: ['Klassieke woningen', 'Herrenhuizen', 'Monumentale panden', 'Traditionele bouw'],
    technicalInfo: {
      'Foliecode': '2097-013',
      'RGB': '192, 64, 0',
      'CMYK': '0, 67, 100, 25',
      'HEX': '#C04000',
      'Textuur': 'Houtnerf'
    },
    designTips: [
      'Perfect voor klassieke en monumentale architectuur',
      'Combineer met crème of beige gevelmaterialen',
      'Gebruik binnen crème voor een warme uitstraling',
      'Past uitstekend bij rode dakpannen'
    ]
  },
  {
    name: 'Oregon Pine',
    hex: '#D8B28E',
    ralCode: 'Folie 1192-001',
    category: 'woodlook',
    description: 'Lichte houtlook met een subtiele nerf, perfect voor een natuurlijke uitstraling.',
    applications: ['Scandinavische stijl', 'Moderne woningen', 'Natuurlijke architectuur', 'Minimalistische designs'],
    technicalInfo: {
      'Foliecode': '1192-001',
      'RGB': '216, 178, 142',
      'CMYK': '0, 18, 34, 15',
      'HEX': '#D8B28E',
      'Textuur': 'Houtnerf'
    },
    designTips: [
      'Ideaal voor Scandinavische en moderne architectuur',
      'Combineer met witte of lichte gevelmaterialen',
      'Perfect voor minimalistische designs',
      'Gebruik binnen wit voor maximale lichtinval'
    ]
  },
  {
    name: 'Eiken Naturel',
    hex: '#D2B48C',
    ralCode: 'Folie 3149-008',
    category: 'woodlook',
    description: 'Lichte eikenhouttint met een natuurlijke uitstraling.',
    applications: ['Landelijke woningen', 'Natuurlijke architectuur', 'Cottages', 'Boerderij-stijl'],
    technicalInfo: {
      'Foliecode': '3149-008',
      'RGB': '210, 180, 140',
      'CMYK': '0, 14, 33, 18',
      'HEX': '#D2B48C',
      'Textuur': 'Houtnerf'
    },
    designTips: [
      'Perfect voor landelijke en natuurlijke architectuur',
      'Combineer met natuursteen en andere natuurlijke materialen',
      'Gebruik binnen wit of crème voor een lichte uitstraling',
      'Past goed bij riet- of strodaken'
    ]
  }
];

export const metallicColors: RALColor[] = [
  {
    name: 'Aluminium Metallic',
    hex: '#A9A9A9',
    ralCode: 'RAL 9006',
    category: 'metallic',
    description: 'Moderne metallic look die het beste van aluminium nabootst.',
    applications: ['Moderne architectuur', 'Industriële gebouwen', 'Kantoorpanden', 'Stedelijke woningen'],
    technicalInfo: {
      'RAL': '9006',
      'RGB': '169, 169, 169',
      'CMYK': '0, 0, 0, 34',
      'HEX': '#A9A9A9',
      'Afwerking': 'Metallic'
    },
    designTips: [
      'Perfect voor moderne en industriële architectuur',
      'Combineer met glas en staal voor een hedendaagse look',
      'Ideaal voor grote glasoppervlakken',
      'Past goed bij strakke, geometrische designs'
    ]
  },
  {
    name: 'Geborsteld RVS Look',
    hex: '#B4B4B4',
    ralCode: 'RAL 9007',
    category: 'metallic',
    description: 'Stijlvolle metallic afwerking met een geborsteld effect.',
    applications: ['Luxe woningen', 'Penthouse appartementen', 'Exclusieve bouw', 'Design woningen'],
    technicalInfo: {
      'RAL': '9007',
      'RGB': '180, 180, 180',
      'CMYK': '0, 0, 0, 29',
      'HEX': '#B4B4B4',
      'Afwerking': 'Geborsteld metallic'
    },
    designTips: [
      'Ideaal voor luxe en exclusieve projecten',
      'Combineer met hoogwaardige materialen',
      'Perfect voor minimalistische designs',
      'Gebruik spaarzaam voor maximale impact'
    ]
  },
  {
    name: 'Brons Metallic',
    hex: '#CD7F32',
    ralCode: 'RAL 8023',
    category: 'metallic',
    description: 'Warme metallic tint met een rijke, klassieke uitstraling.',
    applications: ['Klassieke architectuur', 'Monumentale panden', 'Luxe woningen', 'Traditionele bouw'],
    technicalInfo: {
      'RAL': '8023',
      'RGB': '205, 127, 50',
      'CMYK': '0, 38, 76, 20',
      'HEX': '#CD7F32',
      'Afwerking': 'Metallic'
    },
    designTips: [
      'Perfect voor klassieke en monumentale architectuur',
      'Combineer met warme natuursteen',
      'Ideaal voor traditionele designs met moderne twist',
      'Past uitstekend bij historische gebouwen'
    ]
  }
];
