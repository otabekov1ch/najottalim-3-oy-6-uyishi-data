const data = [
  { 
    src: 'https://picsum.photos/200/300?random=1',
    id: 1,
    first_name: "Sophronia",
    last_name: "Stoddart",
    email: "sstoddar0@howstuffworks.com",
    gender: "Female",
    ip_address: "80.215.124.45",
  },
  { 
    src: 'https://picsum.photos/200/300?random=2',
    id: 2,
    first_name: "Elie",
    last_name: "Ashenhurst",
    email: "eashenhurst1@ameblo.jp",
    gender: "Female",
    ip_address: "68.37.253.68",
  },
  { 
    src: 'https://picsum.photos/200/300?random=3',
    id: 3,
    first_name: "Elianore",
    last_name: "Eaddy",
    email: "eeaddy2@chronoengine.com",
    gender: "Female",
    ip_address: "67.148.137.105",
  },
  { 
    src: 'https://picsum.photos/200/300?random=4',
    id: 4,
    first_name: "Brittne",
    last_name: "Heditch",
    email: "bheditch3@businessweek.com",
    gender: "Female",
    ip_address: "100.224.120.91",
  },
  { 
    src: 'https://picsum.photos/200/300?random=5',
    id: 5,
    first_name: "Harman",
    last_name: "Mashal",
    email: "hmashal4@sakura.ne.jp",
    gender: "Male",
    ip_address: "135.116.148.60",
  },
  { 
    src: 'https://picsum.photos/200/300?random=6',
    id: 6,
    first_name: "Flore",
    last_name: "Zappel",
    email: "fzappel5@tripod.com",
    gender: "Female",
    ip_address: "78.191.118.28",
  },
  { 
    src: 'https://picsum.photos/200/300?random=7',
    id: 7,
    first_name: "Angelina",
    last_name: "Manneville",
    email: "amanneville6@lycos.com",
    gender: "Bigender",
    ip_address: "176.253.242.10",
  },
  { 
    src: 'https://picsum.photos/200/300?random=8',
    id: 8,
    first_name: "Merilyn",
    last_name: "Marusik",
    email: "mmarusik7@1und1.de",
    gender: "Female",
    ip_address: "221.137.214.47",
  },
  { 
    src: 'https://picsum.photos/200/300?random=9',
    id: 9,
    first_name: "Jeddy",
    last_name: "Brunn",
    email: "jbrunn8@umn.edu",
    gender: "Male",
    ip_address: "9.189.41.129",
  },
  { 
    src: 'https://picsum.photos/200/300?random=10',
    id: 10,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  { 
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
];

//imges

usersImg = document.querySelectorAll(".user__img")
let user1_img = usersImg[0];
let user2_img = usersImg[1]
let user3_img = usersImg[2]
let user4_img = usersImg[3]
let user5_img = usersImg[4]
let user6_img = usersImg[5]
let user7_img = usersImg[6]
let user8_img = usersImg[7]
let user9_img = usersImg[8]
let user10_img = usersImg[9]
let user11_img = usersImg[10]
user1_img.src = data[0].src
user2_img.src = data[1].src
user3_img.src = data[2].src
user4_img.src = data[3].src
user5_img.src = data[4].src
user6_img.src = data[5].src
user7_img.src = data[6].src
user8_img.src = data[7].src
user9_img.src = data[8].src
user10_img.src = data[9].src
user11_img.src = data[10].src




//names 

usersName = document.querySelectorAll(".user__fullname")
let user1_name = usersName[0];
let user2_name = usersName[1]
let user3_name = usersName[2]
let user4_name = usersName[3]
let user5_name = usersName[4]
let user6_name = usersName[5]
let user7_name = usersName[6]
let user8_name = usersName[7]
let user9_name = usersName[8]
let user10_name = usersName[9]
let user11_name = usersName[10]
user1_name.textContent = data[0].first_name + " " + data[0].last_name
user2_name.textContent = data[1].first_name + " " + data[1].last_name
user3_name.textContent = data[2].first_name + " " + data[2].last_name
user4_name.textContent = data[3].first_name + " " + data[3].last_name
user5_name.textContent = data[4].first_name + " " + data[4].last_name
user6_name.textContent = data[5].first_name + " " + data[5].last_name
user7_name.textContent = data[6].first_name + " " + data[6].last_name
user8_name.textContent = data[7].first_name + " " + data[7].last_name
user9_name.textContent = data[8].first_name + " " + data[8].last_name
user10_name.textContent = data[9].first_name + " " + data[9].last_name
user11_name.textContent = data[10].first_name + " " + data[10].last_name

//emails 
usersEmail = document.querySelectorAll(".user__email")
let user1_email = usersEmail[0];
let user2_email = usersEmail[1];
let user3_email = usersEmail[2];
let user4_email = usersEmail[3];
let user5_email = usersEmail[4];
let user6_email = usersEmail[5];
let user7_email = usersEmail[6];
let user8_email = usersEmail[7];
let user9_email = usersEmail[8];
let user10_email = usersEmail[9];
let user11_email = usersEmail[10];

user1_email.textContent = data[0].email
user2_email.textContent = data[1].email
user3_email.textContent = data[2].email
user4_email.textContent = data[3].email
user5_email.textContent = data[4].email
user6_email.textContent = data[5].email
user7_email.textContent = data[6].email
user8_email.textContent = data[7].email
user9_email.textContent = data[8].email
user10_email.textContent = data[9].email
user11_email.textContent = data[10].email


//gender 
usersGender = document.querySelectorAll(".user__gender")
let user1_gen = usersGender[0];
let user2_gen = usersGender[1];
let user3_gen = usersGender[2];
let user4_gen = usersGender[3];
let user5_gen = usersGender[4];
let user6_gen = usersGender[5];
let user7_gen = usersGender[6];
let user8_gen = usersGender[7];
let user9_gen = usersGender[8];
let user10_gen = usersGender[9];
let user11_gen = usersGender[10];

user1_gen.textContent = data[0].gender
user2_gen.textContent = data[1].gender
user3_gen.textContent = data[2].gender
user4_gen.textContent = data[3].gender
user5_gen.textContent = data[4].gender
user6_gen.textContent = data[5].gender
user7_gen.textContent = data[6].gender
user8_gen.textContent = data[7].gender
user9_gen.textContent = data[8].gender
user10_gen.textContent = data[9].gender
user11_gen.textContent = data[10].gender

//IP adress

usersIP = document.querySelectorAll(".user__address")
let user1_ip = usersIP[0];
let user2_ip = usersIP[1];
let user3_ip = usersIP[2];
let user4_ip = usersIP[3];
let user5_ip = usersIP[4];
let user6_ip = usersIP[5];
let user7_ip = usersIP[6];
let user8_ip = usersIP[7];
let user9_ip = usersIP[8];
let user10_ip = usersIP[9];
let user11_ip = usersIP[10];

user1_ip.textContent = data[0].ip_address
user2_ip.textContent = data[1].ip_address
user3_ip.textContent = data[2].ip_address
user4_ip.textContent = data[3].ip_address
user5_ip.textContent = data[4].ip_address
user6_ip.textContent = data[5].ip_address
user7_ip.textContent = data[6].ip_address
user8_ip.textContent = data[7].ip_address
user9_ip.textContent = data[8].ip_address
user10_ip.textContent = data[9].ip_address
user11_ip.textContent = data[10].ip_address

