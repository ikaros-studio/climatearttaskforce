const artworks = [
  {
    title: 'Global sea levels',
    artist: 'Alexander Doudkin',
    path: '/artworks/globalsealevels',
    coverlink:
      'https://media2.giphy.com/media/l4hLyOGRJWNSR8QQ8/giphy.gif?cid=ecf05e47r7ztk7lf7iavpelppn9wgsjf6fwsr2yh2whabg6s&rid=giphy.gif&ct=g',
  },
  {
    title: 'Global warming',
    artist: 'Bhuvesh Gautam',
    soon: true,
    coverlink:
      'https://media1.giphy.com/media/xULW8s6Z5CGIHcZKZa/giphy.gif?cid=ecf05e47vgubovh792yljxaue1sc1vcj1oxqk5lapsimonsl&rid=giphy.gif&ct=g',
    path: '/artworks/temperature',
  },
  {
    title: 'fish populations',
    artist: 'Alexander Doudkin',
    coverlink:
      'https://media0.giphy.com/media/10h8d7DM6tOTK/giphy.gif?cid=ecf05e47kdbk77ukw8sao1pkghyum3p2rq4923ht58bplbbf&rid=giphy.gif&ct=g',
    iconfill: '#00ead3',
    img: 'fishes',
    soon: true,

    icon: 'M180.5 141.5C219.7 108.5 272.6 80 336 80C399.4 80 452.3 108.5 491.5 141.5C530.5 174.5 558.3 213.1 572.4 241.3C577.2 250.5 577.2 261.5 572.4 270.7C558.3 298 530.5 337.5 491.5 370.5C452.3 403.5 399.4 432 336 432C272.6 432 219.7 403.5 180.5 370.5C164.3 356.7 150 341.9 137.8 327.3L48.12 379.6C35.61 386.9 19.76 384.9 9.474 374.7C-.8133 364.5-2.97 348.7 4.216 336.1L50 256L4.216 175.9C-2.97 163.3-.8133 147.5 9.474 137.3C19.76 127.1 35.61 125.1 48.12 132.4L137.8 184.7C150 170.1 164.3 155.3 180.5 141.5L180.5 141.5zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z',
  },
  {
    title: 'Air pollution',
    artist: 'Alexander Doudkin',
    soon: true,
    img: 'airpollution',
    coverlink:
      'https://media1.giphy.com/media/cZb6tq2MFotjDzRTUu/giphy.gif?cid=ecf05e47is13gz1ttt2zn3x4odw3xju4tdzpk2g14mw0pzj1&rid=giphy.gif&ct=g',
  },
  {
    title: 'Species extinction',
    artist: 'Alexander Doudkin',
    coverlink:
      'https://media2.giphy.com/media/oNTQZNB67kMf5VHiCj/giphy.gif?cid=ecf05e47uhrqy2nvvd1zlwmrfnp4cxoggxb2kz5nxz9lrg8w&rid=giphy.gif&ct=g',
    soon: true,

    img: 'biodiversity',

    iconfill: '#00ead3',
    icon: 'M256 405.1V456C256 469.3 245.3 480 232 480C218.7 480 208 469.3 208 456V415.3C202.7 415.8 197.4 416 192 416C175.4 416 159.3 413.9 144 409.1V456C144 469.3 133.3 480 120 480C106.7 480 96 469.3 96 456V390.3C38.61 357.1 0 295.1 0 224C0 117.1 85.96 32 192 32C228.3 32 262.3 42.08 291.2 59.6C322.4 78.44 355.9 96 392.3 96H448C518.7 96 576 153.3 576 224V464C576 470.1 571.5 477.2 564.8 479.3C558.2 481.4 550.9 478.9 546.9 473.2L461.6 351.3C457.1 351.8 452.6 352 448 352H392.3C355.9 352 322.4 369.6 291.2 388.4C280.2 395.1 268.4 400.7 256 405.1zM448 248C461.3 248 472 237.3 472 224C472 210.7 461.3 200 448 200C434.7 200 424 210.7 424 224C424 237.3 434.7 248 448 248z',
  },
  {
    title: 'Emissions',
    artist: 'Alexander Doudkin',
    coverlink:
      'https://media1.giphy.com/media/10rMBuwIVwIy40/giphy.gif?cid=ecf05e47n8qlg20quy2lma8denznhdwqxfwkaegv8k98oyuc&rid=giphy.gif&ct=g',
    img: 'emissions',
    soon: true,
  },
  {
    title: 'Wild fires',
    artist: 'Alexander Doudkin',
    coverlink:
      'https://media0.giphy.com/media/q84mckYneoF8I/giphy.gif?cid=ecf05e47sbb2l9a0yypr02cdhpynnsxyx6atlnmg2edjul7r&rid=giphy.gif&ct=g',
    soon: true,
    img: 'wildfire',
    iconfill: '#00ead3',
    icon: 'M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z',
  },
]

export default artworks
