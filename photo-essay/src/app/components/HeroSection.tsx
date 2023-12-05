"use client"

export default function HeroSection() {
  return (
    <div className="relative bg-white h-screen">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="mr-12 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Norberto <span className="text-yellow-600">Dominguez</span> Aguirre
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Happiness, in all its nuances, is only perceived by those who have experienced unhappiness, pain, despair, the bitterness of losing a loved one, the frustration of not having reached a goal. Only those who have known the vastness of the plains can feel the beautiful majesty of the mountains.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://media.discordapp.net/attachments/873425447772356608/1181057145249202176/Boda_Yaya_y_el_abuelo_1.jpg?ex=657fac2e&is=656d372e&hm=c0e4431b8a3b3f575ec27b8a9d7e6ddee60e554cefae42c507697d3d72983012&=&format=webp&width=1249&height=935"
            alt="image"
          />
        </div>
      </div>
    </div>
  )
}
