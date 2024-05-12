const data = [
  {
    id: 1,
    name: "Vì Tinh Tú",
    price: "750,000",
    image:
      "https://img.mayflower.vn/2024/02/750k-shimmer-kemdau-thuy-chau-1-247x296.jpg",
    title: "Hoa tuoi",
    coment:
      "Vì Tinh Tú - Giỏ hoa xinh mix hài hòa giữa hồng shimmer và hồng kem dâu tạo nên 1 giỏ hoa màu sắc bắt mắt lẫn chất lượng tuyệt hảo.",
    content: `Giỏ hoa Vì Tinh Tú bao gồm:

      Hồng Shimmer
      Hồng kem dâu
      Lan tường hồng
      Thúy châu
      Hoa lá và phụ kiện khác`,
  },
  {
    id: 2,
    name: "Mặt trời mộng mơ",
    price: "850,000",
    image:
      "https://img.mayflower.vn/2024/02/900k-cmd-maoluong-phang-mustang-2-5-1-247x296.jpg",
    title: "Hoa tuoi",
    category: "hot",
    coment:
      "Mặt Trời Mộng Mơ - bó hoa tone tím một màu sắc vô cùng quyến rũ, nhẹ nhàng mà lại rất bí ẩn;cho thấy một cử chỉ lãng mạn, cảm giác thanh lịch, dịu dàng.",
    content: `Bó hoa Mặt Trời Mộng Mơ bao gồm:

      Cúc mẫu đơn hồng
      Phăng Mustang 
      Lan tường hồng
      Mao lương
      Một số hoa lá và phụ kiện khác`,
  },
  {
    id: 3,
    name: "Má em ửng hồng",
    price: "1,050,000",
    image:
      "https://img.mayflower.vn/2023/07/z4502838348593_eaea5990495885316972623f11ce3363-247x296.jpg",
    title: "Hoa tuoi",
    category: "hot",
    coment:
      "Má Em Ửng Hồng - Bó hoa cẩm tú cầu nhập Hà Lan mix màu hồng xanh thể hiện vẻ đẹp kiêu sa chỉ cần ngắm thôi cũng đủ khiến người ta xao xuyến không nguôi.",
    content: `Bó hoa Má Em Ửng Hồng bao gồm:

    Cẩm tú cầu nhập Hà Lan các màu
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 4,
    name: "Tia nắng lung linh",
    price: "1,150,000",
    image: "https://img.mayflower.vn/2023/12/1100k-capu-maoluong-247x296.jpg",
    title: "Hoa tuoi",
    category: "hot",
    coment:
      "Giỏ hoa Tia Nắng Lung Linh – giỏ hoa ngoài ý nghĩa đẹp về tình yêu; loài hoa này còn mang cả ý nghĩa tích cực đối với mối quan hệ bạn bè, đồng nghiệp..",
    content: `Giỏ hoa Tia Nắng Lung Linh bao gồm:

    Mao lương
    Capuchino
    Lan tường
    Cẩm chướng chùm
    Rossi
    Đồng tiền
    Một số hoa lá và phụ kiện khác`,
  },
  {
    id: 5,
    name: "Mặt trời chói trang",
    price: "650,000",
    image:
      "https://img.mayflower.vn/2023/11/2000k-cucmaudontulip-2-247x296.jpg",
    title: "Hoa tuoi",
    category: "hot",
    coment:
      "Mặt Trời Chói Chang – bó hoa cúc mẫu đơn tone xanh dương là màu của tuổi trẻ, nhiệt huyết và sáng tạo; sự sẻ chia.",
    content: `Giỏ hoa Tia Nắng Lung Linh bao gồm:

    Mao lương
    Capuchino
    Lan tường
    Cẩm chướng chùm
    Rossi
    Đồng tiền
    Một số hoa lá và phụ kiện khác`,
  },
  {
    id: 6,
    name: "Hương Gió Bay",
    price: "1,350,000",
    image:
      "https://img.mayflower.vn/2024/02/1000k-tulip-phiyen-phang-tuongxoan-4-247x296.jpg",
    title: "Hoa tuoi",
    category: "new",
    coment:
      "Hương gió bay – bó hoa cúc mẫu đơn tone xanh dương là màu của tuổi trẻ, nhiệt huyết và sáng tạo; sự sẻ chia.",
    content: `Giỏ hoa Tia Nắng Lung Linh bao gồm:

    Mao lương
    Capuchino
    Lan tường
    Cẩm chướng chùm
    Rossi
    Đồng tiền
    Một số hoa lá và phụ kiện khác`,
  },
  {
    id: 7,
    name: "Kết Nối Yêu Thương",
    price: "550,000",
    image:
      "https://img.mayflower.vn/2023/11/2100k-cam-CM-lan-ho-diep-tulip-ngoc-trai-2-247x296.jpg",
    title: "Hoa tuoi",
    category: "new",
    coment:
      "Kết Nối Yêu Thương – Giỏ hoa kết hợp hoàn hảo giữa tone màu vàng kem, xnah dương và hồng tạo nên một giỏ hoa đặc biệt thu hút mọi ánh nhìn.",
    content: `Giỏ hoa Kết Nối Yêu Thương bao gồm:

    Cẩm nhập
    Ngọc trai
    Mikoto
    Lan hồ điệp
    Lan tường
    Tulip
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 47,
    name: "Đừng quên tên anh",
    price: "1,650,000",
    image: "https://img.mayflower.vn/2018/10/dung-quen-ten-anh-1-2-247x296.jpg",
    title: "Hoa tuoi",
    category: "new",
    coment:
      "Đừng quên tên anh – Giỏ hoa kết hợp hoàn hảo giữa tone màu vàng kem, xnah dương và hồng tạo nên một giỏ hoa đặc biệt thu hút mọi ánh nhìn.",
    content: `Giỏ hoa Đừng quên tên anh bao gồm:

    Cẩm nhập
    Ngọc trai
    Mikoto
    Lan hồ điệp
    Lan tường
    Tulip
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 8,
    name: "Ngôi Sao cô đơn",
    price: "1,250,000",
    image: "https://img.mayflower.vn/2022/08/ngoi-sao-co-don-247x296.jpg",
    title: "Hoa tuoi",
    category: "new",
    coment:
      "Ngôi Sao cô đơn – Giỏ hoa kết hợp hoàn hảo giữa tone màu vàng kem, xnah dương và hồng tạo nên một giỏ hoa đặc biệt thu hút mọi ánh nhìn.",
    content: `Giỏ hoa Ngôi Sao cô đơn bao gồm:

    Cẩm nhập
    Ngọc trai
    Mikoto
    Lan hồ điệp
    Lan tường
    Tulip
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 9,
    name: "Cột dây tơ duyên",
    price: "1,350,000",
    image: "https://img.mayflower.vn/2022/09/cot-day-to-duyen-247x296.jpg",
    title: "Hoa tuoi",
    coment:
      "Cột dây tơ duyên – Giỏ hoa kết hợp hoàn hảo giữa tone màu vàng kem, xnah dương và hồng tạo nên một giỏ hoa đặc biệt thu hút mọi ánh nhìn.",
    content: `Giỏ hoa Cột dây tơ duyên bao gồm:

    Cẩm nhập
    Ngọc trai
    Mikoto
    Lan hồ điệp
    Lan tường
    Tulip
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 10,
    name: "Yêu xa",
    price: "550,000",
    image: "https://img.mayflower.vn/2018/08/yeu-xa-2-247x296.jpg",
    title: "Hoa tuoi",
    coment:
      "Yêu xa – Giỏ hoa kết hợp hoàn hảo giữa tone màu vàng kem, xnah dương và hồng tạo nên một giỏ hoa đặc biệt thu hút mọi ánh nhìn.",
    content: `Giỏ hoa Yêu xa bao gồm:

    Cẩm nhập
    Ngọc trai
    Mikoto
    Lan hồ điệp
    Lan tường
    Tulip
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 11,
    name: "Bó 200 bông hồng phấn",
    price: "1,550,000",
    image:
      "https://product.hstatic.net/200000427529/product/67b42fd8-8615-437e-b617-f51e628dbb42_0f0b738d958c47d4921d6ee6fe5b5c9f_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó 200 bông hồng phấn – Giỏ hoa kết hợp hoàn hảo giữa tone màu vàng kem, xnah dương và hồng tạo nên một giỏ hoa đặc biệt thu hút mọi ánh nhìn.",
    content: `Giỏ hoa Yêu xa bao gồm:

    100 bông hồng Ecuador Heart nhập khẩu
    Baby
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 12,
    name: "Bó 100 bông hồng đỏ",
    price: "1,200,000",
    image:
      "https://product.hstatic.net/200000427529/product/9fae23e2-9477-45fc-ac3b-bb1fa588b55a_7a80492b886f45aa807c1a8b342df5fb_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó 100 bông hồng đỏ - tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    100 bông hồng Ecuador Heart nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 13,
    name: "Bó hồng xanh",
    price: "700,000",
    image:
      "https://product.hstatic.net/200000427529/product/55d19128-6cc8-4725-a4e1-de234d7d88f7_592b56687964479a948130cd9bd4e7bf_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó hồng xanh - tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng xanh bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 14,
    name: "Bó Hoa Hồng Sáp",
    price: "800,000",
    image:
      "https://product.hstatic.net/200000427529/product/0f52e6b5-5f6d-4b24-84d3-33ee7886710f_9c73e8df97b24ae6be2627a89ef9975e_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 16,
    name: "Bó 99 Bông Vàng Gold ",
    price: "900,000",
    image:
      "https://product.hstatic.net/200000427529/product/90c1ae11-721d-489b-9a35-21b9c8230ff8_f3cdf3df4f5447fab4771a948b66cc94_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 17,
    name: "Bó Hoa Sáp Dạ Quang",
    price: "600,000",
    image:
      "https://product.hstatic.net/200000427529/product/dc238348-89bb-409a-ad21-c7b02cceaf54_521b19588d87469c871ed81f174360ca_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },

  {
    id: 18,
    name: "Bó Hoa Hồng Sáp Baby",
    price: "1,800,000",
    image:
      "https://product.hstatic.net/200000427529/product/aaa856db-caba-441a-9d21-0298b72d9b92_96868dc692944472a5445f48517e64e0_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 19,
    name: "Pink Girl - HST19",
    price: "1,600,000",
    image:
      "https://product.hstatic.net/200000427529/product/7872e78c-4864-424b-bfec-6f3c135b1b55_f21e94648b2e46428a542f164e301162_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 20,
    name: "Vòng Tròn Tình Yêu",
    price: "1,500,000",
    image:
      "https://product.hstatic.net/200000427529/product/4e17951c-4c0d-45ee-95c9-542fba3a78bc_b9b3db143c074b57b80ffd4a316766b2_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 20,
    name: "Tình Yêu Vĩnh Cửu",
    price: "1,400,000",
    image:
      "https://product.hstatic.net/200000427529/product/6fea66ce-3c8b-4394-b0c0-61b9a7392ae1_94a9ade86d014f8184349fc74e0d4ce0_master.jpg",
    title: "Hoa Sap",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 21,
    name: "Hương Mùa Thu",
    price: "1,300,000",
    image: "https://img.mayflower.vn/2023/11/2500k_1-1-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 22,
    name: "Một Lòng Nhớ Thương",
    price: "1,550,000",
    image:
      "https://img.mayflower.vn/2023/11/2600k-ohara-hong-mon-mix-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 23,
    name: "Giai Điệu Trái Tim",
    price: "1,100,000",
    image: "https://img.mayflower.vn/2023/11/1600k-cam-xit-ohara-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 23,
    name: "Dây Tơ Hồng",
    price: "800,000",
    image:
      "https://img.mayflower.vn/2023/11/1400k-cuc-mau-don-ohara-mix-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 24,
    name: "Tô Hồng",
    price: "500,000",
    image: "https://img.mayflower.vn/2023/11/1500k-ohara-sen-nhi-3-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 25,
    name: "Yêu Thương Đong Đầy",
    price: "600,000",
    image:
      "https://img.mayflower.vn/2023/11/1250k-shimmer-tim-xoay-2-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 26,
    name: "Âm Hưởng Nhẹ Nhàng",
    price: "800,000",
    image:
      "https://img.mayflower.vn/2022/07/nhe-tua-long-hong1-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 27,
    name: "Tinh Tế",
    price: "350,000",
    image:
      "https://img.mayflower.vn/2022/07/mua-thu-ha-noi-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 28,
    name: "Truyền Lửa",
    price: "900,000",
    image:
      "https://img.mayflower.vn/2023/12/850k-hongvang-cam-spirit-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 29,
    name: "Lòng Nhiệt Huyết",
    price: "400,000",
    image: "https://img.mayflower.vn/2023/12/1tr-cam-spirit-vang-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 30,
    name: "Lẵng Juliet Cam",
    price: "600,000",
    image: "https://img.mayflower.vn/2023/12/750k-julietcam-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 31,
    name: "Điều Hạnh Phúc",
    price: "1,300,000",
    image:
      "https://img.mayflower.vn/2024/01/750k-julietcanhxoan-phangmustang-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 32,
    name: "Gìn Giữ Yêu Thương",
    price: "1,200,000",
    image: "https://img.mayflower.vn/2024/01/650k-cmd-tulip-2-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 33,
    name: "Một Nhành Hoa Xinh",
    price: "1,500,000",
    image:
      "https://img.mayflower.vn/2024/01/700k-phangchum-tieudelphin-thanhlieu-lalieuthanhhuong-2-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 34,
    name: "Mây Họa Ánh Trăng",
    price: "900,000",
    image:
      "https://img.mayflower.vn/2023/12/1600k-anh-trang-thanh-lieu-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 35,
    name: "Ánh Trăng Chờ Đợi",
    price: "800,000",
    image:
      "https://img.mayflower.vn/2023/12/1300k-camnhaphalan-mikoto-3-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 36,
    name: "Ánh Mắt Kẻ Mộng Mơ",
    price: "900,000",
    image:
      "https://img.mayflower.vn/2023/12/1200k-tulip-tuong-phang-tim-1-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 37,
    name: "Kệ Hoa Rực Rỡ",
    price: "400,000",
    image: "https://img.mayflower.vn/2023/07/1600K-2-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 38,
    name: "Rực Rỡ Thành Công",
    price: "800,000",
    image: "https://img.mayflower.vn/2023/07/2600k-1-247x296.jpg",
    title: "Hoa Gio",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 39,
    name: "Hữu Nghị Hợp Tác",
    price: "1,600,000",
    image: "https://img.mayflower.vn/2023/07/1400k-2-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 40,
    name: "Kệ Hoa Hồng Phát",
    price: "1,200,000",
    image: "https://img.mayflower.vn/2023/07/2300k-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Bó Hoa Hồng Sáp- tình yêu bất tử, mong muốn gắn bó lâu dài, bền chặt. Bó theo phong cách hiện đại, sang trọng, tinh tế, kiêu hãnh.",
    content: `Bó hồng Bó 100 bông hồng đỏ bao gồm:

    990 bông hồng sáp nhập khẩu
    Baby
    Một số phụ kiện khác`,
  },
  {
    id: 41,
    name: "Kệ Hoa Kỉ Niệm",
    price: "1,200,000",
    image: "https://img.mayflower.vn/2020/01/ke-hoa-ki-niem-247x296.jpg",
    title: "Lang hoa",
    coment:
      "Kệ hoa Kỉ niệm mang một màu sắc vui vẻ, tươi mới, tràn đầy năng lượng. Đối với kinh doanh: hy vọng, danh dự, lộc lá xum xuê",
    content: `Kệ hoa Kỉ niệm bao gồm:

    Hồng Juliet
    Lan Hồ điệp
    Hồng vàng
    Cúc Rossie vàng, xanh
    Hoa lá và phụ kiện khác`,
  },
  {
    id: 42,
    name: "Hồng Cosette",
    price: "1,200,000",
    image:
      "https://img.mayflower.vn/2023/12/2000k-hongtim-cosette-30k-bong-247x296.jpg",
    title: "Hoa tuoi",
    coment:
      "Hồng Cosette – loài hoa hồng có nét ngọt ngào và dịu dàng; sử dụng để truyền đạt những cảm xúc nhẹ nhàng như lòng biết ơn, niềm vui hoặc sự ngưỡng mộ.",
    content: `Bó hoa Hồng Cosette bao gồm:

  Hoa hồng nhập Cosette
  Thanh liễu
  Một số phụ kiện khác`,
  },
  {
    id: 43,
    name: "Tình Yêu Viên Mãn",
    price: "850,000",
    image:
      "https://product.hstatic.net/200000427529/product/462b19ad-c8b2-4b90-8941-51bb021f00dc_c21d20005115406a96f37b58b21561dd_master.jpg",
    title: "Hoa Sap",
    coment: "Tình Yêu Viên Mãn - HST17 - Hoa sáp tặng sinh nhật vợ.",
    content: `Bó hoa Hồng Cosette bao gồm:

  Hoa hồng sáp
  Thanh liễu
  Một số phụ kiện khác`,
  },
  {
    id: 44,
    name: "Sunshine - HST15",
    price: "250,000",
    image:
      "https://product.hstatic.net/200000427529/product/cd9badef-3ba9-41f6-aec1-8c8880a1afba_e0300fae3ea84a00b9c4503c78776364_master.jpg",
    title: "Hoa Sap",
    coment: "Sunshine - HST15 - Hoa 20/11 - Hoa Hướng Dương",
    content: `Bó hoa Hồng Cosette bao gồm:

  Hoa hướng dương sáp
  Thanh liễu
  Một số phụ kiện khác`,
  },
  {
    id: 45,
    name: "Thuần Khiết",
    price: "650,000",
    image:
      "https://img.mayflower.vn/2023/12/650k-hongtrang-lantuong-thanhlieu-2-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Bó hoa Thuần khiết mang màu sắc tinh khiết và hoàn thiện nhất. Đại diện cho sự tươi sáng và xóa bỏ mọi dấu vết của hành động trong quá khứ.",
    content: `Bó hoa Thuần khiết bao gồm:

  Hoa hồng trắng
  Lan tường trắng
  Thanh liễu
  Phăng chùm
  Đèn nháy
  Một số lá và phụ kiện khác`,
  },
  {
    id: 46,
    name: "Âm Thanh Của Gió",
    price: "250,000",
    image:
      "https://img.mayflower.vn/2023/12/1100k-cmd-greenwicky-phiyen-pingpon-247x296.jpg",
    title: "Hoa bo",
    coment:
      "Âm thanh của gió – Những bông cúc mẫu đơn to, tròn, đong đầy sự biết ơn. Tặng kèm thiệp xinh, in ảnh lên thiệp theo yêu cầu.",
    content: `Bó hoa Âm Thanh Của Gió bao gồm:

  3 bông cúc mẫu đơn trắng
  Green wicky
  Phi yến trắng
  Pingpong trắng
  Calimero xanh
  Tuyết mai
  Một số lá và phụ kiện khác`,
  },
];

// truy cập phần tử
let rowJsHt = document.querySelector(".row-js-ht");
let rowJsHs = document.querySelector(".row-js-hs");
let rowjsHsn = document.querySelector(".row-js-hsn");
let rowJsHkt = document.querySelector(".row-js-hb");
let rowJsHl = document.querySelector(".row-js-hl");
// try cập phần tử tab listing
let rowHot = document.querySelector(".row-js-hot");
let rowNew = document.querySelector(".row-js-new");
// lọc tittle
const getData = (list, value) => {
  return list.filter((item) => {
    return item.title === value;
  });
};

// lọc categoty
const getDataHn = (list, value) => {
  return list.filter((item) => {
    return item.category === value;
  });
};
// console.log(getDataHn(data,"hot"));
const listDataHt = getData(data, "Hoa tuoi");
// console.log(listDataHt);
const listDataHs = getData(data, "Hoa Sap");
const listDataHsn = getData(data, "Hoa Gio");
const listDataHkt = getData(data, "Hoa bo");
const listDataHl = getData(data, "Lang hoa");
// sp hot, new
const listDataHot = getDataHn(data, "hot");
const listDataNew = getDataHn(data, "new");
// render data => HTML
const renderData = (listData) => {
  let HTML = ``;
  listData.forEach((item) => {
    HTML += `
      <div class="col-12 col-sm-6 col-md-3">
        <div class="content">
          <a href="./defaut1.html?id=${item.id}" target="_blank">
          <img class="image" src="${item.image}" alt="${item.name}"></a>
          <div class="content2">
            <div class="name-price">
              <div class="name">${item.name}</div>
              <div class="price">${item.price} VND</div>
            </div>
            <button class="cart">
            <i class="fa-solid fa-cart-plus"></i> Mua ngay</button>
          </div>
        </div>
      </div>
      `;
  });
  return HTML;
};

rowJsHt.innerHTML = renderData(listDataHt);
rowJsHs.innerHTML = renderData(listDataHs);
rowjsHsn.innerHTML = renderData(listDataHsn);
rowJsHkt.innerHTML = renderData(listDataHkt);
rowJsHl.innerHTML = renderData(listDataHl);

const renderDataHot = (listData) => {
  let HTMLH = ``;
  listData.forEach((item) => {
    HTMLH += `
      <div>
        <div class="content">
          <a href="./defaut1.html?id=${item.id}" target="_blank">
          <img class="image" src="${item.image}" alt="${item.name}"></a>
          <div class="content2">
            <div class="name-price">
              <div class="name">${item.name}</div>
              <div class="price">${item.price} VND</div>
            </div>
            <button class="cart">
            <i class="fa-solid fa-cart-plus"></i> Mua ngay</button>
          </div>
        </div>
        </div>
      `;
  });
  return HTMLH;
};




rowHot.innerHTML = renderDataHot(listDataHot);
rowNew.innerHTML = renderDataHot(listDataNew);
// truy cập sp bán chạy, new
let btnListing = document.querySelectorAll(".btn-listing");
let tabContent = document.querySelectorAll(".tab-content");
// tab listing
// Tab listing Product
const listingProduct = (btn, tab) => {
  btn.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active old
      btn.forEach((item) => {
        item.classList.remove("active");
      });
      tab.forEach((value) => {
        value.classList.remove("active");
      });
      // Add active new with click button
      button.classList.add("active");
      tabContent[index].classList.add("active");
    });
  });
};
listingProduct(btnListing, tabContent);
// tạo chat mesenger
// truy cập phần tử mesenger
let mesenger = document.querySelector(".mesenger");
let msMain = document.querySelector(".mesenger-main");
let closeButton = document.querySelector(".close-ms");

// function khai bao du lieu local storage
const saveCartToLocalStorage = (cartItem) => {
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
};
// saveCartToLocalStorage();

// khai bao function get dữ liệu từ local storage
const getCartFromLocalStorage = () => {
  // dat bien gia su
  const cartItem = localStorage.getItem("cartItem");
  // console.log(cartItem);
  //  dung toan tu 3 ngoi
  return cartItem ? JSON.parse(cartItem) : [];
};
// console.log(getCartFromLocalStorage())

// tao bien lay du lieu cart Locastorage
let cartItem = getCartFromLocalStorage();
// console.log(cartItem);

// console.log(closeButton);
// console.log(mesenger);
mesenger.addEventListener("click", () => {
  msMain.classList.toggle("active");
});
msMain.addEventListener("click", (event) => {
  event.stopPropagation();
});
// đóng mesenger khi click vào màn hình và button

document.addEventListener("click", (event) => {
  if (!mesenger.contains(event.target)) {
    msMain.classList.remove("active");
  }
});
closeButton.addEventListener("click", () => {
  msMain.classList.remove("active");
});
//  giỏ hàng
// truy cập phần tử
let cart = document.querySelectorAll(".bag-main");
// console.log(cart);
let cartModalOverlay = document.querySelector(".cart-modal-overlay");
let closeBtn = document.querySelector("#close-btn");
// thêm sự kiệN mở giỏ hàng
cart.forEach(element =>{
element.addEventListener("click", () => {
  // alert("123")
  cartModalOverlay.style.transform = "translateX(0)";
});});
//  đóng giỏ hàng
closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});
// đóng khi click ra ngoài màn hình
cartModalOverlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-modal-overlay") == true) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// thêm sản phẩm vào trong giỏ hàng
// truy cập vào nút mua
const addToCartButtons = document.querySelectorAll(".cart");
// lặp qua các nút
addToCartButtons.forEach((item) => {
  item.addEventListener("click", () => {
    addToCartClicked(item);
    cartModalOverlay.style.transform = "translateX(0)";
  });
});
// function trung gian lấy giá trị thông tin thêm vào cart
let addToCartClicked = (buttonAdd) => {
  let parentButtonAdd = buttonAdd.parentElement;
  let parentImageAdd = parentButtonAdd.parentElement;

  let price = parentButtonAdd.querySelector(".price").innerHTML;
  console.log(`[DEBUG] price: ${price}`);
  let image = parentImageAdd.querySelector(".image").src;
  let name = parentButtonAdd.querySelector(".name").innerHTML;

  //khởi tạo giá trị người dùng thêm sản phẩm, push object và save lại
  let isDuplicate = false;
  cartItem.forEach((value) => {
    // console.log(value);
    if (value.price === price && value.image === image) {
      alert("sản phẩm đã tồn tại");
      isDuplicate = true;
    }
  });
  if (isDuplicate == false) {
    cartItem.push({
      name: name,
      image: image,
      price: price,
      quantity: 1,
    });
  }

  // console.log(cartItem, "cartItem");
  //  hiển thị ra ngoài giao diện
  saveCartToLocalStorage(cartItem);

  // console.log(name);
  //  thêm image, price, name lên popup giỏ hàng
  addItemToCart(cartItem);
};

// thêm sản phẩm vào trong giỏ hàng
const addItemToCart = (cartItem) => {
  const productRows = document.querySelector(".product-rows");
  productRows.innerHTML = ``;
  if (cartItem.length > 0) {
    cartItem.forEach((item) => {
      // console.log(item);
      let HTML = `
      <img class="cart-image" src="${item.image}" alt="hoa bo">
      <div class="cart-main-name">
        <div class="cart-name">
          <div class="cart-name-title">${item.name}</div>
          <button class="remove-btn">Xoá</button>
        </div>
        <div class="cart-price-quality">
        <input class="product-quantity" type="number" value="${item.quantity}" min="0">
        <span class="cart-price">${item.price}</span></div>
      </div>
   `;

      // tạo ra row chứa thẻ HTML
      let productRow = document.createElement("div");
      // thêm class
      productRow.classList.add("cart-image-name");
      // THÊM NỘI DUNG
      productRow.innerHTML = HTML;
      // Hien thi ra giao dien popup
      productRows.append(productRow);
    });
  }

  // console.log("Price in addItemToCart:", price);
  // console.log("Image path in addItemToCart:", image);

  // Truy cap phan tu lay ra tat cac hinh anh co san truoc day
  let cartImage = document.querySelectorAll(".cart-image");

  // let issAdd = false;
  // cartImage.forEach((img)=>{
  //   if(img.src == image) {
  //     alert("San pham da ton tai.");
  //     issAdd = true;
  //   }
  // });

  // if(issAdd) {
  //   return null;
  // }

  // Xoa 1 item trong popup cart

  let removeBtn = document.querySelectorAll(".remove-btn");

  // console.log(removeBtn);
  removeBtn.forEach((value) => {
    // console.log(value);
    let imageSrc = value
      .closest(".cart-image-name")
      .querySelector(".cart-image").src;
    //  console.log(imageSrc);

    // value chinh nut button xoa
    value.addEventListener("click", () => {
      removeCart(value);
      // update local storage trong nay
      cartItem = cartItem.filter((item) => item.image !== imageSrc);
      // console.log(cartItem);

      saveCartToLocalStorage(cartItem);
      addItemToCart(cartItem);
    });
  });
  changeProductValue(); // thay đổi ố lượng

  updatePrice(); // cap nhat gia
};
// Xoa cac san pham da them

const removeCart = (btnRemove) => {
  let productRemove = btnRemove.closest(".cart-image-name");
  let imageS = productRemove.querySelector(".cart-image").src;

  // console.log(productRemove);
  productRemove.remove();
  cartItem = cartItem.filter((item) => item.image !== imageS);

  saveCartToLocalStorage(cartItem);
  // console.log(productRemove);
  saveCartToLocalStorage(cartItem);
  addItemToCart(cartItem);
  updatePrice();
};

//  thay đổi số lượng

const changeProductValue = () => {
  // console.log("thay doi so luong");
  const inputQuantity = document.querySelectorAll(".product-quantity");
  inputQuantity.forEach((item, index) => {
    // console.log(item);
    item.addEventListener("change", () => {
      updatePrice();
      // cập nhật số lượng
      cartItem[index].quantity = item.value;
      // lưu lại vào local storage
      saveCartToLocalStorage(cartItem);
    });
  });
};

// up price and count product
const updatePrice = () => {
  const productEle = document.querySelectorAll(".cart-image-name");
  // console.log(productEle);
  let total = 0;
  cartItem.forEach((item) => {
    // console.log(item);
    // const priceEle =item.querySelector('.cart-price').innerHTML;
    // console.log(priceEle);
    const priceWithoutCurrency = item.price.replace(" VND", "");
    const prices = parseFloat(priceWithoutCurrency.replace(/,/g, ""));
    // console.log(prices);
    // const quantity =item.querySelector('.product-quantity').value;
    // console.log(quantity);
    total = total + prices * item.quantity;
    // console.log(total);
    // chuyển đơn vị tiền tệ có dấu ,
  });
  //ghi rapopup
  document.querySelector(".total-price").innerHTML =
    total.toLocaleString("en-US") + " VND";
  // thay đổi số lượng trên giỏ hàng

  let bagCount = document.querySelectorAll(".bag-product");
  // console.log(bagCount);
  bagCount.forEach(item=>{
  item.innerHTML = cartItem.length;})
  document.querySelector(".cart-count").innerHTML = cartItem.length;
};

// load lại trang luôn luôn phải kiểm tra dữ liệu
window.addEventListener("DOMContentLoaded", () => {
  const cartItem = getCartFromLocalStorage();
  addItemToCart(cartItem);
});

// làm menu

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-2 li");
  // console.log(menuItems);
  // Thêm sự kiện click cho mỗi item trong menu
  menuItems.forEach((item) => {
    // console.log(item);
    item.addEventListener("click", function () {
      // alert('123')
      const category = this.getAttribute("data-category");
      // console.log(category);
      showCategory(category);
    });
  });
});

// Hàm hiển thị sản phẩm theo danh mục
function showCategory(category) {
  const categoryContent = document.getElementById("categoryContent");
  const productSp = document.querySelector(".row-js-menu");
  // console.log(categoryContent);
  // Xóa nội dung cũ trước khi hiển thị mới
  categoryContent.innerHTML = "";
  productSp.innerHTML = ``;

  // console.log(category);
  const categoryProducts = data.filter((data) => data.title === category);

  categoryProducts.forEach((product) => {
    // console.log(product);
    const productHTML = `
          <div class="col-12 col-sm-6 col-md-3">
              <div class="content">
              <a href="./defaut1.html?id=${product.id}" target="_blank">
                  <img class="image" src="${product.image}" alt="${product.name}"></a>
                  <div class="content2">
                      <div class="name-price">
                          <div class="name">${product.name}</div>
                          <div class="price">${product.price} VND</div>
                      </div>
                      <button id="product_id_${product.id}" class="cart"><i class="fa-solid fa-cart-plus"></i> Mua ngay</button>
                  </div>
              </div>
          </div>
      `;
    productSp.insertAdjacentHTML("beforeend", productHTML);

    const cartButton = document.getElementById(`product_id_${product.id}`);
    cartButton.addEventListener("click", () => {
      addToCartClicked(cartButton);
      cartModalOverlay.style.transform = "translateX(0)";
    });
  });
};

// làm menu
const menuContainer = document.querySelector(".container1");
const menu = document.querySelector(".menu");
const menuMain = document.querySelector(".menu-main");
const menu2 = document.querySelector(".menu-2");

menuContainer.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    menu2.classList.remove('show-menu2'); // Ẩn menu2 khi click vào menuContainer
});

menuMain.addEventListener('click', (event) => {
    menu2.classList.toggle('show-menu2');
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    const clickedOutsideMenuContainer = !menuContainer.contains(event.target);
    const clickedOutsideMenuMain = !menuMain.contains(event.target);
    
    if (clickedOutsideMenuContainer && clickedOutsideMenuMain) {
        menu.classList.remove('show-menu');
        menu2.classList.remove('show-menu2');
    }
});

// tìm kiếm



function searcherProduct(){
  const searcher = document.getElementById('searcherInput').value;
  // console.log(searcher);
  const productSearcher = data.filter(value =>{
    return value.name.toLocaleUpperCase().includes(searcher.toLocaleUpperCase())
  });
  showProduct(productSearcher)
  // console.log(productSearcher);
}


// Hàm hiển thị sản phẩm theo danh mục
function showProduct(category) {
    const categoryContent2 = document.getElementById("categoryContent");
    const productSp2 = document.querySelector(".row-js-menu");
    
    // Xóa nội dung cũ trước khi hiển thị mới
    categoryContent2.innerHTML = "";
    productSp2.innerHTML = "";
  // Thêm tiêu đề
  const categoryTitle = document.createElement("div");
  categoryTitle.classList.add("tittle-fillter")
  categoryTitle.innerHTML=`
  <div class="container">Kết quả tìm kiếm:<div>
  `

 categoryContent2.appendChild(categoryTitle);
    // Hiển thị các sản phẩm tìm được
    category.forEach((product) => {
        const productHTML = `

            <div class="col-12 col-sm-6 col-md-3">
                <div class="content">
                    <a href="./defaut1.html?id=${product.id}" target="_blank">
                        <img class="image" src="${product.image}" alt="${product.name}">
                    </a>
                    <div class="content2">
                        <div class="name-price">
                            <div class="name">${product.name}</div>
                            <div class="price">${product.price} VND</div>
                        </div>
                        <button id="product_id_${product.id}" class="cart"><i class="fa-solid fa-cart-plus"></i> Mua ngay</button>
                    </div>
                </div>
            </div>
        `;
        productSp2.insertAdjacentHTML("beforeend", productHTML);

        const cartButton1 = document.getElementById(`product_id_${product.id}`);
        console.log(cartButton1);
        cartButton1.addEventListener("click", () => {
          addToCartClicked(cartButton1);
          cartModalOverlay.style.transform = "translateX(0)";
        });

    });
  };
// cuộn lên đầu trang
// truy cập nút
const backTop = document.getElementById("back-to-top")
console.log(backTop);
// sự kiện click
backTop.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'});
})