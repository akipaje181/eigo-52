/* ひとこと英語（「これ英語で？」）
   日本語でよく言うひとことを、場面に合った自然な英語で。1つの日本語に言い方が2〜3通り。
   hl＝その文のいちばん大事な語句（黄色の線を引く）、nu＝どんなときに使うか */
window.HITOKOTO=[
 // ---- 日常のひとこと ----
 {id:1,tag:"日常",ja:"もったいない",scene:"まだ食べられるものを捨てそうなとき",ans:[
  {en:"It's a waste.",hl:"waste",nu:"いちばん広く使える。迷ったらこれ"},
  {en:"Don't throw it away. It's still good.",hl:"throw it away",nu:"「捨てないで、まだ大丈夫」と止めるとき"},
  {en:"What a waste of time!",hl:"waste of",nu:"時間やお金がもったいないとき。waste of ＋もの"}],
  tip:"「もったいない」に1語でぴったりの英語はありません。何がもったいないのかを言うのがコツです。"},
 {id:2,tag:"日常",ja:"とりあえず",scene:"まず何かを始めるとき",ans:[
  {en:"For now, let's start with this.",hl:"For now",nu:"「今のところは」。いちばん使いやすい"},
  {en:"Let's just try it first.",hl:"just try it first",nu:"「まずやってみよう」"},
  {en:"I'll have a beer to start.",hl:"to start",nu:"お店で「とりあえずビール」"}],
  tip:"「とりあえず」は場面で変わります。今のところ＝for now、まず＝first。"},
 {id:3,tag:"日常",ja:"なるほど",scene:"相手の説明がわかったとき",ans:[
  {en:"I see.",hl:"I see",nu:"いちばん基本。軽くうなずく感じ"},
  {en:"That makes sense.",hl:"makes sense",nu:"「筋が通っている、納得」。ビジネスでよく使う"},
  {en:"Oh, I get it now.",hl:"get it",nu:"「やっとわかった」。くだけた言い方"}],
  tip:"I see ばかりだと単調になります。That makes sense. を足すと、ぐっと自然に聞こえます。"},
 {id:4,tag:"日常",ja:"微妙",scene:"よくも悪くもないとき",ans:[
  {en:"It's so-so.",hl:"so-so",nu:"「まあまあ」"},
  {en:"I'm not sure about it.",hl:"not sure about",nu:"「ちょっとどうかな」とやわらかく否定"},
  {en:"It's not bad, but not great.",hl:"not bad, but not great",nu:"「悪くないけど、すごくもない」"}],
  tip:"はっきり「よくない」と言いにくいときは I'm not sure about it. が便利です。"},
 {id:5,tag:"日常",ja:"意味ない",scene:"やっても効果がないとき",ans:[
  {en:"It's pointless.",hl:"pointless",nu:"「やる意味がない」"},
  {en:"There's no point in waiting.",hl:"no point in",nu:"no point in ＋ ing で「〜しても意味がない」"},
  {en:"It doesn't make any difference.",hl:"make any difference",nu:"「やってもやらなくても同じ」"}],
  tip:"meaningless は「言葉の意味がない」に近いので、ふだんは pointless／no point を使います。"},
 {id:6,tag:"日常",ja:"裏表逆だよ",scene:"服を裏返しに着ている人に",ans:[
  {en:"Your shirt is inside out.",hl:"inside out",nu:"裏返し"},
  {en:"Your shirt is on backwards.",hl:"backwards",nu:"前と後ろが逆"},
  {en:"That's upside down.",hl:"upside down",nu:"上下が逆（写真や紙など）"}],
  tip:"逆にも3種類あります。裏返し inside out、前後 backwards、上下 upside down。"},
 {id:7,tag:"日常",ja:"勘違いしてた",scene:"思いちがいに気づいたとき",ans:[
  {en:"I misunderstood.",hl:"misunderstood",nu:"「誤解していた」。ていねい"},
  {en:"Oh, I thought it was tomorrow.",hl:"I thought",nu:"I thought ＋文 で「〜だと思っていた（ちがった）」"},
  {en:"My mistake. I got it wrong.",hl:"got it wrong",nu:"「私のまちがいです」"}],
  tip:"I thought 〜. は「そう思っていたけど、ちがった」という意味がこもります。とても便利です。"},
 {id:8,tag:"日常",ja:"せっかくだから",scene:"いい機会を生かしたいとき",ans:[
  {en:"Since we're here, let's try the local food.",hl:"Since we're here",nu:"「せっかく来たんだから」"},
  {en:"Let's make the most of it.",hl:"make the most of",nu:"「この機会を最大限に生かそう」"}],
  tip:"「せっかく」も1語の英語はありません。Since 〜（〜なんだから）で理由を言うと伝わります。"},
 {id:9,tag:"日常",ja:"さすが！",scene:"相手がやっぱりすごかったとき",ans:[
  {en:"I knew you could do it!",hl:"I knew",nu:"「あなたならできると思ってた」"},
  {en:"That's why you're the best.",hl:"That's why",nu:"「だからあなたは一番なんだ」"},
  {en:"Impressive!",hl:"Impressive",nu:"ひとことで「すごい」"}],
  tip:"「さすが」＝「やっぱり思ったとおりすごい」。I knew 〜 で「思ったとおり」を出します。"},
 {id:10,tag:"日常",ja:"ちょうどよかった",scene:"タイミングや量がぴったりのとき",ans:[
  {en:"Perfect timing!",hl:"Perfect timing",nu:"タイミングがぴったり"},
  {en:"This is just right.",hl:"just right",nu:"量・大きさ・温度などがちょうどいい"}],
  tip:"just right の just は「ぴったり」の意味です。"},
 {id:11,tag:"日常",ja:"やっぱり",scene:"思っていたとおりだったとき",ans:[
  {en:"I knew it!",hl:"I knew it",nu:"「やっぱりね！」"},
  {en:"Just as I thought.",hl:"as I thought",nu:"「思ったとおりだ」"},
  {en:"Actually, I'll have the coffee.",hl:"Actually",nu:"「やっぱりコーヒーにします」と考えを変えるとき"}],
  tip:"「やっぱり」には「思ったとおり」と「考えを変える」の2つがあります。変えるときは Actually。"},
 {id:12,tag:"日常",ja:"まあいいか",scene:"小さなことを気にしないとき",ans:[
  {en:"Oh well.",hl:"Oh well",nu:"「まあ、しょうがない」"},
  {en:"It's not a big deal.",hl:"not a big deal",nu:"「たいしたことじゃない」"}],
  tip:"相手に言うときは It's no big deal.（気にしないで）もよく使います。"},
 {id:13,tag:"日常",ja:"しょうがない",scene:"どうにもならないとき",ans:[
  {en:"It can't be helped.",hl:"can't be helped",nu:"「どうしようもない」"},
  {en:"It is what it is.",hl:"It is what it is",nu:"「そういうものだ」。ネイティブがよく使う"}],
  tip:"It is what it is. は短くて言いやすく、気持ちを切りかえるときにぴったりです。"},
 {id:14,tag:"日常",ja:"どうしよう",scene:"困ったとき",ans:[
  {en:"What should I do?",hl:"should I do",nu:"本当にどうすればいいか聞くとき"},
  {en:"Oh no, what do I do now?",hl:"what do I do now",nu:"あせっているとき"}],
  tip:"相手にアドバイスがほしいときは What would you do?（あなたならどうする？）も使えます。"},
 {id:15,tag:"日常",ja:"久しぶり！",scene:"しばらくぶりに会ったとき",ans:[
  {en:"Long time no see!",hl:"Long time no see",nu:"くだけたあいさつ"},
  {en:"It's been a while!",hl:"been a while",nu:"いちばん自然で、仕事でも使える"},
  {en:"It's good to see you again.",hl:"good to see you again",nu:"ていねい"}],
  tip:"取引先には It's been a while. How have you been? がおすすめです。"},
 {id:16,tag:"日常",ja:"いただきます",scene:"食事の前",ans:[
  {en:"Let's eat!",hl:"Let's eat",nu:"みんなで食べ始めるとき"},
  {en:"This looks delicious!",hl:"looks delicious",nu:"作ってくれた人に向けて"}],
  tip:"英語に「いただきます」はありません。料理をほめるひとことが、その代わりになります。"},
 {id:17,tag:"日常",ja:"ごちそうさまでした",scene:"食事のあと・ごちそうになったとき",ans:[
  {en:"That was delicious. Thank you.",hl:"That was delicious",nu:"食べ終わったとき"},
  {en:"Thank you for the wonderful dinner.",hl:"Thank you for",nu:"ごちそうになったとき"}],
  tip:"インドでごちそうになったら、料理の名前を入れてほめると、とても喜ばれます。"},

 // ---- 院での一言 ----
 {id:18,tag:"院",ja:"お大事に",scene:"患者さんが帰るとき",ans:[
  {en:"Take care.",hl:"Take care",nu:"いちばん自然"},
  {en:"I hope you feel better soon.",hl:"feel better soon",nu:"「早くよくなりますように」"}],
  tip:"Take care. のあとに See you next week. を足すと、次の予約にもつながります。"},
 {id:19,tag:"院",ja:"無理しないでね",scene:"がんばりすぎている人に",ans:[
  {en:"Don't push yourself too hard.",hl:"push yourself",nu:"「がんばりすぎないで」"},
  {en:"Take it easy.",hl:"Take it easy",nu:"「気楽にね」。軽い言い方"}],
  tip:"Don't work too hard. も同じ意味で、あいさつのように使えます。"},
 {id:20,tag:"院",ja:"どうされましたか？",scene:"患者さんに来院の理由を聞く",ans:[
  {en:"What brings you here today?",hl:"What brings you",nu:"ていねいで自然。医療の場でよく使う"},
  {en:"How can I help you today?",hl:"How can I help",nu:"やさしい言い方"}],
  tip:"What's wrong with you? は「あなた、どこかおかしいの？」と聞こえることがあるので使いません。"},
 {id:21,tag:"院",ja:"どこが痛いですか？",scene:"痛い場所を聞く",ans:[
  {en:"Where does it hurt?",hl:"does it hurt",nu:"いちばん基本"},
  {en:"Can you show me where it hurts?",hl:"show me where",nu:"指でさしてもらうとき"}],
  tip:"hurt は「痛む」。It hurts here.（ここが痛い）と患者さんも言います。"},
 {id:22,tag:"院",ja:"肩がこっています",scene:"肩のはりを伝える",ans:[
  {en:"Your shoulders are very stiff.",hl:"stiff",nu:"「こっている、かたい」"},
  {en:"You have a lot of tension in your shoulders.",hl:"tension",nu:"「はりがある」"}],
  tip:"「肩こり」は英語では stiff shoulders。首なら stiff neck です。"},
 {id:23,tag:"院",ja:"力を抜いてください",scene:"施術中に",ans:[
  {en:"Please relax.",hl:"relax",nu:"いちばん基本"},
  {en:"Let your arm go loose.",hl:"go loose",nu:"「腕をだらんとさせて」"}],
  tip:"Take a deep breath.（深呼吸して）と一緒に言うと、力が抜けやすくなります。"},
 {id:24,tag:"院",ja:"痛かったら言ってください",scene:"施術を始める前に",ans:[
  {en:"Let me know if it hurts.",hl:"Let me know if",nu:"いちばん自然"},
  {en:"Tell me if it's too strong.",hl:"too strong",nu:"「強すぎたら教えて」"}],
  tip:"Let me know 〜（〜なら教えて）は院でも仕事でも何度も使う形です。"},
 {id:25,tag:"院",ja:"様子を見ましょう",scene:"すぐに結論を出さないとき",ans:[
  {en:"Let's wait and see.",hl:"wait and see",nu:"「待って様子を見よう」"},
  {en:"Let's see how it goes for a week.",hl:"see how it goes",nu:"期間をつけて言うとき"}],
  tip:"仕事の話でも Let's see how it goes.（様子を見ましょう）はよく使います。"},
 {id:26,tag:"院",ja:"だいぶよくなりましたね",scene:"患者さんの回復を伝える",ans:[
  {en:"You're getting much better.",hl:"getting much better",nu:"「よくなってきている」"},
  {en:"Your back looks a lot better than last time.",hl:"a lot better than",nu:"前回とくらべて"}],
  tip:"much／a lot は比べる言葉（better）を強めます。「ずっと」「だいぶ」の感じです。"},
 {id:27,tag:"院",ja:"お待たせしました",scene:"待ってもらったあと",ans:[
  {en:"Thank you for waiting.",hl:"Thank you for waiting",nu:"ていねいでやわらかい"},
  {en:"Sorry to keep you waiting.",hl:"keep you waiting",nu:"長く待たせたとき"}],
  tip:"日本語の「お待たせしました」は、英語ではお礼（Thank you）にするのが自然です。"},
 {id:28,tag:"院",ja:"お疲れさまです",scene:"スタッフに声をかける",ans:[
  {en:"Good job today.",hl:"Good job",nu:"仕事の終わりに"},
  {en:"Thanks for your hard work.",hl:"hard work",nu:"「がんばってくれてありがとう」"},
  {en:"Hi! How's it going?",hl:"How's it going",nu:"すれちがうときのあいさつ"}],
  tip:"「お疲れさま」はあいさつにもお礼にもなります。英語では場面で使い分けます。"},

 // ---- 仕事・商談 ----
 {id:29,tag:"仕事",ja:"よろしくお願いします",scene:"初めて会ったとき",ans:[
  {en:"Nice to meet you.",hl:"Nice to meet you",nu:"初対面のあいさつ"},
  {en:"I look forward to working with you.",hl:"look forward to working",nu:"「一緒に仕事するのを楽しみにしています」"}],
  tip:"「よろしく」は1つの英語にできません。会ったとき・頼むとき・メールの最後で変わります。"},
 {id:30,tag:"仕事",ja:"よろしくお願いします（頼むとき）",scene:"相手に何かをお願いしたあと",ans:[
  {en:"Thank you in advance.",hl:"in advance",nu:"「前もってお礼を言います」"},
  {en:"I appreciate your help.",hl:"appreciate",nu:"「助けてもらってありがたい」"}],
  tip:"メールの最後なら Best regards, で終えるのがふつうです。"},
 {id:31,tag:"仕事",ja:"お世話になっております",scene:"メールや電話の最初",ans:[
  {en:"I hope you're doing well.",hl:"doing well",nu:"メールの最初の定番"},
  {en:"Thank you for your continued support.",hl:"continued support",nu:"「いつもありがとうございます」"}],
  tip:"英語のメールは、あいさつ1行のあとすぐ用件に入るのがふつうです。"},
 {id:32,tag:"仕事",ja:"了解です",scene:"相手の話を受けたとき",ans:[
  {en:"Got it.",hl:"Got it",nu:"くだけた言い方。チャットでよく使う"},
  {en:"Sounds good.",hl:"Sounds good",nu:"「いいですね、それで」"},
  {en:"Understood.",hl:"Understood",nu:"ていねい。仕事のメールで"}],
  tip:"Got it. は目上の人には少しくだけすぎることも。迷ったら Sounds good. を。"},
 {id:33,tag:"仕事",ja:"考えておきます",scene:"すぐに返事ができないとき",ans:[
  {en:"Let me think about it.",hl:"think about it",nu:"いちばん自然"},
  {en:"Can I get back to you on that?",hl:"get back to you",nu:"「あとで返事してもいい？」"}],
  tip:"日本語の「考えておきます」は断りのことも多いですが、英語では本当に考えると受け取られます。"},
 {id:34,tag:"仕事",ja:"念のため",scene:"確認したいとき",ans:[
  {en:"Just to be sure, the meeting is at 3, right?",hl:"Just to be sure",nu:"念のため確認"},
  {en:"Just in case, I'll send it again.",hl:"Just in case",nu:"「万一にそなえて」"}],
  tip:"確認なら Just to be sure、そなえなら Just in case。"},
 {id:35,tag:"仕事",ja:"確認して折り返します",scene:"すぐに答えられないとき",ans:[
  {en:"Let me check and get back to you.",hl:"get back to you",nu:"いちばんよく使う"},
  {en:"I'll check and call you back.",hl:"call you back",nu:"電話のとき"}],
  tip:"わからないことをその場で答えない。これが英語の商談で信頼される一番のコツです。"},
 {id:36,tag:"仕事",ja:"ちょっと待ってください",scene:"少しだけ時間がほしいとき",ans:[
  {en:"Just a moment, please.",hl:"Just a moment",nu:"ていねい"},
  {en:"Give me a second.",hl:"Give me a second",nu:"くだけた言い方"},
  {en:"Could you hold on a moment?",hl:"hold on",nu:"電話で"}],
  tip:"Wait! は強く聞こえることがあります。ていねいに言うときは Just a moment。"},
 {id:37,tag:"仕事",ja:"もう一度言ってもらえますか？",scene:"聞き取れなかったとき",ans:[
  {en:"Sorry, could you say that again?",hl:"say that again",nu:"いちばん使いやすい"},
  {en:"Could you speak a little more slowly?",hl:"more slowly",nu:"「もう少しゆっくり」"},
  {en:"Sorry, I didn't catch that.",hl:"didn't catch",nu:"「聞き取れなかった」"}],
  tip:"聞き返すのは失礼ではありません。わかったふりのほうが、あとで困ります。"},
 {id:38,tag:"仕事",ja:"つまり〜ということですか？",scene:"相手の話を確かめるとき",ans:[
  {en:"So you mean we should wait?",hl:"So you mean",nu:"「つまり〜ということ？」"},
  {en:"Let me make sure I understand.",hl:"make sure I understand",nu:"「理解が合っているか確かめさせて」"}],
  tip:"自分のことばで言い直して確かめると、まちがいが減り、ちゃんと聞いていることも伝わります。"},
 {id:39,tag:"仕事",ja:"いい質問ですね",scene:"すぐ答えにくい質問をされたとき",ans:[
  {en:"That's a good question.",hl:"good question",nu:"考える時間をかせげる"},
  {en:"Let me think for a second.",hl:"think for a second",nu:"「少し考えさせて」"}],
  tip:"英語で黙ってしまうより、このひとことで間をつなぐのがコツです。"},
 {id:40,tag:"仕事",ja:"おっしゃるとおりです",scene:"相手に賛成するとき",ans:[
  {en:"You're right.",hl:"You're right",nu:"いちばん基本"},
  {en:"I totally agree.",hl:"totally agree",nu:"「まったく同感」"},
  {en:"That's a good point.",hl:"good point",nu:"「いいところをついている」"}],
  tip:"That's a good point. は、賛成しきれないときにもまず相手を認める一言として使えます。"},
 {id:41,tag:"仕事",ja:"それはちょっと難しいです",scene:"やんわり断るとき",ans:[
  {en:"I'm afraid that might be difficult.",hl:"I'm afraid",nu:"ていねいに断る定番"},
  {en:"I'm not sure we can do that.",hl:"not sure we can",nu:"やわらかい"}],
  tip:"I'm afraid 〜 は「残念ながら〜」。悪い知らせをやわらかくします。"},
 {id:42,tag:"仕事",ja:"検討します",scene:"提案を受けたとき",ans:[
  {en:"We'll consider it.",hl:"consider",nu:"「検討します」"},
  {en:"Let me discuss it with my team.",hl:"discuss it with",nu:"「チームと相談します」"}],
  tip:"いつまでに返事をするかも言うと、ぐっと信頼されます。例：by Friday。"},
 {id:43,tag:"仕事",ja:"お手すきのときに",scene:"急がないお願い",ans:[
  {en:"When you have time, could you check this?",hl:"When you have time",nu:"いちばん自然"},
  {en:"No rush.",hl:"No rush",nu:"「急ぎません」"}],
  tip:"No rush. を足すと、相手の気持ちが楽になります。"},
 {id:44,tag:"仕事",ja:"遅れてすみません",scene:"遅れて着いたとき・返事が遅れたとき",ans:[
  {en:"Sorry I'm late.",hl:"I'm late",nu:"着いたとき"},
  {en:"Sorry for the late reply.",hl:"late reply",nu:"返事が遅れたとき"}],
  tip:"お礼にかえる言い方も人気です：Thank you for your patience.（待ってくれてありがとう）"},
 {id:45,tag:"仕事",ja:"助かります",scene:"手伝ってもらったとき",ans:[
  {en:"That really helps.",hl:"really helps",nu:"「本当に助かる」"},
  {en:"You saved me!",hl:"saved me",nu:"「おかげで助かった」。くだけた言い方"}],
  tip:"日本語の「助かります」はお礼です。英語でも Thank you と一緒に言います。"},
 {id:46,tag:"仕事",ja:"いかがでしたか？",scene:"感想を聞くとき",ans:[
  {en:"How was it?",hl:"How was",nu:"いちばん基本"},
  {en:"What did you think of the treatment?",hl:"What did you think of",nu:"「〜をどう思いましたか」"}],
  tip:"How did you like it? も「気に入りましたか」の意味でよく使います。"},
 {id:47,tag:"仕事",ja:"今回は見送ります",scene:"取引を断るとき",ans:[
  {en:"We'll pass this time.",hl:"pass this time",nu:"「今回はやめておきます」"},
  {en:"It's not a good fit for us right now.",hl:"good fit",nu:"「今の私たちには合わない」"}],
  tip:"this time や right now を入れると「次はあるかも」という気持ちが伝わります。"},
 {id:48,tag:"仕事",ja:"お先に失礼します",scene:"先に帰るとき",ans:[
  {en:"I'm heading out. See you tomorrow.",hl:"heading out",nu:"「もう出ます」"},
  {en:"I have to go now. Have a good evening.",hl:"have to go",nu:"ていねい"}],
  tip:"英語では「失礼」より「よい夜を」のように相手を気づかう一言で終えます。"},

 // ---- インドの方と ----
 {id:49,tag:"インド",ja:"大丈夫です（いりません）",scene:"すすめられたけど、いらないとき",ans:[
  {en:"I'm good, thank you.",hl:"I'm good",nu:"「けっこうです」。やわらかい"},
  {en:"No, thank you. I'm full.",hl:"I'm full",nu:"「おなかいっぱいです」"}],
  tip:"「大丈夫」は Yes にも No にも聞こえるので、英語では I'm good, thank you. とはっきり。"},
 {id:50,tag:"インド",ja:"辛さ控えめでお願いします",scene:"インドのレストランで",ans:[
  {en:"Less spicy, please.",hl:"Less spicy",nu:"いちばん短い"},
  {en:"Can you make it mild?",hl:"mild",nu:"「マイルドにしてもらえますか」"}],
  tip:"インドでは not spicy と言っても少しは辛いことが多いです。very mild とたのむと安心です。"},
 {id:51,tag:"インド",ja:"ぜひ日本に来てください",scene:"お別れのときに",ans:[
  {en:"Please come visit Japan sometime.",hl:"come visit",nu:"自然なさそい"},
  {en:"I'd love to show you around Ehime.",hl:"show you around",nu:"「愛媛を案内したい」"}],
  tip:"show 人 around（人を案内する）は、おもてなしの仕事でよく使います。"},
 {id:52,tag:"インド",ja:"それ、どういう意味ですか？",scene:"知らない言葉が出てきたとき",ans:[
  {en:"What does that mean?",hl:"What does that mean",nu:"いちばん基本"},
  {en:"Sorry, what does \"prepone\" mean?",hl:"what does",nu:"言葉を入れて聞く"}],
  tip:"prepone（予定を早める）など、インドの英語にしかない言葉もあります。どんどん聞きましょう。"},
 {id:53,tag:"インド",ja:"時間どおりに着きます",scene:"約束の確認",ans:[
  {en:"I'll be there on time.",hl:"on time",nu:"「時間どおりに」"},
  {en:"I might be about ten minutes late.",hl:"ten minutes late",nu:"遅れそうなときは前もって"}],
  tip:"in time は「間に合って」、on time は「時間ぴったりに」です。"},
 {id:54,tag:"インド",ja:"楽しみにしています",scene:"次に会う予定があるとき",ans:[
  {en:"I'm looking forward to it.",hl:"looking forward to",nu:"いちばん自然"},
  {en:"I can't wait!",hl:"can't wait",nu:"「待ちきれない」。くだけた言い方"}],
  tip:"looking forward to のあとは名詞か ing。to see you のように to のあとに動詞の原形は×、seeing you。"},
 {id:55,tag:"インド",ja:"おかげさまで",scene:"元気？と聞かれたとき",ans:[
  {en:"I'm doing well, thank you.",hl:"doing well",nu:"「元気です、ありがとう」"},
  {en:"Things are going well, thanks to you.",hl:"thanks to you",nu:"本当に相手のおかげのとき"}],
  tip:"thanks to you は本当に相手が助けてくれたときに。ふだんは thank you だけで大丈夫です。"},
 {id:56,tag:"インド",ja:"せっかく来てくれたのに",scene:"相手が来たのに用意ができていないとき",ans:[
  {en:"I'm sorry, after you came all this way.",hl:"came all this way",nu:"「遠くまで来てくれたのに」"},
  {en:"Thank you for coming all this way.",hl:"all this way",nu:"「遠くまでありがとう」"}],
  tip:"all this way は「はるばる」。遠くから来た人へのお礼にぴったりです。"},
 {id:57,tag:"インド",ja:"気にしないで",scene:"相手があやまってきたとき",ans:[
  {en:"Don't worry about it.",hl:"Don't worry about it",nu:"いちばん自然"},
  {en:"No problem at all.",hl:"No problem",nu:"「まったく問題ないですよ」"}],
  tip:"インドの方は No problem をとてもよく使います。返すときも同じでOKです。"},
 {id:58,tag:"インド",ja:"何でも聞いてください",scene:"説明のあとに",ans:[
  {en:"Feel free to ask me anything.",hl:"Feel free to",nu:"「遠慮なく〜して」"},
  {en:"Any questions?",hl:"Any questions",nu:"短く聞くとき"}],
  tip:"Feel free to 〜 は「遠慮なく〜してください」。連絡でも Feel free to call me. と使えます。"},
 {id:59,tag:"インド",ja:"いい感じです",scene:"話や計画が順調なとき",ans:[
  {en:"It's going well.",hl:"going well",nu:"「うまくいっている」"},
  {en:"Looks good to me.",hl:"Looks good",nu:"資料や案を見て「いいね」"}],
  tip:"Looks good to me. は、チャットで LGTM と略されるほどよく使います。"},
 {id:60,tag:"インド",ja:"またお会いしましょう",scene:"お別れのとき",ans:[
  {en:"Let's keep in touch.",hl:"keep in touch",nu:"「連絡を取り合いましょう」"},
  {en:"Hope to see you again soon.",hl:"see you again",nu:"「また近いうちに」"}],
  tip:"WhatsApp でつながっているなら Let's stay in touch on WhatsApp. も自然です。"}
];

/* フレーズ集60（「言いたいのに出てこないをなくす英語フレーズ集60選」より・岩田さんが持ってきたPDF）
   相手（A）の言葉に、とっさに返す練習。q＝相手の言葉、ans[0]＝返事 */
window.HITOKOTO=window.HITOKOTO.concat([
 {"id": 101, "tag": "とっさの一言", "ja": "場合による", "phrase": "It depends.", "q": {"en": "Are you free this weekend?", "ja": "今週末、暇？"}, "ans": [{"en": "It depends. I might have to work.", "hl": "It depends", "nu": "場合によるかな。仕事かもしれない。"}]},
 {"id": 102, "tag": "とっさの一言", "ja": "そうでもない", "phrase": "Not really.", "q": {"en": "Do you like spicy food?", "ja": "辛い食べ物は好き？"}, "ans": [{"en": "Not really.", "hl": "Not really", "nu": "そうでもないかな。"}]},
 {"id": 103, "tag": "とっさの一言", "ja": "まあそんな感じ", "phrase": "Kind of.", "q": {"en": "Are you busy these days?", "ja": "最近忙しい？"}, "ans": [{"en": "Kind of.", "hl": "Kind of", "nu": "まあそんな感じかな。"}]},
 {"id": 104, "tag": "とっさの一言", "ja": "たぶんそうかな", "phrase": "I guess so.", "q": {"en": "Did he mean yes?", "ja": "彼、OK ってこと？"}, "ans": [{"en": "I guess so.", "hl": "I guess so", "nu": "たぶんそうかな。"}]},
 {"id": 105, "tag": "とっさの一言", "ja": "今のところ", "phrase": "For now.", "q": {"en": "Are you staying in Osaka?", "ja": "大阪に住んでいるの？"}, "ans": [{"en": "For now.", "hl": "For now", "nu": "今のところはね。"}]},
 {"id": 106, "tag": "とっさの一言", "ja": "今のところ順調", "phrase": "So far, so good.", "q": {"en": "How's your new job?", "ja": "新しい仕事どう？"}, "ans": [{"en": "So far, so good.", "hl": "So far, so good", "nu": "今のところ順調だよ。"}]},
 {"id": 107, "tag": "とっさの一言", "ja": "だいたいそんな感じ", "phrase": "More or less.", "q": {"en": "Is the report ready?", "ja": "レポートできた？"}, "ans": [{"en": "More or less.", "hl": "More or less", "nu": "だいたいそんな感じです。"}]},
 {"id": 108, "tag": "とっさの一言", "ja": "だいたいそんなところ", "phrase": "That's about it.", "q": {"en": "Anything else?", "ja": "ほかに何かある？"}, "ans": [{"en": "No, that's about it.", "hl": "That's about it", "nu": "ううん、だいたいそんなところ。"}]},
 {"id": 109, "tag": "とっさの一言", "ja": "どうなるか分からない", "phrase": "You never know.", "q": {"en": "Do you think it'll rain?", "ja": "雨降るかな？"}, "ans": [{"en": "You never know.", "hl": "You never know", "nu": "どうなるか分からないね。"}]},
 {"id": 110, "tag": "とっさの一言", "ja": "どっちでもいい", "phrase": "It doesn't matter.", "q": {"en": "Which one do you want?", "ja": "どっちがいい？"}, "ans": [{"en": "It doesn't matter.", "hl": "It doesn't matter", "nu": "どっちでもいいよ。"}]},
 {"id": 111, "tag": "会話をつなぐ", "ja": "なんで？", "phrase": "How come?", "q": {"en": "I can't go tomorrow.", "ja": "明日は行けないんだ。"}, "ans": [{"en": "How come?", "hl": "How come", "nu": "なんで？"}]},
 {"id": 112, "tag": "会話をつなぐ", "ja": "例えば？", "phrase": "Like what?", "q": {"en": "You need to practice more.", "ja": "もっと練習した方がいいよ。"}, "ans": [{"en": "Like what?", "hl": "Like what", "nu": "例えば？"}]},
 {"id": 113, "tag": "会話をつなぐ", "ja": "どうしてそう思うの？", "phrase": "What makes you say that?", "q": {"en": "I think this plan is risky.", "ja": "この計画はリスクがあると思う。"}, "ans": [{"en": "What makes you say that?", "hl": "What makes you say that", "nu": "どうしてそう思うの？"}]},
 {"id": 114, "tag": "会話をつなぐ", "ja": "どんな感じだった？", "phrase": "What was that like?", "q": {"en": "I went to a meditation class.", "ja": "瞑想クラスに行ったよ。"}, "ans": [{"en": "What was that like?", "hl": "What was that like", "nu": "どんな感じだった？"}]},
 {"id": 115, "tag": "会話をつなぐ", "ja": "それでどうなったの？", "phrase": "Then what?", "q": {"en": "I missed the train.", "ja": "電車に乗り遅れたんだ。"}, "ans": [{"en": "Then what?", "hl": "Then what", "nu": "それでどうなったの？"}]},
 {"id": 116, "tag": "会話をつなぐ", "ja": "それで思い出した", "phrase": "That reminds me.", "q": {"en": "I used to live in Canada.", "ja": "昔カナダに住んでたんだ。"}, "ans": [{"en": "That reminds me. I have a friend there.", "hl": "That reminds me", "nu": "それで思い出した。そこに友達がいるよ。"}]},
 {"id": 117, "tag": "会話をつなぐ", "ja": "そういえば〜", "phrase": "Speaking of which, ...", "q": {"en": "I like coffee.", "ja": "コーヒーが好きなんだ。"}, "ans": [{"en": "Speaking of which, have you tried this café?", "hl": "Speaking of which", "nu": "そういえば、このカフェ試した？"}]},
 {"id": 118, "tag": "会話をつなぐ", "ja": "考えてみれば", "phrase": "Come to think of it, ...", "q": {"en": "We met two years ago.", "ja": "私たち2 年前に会ったよね。"}, "ans": [{"en": "Come to think of it, that was in Kyoto.", "hl": "Come to think of it", "nu": "考えてみれば、あれ京都だったね。"}]},
 {"id": 119, "tag": "会話をつなぐ", "ja": "ところで", "phrase": "By the way, ...", "q": {"en": "I finished the homework.", "ja": "宿題終わったよ。"}, "ans": [{"en": "By the way, can I ask one question?", "hl": "By the way", "nu": "ところで、1 つ質問してもいい？"}]},
 {"id": 120, "tag": "会話をつなぐ", "ja": "まあ、とにかく", "phrase": "Anyway, ...", "q": {"en": "I was really nervous.", "ja": "すごく緊張したよ。"}, "ans": [{"en": "Anyway, it went well.", "hl": "Anyway", "nu": "まあ、とにかく、うまくいったよ。"}]},
 {"id": 121, "tag": "結局・うっかり", "ja": "結局〜した", "phrase": "I ended up ~ing.", "q": {"en": "Did you go out yesterday?", "ja": "昨日出かけた？"}, "ans": [{"en": "I ended up staying home.", "hl": "I ended up", "nu": "結局、家にいたよ。"}]},
 {"id": 122, "tag": "結局・うっかり", "ja": "ちょうど〜するところだった", "phrase": "I was about to ~.", "q": {"en": "Can we talk now?", "ja": "今話せる？"}, "ans": [{"en": "I was about to leave.", "hl": "I was about to", "nu": "ちょうど出るところだった。"}]},
 {"id": 123, "tag": "結局・うっかり", "ja": "〜するつもりだった", "phrase": "I meant to ~.", "q": {"en": "Did you call him?", "ja": "彼に電話した？"}, "ans": [{"en": "I meant to call him.", "hl": "I meant to", "nu": "電話するつもりだったんだ。"}]},
 {"id": 124, "tag": "結局・うっかり", "ja": "うっかり忘れてた", "phrase": "It slipped my mind.", "q": {"en": "Did you bring the book?", "ja": "本持ってきた？"}, "ans": [{"en": "It slipped my mind.", "hl": "It slipped my mind", "nu": "うっかり忘れてた。"}]},
 {"id": 125, "tag": "結局・うっかり", "ja": "時間を忘れてた", "phrase": "I lost track of time.", "q": {"en": "Why are you still working?", "ja": "なんでまだ仕事してるの？"}, "ans": [{"en": "I lost track of time.", "hl": "I lost track of time", "nu": "時間を忘れてた。"}]},
 {"id": 126, "tag": "結局・うっかり", "ja": "結局〜だと分かった", "phrase": "It turned out that ...", "q": {"en": "Did the plan change?", "ja": "計画変わったの？"}, "ans": [{"en": "It turned out that the room was full.", "hl": "It turned out that", "nu": "結局、部屋が満室だと分かった。"}]},
 {"id": 127, "tag": "結局・うっかり", "ja": "最終的には", "phrase": "Eventually, ...", "q": {"en": "Did you finish the project?", "ja": "プロジェクト終わった？"}, "ans": [{"en": "Eventually, yes.", "hl": "Eventually", "nu": "最終的にはね。"}]},
 {"id": 128, "tag": "結局・うっかり", "ja": "最初は", "phrase": "At first, ...", "q": {"en": "Was English easy for you?", "ja": "英語は簡単だった？"}, "ans": [{"en": "At first, it was hard.", "hl": "At first", "nu": "最初は難しかった。"}]},
 {"id": 129, "tag": "結局・うっかり", "ja": "結局", "phrase": "In the end, ...", "q": {"en": "Did you choose the cheaper one?", "ja": "安い方を選んだの？"}, "ans": [{"en": "In the end, yes.", "hl": "In the end", "nu": "結局ね。"}]},
 {"id": 130, "tag": "結局・うっかり", "ja": "なぜか", "phrase": "For some reason, ...", "q": {"en": "Why did you buy that?", "ja": "なんでそれ買ったの？"}, "ans": [{"en": "For some reason, I wanted it.", "hl": "For some reason", "nu": "なぜか欲しくなったんだ。"}]},
 {"id": 131, "tag": "気持ちを伝える", "ja": "ほっとした", "phrase": "I'm relieved.", "q": {"en": "The test is over.", "ja": "テスト終わったよ。"}, "ans": [{"en": "I'm relieved.", "hl": "I'm relieved", "nu": "ほっとした。"}]},
 {"id": 132, "tag": "気持ちを伝える", "ja": "それはよかった", "phrase": "That's a relief.", "q": {"en": "The problem is fixed now.", "ja": "問題はもう解決したよ。"}, "ans": [{"en": "That's a relief.", "hl": "That's a relief", "nu": "それはよかった。"}]},
 {"id": 133, "tag": "気持ちを伝える", "ja": "すごいね", "phrase": "I'm impressed.", "q": {"en": "She passed the exam.", "ja": "彼女、試験に合格したよ。"}, "ans": [{"en": "I'm impressed.", "hl": "I'm impressed", "nu": "すごいね。"}]},
 {"id": 134, "tag": "気持ちを伝える", "ja": "気になる", "phrase": "I'm curious.", "q": {"en": "He quit his job.", "ja": "彼、仕事辞めたんだって。"}, "ans": [{"en": "I'm curious why.", "hl": "I'm curious", "nu": "理由が気になる。"}]},
 {"id": 135, "tag": "気持ちを伝える", "ja": "待ちきれない", "phrase": "I can't wait.", "q": {"en": "Your trip is tomorrow.", "ja": "旅行、明日だね。"}, "ans": [{"en": "I can't wait.", "hl": "I can't wait", "nu": "待ちきれない。"}]},
 {"id": 136, "tag": "気持ちを伝える", "ja": "楽しみにしてる", "phrase": "I'm looking forward to it.", "q": {"en": "We have a lesson tomorrow.", "ja": "明日レッスンがあるよ。"}, "ans": [{"en": "I'm looking forward to it.", "hl": "I'm looking forward to it", "nu": "楽しみにしてる。"}]},
 {"id": 137, "tag": "気持ちを伝える", "ja": "やっぱりね", "phrase": "I'm not surprised.", "q": {"en": "He was late again.", "ja": "彼、また遅刻したよ。"}, "ans": [{"en": "I'm not surprised.", "hl": "I'm not surprised", "nu": "やっぱりね。"}]},
 {"id": 138, "tag": "気持ちを伝える", "ja": "全然知らなかった", "phrase": "I had no idea.", "q": {"en": "She lived in London.", "ja": "彼女、ロンドンに住んでたんだよ。"}, "ans": [{"en": "I had no idea.", "hl": "I had no idea", "nu": "全然知らなかった。"}]},
 {"id": 139, "tag": "気持ちを伝える", "ja": "残念だね", "phrase": "It's a shame.", "q": {"en": "I can't join the party.", "ja": "パーティーに参加できないんだ。"}, "ans": [{"en": "It's a shame.", "hl": "It's a shame", "nu": "残念だね。"}]},
 {"id": 140, "tag": "気持ちを伝える", "ja": "それは残念だね", "phrase": "That's too bad.", "q": {"en": "I lost my wallet.", "ja": "財布をなくしたんだ。"}, "ans": [{"en": "That's too bad.", "hl": "That's too bad", "nu": "それは残念だね。"}]},
 {"id": 141, "tag": "やわらかく言う", "ja": "考えておくね", "phrase": "I'll think about it.", "q": {"en": "Do you want to join us?", "ja": "一緒に参加する？"}, "ans": [{"en": "I'll think about it.", "hl": "I'll think about it", "nu": "考えておくね。"}]},
 {"id": 142, "tag": "やわらかく言う", "ja": "様子を見てみる", "phrase": "I'll see how it goes.", "q": {"en": "Are you going to continue?", "ja": "続ける予定？"}, "ans": [{"en": "I'll see how it goes.", "hl": "I'll see how it goes", "nu": "様子を見てみるよ。"}]},
 {"id": 143, "tag": "やわらかく言う", "ja": "そうだなあ", "phrase": "Let's see.", "q": {"en": "What should we order?", "ja": "何を注文しようか？"}, "ans": [{"en": "Let's see.", "hl": "Let's see", "nu": "そうだなあ。"}]},
 {"id": 144, "tag": "やわらかく言う", "ja": "まだ分からない", "phrase": "I'm not sure yet.", "q": {"en": "Are you coming tomorrow?", "ja": "明日来る？"}, "ans": [{"en": "I'm not sure yet.", "hl": "I'm not sure yet", "nu": "まだ分からない。"}]},
 {"id": 145, "tag": "やわらかく言う", "ja": "私の知る限りでは", "phrase": "As far as I know, ...", "q": {"en": "Is this shop open on Sundays?", "ja": "この店、日曜も開いてる？"}, "ans": [{"en": "As far as I know, yes.", "hl": "As far as I know", "nu": "私の知る限りでは、そうだよ。"}]},
 {"id": 146, "tag": "やわらかく言う", "ja": "覚えている限りでは", "phrase": "As far as I remember, ...", "q": {"en": "Did we meet last year?", "ja": "去年会ったっけ？"}, "ans": [{"en": "As far as I remember, yes.", "hl": "As far as I remember", "nu": "覚えている限りでは、そうだよ。"}]},
 {"id": 147, "tag": "やわらかく言う", "ja": "聞いた話では", "phrase": "From what I've heard, ...", "q": {"en": "Is he moving abroad?", "ja": "彼、海外に引っ越すの？"}, "ans": [{"en": "From what I've heard, yes.", "hl": "From what I've heard", "nu": "聞いた話では、そうみたい。"}]},
 {"id": 148, "tag": "やわらかく言う", "ja": "どうやら〜らしい", "phrase": "Apparently, ...", "q": {"en": "Why is the store closed?", "ja": "なんでお店閉まってるの？"}, "ans": [{"en": "Apparently, it's a holiday.", "hl": "Apparently", "nu": "どうやら祝日らしい。"}]},
 {"id": 149, "tag": "やわらかく言う", "ja": "少なくとも", "phrase": "At least, ...", "q": {"en": "Do I have to finish everything today?", "ja": "今日全部終わらせないとダメ？"}, "ans": [{"en": "At least, finish this page.", "hl": "At least", "nu": "少なくともこのページは終わらせて。"}]},
 {"id": 150, "tag": "やわらかく言う", "ja": "私の場合は", "phrase": "In my case, ...", "q": {"en": "Do you study in the morning?", "ja": "朝に勉強するの？"}, "ans": [{"en": "In my case, yes.", "hl": "In my case", "nu": "私の場合はそうだよ。"}]},
 {"id": 151, "tag": "日本語でよく言う", "ja": "あなたに任せるよ", "phrase": "It's up to you.", "q": {"en": "Should we meet at six or seven?", "ja": "6 時か7 時、どっちにする？"}, "ans": [{"en": "It's up to you.", "hl": "It's up to you", "nu": "あなたに任せるよ。"}]},
 {"id": 152, "tag": "日本語でよく言う", "ja": "都合のいい方で大丈夫", "phrase": "Whatever works for you.", "q": {"en": "What time is good for you?", "ja": "何時が都合いい？"}, "ans": [{"en": "Whatever works for you.", "hl": "Whatever works for you", "nu": "都合のいい方で大丈夫だよ。"}]},
 {"id": 153, "tag": "日本語でよく言う", "ja": "それで大丈夫", "phrase": "That works for me.", "q": {"en": "Let's meet at seven.", "ja": "7 時に会おう。"}, "ans": [{"en": "That works for me.", "hl": "That works for me", "nu": "それで大丈夫。"}]},
 {"id": 154, "tag": "日本語でよく言う", "ja": "大丈夫です", "phrase": "I'm good.", "q": {"en": "Do you want more coffee?", "ja": "コーヒーのおかわりいる？"}, "ans": [{"en": "I'm good.", "hl": "I'm good", "nu": "大丈夫です。"}]},
 {"id": 155, "tag": "日本語でよく言う", "ja": "念のため", "phrase": "Just in case.", "q": {"en": "Why did you bring an umbrella?", "ja": "なんで傘持ってきたの？"}, "ans": [{"en": "Just in case.", "hl": "Just in case", "nu": "念のため。"}]},
 {"id": 156, "tag": "日本語でよく言う", "ja": "念のために", "phrase": "Just to be safe.", "q": {"en": "Should we leave early?", "ja": "早めに出た方がいい？"}, "ans": [{"en": "Yes, just to be safe.", "hl": "Just to be safe", "nu": "うん、念のために。"}]},
 {"id": 157, "tag": "日本語でよく言う", "ja": "特に理由はない", "phrase": "No particular reason.", "q": {"en": "Why did you choose this one?", "ja": "なんでこれを選んだの？"}, "ans": [{"en": "No particular reason.", "hl": "No particular reason", "nu": "特に理由はないよ。"}]},
 {"id": 158, "tag": "日本語でよく言う", "ja": "やる価値がある", "phrase": "It's worth it.", "q": {"en": "This lesson is expensive.", "ja": "このレッスン高いね。"}, "ans": [{"en": "It's worth it.", "hl": "It's worth it", "nu": "やる価値があるよ。"}]},
 {"id": 159, "tag": "日本語でよく言う", "ja": "大したことじゃない", "phrase": "It's not a big deal.", "q": {"en": "I'm sorry about yesterday.", "ja": "昨日はごめんね。"}, "ans": [{"en": "It's not a big deal.", "hl": "It's not a big deal", "nu": "大したことじゃないよ。"}]},
 {"id": 160, "tag": "日本語でよく言う", "ja": "まあ、それなら納得", "phrase": "Fair enough.", "q": {"en": "I can't come today.", "ja": "今日は行けないんだ。"}, "ans": [{"en": "Fair enough.", "hl": "Fair enough", "nu": "まあ、それなら納得。"}]}
]);
