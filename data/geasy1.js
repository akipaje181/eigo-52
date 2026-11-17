// やさしい文法（初心者向けの解説）第1期：第1〜13週
// 作り方は docs/やさしい文法_作り方.md を参照
window.GEASY=Object.assign(window.GEASY||{},{
 1:{
  one:"am / is / are は「＝（イコール）」の記号。「AはBです」をつくる言葉です。",
  image:"am / is / are は、算数の「＝」のようなものです。「私 ＝ 施術者」「院 ＝ 愛媛にある」と、左と右をつなぎます。だれが主語かで、つなぐ記号の形が3つに変わるだけです。",
  ja:"日本語は「私は 施術者 です」と、「です」が最後に来ます。英語は『だれが → どうする（ここでは「＝」） → 何を』の順なので、「私は → です → 施術者」の順に並べます。「です」を2番目に置くのがコツです。",
  when:["初めて会った人に名前や仕事を言うとき","人や物を紹介するとき（これは私の院です）","場所や様子を言うとき（院は愛媛にあります・今日は忙しい）"],
  steps:["①だれが（主語）を決める：I / Raj / My clinic など","②主語に合わせて「＝」を選ぶ：I なら am、1人・1つなら is、You や2人以上なら are","③「＝」のあとに、名前・仕事・様子・場所を置く","④打ち消すときは am / is / are のあとに not、たずねるときは am / is / are を文の先頭に出す"],
  parts:[
   {en:"I am a therapist.",ja:"私は施術者です。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"am",r:"です・いる（be動詞）",ja:"＝（です）"},{t:"a therapist.",r:"どんな",ja:"施術者"}],
    point:"主語が I なので am。仕事の前には a をつけます。"},
   {en:"Raj is my business partner.",ja:"ラージさんは私のビジネスパートナーです。",
    chunks:[{t:"Raj",r:"だれが／なにが",ja:"ラージさんは"},{t:"is",r:"です・いる（be動詞）",ja:"＝（です）"},{t:"my business partner.",r:"どんな",ja:"私のビジネスパートナー"}],
    point:"Raj は自分でも相手でもない1人なので is を使います。"},
   {en:"My clinic is in Ehime.",ja:"私の院は愛媛にあります。",
    chunks:[{t:"My clinic",r:"だれが／なにが",ja:"私の院は"},{t:"is",r:"です・いる（be動詞）",ja:"ある"},{t:"in Ehime.",r:"どこで／どこに",ja:"愛媛に"}],
    point:"is のあとに場所を置くと「〜にある・〜にいる」の意味になります。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I (　) from Yokohama.",opts:["is","am","are"],a:1,why:"主語が I のときは、いつも am です。"},
   {q:"(　)に入るのは？　We (　) busy today.",opts:["am","is","are"],a:2,why:"We（私たち）は2人以上なので are です。"},
   {q:"正しい文は？「私は院で働いています。」",opts:["I am work at a clinic.","I work at a clinic.","I am working a clinic is."],a:1,why:"「働く」は work という動きの言葉だけで言えます。am はいりません。am / is / are と動きの言葉は、ふつう並べません。"}
  ],
  terms:["be動詞","主語","否定文","疑問文","冠詞"]
 },
 2:{
  one:"「〜する」の言葉は、主語が「自分と相手以外の1人・1つ」のとき s がつく。",
  image:"院の予約表を思い出してください。「私が施術する」「スタッフが受付する」と、だれが何をするかを書きますね。英語では、その「だれ」が自分でも相手でもない1人のとき、動きの言葉に小さな名札「s」をつけるイメージです。",
  ja:"日本語は「ラージさんは バンガロールに 住んでいる」と、動きの言葉が最後です。英語は『だれが → どうする → 何を → どこで → いつ』の順なので、「ラージさんは → 住んでいる → バンガロールに」と、動きの言葉が2番目に来ます。また日本語には、主語によって動きの言葉の形が変わる決まりはありません。",
  when:["毎日の習慣を言うとき（9時に仕事を始めます）","仕事や住んでいる場所など、いつものことを言うとき","ほかの人の習慣や仕事を説明するとき（プリヤさんはヨガを教えています）"],
  steps:["①だれが（主語）を決める","②すぐあとに動きの言葉（〜する）を置く","③主語が I / you / 2人以上なら、そのまま。自分と相手以外の1人・1つなら s（es）をつける","④そのあとに「何を → どこで → いつ」を続ける"],
  parts:[
   {en:"I start work at nine.",ja:"私は9時に仕事を始めます。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"start",r:"どうする",ja:"始める"},{t:"work",r:"だれを／なにを",ja:"仕事を"},{t:"at nine.",r:"いつ",ja:"9時に"}],
    point:"主語が I なので start に s はつきません。「いつ」は最後に置きます。"},
   {en:"Raj lives in Bangalore.",ja:"ラージさんはバンガロールに住んでいます。",
    chunks:[{t:"Raj",r:"だれが／なにが",ja:"ラージさんは"},{t:"lives",r:"どうする",ja:"住んでいる"},{t:"in Bangalore.",r:"どこで／どこに",ja:"バンガロールに"}],
    point:"Raj は自分でも相手でもない1人なので live に s がつきます。"},
   {en:"My clinic opens at 9 a.m.",ja:"私の院は午前9時に開きます。",
    chunks:[{t:"My clinic",r:"だれが／なにが",ja:"私の院は"},{t:"opens",r:"どうする",ja:"開く"},{t:"at 9 a.m.",r:"いつ",ja:"午前9時に"}],
    point:"人だけでなく「院」のような1つのものが主語でも s がつきます。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　Priya (　) yoga on Sundays.",opts:["teach","teaches","teaching"],a:1,why:"Priya は自分と相手以外の1人です。teach は ch で終わるので es をつけて teaches です。"},
   {q:"(　)に入るのは？　I usually (　) to my clinic.",opts:["walk","walks","am walk"],a:0,why:"主語が I なので s はつきません。am もいりません。"},
   {q:"英語の順番として正しいのは？",opts:["Raj in Bangalore lives.","Raj lives in Bangalore.","Lives Raj in Bangalore."],a:1,why:"『だれが（Raj）→ どうする（lives）→ どこに（in Bangalore）』の順です。"}
  ],
  terms:["一般動詞","3単現","現在形","主語","動詞"]
 },
 3:{
  one:"「〜しない」「〜しますか？」は、do / does という手伝いの言葉を前に置いて作る。",
  image:"do / does は、動きの言葉の前に立つ「受付係」のようなものです。打ち消したり、たずねたりする仕事は受付係が全部引き受けます。だから動きの言葉は、もとの形のままで休んでいられます。",
  ja:"日本語は「食べません」「食べますか」と、文の最後を変えます。英語は最後ではなく前を変えます。打ち消すときは『だれが』のすぐあとに don't、たずねるときは文の一番前に Do を置きます。並び方『だれが → どうする → 何を』そのものは変わりません。",
  when:["できない・しないことを伝えるとき（わかりません）","相手の習慣や好みをたずねるとき（日本語を話しますか）","インドの取引先に、使っている道具などを確かめるとき（LINEを使いますか）"],
  steps:["①ふつうの文を作る：Raj uses LINE.","②主語が自分と相手以外の1人・1つなら does、それ以外は do を選ぶ","③打ち消し：主語のあとに don't / doesn't。たずねる：Do / Does を文の先頭へ","④動きの言葉は s をとって、もとの形にもどす（uses → use）"],
  parts:[
   {en:"I don't understand.",ja:"わかりません。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"don't",r:"気持ち・助け（助動詞）",ja:"〜しない"},{t:"understand.",r:"どうする",ja:"わかる"}],
    point:"don't は「だれが」と「どうする」の間に入ります。"},
   {en:"Does Raj use LINE?",ja:"ラージさんはLINEを使いますか。",
    chunks:[{t:"Does",r:"気持ち・助け（助動詞）",ja:"〜しますか（質問の合図）"},{t:"Raj",r:"だれが／なにが",ja:"ラージさんは"},{t:"use",r:"どうする",ja:"使う"},{t:"LINE?",r:"だれを／なにを",ja:"LINEを"}],
    point:"Does を使うので、uses ではなく use にもどります。"},
   {en:"Priya doesn't eat meat.",ja:"プリヤさんは肉を食べません。",
    chunks:[{t:"Priya",r:"だれが／なにが",ja:"プリヤさんは"},{t:"doesn't",r:"気持ち・助け（助動詞）",ja:"〜しない"},{t:"eat",r:"どうする",ja:"食べる"},{t:"meat.",r:"だれを／なにを",ja:"肉を"}],
    point:"s は doesn't の方についたので、eat には s をつけません。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　(　) you speak English?",opts:["Are","Do","Does"],a:1,why:"speak は動きの言葉なので Are ではなく Do。主語が you なので Does ではありません。"},
   {q:"正しい文は？",opts:["Raj doesn't speaks Japanese.","Raj doesn't speak Japanese.","Raj not speak Japanese."],a:1,why:"doesn't を使ったら、動きの言葉はもとの形（speak）にもどします。"},
   {q:"「わかりません」を英語にすると？",opts:["I don't understand.","I not understand.","I am not understand."],a:0,why:"打ち消しには don't が必要です。not だけでは文になりません。"}
  ],
  terms:["否定文","疑問文","一般動詞","3単現","動詞"]
 },
 4:{
  one:"「何・どこ・いつ・だれ・なぜ・どうやって」を聞くときは、その言葉を文の一番前に置く。",
  image:"たずねる言葉（what・where など）は、問診票の「質問の見出し」のようなものです。まず「どこ？」「何時？」と見出しを言ってから、ふつうのたずね方（Do you 〜? / Is 〜?）を続けます。",
  ja:"日本語は「あなたのオフィスは どこ ですか」と、たずねる言葉が真ん中や最後に来ます。英語は一番前です。そのあとは、ふつうのたずねる文と同じ順番（is + だれが、または do + だれが + どうする）に並べます。",
  when:["場所や時間をたずねるとき（オフィスはどこですか・何時に開きますか）","値段や数をたずねるとき（施術1回はいくら？）","理由やきっかけをたずねるとき（なぜ新しいサイトが欲しいのですか）"],
  steps:["①何をたずねたいか決めて、たずねる言葉を選ぶ（where・when・what time・how much など）","②それを文の一番前に置く","③あとは「Yes / No でたずねる文」と同じ形：is + だれが ／ do（does） + だれが + どうする","④最後に ? をつける"],
  parts:[
   {en:"Where is your office?",ja:"あなたのオフィスはどこですか。",
    chunks:[{t:"Where",r:"たずねる（疑問詞）",ja:"どこ"},{t:"is",r:"です・いる（be動詞）",ja:"ある"},{t:"your office?",r:"だれが／なにが",ja:"あなたのオフィスは"}],
    point:"Where を先頭に置き、そのあと is と主語を入れかえます。"},
   {en:"What time do you open?",ja:"何時に開きますか。",
    chunks:[{t:"What time",r:"たずねる（疑問詞）",ja:"何時に"},{t:"do",r:"気持ち・助け（助動詞）",ja:"（質問の合図）"},{t:"you",r:"だれが／なにが",ja:"あなたは"},{t:"open?",r:"どうする",ja:"開く"}],
    point:"open は動きの言葉なので、What time のあとに do が必要です。"},
   {en:"How much is one treatment?",ja:"施術1回はいくらですか。",
    chunks:[{t:"How much",r:"たずねる（疑問詞）",ja:"いくら"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"one treatment?",r:"だれが／なにが",ja:"施術1回は"}],
    point:"How much はひとかたまりで文の先頭に置きます。"}
  ],
  quiz:[
   {q:"正しい文は？「あなたのオフィスはどこですか。」",opts:["Where your office is?","Where is your office?","Your office where is?"],a:1,why:"たずねる言葉 Where を先頭に置き、そのあとは is → 主語 の順です。"},
   {q:"(　)に入るのは？　What time (　) you open?",opts:["do","are","is"],a:0,why:"open は動きの言葉なので do を使います。"},
   {q:"(　)に入るのは？　How many (　) do you see a day?",opts:["patient","patients","a patient"],a:1,why:"How many（いくつ）は2つ以上を数えるので、patients と s をつけます。"}
  ],
  terms:["疑問詞","疑問文","be動詞","一般動詞"]
 },
 5:{
  one:"「今、〜しているところ」は、am / is / are と 〜ing をセットで使う。",
  image:"スマホで今の様子を写真に撮るイメージです。「今まさに施術中」「今、返事を待っている」と、動いている最中を切り取ります。am / is / are が「今の状態」、ing が「動いている最中」を表します。",
  ja:"日本語は「施術している」「施術中」と、最後の形で言います。英語は『だれが → どうする』の「どうする」の部分を、am / is / are ＋ 〜ing の2つの言葉で作ります。どちらか片方だけでは足りません。",
  when:["電話やメッセージで「今〜中です」と伝えるとき","相手が今何をしているかたずねるとき","今進めている作業を伝えるとき（ホームページを更新中です）"],
  steps:["①だれが（主語）を決める","②主語に合わせて am / is / are を置く","③動きの言葉に ing をつけて、すぐあとに置く（make → making、sit → sitting）","④そのあとに「何を → どこで → いつ（right now など）」を続ける"],
  parts:[
   {en:"I'm treating a patient right now.",ja:"今、患者さんを施術中です。",
    chunks:[{t:"I'm",r:"だれが／なにが",ja:"私は（I am）"},{t:"treating",r:"どうする",ja:"施術している"},{t:"a patient",r:"だれを／なにを",ja:"患者さんを"},{t:"right now.",r:"いつ",ja:"今"}],
    point:"I'm は I am の短い形。am ＋ treating で「施術中」になります。"},
   {en:"Raj is waiting for your reply.",ja:"ラージさんがあなたの返事を待っています。",
    chunks:[{t:"Raj",r:"だれが／なにが",ja:"ラージさんが"},{t:"is",r:"です・いる（be動詞）",ja:"（今）"},{t:"waiting",r:"どうする",ja:"待っている"},{t:"for your reply.",r:"だれを／なにを",ja:"あなたの返事を"}],
    point:"Raj は1人なので is。is と waiting はいつもセットです。"},
   {en:"What are you doing?",ja:"何をしているのですか。",
    chunks:[{t:"What",r:"たずねる（疑問詞）",ja:"何を"},{t:"are",r:"です・いる（be動詞）",ja:"（今）"},{t:"you",r:"だれが／なにが",ja:"あなたは"},{t:"doing?",r:"どうする",ja:"している"}],
    point:"たずねるときは are を主語の前に出します。What は先頭です。"}
  ],
  quiz:[
   {q:"正しい文は？「今、患者さんを施術中です。」",opts:["I treating a patient now.","I'm treating a patient now.","I'm treat a patient now."],a:1,why:"am（I'm）と treating の両方が必要です。"},
   {q:"(　)に入るのは？　We are (　) the website.",opts:["update","updating","updated"],a:1,why:"are のあとは ing の形で「更新しているところ」になります。"},
   {q:"正しい文は？「私は彼を知っています。」",opts:["I'm knowing him.","I know him.","I am know him."],a:1,why:"know（知っている）は、もともと「状態」を表すので ing にしません。"}
  ],
  terms:["進行形","be動詞","現在形","動詞"]
 },
 6:{
  one:"終わったことを言うときは、動きの言葉を「過去の形」に変える。",
  image:"カルテに「昨日の施術」を書きこむイメージです。終わったことには「済み」のハンコを押します。多くの言葉は ed というハンコ（visited）、よく使う言葉は形ごと変わる特別なハンコ（go → went）です。",
  ja:"日本語は「行った」「忙しかった」と、最後に「た」をつけます。英語は『だれが → どうする』の「どうする」そのものを過去の形に変えます。「いつ」（yesterday・last weekend）は、ふつう文の最後に置きます。",
  when:["昨日や週末にしたことを話すとき","仕事の報告をするとき（メールを見ていませんでした）","相手に「〜しましたか？」とたずねるとき"],
  steps:["①だれが（主語）を決める","②動きの言葉を過去の形にする：ふつうは ed（visit → visited）、特別な言葉は形が変わる（go → went、buy → bought）","③am / is は was、are は were にする","④打ち消しは didn't ＋ もとの形、たずねるときは Did ＋ だれが ＋ もとの形"],
  parts:[
   {en:"I went to the gym yesterday.",ja:"昨日ジムに行きました。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"went",r:"どうする",ja:"行った"},{t:"to the gym",r:"どこで／どこに",ja:"ジムに"},{t:"yesterday.",r:"いつ",ja:"昨日"}],
    point:"go の過去は goed ではなく went。形ごと変わる言葉です。"},
   {en:"We were very busy on Monday.",ja:"月曜日はとても忙しかったです。",
    chunks:[{t:"We",r:"だれが／なにが",ja:"私たちは"},{t:"were",r:"です・いる（be動詞）",ja:"＝（でした）"},{t:"very busy",r:"どんな",ja:"とても忙しい"},{t:"on Monday.",r:"いつ",ja:"月曜日に"}],
    point:"are の過去は were。We は2人以上なので was ではありません。"},
   {en:"I didn't see the email.",ja:"そのメールを見ていませんでした。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"didn't",r:"気持ち・助け（助動詞）",ja:"〜しなかった"},{t:"see",r:"どうする",ja:"見る"},{t:"the email.",r:"だれを／なにを",ja:"そのメールを"}],
    point:"didn't が「過去」を受け持つので、see はもとの形のままです。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I (　) to Kyoto last weekend.",opts:["go","went","goed"],a:1,why:"last weekend（先週末）は終わったことなので過去の形。go の過去は went です。"},
   {q:"正しい文は？",opts:["I didn't went to the gym.","I didn't go to the gym.","I don't went to the gym."],a:1,why:"didn't のあとは、もとの形（go）にもどします。"},
   {q:"正しい文は？「旅行を楽しみました。」",opts:["I was enjoy the trip.","I enjoyed the trip.","I enjoy the trip yesterday."],a:1,why:"enjoy は動きの言葉なので was はいりません。ed をつけて enjoyed にします。"}
  ],
  terms:["過去形","be動詞","一般動詞","否定文","疑問文"]
 },
 7:{
  one:"これからのことは will（今決めた）か be going to（前からの予定）で言う。",
  image:"will は、患者さんに「では明日お電話しますね」とその場で約束する感じです。be going to は、予約表にもう書きこんである予定です。どちらも「これから」ですが、決めたタイミングがちがいます。",
  ja:"日本語は「送ります」「行く予定です」と、今のことと同じ形で未来も言えます。英語は『だれが』のあとに will（または am going to）を入れて、「これからだよ」と合図します。そのあとの並び『どうする → 何を → いつ』は同じです。",
  when:["その場で約束するとき（明日ファイルを送ります）","前から決まっている予定を話すとき（来月バンガロールに行く予定です）","これからどうなるか予想するとき（長くはかかりません）"],
  steps:["①だれが（主語）を決める","②その場で決めた・約束なら will、前から決めた予定なら am / is / are going to を置く","③動きの言葉は、もとの形（s も ed もつけない）","④「何を → どこで → いつ（tomorrow・next month）」を続ける"],
  parts:[
   {en:"I'll send you the file tomorrow.",ja:"明日ファイルを送ります。",
    chunks:[{t:"I'll",r:"だれが／なにが",ja:"私は（I will）"},{t:"send",r:"どうする",ja:"送る"},{t:"you",r:"だれに",ja:"あなたに"},{t:"the file",r:"だれを／なにを",ja:"ファイルを"},{t:"tomorrow.",r:"いつ",ja:"明日"}],
    point:"I'll は I will の短い形。その場の約束によく使います。"},
   {en:"I'm going to visit Bangalore next month.",ja:"来月バンガロールを訪れる予定です。",
    chunks:[{t:"I'm going to",r:"気持ち・助け（助動詞）",ja:"私は〜する予定"},{t:"visit",r:"どうする",ja:"訪れる"},{t:"Bangalore",r:"だれを／なにを",ja:"バンガロールを"},{t:"next month.",r:"いつ",ja:"来月"}],
    point:"前から決めている予定なので be going to を使います。am を忘れずに。"},
   {en:"Priya will join the meeting.",ja:"プリヤさんが会議に参加します。",
    chunks:[{t:"Priya",r:"だれが／なにが",ja:"プリヤさんが"},{t:"will",r:"気持ち・助け（助動詞）",ja:"〜する（これから）"},{t:"join",r:"どうする",ja:"参加する"},{t:"the meeting.",r:"だれを／なにを",ja:"会議に"}],
    point:"Priya は1人でも、will のあとは joins にしません。"}
  ],
  quiz:[
   {q:"正しい文は？",opts:["I will sends the file.","I will send the file.","I will to send the file."],a:1,why:"will のあとは、s も to もつけない、もとの形です。"},
   {q:"(　)に入るのは？　I (　) going to visit India.",opts:["am","will","do"],a:0,why:"be going to の形なので、I のときは am が必要です。"},
   {q:"前から決めていた予定を言うのに合うのは？",opts:["We're going to launch the website in May.","We launch going to the website in May.","We will to launch the website in May."],a:0,why:"前から決めている予定は be going to ＋ もとの形で言います。"}
  ],
  terms:["未来","助動詞","be動詞"]
 },
 8:{
  one:"can / should / must は、動きの言葉の前で「気持ち」を足す言葉。",
  image:"施術に「強め」「やさしめ」と調整を足すように、can（できる）、should（したほうがいい）、must（しなければ）などは、動きの言葉に気持ちを足すスパイスです。スパイスを入れても、動きの言葉そのもの（もとの形）は変わりません。",
  ja:"日本語は「送ってくれますか」「飲んだほうがいい」と、最後に気持ちを足します。英語は『だれが』と『どうする』の間に気持ちの言葉を入れます。たのむときは Can you / Could you を文の一番前に置きます。",
  when:["相手に何かをたのむとき（ファイルを送ってくれますか）","患者さんにアドバイスするとき（もっと水を飲んだほうがいいですよ）","しなければならないこと・しなくていいことを伝えるとき"],
  steps:["①だれが（主語）を決める","②言いたい気持ちを選ぶ：できる can／ていねいなお願い could／したほうがいい should／しなければ must・have to／してもいい may","③そのすぐあとに、動きの言葉をもとの形で置く（s・to はつけない）","④たのむ・許しをもらうときは、Can you / Could you / May I を文の先頭に"],
  parts:[
   {en:"Could you speak a little more slowly?",ja:"もう少しゆっくり話していただけますか。",
    chunks:[{t:"Could",r:"気持ち・助け（助動詞）",ja:"〜していただけますか"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"speak",r:"どうする",ja:"話す"},{t:"a little more slowly?",r:"どのように",ja:"もう少しゆっくり"}],
    point:"Could は Can よりていねいなお願いです。"},
   {en:"You should drink more water.",ja:"もっと水を飲んだほうがいいですよ。",
    chunks:[{t:"You",r:"だれが／なにが",ja:"あなたは"},{t:"should",r:"気持ち・助け（助動詞）",ja:"〜したほうがいい"},{t:"drink",r:"どうする",ja:"飲む"},{t:"more water.",r:"だれを／なにを",ja:"もっと水を"}],
    point:"should のあとは to をつけず、drink をそのまま置きます。"},
   {en:"You don't have to pay today.",ja:"今日はお支払いいただかなくて大丈夫です。",
    chunks:[{t:"You",r:"だれが／なにが",ja:"あなたは"},{t:"don't have to",r:"気持ち・助け（助動詞）",ja:"〜しなくてよい"},{t:"pay",r:"どうする",ja:"払う"},{t:"today.",r:"いつ",ja:"今日"}],
    point:"don't have to は「しなくていい」。must not（してはいけない）とは意味がちがいます。"}
  ],
  quiz:[
   {q:"正しい文は？",opts:["She can speaks English.","She can speak English.","She can to speak English."],a:1,why:"can のあとは、もとの形（speak）です。s はつけません。"},
   {q:"「今日は払わなくていいですよ」に合うのは？",opts:["You must not pay today.","You don't have to pay today.","You should pay today."],a:1,why:"don't have to は「しなくていい」。must not は「してはいけない」になってしまいます。"},
   {q:"(　)に入るのは？　(　) I ask a question?（ていねいに許しをもらう）",opts:["May","Do","Am"],a:0,why:"May I 〜? は「〜してもよろしいですか」とていねいに許しをもらう言い方です。"}
  ],
  terms:["助動詞","動詞","疑問文"]
 },
 9:{
  one:"「〜があります」は There is（1つ）／There are（2つ以上）で始める。",
  image:"初めて来る患者さんに道案内をする場面です。「院のとなりにコンビニがありますよ」と、相手がまだ知らない物を紹介するときの決まった入り口が There is / There are です。",
  ja:"日本語は「院のとなりに コンビニが あります」と、場所が先です。英語は『ある（There is）→ 何が → どこに』の順で、場所は最後です。また、相手が知っている決まった物（my clinic など）は There is を使わず「My clinic is 〜」と言います。",
  when:["院のまわりや道を案内するとき","部屋にある物・設備を説明するとき（ベッドが3台あります）","「〜はありますか？」とたずねるとき（駐車場はありますか）"],
  steps:["①紹介したい物が1つなら There is、2つ以上なら There are を置く","②そのあとに、ある物（a convenience store、three beds）を置く","③最後に場所（next to my clinic、in the room）を置く","④たずねるときは Is there / Are there、打ち消しは There isn't / There aren't any"],
  parts:[
   {en:"There is a convenience store next to my clinic.",ja:"院のとなりにコンビニがあります。",
    chunks:[{t:"There is",r:"です・いる（be動詞）",ja:"〜がある"},{t:"a convenience store",r:"だれが／なにが",ja:"コンビニが"},{t:"next to my clinic.",r:"どこで／どこに",ja:"院のとなりに"}],
    point:"コンビニは1つなので There is。場所は最後です。"},
   {en:"There are three beds in the treatment room.",ja:"施術室にはベッドが3台あります。",
    chunks:[{t:"There are",r:"です・いる（be動詞）",ja:"〜がある"},{t:"three beds",r:"だれが／なにが",ja:"ベッドが3台"},{t:"in the treatment room.",r:"どこで／どこに",ja:"施術室に"}],
    point:"ベッドは3台（2つ以上）なので There are。beds と s もつきます。"},
   {en:"The clinic is on the second floor.",ja:"院は2階にあります。",
    chunks:[{t:"The clinic",r:"だれが／なにが",ja:"院は"},{t:"is",r:"です・いる（be動詞）",ja:"ある"},{t:"on the second floor.",r:"どこで／どこに",ja:"2階に"}],
    point:"相手が知っている決まった物の場所は、There ではなく「物 ＋ is ＋ 場所」です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　There (　) three beds in the room.",opts:["is","are","be"],a:1,why:"ベッドは3台で2つ以上なので are です。"},
   {q:"正しい文は？「院は駅の近くにあります。」",opts:["There is my clinic near the station.","My clinic is near the station.","My clinic there is near the station."],a:1,why:"my clinic は決まった物なので、There を使わず「My clinic is ＋ 場所」で言います。"},
   {q:"(　)に入るのは？　(　) there a parking lot?",opts:["Is","Are","Do"],a:0,why:"駐車場は1つなので Is there 〜? でたずねます。"}
  ],
  terms:["be動詞","前置詞","複数形","疑問文","否定文"]
 },
 10:{
  one:"比べるときは「〜er than」、いちばんは「the 〜est」で言う。",
  image:"料金表を並べて患者さんに説明する場面です。「こちらの方が安い」「このコースがいちばん人気」と、比べてすすめますね。短い言葉には er / est というしっぽをつけ、長い言葉には前に more / most という旗を立てます。",
  ja:"日本語は「このプランは 前のものより 安い です」と、「より」が真ん中です。英語は『比べる物 → is → 安い（cheaper）→ than ＋ 比べる相手』の順で、比べる相手は最後に来ます。",
  when:["料金やプランを比べて説明するとき","いちばん人気・いちばん大切なものを伝えるとき","「同じくらい」「〜ほどではない」と言うとき"],
  steps:["①比べる物（主語）と is を置く","②短い言葉は er（cheap → cheaper）、長い言葉は more（more popular）にする","③比べる相手は than のあとに置く","④いちばんは the 〜est ／ the most 〜。同じくらいは as 〜 as"],
  parts:[
   {en:"This plan is cheaper than the old one.",ja:"このプランは前のものより安いです。",
    chunks:[{t:"This plan",r:"だれが／なにが",ja:"このプランは"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"cheaper",r:"どんな",ja:"より安い"},{t:"than the old one.",r:"くわしく（説明の部分）",ja:"前のものより"}],
    point:"cheap は短い言葉なので er をつけて cheaper。more はいりません。"},
   {en:"The standard plan is the most popular.",ja:"スタンダードプランがいちばん人気です。",
    chunks:[{t:"The standard plan",r:"だれが／なにが",ja:"スタンダードプランは"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"the most popular.",r:"どんな",ja:"いちばん人気"}],
    point:"popular は長い言葉なので the most を前に置きます。the を忘れずに。"},
   {en:"Plan A is not as expensive as Plan B.",ja:"AプランはBプランほど高くありません。",
    chunks:[{t:"Plan A",r:"だれが／なにが",ja:"Aプランは"},{t:"is not",r:"です・いる（be動詞）",ja:"〜ではない"},{t:"as expensive",r:"どんな",ja:"同じくらい高い"},{t:"as Plan B.",r:"くわしく（説明の部分）",ja:"Bプランと"}],
    point:"not as 〜 as は「〜ほど…ない」。言葉の形は変えずにそのまま使います。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　This plan is (　) than that one.",opts:["more cheap","cheaper","cheapest"],a:1,why:"cheap は短い言葉なので er をつけます。than があるので「より〜」の形です。"},
   {q:"(　)に入るのは？　Your English is (　) than mine.",opts:["more good","gooder","better"],a:2,why:"good は特別な言葉で、比べる形は better です。"},
   {q:"正しい文は？「これがいちばん人気のコースです。」",opts:["This is most popular course.","This is the most popular course.","This is more popular course."],a:1,why:"「いちばん」は the most。the が必要です。"}
  ],
  terms:["比較級","最上級","形容詞"]
 },
 11:{
  one:"「〜すること」「〜するために」は to ＋ 動きの言葉、または 〜ing で言う。",
  image:"動きの言葉に to や ing をつけると、「動き」が「物」のようにまとまって、文の中で荷物のように運べるようになります。「英語を勉強する」を「英語を勉強すること」という1つの箱にするイメージです。",
  ja:"日本語は「〜すること」「〜するために」を最後につけます。英語は to や ing を前（またはしっぽ）につけて、『だれが → どうする → 何を』の「何を」の場所や、文の最後の「なぜ（目的）」の場所に入れます。",
  when:["したいこと・目標を言うとき（スピーキングを上達させたい）","好きなこと・楽しんでいることを言うとき（朝の散歩を楽しんでいます）","何のためにしているか（目的）を言うとき（インドの取引先と働くために勉強しています）"],
  steps:["①ふつうの文『だれが → どうする』を作る","②want / hope / decide のあとは to ＋ もとの形","③enjoy / keep / stop のあとは 〜ing","④「〜するために」は、文の最後に to ＋ もとの形 を足す"],
  parts:[
   {en:"I want to improve my speaking.",ja:"スピーキングを上達させたいです。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"want",r:"どうする",ja:"したい（望む）"},{t:"to improve my speaking.",r:"だれを／なにを",ja:"スピーキングを上達させることを"}],
    point:"want のあとは to ＋ もとの形。to improve 〜 が「何を」にあたります。"},
   {en:"I enjoy walking in the morning.",ja:"朝の散歩を楽しんでいます。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"enjoy",r:"どうする",ja:"楽しむ"},{t:"walking",r:"だれを／なにを",ja:"歩くことを"},{t:"in the morning.",r:"いつ",ja:"朝に"}],
    point:"enjoy のあとは ing の形。enjoy to walk とは言いません。"},
   {en:"I study English to work with partners in India.",ja:"インドの取引先と仕事をするために英語を勉強しています。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"study",r:"どうする",ja:"勉強する"},{t:"English",r:"だれを／なにを",ja:"英語を"},{t:"to work with partners in India.",r:"なぜ",ja:"インドの取引先と仕事をするために"}],
    point:"文の最後の to 〜 は「〜するために」という目的（なぜ）を表します。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I enjoy (　) in the morning.",opts:["to walk","walking","walk"],a:1,why:"enjoy のあとは ing の形です。"},
   {q:"正しい文は？「取引先と話すために英語を勉強しています。」",opts:["I study English for talk with my partners.","I study English to talk with my partners.","I study English talking with my partners."],a:1,why:"「〜するために」は to ＋ もとの形です。for のあとに動きの言葉をそのまま置けません。"},
   {q:"(　)に入るのは？　I want (　) my speaking.",opts:["improving","to improve","improve"],a:1,why:"want のあとは to ＋ もとの形です。"}
  ],
  terms:["不定詞","動名詞","動詞","目的語"]
 },
 12:{
  one:"have / has ＋ 動きの言葉の「済み」の形で、昔から今までをつなぐ。",
  image:"開業からの院の歩みを、一本の線で今まで引くイメージです。過去の形は「昔の1点」だけを指しますが、have ＋ 済みの形は「昔から今まで続いている線」や「今までの経験の数」を表します。",
  ja:"日本語には、この「今までの線」を表す決まった形がありません。「行ったことがある」「ずっと住んでいる」「ちょうど終わった」と言い方を変えます。英語は『だれが』のあとに have / has を置き、続けて動きの言葉の「済み」の形（been・worked・finished）を置きます。",
  when:["経験を話すとき（デリーに1度行ったことがあります）","昔から今まで続いていることを話すとき（2010年からバンガロールに住んでいる）","ちょうど終わったこと・まだ終わっていないことを伝えるとき"],
  steps:["①だれが（主語）を決める","②自分と相手以外の1人・1つなら has、それ以外は have を置く","③動きの言葉を「済み」の形（過去分詞：動きの言葉が「済んだ」ことを表す形）にする：work → worked、go → been / gone","④期間は for 〜（〜の間）、始まった時は since 〜（〜から）。yesterday など終わった時の言葉は使わない"],
  parts:[
   {en:"I have been to Delhi once.",ja:"デリーには1度行ったことがあります。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"have been",r:"どうする",ja:"行ったことがある"},{t:"to Delhi",r:"どこで／どこに",ja:"デリーに"},{t:"once.",r:"どのくらい",ja:"1度"}],
    point:"「行ったことがある」は have been to 〜 で言います。"},
   {en:"Raj has lived in Bangalore since 2010.",ja:"ラージさんは2010年からバンガロールに住んでいます。",
    chunks:[{t:"Raj",r:"だれが／なにが",ja:"ラージさんは"},{t:"has lived",r:"どうする",ja:"（ずっと）住んでいる"},{t:"in Bangalore",r:"どこで／どこに",ja:"バンガロールに"},{t:"since 2010.",r:"いつ",ja:"2010年から"}],
    point:"Raj は1人なので has。始まった年は since で言います。"},
   {en:"I haven't received the contract yet.",ja:"まだ契約書を受け取っていません。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"haven't received",r:"どうする",ja:"受け取っていない"},{t:"the contract",r:"だれを／なにを",ja:"契約書を"},{t:"yet.",r:"いつ",ja:"まだ"}],
    point:"打ち消しは haven't。文の最後の yet で「まだ」になります。"}
  ],
  quiz:[
   {q:"正しい文は？「去年インドに行きました。」",opts:["I have been to India last year.","I went to India last year.","I have went to India last year."],a:1,why:"last year（去年）は終わった時なので、ふつうの過去の形 went を使います。"},
   {q:"(　)に入るのは？　I have worked in Ehime (　) 2018.",opts:["from","since","for"],a:1,why:"「2018年から今まで」は since です。for は「〜の間（期間）」に使います。"},
   {q:"(　)に入るのは？　Raj (　) lived in Bangalore for many years.",opts:["have","has","is"],a:1,why:"Raj は自分と相手以外の1人なので has です。"}
  ],
  terms:["現在完了","過去分詞","過去形","3単現"]
 },
 13:{
  one:"「〜される・された」は、is / was などと「済み」の形で言う。",
  image:"ふつうの文は「する人」が主役、この形は「される物」が主役です。たとえば院のホームページの話をするとき、作った人より「ホームページ」を主役にしたいときに使います。カメラを「する人」から「される物」に向けかえるイメージです。",
  ja:"日本語でも「使われている」「話されている」と言いますが、英語は形がはっきり決まっています。『される物（だれが／なにが）→ is ＋ 済みの形 → だれによって（by 〜）→ どこで → いつ』の順です。第1期で学んだ語順の考え方は、ここでもそのまま使えます。",
  when:["物や場所の説明をするとき（院は駅の近くにあります）","だれがしたかより、物の方を伝えたいとき（この報告書は英語で書かれています）","「〜で使われている・話されている」と広く説明するとき"],
  steps:["①主役（される物）を主語にする","②今なら am / is / are、過去なら was / were を置く","③動きの言葉を「済み」の形（過去分詞）にする：use → used、make → made","④だれがしたかを言いたいときは、最後に by ＋ 人"],
  parts:[
   {en:"This report was written in English.",ja:"この報告書は英語で書かれています。",
    chunks:[{t:"This report",r:"だれが／なにが",ja:"この報告書は"},{t:"was written",r:"どうする",ja:"書かれた"},{t:"in English.",r:"どのように",ja:"英語で"}],
    point:"write の「済み」の形は written。だれが書いたかを言いたいときは、最後に by ＋ 人をつけます。"},
   {en:"My clinic is located in Ozu.",ja:"私の院は大洲にあります。",
    chunks:[{t:"My clinic",r:"だれが／なにが",ja:"私の院は"},{t:"is located",r:"どうする",ja:"位置している"},{t:"in Ozu.",r:"どこで／どこに",ja:"大洲に"}],
    point:"「〜にある」は is located で言えます。locates とは言いません。"},
   {en:"English is spoken in many countries.",ja:"英語は多くの国で話されています。",
    chunks:[{t:"English",r:"だれが／なにが",ja:"英語は"},{t:"is spoken",r:"どうする",ja:"話されている"},{t:"in many countries.",r:"どこで／どこに",ja:"多くの国で"}],
    point:"話す人ではなく「英語」が主役なので、is ＋ spoken の形です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　This tea was (　) in Japan.",opts:["make","made","making"],a:1,why:"was のあとは「済み」の形（過去分詞）。make は made で、「日本で作られた」になります。"},
   {q:"正しい文は？「私の院は駅の近くにあります。」",opts:["My clinic locates near the station.","My clinic is located near the station.","My clinic located near the station."],a:1,why:"is ＋ located の形が必要です。is がないと文になりません。"},
   {q:"(　)に入るのは？　The new page will (　) launched next month.",opts:["is","be","been"],a:1,why:"will のあとは、もとの形の be。「will be ＋ 済みの形」で「〜される予定」です。"}
  ],
  terms:["受動態","過去分詞","be動詞","主語"]
 }
});
