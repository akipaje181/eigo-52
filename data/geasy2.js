window.GEASY=Object.assign(window.GEASY||{},{
 14:{
  one:"「だれがしたか」より「それがどうなったか」を言いたいとき、主役を入れかえる形。",
  image:"写真の主役を入れかえるイメージです。「スタッフが予約を受ける」を、予約のほうを真ん中にして「予約は受けつけられます」と撮り直します。する人は写真の外に出してかまいません。",
  ja:"日本語は「予約はネットでできます」と主役をぼかして言えますが、英語は主役を文の先頭に置き、be動詞（is・was など）＋「された形」で表します。今か昔かは be動詞が受け持ち、can などがつくと can be booked のように be が必ず入ります。",
  when:["院や会社の設立年を言うとき","予約や支払いの方法を説明するとき","商品の作り方・材料を説明するとき"],
  steps:["①主役にしたいもの（院・予約・商品）を先頭に置く","②今なら is / are、昔なら was / were を置く","③動詞を「された形」（founded・booked・made）にする","④だれがしたかを言いたいときだけ、最後に by ～ を足す"],
  parts:[
   {en:"Our clinic was founded in 2018.",ja:"当院は2018年に開業しました。",
    chunks:[{t:"Our clinic",r:"だれが／なにが",ja:"当院は"},{t:"was founded",r:"どうする",ja:"作られた"},{t:"in 2018.",r:"いつ",ja:"2018年に"}],
    point:"開業は昔の1回の出来事なので is ではなく was を使います。"},
   {en:"Appointments can be booked online.",ja:"予約はネットでできます。",
    chunks:[{t:"Appointments",r:"だれが／なにが",ja:"予約は"},{t:"can",r:"気持ち・助け（助動詞）",ja:"できる"},{t:"be booked",r:"どうする",ja:"受けつけられる"},{t:"online.",r:"どのように",ja:"ネットで"}],
    point:"can のあとは be ＋ booked の3点セット。be をぬかさないのがコツです。"},
   {en:"This product is made from natural ingredients.",ja:"この製品は天然の成分から作られています。",
    chunks:[{t:"This product",r:"だれが／なにが",ja:"この製品は"},{t:"is made",r:"どうする",ja:"作られている"},{t:"from natural ingredients.",r:"くわしく（説明の部分）",ja:"天然の成分から"}],
    point:"だれが作ったかより「何から作られているか」が大事なので、製品を主役にしています。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　Appointments can (　) online.",opts:["booked","be booked","booking"],a:1,why:"can のあとは be ＋ booked。「できる」と「される」を両方言うので be が必要です。"},
   {q:"(　)に入るのは？　Our clinic (　) founded in 2018.",opts:["is","was","were"],a:1,why:"2018年は過去のこと。主役は院1つなので was です。"},
   {q:"「院は9時に開きます」として自然なのは？　The clinic (　) at 9.",opts:["opens","is opened","was opened"],a:0,why:"毎日決まっている開店時間は、ふつうの形 opens で言います。何でも「される」形にしなくて大丈夫です。"}
  ],
  terms:["受動態","be動詞","過去分詞","助動詞"]
 },
 15:{
  one:"人や物のうしろに「説明のしっぽ」をつけて、どの人・どの物かをはっきりさせる形。",
  image:"カルテに貼る付せんのイメージです。「患者さん」だけでは誰かわからないので、うしろに「腰痛で来ている」という付せんを貼ります。who や that は、その付せんを貼るためののりです。",
  ja:"日本語は「腰痛で来ている患者さん」と説明を前に置きますが、英語は a patient who has back pain と、先に名詞を言ってから説明をうしろにつけます。人には who、物には that（または which）を使います。",
  when:["スタッフや取引先がどんな人かを紹介するとき","自分が作った物・使っている物を説明するとき","「〜な人が多い」と院の様子を話すとき"],
  steps:["①まず説明したい人・物を言う（a therapist）","②人なら who、物なら that を置く","③そのあとに説明を続ける（who speaks a little English）","④説明の中に him や it をもう一度入れない"],
  parts:[
   {en:"We have a therapist who speaks a little English.",ja:"当院には少し英語を話せる施術者がいます。",
    chunks:[{t:"We",r:"だれが／なにが",ja:"私たちは"},{t:"have",r:"どうする",ja:"いる（かかえている）"},{t:"a therapist",r:"だれを／なにを",ja:"施術者を"},{t:"who speaks a little English.",r:"くわしく（説明の部分）",ja:"少し英語を話す"}],
    point:"a therapist のうしろに who で「英語を話す」というしっぽをつけています。"},
   {en:"Many people who suffer from back pain come here.",ja:"腰痛に悩む多くの人がここに来ます。",
    chunks:[{t:"Many people",r:"だれが／なにが",ja:"多くの人が"},{t:"who suffer from back pain",r:"くわしく（説明の部分）",ja:"腰痛に悩む"},{t:"come",r:"どうする",ja:"来る"},{t:"here.",r:"どこで／どこに",ja:"ここに"}],
    point:"しっぽは主役のすぐうしろ。people は複数なので suffer に s はつきません。"},
   {en:"The supplier we work with is based in Chennai.",ja:"私たちが取引している仕入れ先はチェンナイにあります。",
    chunks:[{t:"The supplier",r:"だれが／なにが",ja:"仕入れ先は"},{t:"we work with",r:"くわしく（説明の部分）",ja:"私たちが取引している"},{t:"is based",r:"どうする",ja:"本拠がある"},{t:"in Chennai.",r:"どこで／どこに",ja:"チェンナイに"}],
    point:"しっぽの中に we のような主語があるときは、のり（that）を省いてもかまいません。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I have a friend (　) speaks English.",opts:["who","which","what"],a:0,why:"friend は人なので who。which は物に使います。"},
   {q:"正しい文はどれ？",opts:["The doctor who I met him was kind.","The doctor who I met was kind.","The doctor who met I was kind."],a:1,why:"who がすでに「その先生」を指しているので、him をもう一度入れません。"},
   {q:"(　)に入るのは？　Many people who (　) from back pain come here.",opts:["suffers","suffer","suffering"],a:1,why:"しっぽの中の動詞は前の名詞に合わせます。people は複数なので s はつきません。"}
  ],
  terms:["関係代名詞","名詞"]
 },
 16:{
  one:"場所や日に「そこで〜する」のしっぽをつける形と、「〜なこと」をまとめる what。",
  image:"where は地図のピン、when はカレンダーに貼るシールです。「部屋」にピンを刺して「施術をする」と書きこみ、「日」にシールを貼って「初めて話した」と書きこみます。what は中身を入れた箱で、「あなたが必要なもの」をまるごと1つにします。",
  ja:"日本語は「私が生まれた町」と説明を前に置きますが、英語は the city where I was born と、場所を先に言って where でつなぎます。what は「〜なこと・もの」の意味を自分で持っているので、前に the thing などの名詞を置きません。",
  when:["院の中の部屋や、ゆかりのある町を説明するとき","思い出の日や、忙しい時間帯を話すとき","「必要なもの」「言いたいこと」をまとめて言うとき"],
  steps:["①場所なら場所の名詞、時なら時の名詞を言う（the office / the day）","②場所なら where、時なら when を置く（when は省いてもよい）","③そのあとに「だれが＋どうする」を続ける","④「〜なこと・もの」なら、名詞なしで what ＋ だれが ＋ どうする"],
  parts:[
   {en:"I want to visit the office where Raj works.",ja:"ラージさんが働いている事務所を訪ねたいです。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"want to visit",r:"どうする",ja:"訪ねたい"},{t:"the office",r:"だれを／なにを",ja:"事務所を"},{t:"where Raj works.",r:"くわしく（説明の部分）",ja:"ラージさんが働いている"}],
    point:"the office にピン（where）を刺して「ラージさんが働く」と説明しています。"},
   {en:"I still remember the day we first talked online.",ja:"初めてオンラインで話した日を今も覚えています。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"still remember",r:"どうする",ja:"今も覚えている"},{t:"the day",r:"だれを／なにを",ja:"日を"},{t:"we first talked online.",r:"くわしく（説明の部分）",ja:"初めてオンラインで話した"}],
    point:"the day のあとの when は会話ではよく省きます。"},
   {en:"Could you tell me what you need for the website?",ja:"サイトに必要なものを教えていただけますか。",
    chunks:[{t:"Could",r:"気持ち・助け（助動詞）",ja:"〜していただけますか"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"tell",r:"どうする",ja:"教える"},{t:"me",r:"だれに",ja:"私に"},{t:"what you need for the website?",r:"だれを／なにを",ja:"サイトに必要なものを"}],
    point:"what のかたまりは「必要なもの」という1つの箱。中は you need のふつうの並びです。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　This is the city (　) I was born.",opts:["which","where","what"],a:1,why:"町（場所）で「そこで生まれた」と言うので where です。"},
   {q:"(　)に入るのは？　That's (　) I wanted.",opts:["the thing what","what","where"],a:1,why:"what だけで「〜なもの」の意味になるので、前に the thing はいりません。"},
   {q:"(　)に入るのは？　Please tell me what (　).",opts:["do you need","you need","need you"],a:1,why:"what の箱の中は、ふつうの文と同じ「だれが＋どうする」の順です。"}
  ],
  terms:["関係副詞","関係代名詞","名詞"]
 },
 17:{
  one:"動詞を「名札」にして、人や物が「〜している」のか「〜された」のかを説明する形。",
  image:"受付の名札のイメージです。待合室の患者さんには「待っている」、メールの資料には「添付された」という札を貼ります。する側なら -ing の札、される側なら -ed（された形）の札です。",
  ja:"日本語は「受付で待っている患者さん」と説明を前に置きます。英語は1語の札なら前（the attached file）、2語以上の長い札ならうしろ（the patient waiting at reception）に置きます。",
  when:["メールで添付ファイルや資料を説明するとき","待っている人・働いている人を指すとき","商品がどこで・何から作られたかを言うとき"],
  steps:["①説明したい人・物を決める","②その人・物が「している側」なら -ing、「された側」なら -ed（された形）を選ぶ","③1語なら名詞の前、2語以上なら名詞のうしろに置く"],
  parts:[
   {en:"Please check the attached file.",ja:"添付のファイルをご確認ください。",
    chunks:[{t:"Please check",r:"どうする",ja:"ご確認ください"},{t:"the attached file.",r:"だれを／なにを",ja:"添付されたファイルを"}],
    point:"ファイルは「添付された側」なので attached。1語なので名詞の前です。"},
   {en:"The patient waiting at reception is new.",ja:"受付で待っている患者さんは初めての方です。",
    chunks:[{t:"The patient",r:"だれが／なにが",ja:"その患者さんは"},{t:"waiting at reception",r:"くわしく（説明の部分）",ja:"受付で待っている"},{t:"is new.",r:"です・いる（be動詞）",ja:"初めての方です"}],
    point:"患者さんは「待っている側」なので -ing。2語以上なので名詞のうしろです。"},
   {en:"We use oils made from Japanese plants.",ja:"日本の植物から作られたオイルを使っています。",
    chunks:[{t:"We",r:"だれが／なにが",ja:"私たちは"},{t:"use",r:"どうする",ja:"使う"},{t:"oils",r:"だれを／なにを",ja:"オイルを"},{t:"made from Japanese plants.",r:"くわしく（説明の部分）",ja:"日本の植物から作られた"}],
    point:"オイルは「作られた側」なので made。長い札なのでうしろに置きます。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I'm (　) in your service.",opts:["interesting","interested","interest"],a:1,why:"自分が「興味を持たされた側」なので interested。interesting は「人をひきつける側」です。"},
   {q:"(　)に入るのは？　Please check the (　) file.",opts:["attaching","attached","attach"],a:1,why:"ファイルは自分で添付するのではなく「添付された側」です。"},
   {q:"「日本製の製品」として正しいのは？",opts:["a made in Japan product","a product made in Japan","a product making in Japan"],a:1,why:"made in Japan は3語の長い札なので、product のうしろに置きます。"}
  ],
  terms:["分詞","過去分詞","形容詞"]
 },
 18:{
  one:"2つの文を「もし」「〜のとき」「〜なので」「〜だけど」でつないで、話に流れをつくる形。",
  image:"電車の連結器のイメージです。短い文の車両を、if や because という連結器でつなぐと、1本の長い電車になって話がスムーズに走ります。ただし連結器は1か所に1つだけです。",
  ja:"日本語は「忙しかったので」と「ので」を文のうしろにつけますが、英語は because I was busy と、つなぎの言葉を前に置きます。また「もし明日雨が降ったら」の if の中は、未来でも今の形（rains）を使います。",
  when:["「何かあれば連絡してください」とメールで書くとき","返信が遅れた理由を伝えるとき","「〜だけど、〜したほうがいい」と施術のアドバイスをするとき"],
  steps:["①言いたい文を2つ用意する","②関係に合うつなぎを選ぶ（もし＝if、とき＝when、理由＝because、結果＝so、〜けど＝although）","③if / when の中は未来のことでも今の形にする","④because と so、although と but は1つの文で一緒に使わない"],
  parts:[
   {en:"If you have any questions, please let me know.",ja:"ご質問があれば、お知らせください。",
    chunks:[{t:"If",r:"つなぎ",ja:"もし"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"have",r:"どうする",ja:"ある"},{t:"any questions,",r:"だれを／なにを",ja:"何か質問が"},{t:"please let me know.",r:"どうする",ja:"知らせてください"}],
    point:"if で始めて、カンマのあとにお願いの文をつなげています。"},
   {en:"I couldn't reply because I was treating patients.",ja:"施術中だったので返信できませんでした。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"couldn't reply",r:"どうする",ja:"返信できなかった"},{t:"because",r:"つなぎ",ja:"なぜなら"},{t:"I was treating patients.",r:"なぜ",ja:"患者さんを施術していた"}],
    point:"結果を先に言い、because のあとに理由をつなげています。"},
   {en:"The flight was delayed, so I'll be late for the meeting.",ja:"飛行機が遅れたので、会議に遅れます。",
    chunks:[{t:"The flight",r:"だれが／なにが",ja:"飛行機が"},{t:"was delayed,",r:"どうする",ja:"遅れた"},{t:"so",r:"つなぎ",ja:"だから"},{t:"I'll be late",r:"です・いる（be動詞）",ja:"遅れます"},{t:"for the meeting.",r:"くわしく（説明の部分）",ja:"会議に"}],
    point:"理由を先に言い、so のあとに結果をつなげています。because とは前後が逆です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　If it (　) tomorrow, let's meet online.",opts:["will rain","rains","rained"],a:1,why:"if の中は、明日のことでも今の形を使います。"},
   {q:"正しい文はどれ？",opts:["Because I was busy, so I couldn't reply.","I was busy, so I couldn't reply.","Because I was busy, but I couldn't reply."],a:1,why:"つなぎは1か所に1つ。because と so を一緒には使いません。"},
   {q:"(　)に入るのは？　(　) the pain is better, you should keep stretching.",opts:["Although","Because","So"],a:0,why:"「痛みはよくなったけれど、続けたほうがいい」なので「〜だけど」の Although です。"}
  ],
  terms:["接続詞","現在形","未来"]
 },
 19:{
  one:"質問をそのままぶつけず、「教えていただけますか」の中に包んで、ていねいにたずねる形。",
  image:"質問をきれいな封筒に入れて手渡すイメージです。いきなり肩をたたいて「駅はどこ？」と聞くより、「すみません、駅がどこか教えていただけますか」と封筒ごと渡すほうがていねいです。封筒に入れると、質問はふつうの文の並び方にもどります。",
  ja:"日本語は「駅はどこですか」を「駅がどこか教えて」と言いかえても語順はあまり変わりませんが、英語は where is the station が where the station is に変わります。does や did も封筒の中では消えます。",
  when:["道や場所をていねいにたずねるとき","会議や予約の時間を確認するとき","取引先の都合を聞くとき"],
  steps:["①ふつうの質問を考える（Where is the station?）","②前に Could you tell me / Do you know をつける","③うしろの質問を「だれが＋どうする」の順にもどす（where the station is）","④はい・いいえで答える質問なら if（〜かどうか）を使う"],
  parts:[
   {en:"Could you tell me where the nearest station is?",ja:"いちばん近い駅がどこか教えていただけますか。",
    chunks:[{t:"Could",r:"気持ち・助け（助動詞）",ja:"〜していただけますか"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"tell",r:"どうする",ja:"教える"},{t:"me",r:"だれに",ja:"私に"},{t:"where the nearest station is?",r:"だれを／なにを",ja:"いちばん近い駅がどこか"}],
    point:"封筒の中は the station is の順。is が最後に来ます。"},
   {en:"Do you know what time the meeting starts?",ja:"会議が何時に始まるかご存じですか。",
    chunks:[{t:"Do you know",r:"どうする",ja:"ご存じですか"},{t:"what time the meeting starts?",r:"だれを／なにを",ja:"会議が何時に始まるか"}],
    point:"does が消えて、start が starts になっています。"},
   {en:"Could you let me know if Mr. Sharma is available on Monday?",ja:"シャルマさんが月曜日にご都合がつくか教えていただけますか。",
    chunks:[{t:"Could you let me know",r:"どうする",ja:"教えていただけますか"},{t:"if Mr. Sharma is available",r:"だれを／なにを",ja:"シャルマさんの都合がつくかどうか"},{t:"on Monday?",r:"いつ",ja:"月曜日に"}],
    point:"はい・いいえの質問なので if（〜かどうか）で包んでいます。"}
  ],
  quiz:[
   {q:"正しいのは？　Could you tell me (　)?",opts:["where is the station","where the station is","the station where is"],a:1,why:"封筒の中は「だれが（the station）＋どうする（is）」の順にもどします。"},
   {q:"(　)に入るのは？　Do you know what time the meeting (　)?",opts:["does start","starts","start"],a:1,why:"封筒の中では does が消え、そのかわり start に s がつきます。"},
   {q:"(　)に入るのは？　Would you mind (　) a few minutes?",opts:["to wait","waiting","wait"],a:1,why:"Would you mind のあとは -ing の形と決まっています。"}
  ],
  terms:["間接疑問文","疑問詞","疑問文"]
 },
 20:{
  one:"「昔から今までずっと続いている」ことと、「過去のさらに前」を言い分ける形。",
  image:"have been ～ing は、2018年から今日までまっすぐ伸びている1本の線です。had ＋ された形は、過去のある日からさらに少し前へもどる「巻きもどしボタン」です。「着いたとき、会議はもう始まっていた」のように、2つの過去の順番をはっきりさせます。",
  ja:"日本語は「2018年から院をやっています」と今の形で言えますが、英語は I've been running と、続いていることを形で表します。また「着いたときには始まっていた」の「もう始まっていた」は、英語では had started と1段前の形にします。",
  when:["開業してからの年数や経歴を話すとき","相手に「どのくらい続けていますか」と聞くとき","過去の出来事の順番を説明するとき"],
  steps:["①続いていることなら I've been ＋ ～ing を使う","②期間なら for（3か月）、始まりなら since（2018年）をつける","③過去の2つの出来事のうち、先に起きたほうを had ＋ された形にする"],
  parts:[
   {en:"I've been running my clinic since 2018.",ja:"2018年から院を経営しています。",
    chunks:[{t:"I've",r:"だれが／なにが",ja:"私は（ずっと）"},{t:"been running",r:"どうする",ja:"経営している"},{t:"my clinic",r:"だれを／なにを",ja:"自分の院を"},{t:"since 2018.",r:"いつ",ja:"2018年から"}],
    point:"開業から今日まで続いているので have been running。始まりの年には since を使います。"},
   {en:"How long have you been studying English?",ja:"どのくらい英語を勉強していますか。",
    chunks:[{t:"How long",r:"たずねる（疑問詞）",ja:"どのくらい"},{t:"have you been studying",r:"どうする",ja:"ずっと勉強している"},{t:"English?",r:"だれを／なにを",ja:"英語を"}],
    point:"今も続いていることの長さを聞く、決まった聞き方です。"},
   {en:"When I arrived, the meeting had already started.",ja:"私が着いたときには、会議はもう始まっていました。",
    chunks:[{t:"When I arrived,",r:"いつ",ja:"私が着いたとき"},{t:"the meeting",r:"だれが／なにが",ja:"会議は"},{t:"had already started.",r:"どうする",ja:"もう始まっていた"}],
    point:"着いたより前に始まっていたので、巻きもどしの had started です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I've (　) Raj for two years.",opts:["been knowing","known","knew"],a:1,why:"know（知っている）は気持ちや状態の動詞なので -ing にしません。"},
   {q:"(　)に入るのは？　I've been running my clinic (　) 2018.",opts:["from","for","since"],a:2,why:"始まった年には since。for は「3年間」のような長さに使います。"},
   {q:"(　)に入るのは？　When I arrived, the meeting (　) started.",opts:["already","had already","has already"],a:1,why:"着いたよりさらに前のことなので had を使います。"}
  ],
  terms:["現在完了","進行形","過去分詞"]
 },
 21:{
  one:"「もしも〜だったら」と、今の現実とはちがう想像を話す形。ていねいな提案にも使う。",
  image:"動詞を1つ昔に下げるのは「これは現実から一歩はなれた話ですよ」という合図です。時間をはなすのと同じように、現実からもはなす。だから形は過去でも、話しているのは今のことです。",
  ja:"日本語は「もし私があなたなら」と今の形のままで言えますが、英語は If I were you と、わざと過去の形にします。うしろは would（〜するだろう）や could（〜できるだろう）で受けます。",
  when:["相手にやわらかくアドバイスするとき","予算や時間が足りない今の状況で「もしあれば」と話すとき","「〜していただけるとありがたいです」とていねいに頼むとき"],
  steps:["①今の現実とちがうことか、本当に起こりうることかを決める","②ちがうことなら、if の中の動詞を過去の形にする（be動詞は were）","③うしろに would / could ＋ 動詞のもとの形を続ける"],
  parts:[
   {en:"If I were you, I would add a booking button at the top.",ja:"私があなたなら、上に予約ボタンを付けます。",
    chunks:[{t:"If I were you,",r:"くわしく（説明の部分）",ja:"もし私があなたなら"},{t:"I",r:"だれが／なにが",ja:"私は"},{t:"would",r:"気持ち・助け（助動詞）",ja:"〜するだろう"},{t:"add",r:"どうする",ja:"付ける"},{t:"a booking button",r:"だれを／なにを",ja:"予約ボタンを"},{t:"at the top.",r:"どこで／どこに",ja:"いちばん上に"}],
    point:"自分は相手にはなれないので、想像の話。be動詞は were を使います。"},
   {en:"If we had a bigger budget, we could hire a photographer.",ja:"もっと予算があれば、カメラマンを頼めるのですが。",
    chunks:[{t:"If we had a bigger budget,",r:"くわしく（説明の部分）",ja:"もっと予算があれば"},{t:"we",r:"だれが／なにが",ja:"私たちは"},{t:"could",r:"気持ち・助け（助動詞）",ja:"〜できるだろう"},{t:"hire",r:"どうする",ja:"頼む"},{t:"a photographer.",r:"だれを／なにを",ja:"カメラマンを"}],
    point:"今は予算が足りないという現実があり、had でその逆を想像しています。"},
   {en:"It would be great if you could send the photos by Monday.",ja:"月曜日までに写真を送っていただけるとありがたいです。",
    chunks:[{t:"It would be great",r:"です・いる（be動詞）",ja:"ありがたいです"},{t:"if you could send the photos",r:"くわしく（説明の部分）",ja:"写真を送っていただけたら"},{t:"by Monday.",r:"いつ",ja:"月曜日までに"}],
    point:"一歩はなれた言い方にすることで、相手に押しつけないていねいなお願いになります。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　If I (　) more time, I would study more.",opts:["have","had","will have"],a:1,why:"今は時間がない、という現実とちがう想像なので過去の形 had です。"},
   {q:"(　)に入るのは？　If I were you, I (　) add a booking button.",opts:["will","would","am"],a:1,why:"想像の話のうしろは would で受けます。"},
   {q:"本当に起こりうる話は？　If it (　) tomorrow, I'll stay home.",opts:["rains","rained","would rain"],a:0,why:"明日雨が降るのは本当にありうることなので、ふつうの if と今の形を使います。"}
  ],
  terms:["仮定法","過去形","助動詞"]
 },
 22:{
  one:"「あのときこうしていれば」とふり返る形と、「〜ならいいのに」という気持ちの形。",
  image:"前の週の「一歩はなれる合図」を、もう一段深くしたものです。今の想像は過去の形、過去の想像は had ＋ された形と、2段下げます。I wish は流れ星へのかなわない願い、It's time は時計を見て「もうとっくにやっている時間なのに」という気持ちです。",
  ja:"日本語は「知っていたら早く出たのに」と、今も過去もあまり形を変えません。英語は今の話か過去の話かで形がはっきり分かれるので、まず「いつの話か」を決めることが大切です。",
  when:["過去の失敗をふり返るとき","かなわない願いを言うとき","「そろそろサイトを新しくしよう」と提案するとき"],
  steps:["①今の話か、過去の話かを決める","②過去の想像なら、if の中を had ＋ された形にする","③うしろは would have ＋ された形（〜しただろうに）にする","④I wish や It's time のうしろも、1段下げた形にする"],
  parts:[
   {en:"If I had known about the traffic, I would have left earlier.",ja:"渋滞のことを知っていたら、もっと早く出たのに。",
    chunks:[{t:"If I had known about the traffic,",r:"くわしく（説明の部分）",ja:"もし渋滞のことを知っていたら"},{t:"I",r:"だれが／なにが",ja:"私は"},{t:"would have left",r:"どうする",ja:"出ただろうに"},{t:"earlier.",r:"いつ",ja:"もっと早く"}],
    point:"終わった過去の話なので、前半も後半も2段下げた形です。"},
   {en:"I wish I had started learning English ten years ago.",ja:"10年前に英語を始めていればよかったなあ。",
    chunks:[{t:"I wish",r:"どうする",ja:"〜ならよかったのに"},{t:"I had started learning English",r:"くわしく（説明の部分）",ja:"英語を始めていた"},{t:"ten years ago.",r:"いつ",ja:"10年前に"}],
    point:"過去への願いなので had started。今の願いなら I wish I spoke Hindi. のように過去の形です。"},
   {en:"It's time we renewed our clinic's website.",ja:"そろそろ院のサイトを新しくするころです。",
    chunks:[{t:"It's time",r:"です・いる（be動詞）",ja:"そろそろ〜するころだ"},{t:"we",r:"だれが／なにが",ja:"私たちが"},{t:"renewed",r:"どうする",ja:"新しくする"},{t:"our clinic's website.",r:"だれを／なにを",ja:"院のサイトを"}],
    point:"形は過去の renewed でも、意味は「今やるべき」です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　If I (　) about the traffic, I would have left earlier.",opts:["knew","had known","have known"],a:1,why:"過去の話の想像なので had known と2段下げます。"},
   {q:"(　)に入るのは？　I wish I (　) speak Hindi.",opts:["can","could","will"],a:1,why:"今かなわない願いなので、can を1段下げた could にします。"},
   {q:"(　)に入るのは？　It's time we (　) our website.",opts:["update","updated","updating"],a:1,why:"It's time のあとは過去の形にして「もうやっていていいころ」を表します。"}
  ],
  terms:["仮定法","過去分詞","過去形"]
 },
 23:{
  one:"「人に〜させる・してもらう」「人が〜するのを見る・感じる」を言う形。",
  image:"make は背中を押して動かす、let はドアを開けて「どうぞ」と通してあげる、have は担当のスタッフに任せる、get は説得して動いてもらうイメージです。どれも「だれに」と「何を」を続けて言います。",
  ja:"日本語は「スタッフに請求書を送らせます」と「〜させる」を動詞につけますが、英語は have my assistant send のように、頼む動詞・人・する動詞の順に並べます。make・let・have のあとは to をつけず、get だけ to をつけます。",
  when:["「確認させてください」と言うとき","スタッフに作業を任せることを伝えるとき","施術中に「〜を感じますか」と聞くとき"],
  steps:["①頼み方を選ぶ（押す＝make、許す＝let、任せる＝have、説得する＝get）","②そのあとに人を言う","③make / let / have なら動詞のもとの形、get なら to ＋ 動詞を続ける","④物を「〜してもらう」なら have / get ＋ 物 ＋ された形"],
  parts:[
   {en:"Let me check your schedule.",ja:"ご予定を確認させてください。",
    chunks:[{t:"Let",r:"どうする",ja:"させてください"},{t:"me",r:"だれに",ja:"私に"},{t:"check",r:"どうする",ja:"確認する"},{t:"your schedule.",r:"だれを／なにを",ja:"あなたの予定を"}],
    point:"let のあとは to をつけず、check のもとの形が来ます。"},
   {en:"I'll have my assistant send you the invoice.",ja:"スタッフに請求書をお送りさせます。",
    chunks:[{t:"I'll have",r:"どうする",ja:"任せる"},{t:"my assistant",r:"だれに",ja:"私のスタッフに"},{t:"send",r:"どうする",ja:"送る"},{t:"you",r:"だれに",ja:"あなたに"},{t:"the invoice.",r:"だれを／なにを",ja:"請求書を"}],
    point:"役割としてスタッフに任せるので have。send に to はつきません。"},
   {en:"Tell me if you feel your back getting warm.",ja:"背中が温かくなってきたら教えてください。",
    chunks:[{t:"Tell me",r:"どうする",ja:"教えてください"},{t:"if you feel",r:"くわしく（説明の部分）",ja:"感じたら"},{t:"your back",r:"だれを／なにを",ja:"背中が"},{t:"getting warm.",r:"どんな",ja:"温かくなっていくのを"}],
    point:"feel ＋ 物 ＋ -ing で「〜していくのを感じる」。施術中に役立つ言い方です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　Let me (　).",opts:["to check","check","checking"],a:1,why:"let のあとは to なしで、動詞のもとの形です。"},
   {q:"(　)に入るのは？　I got Raj (　) the files.",opts:["send","to send","sent"],a:1,why:"get だけは to が必要です。「説得して送ってもらった」の意味です。"},
   {q:"(　)に入るのは？　I need to get the brochure (　) into Hindi.",opts:["translate","translating","translated"],a:2,why:"パンフレットは「訳される側」なので、された形の translated です。"}
  ],
  terms:["使役動詞","過去分詞","目的語"]
 },
 24:{
  one:"人から聞いた話や頼まれたことを、ほかの人に伝える形。",
  image:"伝言メモのイメージです。「ラージさんが『サンプルが届いた』と言っていた」とメモに書くとき、英語はメモを書く時点から見て、中身の時間も1つ昔にずらします。",
  ja:"日本語は「届いたと言っていた」と、中身の時間をそのまま使えます。英語は said のあとの中身を1つ昔の形にずらすのが基本です（is → was、has → had）。また tell はすぐうしろに「人」が来ますが、say は来ません。",
  when:["会議で取引先が言ったことを伝えるとき","上司や相手に頼まれたことを報告するとき","相手から聞かれた質問を伝えるとき"],
  steps:["①言ったことなら said、人に言ったなら told ＋ 人","②中身の時間を1つ昔にずらす","③頼まれたことなら told / asked ＋ 人 ＋ to ＋ 動詞（しないでは not to）","④質問なら asked if、または asked ＋ 疑問詞 ＋ だれが ＋ どうする"],
  parts:[
   {en:"Raj said that the samples had arrived.",ja:"ラージさんはサンプルが届いたと言っていました。",
    chunks:[{t:"Raj",r:"だれが／なにが",ja:"ラージさんは"},{t:"said",r:"どうする",ja:"言った"},{t:"that the samples had arrived.",r:"だれを／なにを",ja:"サンプルが届いたと"}],
    point:"言ったのは過去なので、中身の have arrived を had arrived にずらしています。"},
   {en:"Mr. Sharma told me to send the contract by Friday.",ja:"シャルマさんに、金曜日までに契約書を送るよう言われました。",
    chunks:[{t:"Mr. Sharma",r:"だれが／なにが",ja:"シャルマさんは"},{t:"told",r:"どうする",ja:"言った"},{t:"me",r:"だれに",ja:"私に"},{t:"to send the contract",r:"だれを／なにを",ja:"契約書を送るように"},{t:"by Friday.",r:"いつ",ja:"金曜日までに"}],
    point:"頼まれたことは told ＋ 人 ＋ to ＋ 動詞で伝えます。"},
   {en:"Priya asked if we could start in April.",ja:"プリヤさんは、4月に始められるかと聞いてきました。",
    chunks:[{t:"Priya",r:"だれが／なにが",ja:"プリヤさんは"},{t:"asked",r:"どうする",ja:"たずねた"},{t:"if we could start",r:"だれを／なにを",ja:"私たちが始められるかどうか"},{t:"in April.",r:"いつ",ja:"4月に"}],
    point:"はい・いいえの質問なので if。can も1つ昔の could にずらします。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　He (　) me that he was busy.",opts:["said","told","talked"],a:1,why:"すぐうしろに me（人）が来るので told。said me とは言いません。"},
   {q:"(　)に入るのは？　He told me (　) worry.",opts:["don't","not to","no"],a:1,why:"「〜しないように言われた」は told ＋ 人 ＋ not to ＋ 動詞です。"},
   {q:"(　)に入るのは？　She asked when the site (　) be ready.",opts:["will","would","does"],a:1,why:"聞かれたのは過去なので will を1つ昔の would にずらします。"}
  ],
  terms:["過去形","間接疑問文","不定詞"]
 },
 25:{
  one:"ふだんの動詞に up・out・off などの小さな言葉をつけて、新しい意味をつくる形。",
  image:"料理の味つけのイメージです。set（置く）に up（しっかり）をかけると「準備する・立ち上げる」、put（置く）に off（はなす）をかけると「先にのばす」になります。小さな言葉が向きと気持ちを足しています。",
  ja:"日本語は「延期する」「調べる」と1つの言葉で言いますが、英語は put off、look into のように、やさしい動詞2つの組み合わせでよく言います。it や them が入るときは、set it up のように間にはさむ型があります。",
  when:["会議やオンライン通話の予定を決めるとき","「調べて、あとでお返事します」とメールで書くとき","予定の延期や、原因がわかったことを伝えるとき"],
  steps:["①言いたい意味に合う組み合わせを選ぶ（準備する＝set up、延期する＝put off）","②何を、を続ける（set up a call）","③it や them なら間にはさむ（set it up）","④look into や deal with は分けずに、うしろに置く（look into it）"],
  parts:[
   {en:"Let's set up a call for next Tuesday.",ja:"来週の火曜日に通話の予定を入れましょう。",
    chunks:[{t:"Let's set up",r:"どうする",ja:"準備しよう"},{t:"a call",r:"だれを／なにを",ja:"通話を"},{t:"for next Tuesday.",r:"いつ",ja:"来週の火曜日に"}],
    point:"set（置く）＋ up（しっかり）で「予定をきちんと入れる」の意味になります。"},
   {en:"I'll look into the problem and get back to you.",ja:"問題を調べて、あらためてご連絡します。",
    chunks:[{t:"I'll look into",r:"どうする",ja:"調べます"},{t:"the problem",r:"だれを／なにを",ja:"その問題を"},{t:"and",r:"つなぎ",ja:"そして"},{t:"get back to you.",r:"どうする",ja:"あなたにお返事します"}],
    point:"look into は「中をのぞきこむ」から「調べる」。メールでよく使う2つの組み合わせです。"},
   {en:"We had to put off the launch until June.",ja:"公開を6月まで延期しなければなりませんでした。",
    chunks:[{t:"We",r:"だれが／なにが",ja:"私たちは"},{t:"had to put off",r:"どうする",ja:"延期しなければならなかった"},{t:"the launch",r:"だれを／なにを",ja:"公開を"},{t:"until June.",r:"いつ",ja:"6月まで"}],
    point:"put（置く）＋ off（はなす）で、予定を先へはなす＝延期するです。"}
  ],
  quiz:[
   {q:"正しい文はどれ？",opts:["Let's set up it.","Let's set it up.","Let's it set up."],a:1,why:"it が入るときは set と up の間にはさみます。"},
   {q:"(　)に入るのは？　I'll look (　).",opts:["it into","into it","it in"],a:1,why:"look into は分けない型なので、it はうしろに置きます。"},
   {q:"「すぐにお返事します」は？　I'll (　) to you soon.",opts:["contact back","get back","call back"],a:1,why:"「お返事する」は get back to ＋ 人 と決まった言い方です。"}
  ],
  terms:["句動詞","前置詞","目的語"]
 },
 26:{
  one:"第2期で覚えた形をつなげて、自分の事業を3分間で順番に話す。",
  image:"スピーチは電車の路線図です。「つかみ → 経歴 → 事業 → 強み → これから → 締め」の駅に順番に止まります。それぞれの駅で、第2期の形を1つずつ道具として使います。",
  ja:"日本語のスピーチは「英語が下手ですみません」と謝ってから始めがちですが、英語では感謝やあいさつから始めるのが自然です。つなぎの言葉（First・That's why・To sum up）で今どの駅かを知らせると、聞き手が迷いません。",
  when:["インドの取引先に自分の院や事業を紹介するとき","オンライン会議で自己紹介をするとき","これからの協力を提案するとき"],
  steps:["①つかみ：お礼から始める（Thank you for having me.）","②経歴：I've been running ～ since 2018 で続いていることを言う","③事業と強み：説明のしっぽ（that ～）や although でくわしく話す","④これからと締め：If we ～, we could ～ で提案し、To sum up でまとめる"],
  parts:[
   {en:"I've been running a clinic that was founded in 2018.",ja:"2018年に開業した院を経営しています。",
    chunks:[{t:"I've",r:"だれが／なにが",ja:"私は（ずっと）"},{t:"been running",r:"どうする",ja:"経営している"},{t:"a clinic",r:"だれを／なにを",ja:"院を"},{t:"that was founded in 2018.",r:"くわしく（説明の部分）",ja:"2018年に開業した"}],
    point:"続いていること（第20週）、説明のしっぽ（第15週）、主役の入れかえ（第14週）が1文に入っています。"},
   {en:"Although we are a small team, we take care of every patient personally.",ja:"小さなチームですが、一人ひとりの患者さんを大切に診ています。",
    chunks:[{t:"Although",r:"つなぎ",ja:"〜だけれど"},{t:"we are a small team,",r:"くわしく（説明の部分）",ja:"私たちは小さなチームだ"},{t:"we",r:"だれが／なにが",ja:"私たちは"},{t:"take care of",r:"どうする",ja:"大切に診る"},{t:"every patient",r:"だれを／なにを",ja:"一人ひとりの患者さんを"},{t:"personally.",r:"どのように",ja:"ていねいに直接"}],
    point:"although で弱みに見えることを先に言い、強みにつなげています。"},
   {en:"If we worked together, we could bring Japanese care to India.",ja:"一緒に取り組めたら、日本のケアをインドに届けられるでしょう。",
    chunks:[{t:"If we worked together,",r:"くわしく（説明の部分）",ja:"もし一緒に取り組めたら"},{t:"we",r:"だれが／なにが",ja:"私たちは"},{t:"could",r:"気持ち・助け（助動詞）",ja:"〜できるだろう"},{t:"bring",r:"どうする",ja:"届ける"},{t:"Japanese care",r:"だれを／なにを",ja:"日本のケアを"},{t:"to India.",r:"どこで／どこに",ja:"インドに"}],
    point:"一歩はなれた想像の形（第21週）で、押しつけずに提案しています。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I (　) my clinic since 2018.",opts:["run","am running","have been running"],a:2,why:"2018年から今まで続いているので have been running です。"},
   {q:"スピーチの始め方として自然なのは？",opts:["Sorry, my English is not good.","Thank you for having me today.","I'm sorry for my bad English."],a:1,why:"英語のスピーチは謝りではなく、お礼から始めると前向きに伝わります。"},
   {q:"(　)に入るのは？　What makes us special is (　) holistic approach.",opts:["we have","our","we"],a:1,why:"is のうしろには「私たちの〜」という名詞のかたまりを置きます。"}
  ],
  terms:["現在完了","関係代名詞","受動態","接続詞","仮定法"]
 }
});
