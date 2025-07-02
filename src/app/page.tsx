import Image from "next/image";

import Tate from "@/components/Tate";
import Yoko from "@/components/Yoko" ;
import Button from "@/components/Button";

export default function Page() {
	return (
		<div>
			
			<header className="flex space-x-10 p-7 font-bold">
				
				{/*ヘッダー*/}
				<Image src='/images/coke-company-logo-1.svg' alt='会社ロゴ' width={150} height={150} />
				<div>製品情報</div>
				<div>サステナビリティ</div>
			</header>

			<main className="bg-black/5 p-5">
				

				{/*画像ファイル*/}
				<div className="relative flex justify-center p-6">
					<div className="relative w-full max-w-7xl h-[650px] overflow-hidden rounded-3xl" >
						<Image src='/images/main2.jpg' alt='メインの写真' width={800} height={500} className="h-full w-full object-cover"/>
					
						{/*オーバーレイ*/}
						<div className="absolute inset-0 w-full h-full bg-gradient-to-l from-black/10 to-black/60  rounded-3xl"></div>
					</div>
					
					{/*画像の中のテキスト*/}
					<div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white m-20">
						<h1 className="text-4xl font-bold p-2">コカ・コーラ</h1>
						<p>偶然の出来事も、いつもは見過ごしてしまうあの瞬間も。</p>
						<p>​コークとキミが一緒なら、特別な時間になっていく。</p>
						<button className="bg-white text-black font-bold py-2 px-32 rounded-full hover:bg-gray-300 transition duration-300 m-6">詳しくはこちら</button>
					</div>
				</div>
				
				{/*テキスト1*/}
				<div className="p-5 w-full mx-auto text-center max-w-6xl mb-4">
						<h1 className="text-3xl font-bold p-5">Refresh the Wold.Make a Difference.</h1>
						<p>私たちは、世界中で愛されるブランドや、丹精込めて作り上げている様々な飲料を通じ、心身ともに人々をうるおし、さわやかさを提供してまいります。より明るい未来を築くべく、持続可能なビジネスの実現を通じ、あらゆる人々の生活、地域社会、そして地球にとって前向きな変化をもたらすことを目指します。</p>
				</div>

				{/*テキスト2*/}
				<div className="p-5 w-full mx-auto text-center max-w-6xl">
						<h1 className="text-3xl font-bold p-5">サステナビリティ</h1>
						<p>サステナビリティは、私たちの事業のあらゆる側面に取り入れられており、未来の成長に欠かせない要素といえます。これらの取り組みを通じて、コカ･コーラの使命である『Refresh the World. Make a Difference.（世界中にさわやかさを提供し、前向きな変化をもたらすこと）』の実現を目指しています。</p>
				</div>

				{/*画像3連*/}
				
				<div className="flex justify-center">
					<Tate 
					src="/images/kankyo.jpg"
					alt="環境"
					name="環境"
					text="コカ･コーラシステムは、持続可能な社会の実現に向けて、容器のリサイクル推進、水資源の保全、温室効果ガス排出量の削減など、資源の循環利用や環境負荷の軽減に取り組んでいます。私たちは、ビジネスを通じて前向きな変化をもたらし、地球にとってより持続可能な未来を築くことを目指しています。"
					/>

					<Tate
					src="/images/hito.jpg"
					alt="人と社会"
					name="人と社会"
					text="私たちのすべての活動の中心には「人」がいます。従業員やビジネスに関わるすべての方々、そして拠点を置く地域社会に至るまで、すべての人が重要です。ダイバーシティ・エクイティ＆インクルージョン（DEI）の重視や人権の尊重を企業活動の基本とし、地域社会との関わりを通じて、事業を展開する地域にポジティブで具体的な変化をもたらすことを目指しています。"
					/>

					<Tate
					src="/images/kenko.jpg"
					alt="健康とウェルビーイング"
					name="健康とウェルビーイング"
					text="私たちは人々の暮らしに寄り添い、健康を最優先に考え、健康で豊かな未来の実現に貢献しています。コカ･コーラシステムは、トクホ（特定保健用食品）や機能性表示食品のラインナップを強化しています。また日本コカ･コーラは、適正飲酒の啓発にも取り組んでいます。"
					/>
				</div>

				{/*横のやつ2つ*/}
				<div className="flex justify-center mt-16">
					<Yoko
					title="環境に関する活動レポート"
					/>
					<Yoko
					title="人と社会に関する活動レポート"
					/>
				</div>
				
				{/*横のやつ2*/}
				<div className="bg-white rounded-4xl max-w-6xl m-16 w-[1050px] mx-auto ">
					<h1 className="text-2xl font-bold p-6 pb-2">ビジネス&サステナビリティレポート</h1>
					<Button
					className="bg-white border-2"
					name="詳しく見る"
					/>
				</div>
				
				{/*企業情報*/}
				
				<div className="flex-row-reverse ">
					
					<div className="bg-white rounded-3xl overflow-hidden w-[500] h-[500]" >
						<h1 className="text-3xl font-bold p-8">企業情報</h1>
						<p className="p-8">日本コカ・コーラ株式会社は、ザ コカ・コーラ カンパニーの日本法人として1957年に設立され、日本での事業を本格的にスタートしました。日本におけるコカ・コーラシステムは、原液の供給と製品の企画開発およびマーケティング活動を担う日本コカ・コーラ株式会社と、製品の製造・販売を行うボトラー社や関連会社などで構成されています。</p>
					</div>					
					
					<div className="rounded-3xl overflow-hidden">
						<Image
						src='/images/kaisha1.jpg'
						alt='会社の写真'
						width={600}
						height={500}		
						className="h-full"		
						/>
					</div>
					
					
				</div>


			</main>
		</div>
	)
}