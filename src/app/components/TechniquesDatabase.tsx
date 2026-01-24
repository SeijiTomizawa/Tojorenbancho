import { ArrowRight } from 'lucide-react';

interface Technique {
  id: number;
  name: string;
  category: string;
  order: number;
}

interface Category {
  name: string;
  description: string;
  color: string;
}

// カテゴリー情報
const categories: Category[] = [
  {
    name: '表',
    description: '基本技を修業することを目的とした十二本で構成されている。正しい姿勢、形と技を身につける様心掛けねばならない。',
    color: 'bg-[#172542] text-[#EFE6D5]',
  },
  {
    name: '中段',
    description: '中級者の技を中心に十二本の形で構成されている。動きが激しくスピードも要求される。表業を修めその基礎のうえに立って懸る形である。',
    color: 'bg-[#A82222] text-[#EFE6D5]',
  },
  {
    name: '乱合',
    description: '目録にその名はないが、表、中段の技を総合した形で手数も多くスピードも要求される。古くから中級修業者の目標となっている形である。',
    color: 'bg-[#8B4513] text-[#EFE6D5]',
  },
  {
    name: '影',
    description: '心の修練をすることを目的とし、表業と同名の十二本で構成されている。手数は少なくスピードもないが気迫に満ちた稽古が必要であり、心技の基本と考えられる。',
    color: 'bg-[#333333] text-[#EFE6D5]',
  },
  {
    name: '五本の乱',
    description: '第二十五代の統、故清水隆次克泰師範が考案した形で、表、中段、影を総合し、乱合を発展させた中級者の修業を目的とした形である。',
    color: 'bg-[#2F4F4F] text-[#EFE6D5]',
  },
  {
    name: '五月雨',
    description: '影が心錬の基本ならば五月雨は心錬の中段と言える。六本の組形で構成され、その技は気位をも要求され、心、技、体の完全一致を見なければ出来得ない高度な形である。',
    color: 'bg-[#4B0082] text-[#EFE6D5]',
  },
  {
    name: '奥',
    description: '永年の修業を終え、心、技、体とも卓越された人格者のみに伝授される形である。',
    color: 'bg-[#1C1C1C] text-[#EFE6D5]',
  },
  {
    name: '極意（五夢想の杖）',
    description: '最高峰の形。',
    color: 'bg-[#8B0000] text-[#EFE6D5]',
  },
];

// 神道夢想流杖術の形
const techniques: Technique[] = [
  // 表（12本）
  { id: 1, name: '太刀落', category: '表', order: 1 },
  { id: 2, name: '鍔割', category: '表', order: 2 },
  { id: 3, name: '着杖', category: '表', order: 3 },
  { id: 4, name: '引提', category: '表', order: 4 },
  { id: 5, name: '左貫', category: '表', order: 5 },
  { id: 6, name: '右貫', category: '表', order: 6 },
  { id: 7, name: '霞', category: '表', order: 7 },
  { id: 8, name: '物見', category: '表', order: 8 },
  { id: 9, name: '笠之下', category: '表', order: 9 },
  { id: 10, name: '一禮', category: '表', order: 10 },
  { id: 11, name: '寝屋之内', category: '表', order: 11 },
  { id: 12, name: '細道', category: '表', order: 12 },
  
  // 中段（12本）
  { id: 13, name: '一刀', category: '中段', order: 1 },
  { id: 14, name: '押詰', category: '中段', order: 2 },
  { id: 15, name: '乱留', category: '中段', order: 3 },
  { id: 16, name: '後杖（前・後）', category: '中段', order: 4 },
  { id: 17, name: '待車', category: '中段', order: 5 },
  { id: 18, name: '間込', category: '中段', order: 6 },
  { id: 19, name: '切縣', category: '中段', order: 7 },
  { id: 20, name: '真進', category: '中段', order: 8 },
  { id: 21, name: '雷打', category: '中段', order: 9 },
  { id: 22, name: '横切留', category: '中段', order: 10 },
  { id: 23, name: '払留', category: '中段', order: 11 },
  { id: 24, name: '清眼', category: '中段', order: 12 },
  
  // 乱合（2本）
  { id: 25, name: '大太刀', category: '乱合', order: 1 },
  { id: 26, name: '小太刀', category: '乱合', order: 2 },
  
  // 影（12本）
  { id: 27, name: '太刀落', category: '影', order: 1 },
  { id: 28, name: '鍔割', category: '', order: 2 },
  { id: 29, name: '着杖', category: '影', order: 3 },
  { id: 30, name: '引提', category: '影', order: 4 },
  { id: 31, name: '左貫', category: '影', order: 5 },
  { id: 32, name: '右貫', category: '影', order: 6 },
  { id: 33, name: '霞', category: '影', order: 7 },
  { id: 34, name: '物見', category: '影', order: 8 },
  { id: 35, name: '笠之下', category: '影', order: 9 },
  { id: 36, name: '一禮（前・後）', category: '影', order: 10 },
  { id: 37, name: '寝屋之内（前・後）', category: '影', order: 11 },
  { id: 38, name: '細道', category: '影', order: 12 },
  
  // 五本の乱（5本）
  { id: 39, name: '太刀落の乱', category: '五本の乱', order: 1 },
  { id: 40, name: '左貫の乱', category: '五本の乱', order: 2 },
  { id: 41, name: '間込の乱', category: '五本の乱', order: 3 },
  { id: 42, name: '霞の乱', category: '五本の乱', order: 4 },
  { id: 43, name: '斜面の乱', category: '五本の乱', order: 5 },
  
  // 五月雨（6本）
  { id: 44, name: '一文字', category: '五月雨', order: 1 },
  { id: 45, name: '十文字', category: '五月雨', order: 2 },
  { id: 46, name: '小太刀落', category: '五月雨', order: 3 },
  { id: 47, name: '微塵（表・裏）', category: '五月雨', order: 4 },
  { id: 48, name: '眼潰', category: '五月雨', order: 5 },
  
  // 奥（12本）
  { id: 49, name: '先勝', category: '奥', order: 1 },
  { id: 50, name: '引捨', category: '奥', order: 2 },
  { id: 51, name: '小手搦', category: '奥', order: 3 },
  { id: 52, name: '十手', category: '奥', order: 4 },
  { id: 53, name: '打分', category: '奥', order: 5 },
  { id: 54, name: '水月', category: '奥', order: 6 },
  { id: 55, name: '左右留', category: '奥', order: 7 },
  { id: 56, name: '小手留', category: '奥', order: 8 },
  { id: 57, name: '突出', category: '奥', order: 9 },
  { id: 58, name: '打附', category: '奥', order: 10 },
  { id: 59, name: '見替', category: '奥', order: 11 },
  { id: 60, name: '阿吽', category: '奥', order: 12 },
  
  // 極意（五夢想の杖）（5本）
  { id: 61, name: '闇打', category: '極意（五夢想の杖）', order: 1 },
  { id: 62, name: '夢枕', category: '極意（五夢想の杖）', order: 2 },
  { id: 63, name: '村雲', category: '極意（五夢想の杖）', order: 3 },
  { id: 64, name: '稲妻', category: '極意（五夢想の杖）', order: 4 },
  { id: 65, name: '導母', category: '極意（五夢想の杖）', order: 5 },
];

export function TechniquesDatabase() {
  // カテゴリーごとにグループ化
  const groupedTechniques = techniques.reduce((acc, technique) => {
    if (!acc[technique.category]) {
      acc[technique.category] = [];
    }
    acc[technique.category].push(technique);
    return acc;
  }, {} as Record<string, Technique[]>);

  // カテゴリー情報を取得
  const getCategoryInfo = (categoryName: string) => {
    return categories.find(cat => cat.name === categoryName) || {
      name: categoryName,
      description: '',
      color: 'bg-[#172542] text-[#EFE6D5]',
    };
  };

  return (
    <section id="techniques" className="py-16 sm:py-20 md:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#172542] mb-4">
            神道夢想流杖術の形
          </h2>
          <div className="w-20 h-1 bg-[#A82222]"></div>
          <div className="mt-6 text-[#333333] text-base leading-relaxed space-y-4">
            <p>
              杖道の形は武道そのものが生活の総てであり、修業の成果が武術家の生死をも左右する時代に、血の滲む稽古と研究の成果が集大成されたものである。
            </p>
            <p>
              現代の武道の修業は、目標に向かう集中力と変化に対する的確な判断力、迅速に対応する体力を養う為にその修業は真剣であり、気迫を込めた稽古でなくてはならないと思われる。
            </p>
            <p>
              形は、技の部と心の部に大別されており、技の修業から心の修練に通じ、その人の人間形成に重点が置かれている。
            </p>
          </div>
        </div>

        {/* カテゴリーごとに表示 */}
        <div className="space-y-16">
          {categories.map((categoryInfo) => {
            const categoryTechniques = groupedTechniques[categoryInfo.name] || [];
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {categoryTechniques
                    .sort((a, b) => a.order - b.order)
                    .map((technique) => (
                      <div
                        key={technique.id}
                        className="group cursor-pointer"
                      >
                        {/* 木の板風カード */}
                        <div className="relative bg-gradient-to-b from-[#8B4513] via-[#A0522D] to-[#8B4513] rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-[#654321]"
                             style={{ 
                               height: '280px',
                               backgroundImage: 'linear-gradient(90deg, rgba(139,69,19,0.1) 0%, transparent 50%, rgba(139,69,19,0.1) 100%)',
                             }}>
                          {/* 木目効果 */}
                          <div className="absolute inset-0 opacity-20"
                               style={{
                                 backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
                               }}></div>
                          
                          {/* 木の節 */}
                          <div className="absolute top-8 left-1/2 w-3 h-3 rounded-full bg-[#654321] opacity-40 -translate-x-1/2"></div>
                          <div className="absolute bottom-12 left-1/3 w-2 h-2 rounded-full bg-[#654321] opacity-30"></div>
                          
                          {/* 内容 */}
                          <div className="relative h-full flex flex-col items-center justify-center p-4 py-8">
                            {/* カテゴリーバッジ（横書き・上部） */}
                            <div className="mb-4">
                              <span
                                className={`inline-block px-2 py-1 text-xs rounded-sm ${categoryInfo.color} border border-[#EFE6D5]/30`}
                              >
                                {categoryInfo.name}
                              </span>
                            </div>

                            {/* 形名（縦書き） */}
                            <div className="flex-1 flex items-center justify-center">
                              <h4 
                                className="text-2xl sm:text-3xl font-brush-bold text-[#1a1a1a] tracking-widest"
                                style={{ 
                                  writingMode: 'vertical-rl',
                                  textOrientation: 'upright',
                                  letterSpacing: '0.3em',
                                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                  fontWeight: 700,
                                }}
                              >
                                {technique.name}
                              </h4>
                            </div>

                            {/* ホバー時の効果 */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="h-4 w-4 text-[#EFE6D5] rotate-90" />
                            </div>
                          </div>

                          {/* ボーダー装飾 */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#654321] to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#654321] to-transparent"></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}