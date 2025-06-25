import Image from "next/image";

export default function Page() {
	return (
		<div>
			
			<header className="flex space-x-6 p-5">
				
				{/*ヘッダー*/}
				<Image src='/images/coke-company-logo-1.svg' alt='会社ロゴ' width={150} height={150} />
				<div>製品情報</div>
				<div>サステナビリティ</div>
			</header>

			<section className="bg-black/10 p-5">
				
				{/*次やること：画像ファイルを要素でまとめてサイズ変更できるようにする！！*/}

				{/*画像ファイル*/}
				<div className="relative flex justify-center">
					<Image src='/images/main2.jpg' alt='メインの写真' width={800} height={500} className="w-full max-w-7xl h-full max-h-6xl object-contain rounded-3xl" />
					
					{/*オーバーレイ*/}
					<div className="absolute w-full max-w-7xl h-full max-h-8xl bg-gradient-to-l from-black/10 to-black/60  rounded-3xl"></div>
					
					{/*画像の中のテキスト*/}
					<div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white m-20">
						<h1 className="text-4xl font-bold p-2">コカ・コーラ</h1>
						<div>偶然の出来事も、いつもは見過ごしてしまうあの瞬間も。</div>
						<div>​コークとキミが一緒なら、特別な時間になっていく。</div>
						<button className="bg-white text-black font-bold py-2 px-30 rounded-full hover:bg-gray-300 transition duration-300 m-6">詳しくはこちら</button>
					</div>
				</div>
				
				
				<div className="text-center p-5">
					<h1 className="text-3xl font-bold p-5">Refresh the Wold.Make a Difference.</h1>
					<div className="max-w-full">私たちは、世界中で愛されるブランドや、丹精込めて作り上げている様々な飲料を通じ、心身ともに人々をうるおし、さわやかさを提供してまいります。より明るい未来を築くべく、持続可能なビジネスの実現を通じ、あらゆる人々の生活、地域社会、そして地球にとって前向きな変化をもたらすことを目指します。</div>
				</div>
			</section>
		</div>
	)
}