/* ==========================================================================
   HỒN VIỆT — DỮ LIỆU & TƯƠNG TÁC
   ========================================================================== */
(function(){
  "use strict";

  /* ---------- Dữ liệu: Cổ tích ---------- */
  const TALES = [
    {
      title: "Thánh Gióng",
      excerpt: "Cậu bé ba năm không nói cười, đến ngày giặc Ân xâm lược bỗng vươn vai thành tráng sĩ, cưỡi ngựa sắt đánh tan quân thù rồi bay về trời.",
      meta: "Truyền thuyết thời Hùng Vương thứ Sáu",
      glyph: "horse",
      body: [
        "Đời Hùng Vương thứ Sáu, ở làng Gióng có hai vợ chồng ông lão hiền lành mãi không có con. Một hôm bà ra đồng thấy vết chân lạ to khác thường, bèn ướm thử, về nhà thì mang thai và mười hai tháng sau sinh ra một cậu bé khôi ngô. Lạ thay, đứa trẻ lên ba vẫn chẳng biết nói, biết cười, đặt đâu nằm đấy.",
        "Bấy giờ giặc Ân sang xâm phạm bờ cõi, vua sai sứ giả đi khắp nơi tìm người tài giỏi cứu nước. Nghe tiếng loa rao, cậu bé bỗng cất tiếng nói đầu tiên, bảo mẹ mời sứ giả vào, xin vua rèn cho ngựa sắt, roi sắt và áo giáp sắt để đi đánh giặc.",
        "Từ hôm đó, cậu lớn nhanh như thổi, cơm ăn mấy cũng không no, áo vừa mặc đã chật. Dân làng góp gạo nuôi cậu. Khi sứ giả mang ngựa sắt đến, cậu vươn vai một cái biến thành tráng sĩ cao lớn, mặc giáp sắt, cầm roi sắt, nhảy lên ngựa xông ra trận. Roi sắt gãy, tráng sĩ nhổ cả bụi tre bên đường làm vũ khí, đánh cho giặc Ân tan tác.",
        "Giặc tan, tráng sĩ phi ngựa đến núi Sóc Sơn, cởi bỏ giáp sắt, cả người lẫn ngựa bay thẳng lên trời. Vua nhớ công ơn, phong là Phù Đổng Thiên Vương, lập đền thờ ngay tại làng quê cũ, dân gian vẫn kể lại đến muôn đời sau."
      ]
    },
    {
      title: "Sơn Tinh – Thủy Tinh",
      excerpt: "Cuộc tranh tài giữa thần núi và thần nước để cưới công chúa Mỵ Nương, khởi nguồn cho những trận lũ hằng năm trên đất Việt.",
      meta: "Truyền thuyết giải thích hiện tượng lũ lụt",
      glyph: "mountain",
      body: [
        "Vua Hùng thứ Mười Tám có nàng công chúa Mỵ Nương xinh đẹp, muốn kén rể hiền tài. Một ngày, hai chàng trai cùng đến cầu hôn: một người là Sơn Tinh, chúa vùng núi Tản Viên, có thể dời non lấp bể; một người là Thủy Tinh, chúa miền biển cả, hô mưa gọi gió.",
        "Vua Hùng khó xử vì cả hai đều tài giỏi ngang nhau, bèn ra điều kiện: ai đem sính lễ đến trước — voi chín ngà, gà chín cựa, ngựa chín hồng mao — sẽ được rước công chúa về. Sáng hôm sau, Sơn Tinh mang lễ vật đến trước, được đón Mỵ Nương lên núi.",
        "Thủy Tinh đến sau, tức giận vô cùng, dâng nước đánh Sơn Tinh để đòi lại công chúa. Sơn Tinh không hề nao núng, cứ nước dâng đến đâu lại bốc từng quả đồi, dời từng dãy núi chặn nước đến đó. Hai bên giao chiến ròng rã nhưng Thủy Tinh vẫn không thắng nổi, đành rút quân.",
        "Từ đó, cứ hằng năm Thủy Tinh lại dâng nước đánh Sơn Tinh để trả mối hận xưa, gây ra những trận lũ lụt trên khắp các dòng sông. Nhưng năm nào cũng vậy, Sơn Tinh vẫn vững vàng, không để nước dâng ngập được đất đai của muôn dân."
      ]
    },
    {
      title: "Bánh chưng, bánh giầy",
      excerpt: "Lang Liêu, người con nghèo khó của vua Hùng, nhờ tấm lòng hiếu thảo và món bánh giản dị mà được truyền lại ngôi báu.",
      meta: "Sự tích ngày Tết cổ truyền",
      glyph: "leaf",
      body: [
        "Vua Hùng Vương thứ Sáu về già muốn chọn người nối ngôi trong hai mươi người con, bèn truyền rằng ai tìm được món lễ vật quý giá và có ý nghĩa nhất dâng lên tổ tiên trong ngày Tết sẽ được truyền ngôi báu. Các hoàng tử đua nhau tìm của ngon vật lạ khắp núi rừng, biển cả.",
        "Người con thứ mười tám tên Lang Liêu, mẹ mất sớm, hoàn cảnh đơn chiếc, không có người giúp việc tìm kiếm sản vật quý hiếm. Chàng chỉ quen với ruộng đồng, ngày đêm suy nghĩ, một đêm nằm mộng thấy có vị thần đến bảo rằng gạo là thứ quý nhất trời đất, nên lấy gạo mà làm bánh.",
        "Tỉnh dậy, Lang Liêu lấy gạo nếp, đậu xanh, thịt lợn gói thành hình vuông tượng trưng cho đất, gọi là bánh chưng; lại giã xôi nặn thành hình tròn tượng trưng cho trời, gọi là bánh giầy. Đến ngày lễ, các hoàng tử dâng lên bao sơn hào hải vị, riêng mâm của Lang Liêu chỉ có hai thứ bánh giản dị ấy.",
        "Vua Hùng nếm thử, thấy bánh vừa ngon vừa mang ý nghĩa trời tròn đất vuông, lại thể hiện được công sức của người trồng lúa, cảm động trước tấm lòng của con, bèn truyền ngôi cho Lang Liêu. Từ đó, bánh chưng bánh giầy trở thành món không thể thiếu mỗi dịp Tết đến xuân về của người Việt."
      ]
    },
    {
      title: "Thạch Sanh",
      excerpt: "Chàng trai mồ côi thật thà dùng cây đàn thần và niêu cơm kỳ diệu để cảm hóa quân thù, vạch trần kẻ gian và cưới công chúa.",
      meta: "Truyện cổ tích về lòng nhân nghĩa",
      glyph: "bow",
      body: [
        "Thạch Sanh mồ côi cha mẹ từ nhỏ, sống một mình dưới gốc đa, được thiên thần dạy cho võ nghệ và nhiều phép lạ. Lý Thông, một người bán rượu, thấy Thạch Sanh khỏe mạnh bèn kết nghĩa anh em để lợi dụng sức lực, rồi lừa chàng đi nộp mạng thay mình cho chằn tinh.",
        "Thạch Sanh không hề sợ hãi, dùng búa đánh chết chằn tinh, chặt lấy đầu và bộ cung tên vàng mang về. Lý Thông lại cướp công, đem đầu chằn tinh dâng vua để được phong làm quận công, còn đẩy Thạch Sanh trở lại sống nơi gốc đa như cũ.",
        "Ít lâu sau, đại bàng tinh bắt công chúa đi mất, Thạch Sanh dùng cung tên vàng bắn bị thương đại bàng, lần theo dấu vết xuống hang cứu công chúa, nhưng lại bị Lý Thông lấp cửa hang để cướp công một lần nữa. Trong hang, chàng còn cứu được con vua Thủy Tề, được tặng cây đàn thần.",
        "Bị vu oan hãm hại, Thạch Sanh vào ngục mang đàn ra gảy, tiếng đàn oan khuất khiến công chúa đang bị câm bỗng cất tiếng nói, chỉ ra sự thật. Vua sai bắt Lý Thông trị tội, còn Thạch Sanh được minh oan, cưới công chúa. Khi quân mười tám nước chư hầu kéo đến đánh vì công chúa từ chối hôn ước, tiếng đàn thần của chàng khiến quân giặc bủn rủn chân tay, xin hàng; niêu cơm thần ăn mãi không hết đã khoản đãi cả đạo quân, khiến ai nấy đều khâm phục mà lui binh."
      ]
    },
    {
      title: "Tấm Cám",
      excerpt: "Từ cô gái mồ côi bị hắt hủi đến hoàng hậu, hành trình của Tấm là câu chuyện về sự nhẫn nại và lẽ công bằng cuối cùng cũng được thực thi.",
      meta: "Truyện cổ tích dân gian nổi tiếng nhất",
      glyph: "shoe",
      body: [
        "Tấm mồ côi mẹ từ nhỏ, sống cùng cha, dì ghẻ và em cùng cha khác mẹ là Cám. Tấm phải làm lụng vất vả suốt ngày trong khi Cám được nuông chiều, ăn chơi. Một lần đi bắt tép, Cám lừa trút hết giỏ tép của Tấm để giành phần thưởng yếm đỏ, khiến Tấm chỉ còn lại con cá bống nhỏ đem về nuôi.",
        "Dì ghẻ biết chuyện liền lừa giết thịt cá bống. Tấm khóc thương, được Bụt hiện lên chỉ cho cách lượm xương cá chôn dưới chân giường. Đến ngày hội làng, dì ghẻ trộn thóc lẫn gạo bắt Tấm nhặt riêng để cản không cho đi, Bụt lại sai đàn chim sẻ đến giúp nhặt xong trong chốc lát, rồi từ những chiếc xương cá chôn trước đó hiện ra quần áo đẹp, giày thêu và cả một con ngựa để Tấm đi trẩy hội.",
        "Trên đường đi, Tấm đánh rơi một chiếc giày. Nhà vua nhặt được, truyền lệnh ai đi vừa giày sẽ được cưới làm vợ. Chỉ riêng Tấm ướm vừa như in, nàng trở thành hoàng hậu. Nhưng dì ghẻ và Cám vẫn không nguôi lòng ghen ghét, bày mưu hãm hại Tấm hết lần này đến lần khác, khiến nàng phải hóa thân qua chim vàng anh, cây xoan đào, khung cửi rồi quả thị.",
        "Cuối cùng, nhờ một bà lão hàng nước, Tấm từ quả thị bước ra, trở lại làm người, đoàn tụ cùng nhà vua. Lẽ công bằng được thực thi, kẻ gian ác phải nhận lấy hậu quả do chính mình gây ra — bài học mà câu chuyện muốn nhắn nhủ qua bao thế hệ."
      ]
    },
    {
      title: "Sự tích Hồ Gươm",
      excerpt: "Gươm thần trao cho Lê Lợi để đánh giặc Minh, rồi được rùa vàng đòi lại khi đất nước thanh bình — cội nguồn tên gọi Hồ Gươm giữa lòng Hà Nội.",
      meta: "Truyền thuyết gắn với khởi nghĩa Lam Sơn",
      glyph: "sword",
      body: [
        "Đầu thế kỷ 15, giặc Minh đô hộ nước ta vô cùng tàn bạo. Ở vùng Lam Sơn, Lê Lợi dựng cờ khởi nghĩa nhưng những ngày đầu thế lực còn non yếu, nhiều lần thua trận. Long Quân quyết định cho nghĩa quân mượn thanh gươm thần để đánh đuổi giặc dữ.",
        "Một người đánh cá tên Lê Thận ba lần kéo lưới đều vớt được một lưỡi gươm sắt, đem về nhà. Về sau Lê Thận gia nhập nghĩa quân Lam Sơn; khi Lê Lợi ghé qua nhà, thấy lưỡi gươm dưới ánh lửa tự nhiên sáng rực hai chữ 'Thuận Thiên', bèn giữ lấy.",
        "Ít lâu sau, trong một lần bị giặc đuổi phải trốn vào rừng, Lê Lợi thấy trên ngọn cây có ánh sáng lạ, trèo lên thì bắt được một chuôi gươm nạm ngọc. Đem về tra vào lưỡi gươm nhặt được từ Lê Thận, chuôi và lưỡi vừa khít như đúc thành một, ánh sáng chiếu rực cả góc trời.",
        "Từ khi có gươm thần, nhuệ khí nghĩa quân Lam Sơn lên cao, đánh đâu thắng đó, dần đánh đuổi được quân Minh, giành lại độc lập. Sau khi lên ngôi, một hôm Lê Lợi dạo thuyền trên hồ Tả Vọng giữa kinh thành Thăng Long, có rùa vàng nổi lên đòi lại gươm thần để trả về Long Quân. Từ đó, hồ được đổi tên thành Hồ Gươm, hay Hồ Hoàn Kiếm — hồ trả gươm — cho đến ngày nay."
      ]
    }
  ];

  /* ---------- Dữ liệu: Danh tướng lịch sử ---------- */
  const GENERALS = [
    {
      title: "Hai Bà Trưng",
      era: "Năm 40 – 43 sau Công nguyên",
      excerpt: "Trưng Trắc và Trưng Nhị dựng cờ khởi nghĩa, đánh đuổi thái thú Tô Định, xưng vương và lập nên chính quyền tự chủ đầu tiên sau thời Bắc thuộc.",
      body: [
        "Trưng Trắc và em gái Trưng Nhị là con gái Lạc tướng huyện Mê Linh. Khi chồng bà Trưng Trắc là Thi Sách bị thái thú Tô Định giết hại vì chống lại chính sách cai trị hà khắc của nhà Đông Hán, hai chị em phất cờ khởi nghĩa vào mùa xuân năm 40.",
        "Cuộc khởi nghĩa nhanh chóng được hào kiệt và nhân dân khắp các quận Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố hưởng ứng. Quân Hán tan vỡ, Tô Định phải bỏ chạy về nước. Trưng Trắc lên ngôi vua, xưng là Trưng Nữ Vương, đóng đô ở Mê Linh.",
        "Năm 42, nhà Hán sai danh tướng Mã Viện đem đại quân sang đàn áp. Sau nhiều trận huyết chiến ác liệt, quân của Hai Bà dần suy yếu. Theo sử sách và truyền thuyết dân gian, đến năm 43, hai bà đã trầm mình xuống sông Hát để giữ trọn khí tiết, không chịu khuất phục.",
        "Hai Bà Trưng được xem là những nữ anh hùng dân tộc đầu tiên trong lịch sử Việt Nam, biểu tượng cho tinh thần quật khởi của người phụ nữ Việt trước ách đô hộ ngoại bang."
      ]
    },
    {
      title: "Ngô Quyền",
      era: "Năm 938",
      excerpt: "Chiến thắng Bạch Đằng lẫy lừng đánh tan quân Nam Hán, chấm dứt hơn một nghìn năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ cho dân tộc.",
      body: [
        "Ngô Quyền vốn là tướng giỏi dưới quyền Dương Đình Nghệ, người đã có công đánh đuổi quân Nam Hán trước đó. Sau khi Dương Đình Nghệ bị Kiều Công Tiễn sát hại để đoạt quyền, Ngô Quyền đem quân từ Ái Châu ra hỏi tội, khiến Kiều Công Tiễn cầu cứu quân Nam Hán.",
        "Vua Nam Hán sai con là Lưu Hoằng Tháo đem thủy quân sang xâm lược. Nắm rõ địa thế sông Bạch Đằng có thủy triều lên xuống, Ngô Quyền cho quân đóng cọc gỗ đầu bịt sắt nhọn ngầm dưới lòng sông, bố trí mai phục hai bên bờ.",
        "Khi thủy triều lên, ông cho thuyền nhẹ ra khiêu chiến rồi giả thua, dụ đoàn thuyền địch tiến sâu vào bãi cọc. Đợi nước triều rút, quân mai phục đổ ra đánh, thuyền giặc bị cọc nhọn đâm thủng, vỡ tan, Lưu Hoằng Tháo tử trận ngay tại trận địa.",
        "Chiến thắng Bạch Đằng năm 938 đã chấm dứt hơn một nghìn năm Bắc thuộc, mở đầu kỷ nguyên độc lập lâu dài của dân tộc Việt Nam. Năm sau, Ngô Quyền xưng vương, đóng đô ở Cổ Loa, đặt nền móng cho một quốc gia tự chủ."
      ]
    },
    {
      title: "Lý Thường Kiệt",
      era: "Thế kỷ 11 (thời nhà Lý)",
      excerpt: "Vị tướng chủ động đem quân đánh sang đất Tống để phá thế chuẩn bị xâm lược, sau đó lập phòng tuyến sông Như Nguyệt và để lại bài thơ thần bất hủ.",
      body: [
        "Lý Thường Kiệt là danh tướng trải qua nhiều đời vua nhà Lý, nổi bật với tư tưởng quân sự chủ động, táo bạo. Khi hay tin nhà Tống ráo riết chuẩn bị xâm lược Đại Việt, năm 1075 ông đã đem quân bất ngờ đánh sang các châu Ung, Khâm, Liêm trên đất Tống để phá tan kế hoạch chuẩn bị của địch, rồi rút quân về nước.",
        "Năm 1077, quân Tống ồ ạt kéo sang báo thù. Lý Thường Kiệt bố trí phòng tuyến kiên cố dọc bờ nam sông Như Nguyệt (sông Cầu), chặn đứng bước tiến của quân Tống suốt nhiều tháng ròng.",
        "Tương truyền, để khích lệ tinh thần quân sĩ, trong đêm ông đã cho người vào đền thờ bên sông ngâm vang bài thơ 'Nam quốc sơn hà' khẳng định chủ quyền lãnh thổ, khiến quân Tống hoang mang khiếp sợ. Bài thơ được xem như bản tuyên ngôn độc lập đầu tiên của dân tộc Việt Nam.",
        "Sau nhiều trận đánh quyết liệt trên phòng tuyến Như Nguyệt, quân Tống tổn thất nặng nề buộc phải giảng hòa và rút quân. Lý Thường Kiệt được sử sách ghi nhận là bậc danh tướng kết hợp nhuần nhuyễn giữa mưu lược quân sự và nghệ thuật ngoại giao."
      ]
    },
    {
      title: "Trần Hưng Đạo",
      era: "Thế kỷ 13 (thời nhà Trần)",
      excerpt: "Ba lần cầm quân đánh bại đế quốc Nguyên Mông hùng mạnh nhất thời bấy giờ, tác giả bài Hịch tướng sĩ khích lệ lòng yêu nước còn vang vọng đến ngày nay.",
      body: [
        "Trần Hưng Đạo, tên thật là Trần Quốc Tuấn, là tông thất nhà Trần, được giao trọng trách Quốc công Tiết chế thống lĩnh quân đội Đại Việt trong cả ba lần kháng chiến chống quân xâm lược Nguyên Mông vào các năm 1258, 1285 và 1287-1288.",
        "Ông chủ trương lấy đoàn kết toàn dân làm gốc, tổ chức hội nghị Diên Hồng để hỏi ý chí quyết chiến của các bô lão, đồng thời viết bài Hịch tướng sĩ hào hùng để khích lệ tướng sĩ đề cao cảnh giác, rèn luyện binh pháp, quyết tâm đánh giặc giữ nước.",
        "Trong cuộc kháng chiến lần thứ ba, ông vận dụng lại kế sách đóng cọc trên sông Bạch Đằng của Ngô Quyền xưa, nhử đoàn thuyền lương và chiến thuyền của Ô Mã Nhi vào bãi cọc khi triều xuống, tiêu diệt và bắt sống gần như toàn bộ đạo quân, đây được xem là chiến thắng quyết định năm 1288.",
        "Với tài thao lược kiệt xuất, Trần Hưng Đạo ba lần đánh bại đội quân từng chinh phục gần nửa thế giới, được nhân dân tôn kính lập đền thờ ở nhiều nơi, suy tôn là Đức Thánh Trần — một trong những vị tướng vĩ đại nhất trong lịch sử quân sự Việt Nam."
      ]
    },
    {
      title: "Lê Lợi",
      era: "1418 – 1428 (khởi nghĩa Lam Sơn)",
      excerpt: "Từ hào trưởng đất Lam Sơn, ông dựng cờ khởi nghĩa mười năm ròng, đánh đuổi quân Minh, giành lại độc lập và lập nên vương triều Hậu Lê.",
      body: [
        "Lê Lợi là một hào trưởng có uy tín ở vùng Lam Sơn, Thanh Hóa. Trước cảnh nhà Minh đô hộ tàn bạo sau khi nhà Hồ thất bại, năm 1418 ông cùng các nghĩa sĩ như Nguyễn Trãi, Lê Lai dựng cờ khởi nghĩa, xưng là Bình Định Vương.",
        "Những năm đầu, nghĩa quân Lam Sơn gặp vô vàn khó khăn, nhiều lần bị vây khốn trên núi Chí Linh. Tương truyền tướng Lê Lai đã liều mình đóng giả Lê Lợi để đánh lạc hướng quân Minh, giúp chủ tướng thoát hiểm, một tấm gương trung nghĩa được đời sau ghi nhớ.",
        "Từ năm 1424, nghĩa quân chuyển hướng chiến lược, tiến đánh vào Nghệ An rồi làm chủ cả vùng đất phía Nam, sau đó tiến quân ra Bắc. Trận Tốt Động – Chúc Động và đặc biệt là trận Chi Lăng – Xương Giang năm 1427 đã đánh tan viện binh của giặc, buộc quân Minh phải giảng hòa và rút quân về nước.",
        "Năm 1428, Lê Lợi lên ngôi hoàng đế, tức vua Lê Thái Tổ, lập ra triều Hậu Lê, mở ra một trong những giai đoạn thịnh trị của lịch sử phong kiến Việt Nam. Câu chuyện gươm thần Thuận Thiên gắn liền với sự nghiệp của ông đã trở thành sự tích Hồ Gươm nổi tiếng."
      ]
    },
    {
      title: "Quang Trung – Nguyễn Huệ",
      era: "1788 – 1789 (phong trào Tây Sơn)",
      excerpt: "Vị hoàng đế – nhà quân sự thiên tài đại phá 29 vạn quân Thanh chỉ trong vài ngày Tết Kỷ Dậu, một trong những chiến công thần tốc bậc nhất lịch sử.",
      body: [
        "Nguyễn Huệ là một trong ba anh em lãnh đạo phong trào nông dân Tây Sơn, nổi lên từ Bình Định, lần lượt đánh đổ các tập đoàn phong kiến chúa Nguyễn ở Đàng Trong và chúa Trịnh ở Đàng Ngoài, thống nhất phần lớn lãnh thổ.",
        "Cuối năm 1788, vua Lê Chiêu Thống cầu viện nhà Thanh, Tôn Sĩ Nghị đem 29 vạn quân tràn sang xâm lược, chiếm đóng Thăng Long. Trước tình thế đó, Nguyễn Huệ lên ngôi hoàng đế, lấy niên hiệu Quang Trung, rồi lập tức thần tốc đưa đại quân từ Phú Xuân ra Bắc.",
        "Chỉ trong vòng ít ngày hành quân thần tốc, nghĩa quân Tây Sơn đã áp sát Thăng Long đúng dịp Tết Nguyên đán. Đêm mùng 4 rạng mùng 5 Tết Kỷ Dậu (1789), quân Tây Sơn bất ngờ tấn công các đồn lũy kiên cố của giặc, đỉnh điểm là trận Ngọc Hồi và trận Đống Đa, đánh tan tác toàn bộ quân Thanh ngay trong ngày mùng 5 Tết.",
        "Chiến thắng Ngọc Hồi – Đống Đa được xem là một trong những chiến công quân sự lừng lẫy nhất lịch sử Việt Nam, thể hiện tài thao lược và tốc độ hành quân phi thường của vua Quang Trung, giữ vững nền độc lập dân tộc trước họa ngoại xâm."
      ]
    }
  ];

  const GLYPHS = {
    horse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l2-6 3-2 2-6 4 1 3 4-2 3 1 6"/><circle cx="15" cy="5" r="1.4"/></svg>',
    mountain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19l6-11 4 6 2-3 6 8H3z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c8 1 13-4 14-14-9 1-14 6-14 14z"/><path d="M6 18c3-4 6-7 12-11"/></svg>',
    bow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3c6 3 6 15 0 18"/><path d="M6 3l14 9-14 9"/></svg>',
    shoe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c0-3 2-4 5-6l4-4 3 2c3 1 6 2 6 5v3H3v-0z"/></svg>',
    sword: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5L20.5 9.5 10 20l-5-5z"/><path d="M6 15l3 3"/><path d="M3 21l3-3"/></svg>'
  };

  /* ---------- Render thẻ cổ tích ---------- */
  const taleGrid = document.getElementById('taleGrid');
  TALES.forEach((tale, i) => {
    const card = document.createElement('button');
    card.className = 'tale-card';
    card.type = 'button';
    card.innerHTML = `
      <span class="tale-glyph">${GLYPHS[tale.glyph] || ''}</span>
      <h3>${tale.title}</h3>
      <p class="excerpt">${tale.excerpt}</p>
      <span class="tale-read">Đọc toàn bộ câu chuyện
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </span>`;
    card.addEventListener('click', () => openDetail({
      kicker: 'Cổ tích Việt Nam',
      title: tale.title,
      meta: tale.meta,
      body: tale.body
    }));
    taleGrid.appendChild(card);
  });

  /* ---------- Render dòng thời gian danh tướng ---------- */
  const timeline = document.getElementById('timeline');
  GENERALS.forEach(g => {
    const li = document.createElement('li');
    li.className = 'tl-item';
    li.innerHTML = `
      <span class="tl-dot" aria-hidden="true"></span>
      <button type="button" class="tl-card">
        <p class="tl-era">${g.era}</p>
        <h3>${g.title}</h3>
        <p class="excerpt">${g.excerpt}</p>
      </button>`;
    li.querySelector('.tl-card').addEventListener('click', () => openDetail({
      kicker: 'Danh tướng lịch sử',
      title: g.title,
      meta: g.era,
      body: g.body
    }));
    timeline.appendChild(li);
  });

  /* ---------- Dialog chi tiết ---------- */
  const dialog = document.getElementById('detailDialog');
  const dKicker = document.getElementById('detailKicker');
  const dTitle = document.getElementById('detailTitle');
  const dMeta = document.getElementById('detailMeta');
  const dBody = document.getElementById('detailBody');
  const dClose = document.getElementById('detailClose');

  function openDetail(data){
    dKicker.textContent = data.kicker;
    dTitle.textContent = data.title;
    dMeta.textContent = data.meta;
    dBody.innerHTML = data.body.map(p => `<p>${p}</p>`).join('');
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  }
  dClose.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    const r = dialog.getBoundingClientRect();
    const inside = r.top <= e.clientY && e.clientY <= r.bottom && r.left <= e.clientX && e.clientX <= r.right;
    if (!inside) dialog.close();
  });

  /* ---------- Menu di động ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  /* ---------- Hiệu ứng nghiêng 3D khi rê chuột (chỉ trên thiết bị có chuột) ---------- */
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canHover && !reduceMotion) {
    document.querySelectorAll('.tale-card, .tl-card').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(700px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-4px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Chữ tiêu đề Hero: xoay 3D theo chuột, hoặc tự lắc trên di động ---------- */
  const heroSection = document.querySelector('.hero');
  const heroStage = document.getElementById('heroTitleStage');
  const heroTitle = document.getElementById('heroTitle');

  if (heroSection && heroStage && heroTitle && !reduceMotion) {
    if (canHover) {
      heroSection.addEventListener('mousemove', (e) => {
        const r = heroSection.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        heroTitle.style.transform = `perspective(1000px) rotateX(${(-py * 16).toFixed(2)}deg) rotateY(${(px * 16).toFixed(2)}deg)`;
      });
      heroSection.addEventListener('mouseleave', () => {
        heroTitle.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    } else {
      // Không có chuột (điện thoại/máy tính bảng): tự xoay nhẹ để vẫn thấy hiệu ứng 3D
      heroStage.classList.add('idle');
    }
  }

  /* ---------- Header co lại khi cuộn ---------- */
  const header = document.getElementById('site-header');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.style.boxShadow = y > 10 ? '0 10px 30px -18px rgba(0,0,0,0.5)' : 'none';
    lastY = y;
  }, { passive: true });

  /* ---------- Năm hiện tại ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

})();
