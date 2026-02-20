import { Users, Target, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: '伝統の継承',
    description: '神道夢想流杖術の技術を、丁寧に指導しています。',
  },
  {
    icon: Heart,
    title: '杖術の技の研さん',
    description: '技を伝え、しっかりとかつ楽しく稽古をしています。',
  },
  {
    icon: Users,
    title: '初心者歓迎',
    description: '経験がなくても大丈夫。基礎から丁寧にお教えします。',
  },
  {
    icon: Award,
    title: '段位取得',
    description: '昇級・昇段審査に向けた指導も行っています。',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#172542] mb-4">
            道場について
          </h2>
          <div className="w-20 h-1 bg-[#A82222] mx-auto mb-6"></div>
          <p className="text-[#333333] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            東京都杖道連盟の傘下である千代田神杖会-番町場所は、<br />
            神道夢想流杖術を中心に稽古を行う道場です。<br />
            伝統的な武道の精神を大切にしながら、現代社会に適した指導を心がけています。
          </p>
        </div>

        {/* 特徴グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EFE6D5] text-[#A82222] mb-4 group-hover:bg-[#A82222] group-hover:text-[#EFE6D5] transition-colors duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-serif text-[#172542] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 杖道についての説明 */}
        <div className="bg-[#EFE6D5] rounded-sm p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#172542] mb-4">
                杖道とは
              </h3>
              <div className="space-y-4 text-[#333333] leading-relaxed">
                <p>
                  杖道（じょうどう）は、約四尺二寸一分（約128cm）の杖を用いた日本の武道です。
                </p>
                <p>
                  神道夢想流杖術を起源とし、剣道や柔道と同じく、心身の鍛錬を目的としています。
                </p>
                <p>
                  技の習得を通じて、集中力、そして落ち着いた心を養うことができます。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-[#172542] rounded-sm overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-[#EFE6D5] text-6xl font-serif">
                  杖
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}