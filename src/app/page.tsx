import Image from "next/image";

import Tate from "@/components/Tate";
import Yoko from "@/components/Yoko" ;
import Button from "@/components/Button";
import Kasanari from "@/components/Kasanari";
import Tates from "@/components/Tates";
import Icons from "@/components/Icons";

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
				{/*クラスで画像の右左を変更するコードを書いて、クラス1が左、クラス2が右の要素の位置を調整する。reverseなら逆になる。 */}
				<div className="mb-32">
					<Kasanari
					className1="translate-y-12"
					className2="-translate-x-12"
					alt="会社の写真"
					src="/images/kaisha1.jpg"
					name="企業情報"
					text="日本コカ･コーラ株式会社は、ザ コカ･コーラ カンパニーの日本法人として1957年に設立され、日本での事業を本格的にスタートしました。日本におけるコカ･コーラシステムは、原液の供給と製品の企画開発およびマーケティング活動を担う日本コカ･コーラ株式会社と、製品の製造・販売を行うボトラー社や関連会社などで構成されています。"
					/>
				</div>

				{/*ちっちゃい縦のやつ */}
				<div className="flex justify-center mb-24">
					<Tates
					className="max-w-xs"
					src="/images/kaisha2.jpg"
					alt="採用情報"
					name="採用情報"
					/>

					<Tates
					className="max-w-xs"
					src="/images/jihanki.jpg"
					alt="自動販売機設置の流れ"
					name="自動販売機設置の流れ"
					/>

					<Tates
					className="max-w-xs"
					src="/images/history.jpg"
					alt="歴史"
					name="日本におけるコカ・コーラビジネスの歴史"
					/>
				</div>

				{/*重なり2逆ver*/}
				<div className="mb-32">
					<Kasanari
					className="flex-row-reverse"
					className1="translate-y-10"
					className2="translate-x-10"
					alt="スポーツ"
					name="ザ･コカ･コーラ･カンパニーはスポーツやエンターテインメントへのパートナーシップを大切にしています。"
					src="/images/olympic.jpg"
					text="1900年に軽歌劇・歌手のヒルダ・クラーク氏と初めて契約を交わし、1905年にはオペラ歌手のリリアン・ノルディカを起用した広告が米国の全国誌に掲載されました。それからおよそ120年。コカ･コーラ社にとって音楽、スポーツ、エンターテインメントは欠かせない要因であり続けています。"
					/>
				</div>

				{/*重なり3 */}
				<div className="mb-32">
					<Kasanari
					className1="translate-y-10"
					className2="-translate-x-10"
					alt="乾杯"
					name="知られざるコカ･コーラ社の世界観"
					src="/images/sekaikan.jpg"
					text="コカ･コーラ社は創業以来、社会貢献を通して成長してきました。歴史、クリスマスとの関係、トクホ製品開発秘話など、知られざるコカ･コーラの“トピック“をお届けします。"
					/>
				</div>

				{/*縦2つ */}
				<div className="flex justify-center mb-16">
					<Tates
					className="max-w-lg"
					src="/images/soudan.jpg"
					alt="相談室"
					name="お客様相談室"
					/>
					<Tates
					className="max-w-lg"
					src="/images/coke-on.jpg"
					alt="コークオン"
					name="COKE ON"
					/>
				</div>

				{/*製品情報 */}
				<div>
					<h1 className="text-3xl font-bold text-center mb-8">製品情報</h1>
					<div className="flex justify-center">
						<Icons
						src="/images/s-coke.jpg"
						alt="コカ・コーラ"
						/>
						<Icons
						src="/images/s-irohasu.jpg"
						alt="いろはす"
						/>
						<Icons
						src="/images/s-ayataka.jpg"
						alt="綾鷹"
						/>
					</div>
					<div className="flex justify-center">
						<Icons
						src="/images/s-aquari.jpg"
						alt="アクエリアス"
						/>
						<Icons
						src="/images/s-georgia.jpg"
						alt="ジョージア"
						/>
						<Icons
						src="/images/s-fanta.jpg"
						alt="ファンタ"
						/>
					</div>
				</div>
			</main>

			<footer className="bg-black">
				<div className="p-48 pt-36 border-b border-white-500">
					<Image
					src="/images/logo-white-large.svg"
					alt="会社ロゴ"
					width={250}
					height={200}
					/>

					<div className="h-[1px] bg-white mt-8"></div>
					<div className=" grid grid-cols-3 text-white font-bold">
						<div>
							<h3 className="text-[9px] mt-6">ABOUT US</h3>
							<p className="mt-6 text-sm">企業情報</p>
							<p className="mt-6 text-sm">プレスセンター</p>
							<p className="mt-6 text-sm">沿革</p>
							<p className="mt-6 text-sm">採用情報</p>
							<p className="mt-6 text-sm">パーソナーシップ</p>
							<p className="mt-6 text-sm">トピックス</p>
						</div>
						
						<div className="-translate-x-40">
							<h3 className="text-[9px] mt-6">NEED HELP?</h3>
							<p className="mt-6 text-sm">よくあるご質問</p>
							<p className="mt-6 text-sm">サイトマップ</p>
							<p className="mt-6 text-sm">お客様相談室</p>
						</div>

						<div className="-translate-x-80">
							<h3 className="text-[10px] mt-6">各種ポリシー</h3>
							<p className="mt-6 text-sm">利用規約</p>
							<p className="mt-6 text-sm">プライバシーポリシー</p>
							<p className="mt-6 text-sm">サイトポリシー</p>
							<p className="mt-6 text-sm">Cookieポリシー</p>
							<p className="mt-6 text-sm">各種ポリシー</p>
						</div>
					</div>
					<div className="h-[1px] bg-white mt-8"></div>




				</div>
			</footer>
		</div>
	)
}