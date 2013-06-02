console.log("series")
var graphseries = [
  {
    name:"Fiji", data: [ 
    { x: 1947, y:282 },
    { x: 1948, y: 200 },
    { x: 1949, y: 190 },
    { x: 1950, y: 180 }
    ]
  },
  {
    name:"New Zealand", 
    data: [ 
    { x: 1947, y:  3903 },
    { x: 1948, y:  2622 },
    { x: 1949, y:  2998 },
    { x: 1950, y:  3542 }]
  },
  {
    name:"Other - Oceania",  data: [ 
    { x: 1947, y: 122 },
    { x: 1948, y: 171 },
    { x: 1949, y: 174 },
    { x: 1950, y: 138 }]
  },
  {
    name:"Other Commonwealth Countries", data: [ 
    { x: 1947, y: 166 },
    { x: 1948, y: 106 },
    { x: 1949, y: 88 },
    { x: 1950, y: 82 }]
  },
  {
    name:"Papua New Guinea", data: [ 
    { x: 1947, y: 271 },
    { x: 1948, y: 487 },
    { x: 1949, y: 429 },
    { x: 1950, y: 504 }]
  },
  /*{
    name:"Albania", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Austria", data: [ 
    { x: 1947, y: 64 },
    { x: 1948, y: 150 },
    { x: 1949, y:  2612 },
    { x: 1950, y:  6805 }]
  },
  {
    name:"Belgium", data: [ 
    { x: 1947, y: 91 },
    { x: 1948, y: 38 },
    { x: 1949, y: 304 },
    { x: 1950, y: 448 }]
  },
  /*{
    name:"Bulgaria", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Czechoslovakia", data: [ 
    { x: 1947, y: 40 },
    { x: 1948, y: 181 },
    { x: 1949, y: 812 },
    { x: 1950, y:  1778 }]
  },
  {
    name:"Denmark", data: [ 
    { x: 1947, y: 13 },
    { x: 1948, y: 143 },
    { x: 1949, y: 123 },
    { x: 1950, y: 476 }]
  },
  /*{
    name:"Estonia", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Finland", data: [ 
    { x: 1947, y: 3 },
    { x: 1948, y: 7 },
    { x: 1949, y: 31 },
    { x: 1950, y: 68 }]
  },
  {
    name:"France", data: [ 
    { x: 1947, y: 414 },
    { x: 1948, y: 591 },
    { x: 1949, y: 796 },
    { x: 1950, y:  1290 }]
  },
  {
    name:"Germany", data: [ 
    { x: 1947, y: 236 },
    { x: 1948, y:  4830 },
    { x: 1949, y:  26169 },
    { x: 1950, y:  63982 }]
  },
  {
    name:"Greece", data: [ 
    { x: 1947, y: 439 },
    { x: 1948, y:  1383 },
    { x: 1949, y:  1303 },
    { x: 1950, y:  2040 }]
  },
  /*{
    name:"Hungary", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Italy", data: [ 
    { x: 1947, y: 161 },
    { x: 1948, y: 940 },
    { x: 1949, y:  6362 },
    { x: 1950, y:  17197 }]
  },
  /*{
    name:"Latvia", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  /*{
    name:"Lithuania", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Malta", data: [ 
    { x: 1947, y: 61 },
    { x: 1948, y: 405 },
    { x: 1949, y:  2137 },
    { x: 1950, y:  5249 }]
  },
  {
    name:"Netherlands", data: [ 
    { x: 1947, y: 116 },
    { x: 1948, y: 310 },
    { x: 1949, y:  1095 },
    { x: 1950, y:  3175 }]
  },
  {
    name:"Norway", data: [ 
    { x: 1947, y: 30 },
    { x: 1948, y: 48 },
    { x: 1949, y: 76 },
    { x: 1950, y: 118 }]
  },
  {
    name:"Other - Europe", data: [ 
    { x: 1947, y:  1262 },
    { x: 1948, y: 531 },
    { x: 1949, y:  2831 },
    { x: 1950, y:  3998 }]
  },
  {
    name:"Other Commonwealth Countries", data: [ 
    { x: 1947, y: 88 },
    { x: 1948, y: 373 },
    { x: 1949, y: 251 },
    { x: 1950, y:  1493 }]
  },
  {
    name:"Poland", data: [ 
    { x: 1947, y: 218 },
    { x: 1948, y: 467 },
    { x: 1949, y:  2963 },
    { x: 1950, y:  5464 }]
  },
  {
    name:"Portugal", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },
  /*{
    name:"Romania", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Spain", data: [ 
    { x: 1947, y: 4 },
    { x: 1948, y: 4 },
    { x: 1949, y: 29 },
    { x: 1950, y: 47 }]
  },
  {
    name:"Sweden", data: [ 
    { x: 1947, y: 32 },
    { x: 1948, y: 69 },
    { x: 1949, y: 149 },
    { x: 1950, y: 186 }]
  },
  {
    name:"Switzerland", data: [ 
    { x: 1947, y: 65 },
    { x: 1948, y: 154 },
    { x: 1949, y: 186 },
    { x: 1950, y: 864 }]
  },
  {
    name:"U.S.S.R.", data: [ 
    { x: 1947, y: 7 },
    { x: 1948, y: 21 },
    { x: 1949, y: 852 },
    { x: 1950, y: 414 }]
  },
  {
    name:"Ukraine", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 188 }]
  },
  {
    name:"United Kingdom and Ireland", data: [ 
    { x: 1947, y:  15048 },
    { x: 1948, y:  21649 },
    { x: 1949, y:  49653 },
    { x: 1950, y:  52166 }]
  },
  {
    name:"Yugoslavia", data: [ 
    { x: 1947, y: 13 },
    { x: 1948, y: 74 },
    { x: 1949, y: 635 },
    { x: 1950, y:  1403 }]
  },
  {
    name:"Myanmar", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 117 },
    { x: 1950, y: 79 }]
  },
  {
    name:"China", data: [ 
    { x: 1947, y:  1700 },
    { x: 1948, y: 827 },
    { x: 1949, y:  1285 },
    { x: 1950, y:  1499 }]
  },
  {
    name:"Cyprus", data: [ 
    { x: 1947, y: 40 },
    { x: 1948, y: 281 },
    { x: 1949, y: 891 },
    { x: 1950, y: 901 }]
  },
  {
    name:"Hong Kong", data: [ 
    { x: 1947, y: 323 },
    { x: 1948, y: 208 },
    { x: 1949, y: 481 },
    { x: 1950, y: 530 }]
  },
  {
    name:"India", data: [ 
    { x: 1947, y:  1954 },
    { x: 1948, y:  3786 },
    { x: 1949, y:  2182 },
    { x: 1950, y:  1204 }]
  },
  {
    name:"Indonesia", data: [ 
    { x: 1947, y:  1086 },
    { x: 1948, y: 352 },
    { x: 1949, y: 259 },
    { x: 1950, y: 762 }]
  },
  {
    name:"Israel", data: [ 
    { x: 1947, y: 88 },
    { x: 1948, y: 208 },
    { x: 1949, y: 228 },
    { x: 1950, y: 111 }]
  },
  {
    name:"Japan", data: [ 
    { x: 1947, y: 57 },
    { x: 1948, y: 57 },
    { x: 1949, y: 70 },
    { x: 1950, y: 224 }]
  },
  {
    name:"Lebanon", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 151 },
    { x: 1950, y: 413 }]
  },
  {
    name:"Malaysia", data: [ 
    { x: 1947, y: 888 },
    { x: 1948, y: 950 },
    { x: 1949, y: 775 },
    { x: 1950, y: 761 }]
  },
  {
    name:"Other - Asia", data: [ 
    { x: 1947, y: 16 },
    { x: 1948, y: 103 },
    { x: 1949, y: 43 },
    { x: 1950, y: 90 }]
  },
  /*{
    name:"Other Commonwealth Countries", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Pakistan", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 57 },
    { x: 1950, y: 177 }]
  },
  {
    name:"Philippines", data: [ 
    { x: 1947, y: 245 },
    { x: 1948, y: 63 },
    { x: 1949, y: 70 },
    { x: 1950, y: 143 }]
  },
  /*{
    name:"Singapore", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"Sri Lanka", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 167 },
    { x: 1950, y: 256 }]
  },
  {
    name:"Syria", data: [ 
    { x: 1947, y: 25 },
    { x: 1948, y: 105 },
    { x: 1949, y: 191 },
    { x: 1950, y: 22 }]
  },
  {
    name:"Turkey", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 15 },
    { x: 1949, y: 5 },
    { x: 1950, y: 17 }]
  },
  {
    name:"Canada", data: [ 
    { x: 1947, y: 683 },
    { x: 1948, y: 286 },
    { x: 1949, y: 511 },
    { x: 1950, y: 453 }]
  },
  {
    name:"Other - America", data: [ 
    { x: 1947, y: 27 },
    { x: 1948, y: 86 },
    { x: 1949, y: 71 },
    { x: 1950, y: 95 }]
  },
  /*{
    name:"Other Commonwealth Countries", data: [ 
    { x: 1947, y: 0 },
    { x: 1948, y: 0 },
    { x: 1949, y: 0 },
    { x: 1950, y: 0 }]
  },*/
  {
    name:"United States of America", data: [ 
    { x: 1947, y:  2570 },
    { x: 1948, y:  2162 },
    { x: 1949, y:  1654 },
    { x: 1950, y:  1398 }]
  },
  {
    name:"Egypt", data: [ 
    { x: 1947, y: 367 },
    { x: 1948, y: 800 },
    { x: 1949, y:  1890 },
    { x: 1950, y:  1801 }]
  },
  {
    name:"Other - Africa", data: [ 
    { x: 1947, y: 3 },
    { x: 1948, y: 7 },
    { x: 1949, y: 84 },
    { x: 1950, y: 62 }]
  },
  {
    name:"Other Commonwealth Countries", data: [ 
    { x: 1947, y: 447 },
    { x: 1948, y: 53 },
    { x: 1949, y: 30 },
    { x: 1950, y: 51 }]
  },
  {
    name:"South Africa", data: [ 
    { x: 1947, y: 616 },
    { x: 1948, y: 266 },
    { x: 1949, y: 358 },
    { x: 1950, y: 545 }]
  }
]