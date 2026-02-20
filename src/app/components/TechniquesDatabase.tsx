import { ArrowRight } from "lucide-react";

interface Technique {
  id: number;
  name: string;
  category: string;
  order: number;
}

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
}

// カテゴリー情報
const categories: Category[] = [
  {
    id: "表",
    name: "【表】（おもて）",
    description:
      "初心者が最初に稽古する形で一二本から構成されています。基本的な技術のみならず、重要な術も含まれています。",
    color: "bg-[#172542] text-[#EFE6D5]",
  },
  {
    id: "中段",
    name: "【中段】（ちゅうだん）",
    description:
      "初段を取得した後に稽古する形です。一二本で構成されていますが、特徴として比較的遠い間合いから攻防を行う形となっています。",
    color: "bg-[#A82222] text-[#EFE6D5]",
  },
  {
    id: "乱合",
    name: "【乱合】（らんあい）",
    description:
      "江戸時代に追加された形で、それぞれ大太刀と小太刀を使用する二本の形です。「中段」と「影」の要素を取り入れ、最も手数が多く、ダイナミックな形となっています。",
    color: "bg-[#8B4513] text-[#EFE6D5]",
  },
  {
    id: "影",
    name: "【影】（かげ）",
    description:
      "形の名前は「表」と同じで、一二本で構成されています。特徴として、比較的近い間合いで「気」を発しながら相手を制圧するシンプルな形となっています。",
    color: "bg-[#333333] text-[#EFE6D5]",
  },
  {
    id: "五本の乱",
    name: "【五本の乱】（ごほんのみだれ）",
    description:
      "昭和になって清水隆次師範が創られた形です。それぞれの形に他の形や、他の武術の技術を組み合わせています。",
    color: "bg-[#2F4F4F] text-[#EFE6D5]",
  },
  {
    id: "五月雨",
    name: "【五月雨】（さみだれ）",
    description:
      "心身ともに修行を修めたと認められる五段以上の者が稽古を許される形で、五本で構成されています。形はシンプルですが正確な間合いの見切りと気迫が求められます。",
    color: "bg-[#4B0082] text-[#EFE6D5]",
  },
  {
    id: "奥",
    name: "【奥】（おく）",
    description:
      "修行者が最後に稽古する形として一二本で構成されています。特徴としては、激しい動きのみならず、手先の細かい技術や心理戦の要素も含まれており、修行の最終段階にふさわしい難易度の高い形となっています。",
    color: "bg-[#1C1C1C] text-[#EFE6D5]",
  },
  {
    id: "極意（五夢想の杖）",
    name: "【極意／秘伝／五夢想の杖】（ごくい／ひでん／ごむそうのじょう）",
    description:
      "免許皆伝を受ける者だけが口伝により伝授される五本の形で、その内容は当事者以外に公開されていません。",
    color: "bg-[#8B0000] text-[#EFE6D5]",
  },
  {
    id: "神道流剣術",
    name: "【神道流剣術】（しんとうりゅうけんじゅつ）",
    description:
      "四通八通（しつうはっつう）とも称され、杖術と共に修めるものとされる剣術の形です。小太刀四本と大太刀八本の形が伝えられています。",
    color: "bg-[#283C5F] text-[#EFE6D5]",
  },
];

// 神道夢想流杖術の形
const techniques: Technique[] = [
  // 表（12本）
  { id: 1, name: "太刀落", category: "表", order: 1 },
  { id: 2, name: "鍔割", category: "表", order: 2 },
  { id: 3, name: "着杖", category: "表", order: 3 },
  { id: 4, name: "引提", category: "表", order: 4 },
  { id: 5, name: "左貫", category: "表", order: 5 },
  { id: 6, name: "右貫", category: "表", order: 6 },
  { id: 7, name: "霞", category: "表", order: 7 },
  { id: 8, name: "物見", category: "表", order: 8 },
  { id: 9, name: "笠之下", category: "表", order: 9 },
  { id: 10, name: "一禮", category: "表", order: 10 },
  { id: 11, name: "寝屋之内", category: "表", order: 11 },
  { id: 12, name: "細道", category: "表", order: 12 },

  // 中段（12本）
  { id: 13, name: "一刀", category: "中段", order: 1 },
  { id: 14, name: "押詰", category: "中段", order: 2 },
  { id: 15, name: "乱留", category: "中段", order: 3 },
  {
    id: 16,
    name: "（前・後）/後杖",
    category: "中段",
    order: 4,
  },
  { id: 17, name: "待車", category: "中段", order: 5 },
  { id: 18, name: "間込", category: "中段", order: 6 },
  { id: 19, name: "切縣", category: "中段", order: 7 },
  { id: 20, name: "真進", category: "中段", order: 8 },
  { id: 21, name: "雷打", category: "中段", order: 9 },
  { id: 22, name: "横切留", category: "中段", order: 10 },
  { id: 23, name: "払留", category: "中段", order: 11 },
  { id: 24, name: "清眼", category: "中段", order: 12 },

  // 乱合（2本）
  { id: 25, name: "大太刀", category: "乱合", order: 1 },
  { id: 26, name: "小太刀", category: "乱合", order: 2 },

  // 影（12本）
  { id: 27, name: "太刀落", category: "影", order: 1 },
  { id: 28, name: "鍔割", category: "影", order: 2 },
  { id: 29, name: "着杖", category: "影", order: 3 },
  { id: 30, name: "引提", category: "影", order: 4 },
  { id: 31, name: "左貫", category: "影", order: 5 },
  { id: 32, name: "右貫", category: "影", order: 6 },
  { id: 33, name: "霞", category: "影", order: 7 },
  { id: 34, name: "物見", category: "影", order: 8 },
  { id: 35, name: "笠之下", category: "影", order: 9 },
  {
    id: 36,
    name: "（前・後）/一禮",
    category: "影",
    order: 10,
  },
  {
    id: 37,
    name: "（前・後）/寝屋之内",
    category: "影",
    order: 11,
  },
  { id: 38, name: "細道", category: "影", order: 12 },

  // 五本の乱（5本）
  {
    id: 39,
    name: "太刀落の乱",
    category: "五本の乱",
    order: 1,
  },
  { id: 40, name: "左貫の乱", category: "五本の乱", order: 2 },
  { id: 41, name: "間込の乱", category: "五本の乱", order: 3 },
  { id: 42, name: "霞の乱", category: "五本の乱", order: 4 },
  { id: 43, name: "斜面の乱", category: "五本の乱", order: 5 },

  // 五月雨（6本）
  { id: 44, name: "一文字", category: "五月雨", order: 1 },
  { id: 45, name: "十文字", category: "五月雨", order: 2 },
  { id: 46, name: "小太刀落", category: "五月雨", order: 3 },
  {
    id: 47,
    name: "（表・裏）/微塵",
    category: "五月雨",
    order: 4,
  },
  { id: 48, name: "眼潰", category: "五月雨", order: 5 },

  // 奥（12本）
  { id: 49, name: "先勝", category: "奥", order: 1 },
  { id: 50, name: "引捨", category: "奥", order: 2 },
  { id: 51, name: "小手搦", category: "奥", order: 3 },
  { id: 52, name: "十手", category: "奥", order: 4 },
  { id: 53, name: "打分", category: "奥", order: 5 },
  { id: 54, name: "水月", category: "奥", order: 6 },
  { id: 55, name: "左右留", category: "奥", order: 7 },
  { id: 56, name: "小手留", category: "奥", order: 8 },
  { id: 57, name: "突出", category: "奥", order: 9 },
  { id: 58, name: "打附", category: "奥", order: 10 },
  { id: 59, name: "見替", category: "奥", order: 11 },
  { id: 60, name: "阿吽", category: "奥", order: 12 },

  // 極意（五夢想の杖）（5本）
  {
    id: 61,
    name: "闇打",
    category: "極意（五夢想の杖）",
    order: 1,
  },
  {
    id: 62,
    name: "夢枕",
    category: "極意（五夢想の杖）",
    order: 2,
  },
  {
    id: 63,
    name: "村雲",
    category: "極意（五夢想の杖）",
    order: 3,
  },
  {
    id: 64,
    name: "稲妻",
    category: "極意（五夢想の杖）",
    order: 4,
  },
  {
    id: 65,
    name: "導母",
    category: "極意（五夢想の杖）",
    order: 5,
  },

  // 神道流剣術（12本）
  // 大太刀（8本）
  { id: 66, name: "愛寸", category: "神道流剣術", order: 1 },
  { id: 67, name: "鷲", category: "神道流剣術", order: 2 },
  { id: 68, name: "機", category: "神道流剣術", order: 3 },
  { id: 69, name: "錑", category: "神道流剣術", order: 4 },
  { id: 70, name: "嶽", category: "神道流剣術", order: 5 },
  { id: 71, name: "乳払", category: "神道流剣術", order: 6 },
  { id: 72, name: "本覚", category: "神道流剣術", order: 7 },
  { id: 73, name: "三当", category: "神道流剣術", order: 8 },
  // 小太刀（4本）
  {
    id: 74,
    name: "（小太刀）/鷲",
    category: "神道流剣術",
    order: 9,
  },
  {
    id: 75,
    name: "（小太刀）/機",
    category: "神道流剣術",
    order: 10,
  },
  {
    id: 76,
    name: "（小太刀）/錑",
    category: "神道流剣術",
    order: 11,
  },
  {
    id: 77,
    name: "（小太刀）/嶽",
    category: "神道流剣術",
    order: 12,
  },
];

export function TechniquesDatabase() {
  // カテゴリーごとにグループ化
  const groupedTechniques = techniques.reduce(
    (acc, technique) => {
      if (!acc[technique.category]) {
        acc[technique.category] = [];
      }
      acc[technique.category].push(technique);
      return acc;
    },
    {} as Record<string, Technique[]>,
  );

  // 技名のレンダリング（改行対応）
  const renderTechniqueName = (name: string) => {
    // スラッシュがある場合（改行モード：同サイズで並列）を優先
    if (name.includes("/")) {
      const parts = name.split("/");
      // parts[0]が1行目（右）、parts[1]以降が続く
      // Flexboxは左から右なので、配列を逆順にしてレンダリングする
      return (
        <div className="flex gap-1 items-center justify-center">
          {[...parts].reverse().map((part, index) => (
            <h4
              key={index}
              className={`font-brush-bold text-[#1a1a1a] tracking-widest ${
                // カッコを含む場合は少し小さくする（簡易的な注釈判定）
                part.includes("（") || part.includes("）")
                  ? "text-sm sm:text-base md:text-lg"
                  : "text-lg sm:text-xl md:text-2xl"
              }`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
                letterSpacing: "0.2em",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                fontWeight: 900,
              }}
            >
              {part}
            </h4>
          ))}
        </div>
      );
    }

    // カッコ書きがある場合（注釈モード：右側メイン、左側サブ）
    if (name.includes("（")) {
      const parts = name.split("（");
      const main = parts[0];
      const sub = parts[1];

      return (
        <div className="flex gap-0.5 items-center justify-center">
          {/* 左側：注釈（2行目） */}
          <h4
            className="text-sm sm:text-base md:text-lg font-brush-bold text-[#1a1a1a] tracking-widest"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.15em",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              fontWeight: 900,
            }}
          >
            （{sub}
          </h4>
          {/* 右側：メイン（1行目）- 空文字でない場合のみ表示 */}
          {main && (
            <h4
              className="text-lg sm:text-xl md:text-2xl font-brush-bold text-[#1a1a1a] tracking-widest"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
                letterSpacing: "0.2em",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                fontWeight: 900,
              }}
            >
              {main}
            </h4>
          )}
        </div>
      );
    }

    // 通常モード
    return (
      <h4
        className="text-lg sm:text-xl md:text-2xl font-brush-bold text-[#1a1a1a] tracking-widest"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          letterSpacing: "0.2em",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          fontWeight: 900,
        }}
      >
        {name}
      </h4>
    );
  };

  return (
    <section
      id="techniques"
      className="py-16 sm:py-20 md:py-24 bg-[#f5f5f5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#172542] mb-4">
            神道夢想流杖術の形について
          </h2>
          <div className="w-20 h-1 bg-[#A82222]"></div>
          <div className="mt-6 text-[#333333] text-base leading-relaxed space-y-4">
            <p>
              神道夢想流杖術の形は、他の武術同様に修行者の段階に応じて順に修めていくように構成されています。（以降は当協会における修行順となります）
            </p>
          </div>
        </div>

        {/* カテゴリーごとに表示 */}
        <div className="space-y-16">
          {categories.map((categoryInfo) => {
            const categoryTechniques =
              groupedTechniques[categoryInfo.id] || [];
            if (categoryTechniques.length === 0) return null;

            return (
              <div key={categoryInfo.name}>
                {/* カテゴリーヘッダー */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#172542] mb-3">
                    {categoryInfo.name}
                  </h3>
                  <div className="w-16 h-0.5 bg-[#A82222] mb-4"></div>
                  <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-2">
                    {categoryInfo.description}
                  </p>
                  <p className="text-xs text-[#666666]">
                    全{categoryTechniques.length}本
                  </p>
                </div>

                {/* カードグリッド */}
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 gap-1.5 sm:gap-2 md:gap-3">
                  {categoryTechniques
                    .sort((a, b) => a.order - b.order)
                    .map((technique) => (
                      <div
                        key={technique.id}
                        className="group cursor-pointer"
                      >
                        {/* 木の板風カード */}
                        <div
                          className="relative bg-gradient-to-b from-[#8B4513] via-[#A0522D] to-[#8B4513] rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-[#654321]"
                          style={{
                            height: "220px",
                            backgroundImage:
                              "linear-gradient(90deg, rgba(139,69,19,0.1) 0%, transparent 50%, rgba(139,69,19,0.1) 100%)",
                          }}
                        >
                          {/* 木目効果 */}
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                            }}
                          ></div>

                          {/* 木の節 */}
                          <div className="absolute top-6 left-1/2 w-2 h-2 rounded-full bg-[#654321] opacity-40 -translate-x-1/2"></div>
                          <div className="absolute bottom-10 left-1/3 w-1.5 h-1.5 rounded-full bg-[#654321] opacity-30"></div>

                          {/* 内容 */}
                          <div className="relative h-full flex flex-col items-center justify-center p-2 py-4 sm:p-3 sm:py-6">
                            {/* カテゴリーバッジ（横書き・上部） */}
                            <div className="mb-2 sm:mb-3 w-full flex justify-center">
                              <div
                                className={`inline-flex flex-col items-center px-2 py-1 text-[10px] sm:text-xs font-medium tracking-wide leading-snug rounded-sm ${categoryInfo.color} border border-[#EFE6D5]/30 shadow-sm`}
                              >
                                {categoryInfo.name
                                  .split("（")[0]
                                  .replace(/【|】/g, "")
                                  .replace(/／/g, "/")
                                  .split("/")
                                  .map((line, i) => (
                                    <span
                                      key={i}
                                      className="whitespace-nowrap"
                                    >
                                      {line}
                                    </span>
                                  ))}
                              </div>
                            </div>

                            {/* 形名（縦書き） */}
                            <div className="flex-1 flex items-center justify-center">
                              {renderTechniqueName(
                                technique.name,
                              )}
                            </div>

                            {/* ホバー時の効果 */}
                            <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-[#EFE6D5] rotate-90" />
                            </div>
                          </div>

                          {/* ボーダー装飾 */}
                          <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#654321] to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#654321] to-transparent"></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 併伝武術について */}
        <div className="mt-24 pt-16 border-t border-[#172542]/10">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#172542] mb-4">
              併伝武術について
            </h2>
            <div className="w-20 h-1 bg-[#A82222]"></div>
            <div className="mt-6 text-[#333333] text-base leading-relaxed">
              <p>
                杖術の修行段階に合わせて、次の併伝武術も稽古しています。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "一心流鎖鎌術",
                reading: "いっしんりゅうくさりがまじゅつ",
              },
              {
                name: "一角流十手",
                reading: "いっかくりゅうじゅってじゅつ",
              },
              {
                name: "内田流短杖術",
                reading: "うちだりゅうたんじょうじゅつ",
              },
            ].map((art) => (
              <div
                key={art.name}
                className="bg-[#EFE6D5] p-6 rounded-sm border-l-4 border-[#172542] shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-serif text-[#172542] mb-2">
                  【{art.name}】
                </h3>
                <p className="text-sm text-[#555555]">
                  （{art.reading}）
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}