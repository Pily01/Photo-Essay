import { InformationCircleIcon, CameraIcon} from '@heroicons/react/20/solid';

import ImageCard from "./ImageCard"
import ImageSlider from "./ImageSlider"

export default function MainContent() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-xl font-semibold leading-7 text-yellow-600">Introducing</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From Guanajuato, <span className='text-yellow-600'>Mexico</span></h1>
        <p className="mt-8 text-xl leading-8 text-justify text-black">
          Norberto Dominguez Aguirre was born on May 14, 1932, in Guanajuato, Mexico, into a humble family of nine. His father, a miner, was often away from home due to his demanding job. Meanwhile, his mother cared for him and his siblings, also working as a laundry worker to supplement the family's income. The income of a miner and a laundry worker was not always enough to feed a family of nine. Nevertheless, my grandfather’s family made the most of their opportunities: all seven children completed high school, and five became college-educated engineers. This essay narrates the story of a man who encountered many hardships, yet emerged as one of the most resilient, kind, and stoic individuals I have ever had the privilege to know.
        </p>
        <div>
            <ImageSlider 
                imageAlt="profile" 
                imageCaption="Faucibus sahGJEHgksjdhfgJHDGFKjgh" 
                imageSrc="https://media.discordapp.net/attachments/818641031250968596/1181432143314964510/2.png?ex=6581096c&is=656e946c&hm=fa3f68658c0a5394aec64c96ac522864e9e2de561c0abf8ae85f380a0d6a99ff&=&format=webp&quality=lossless&width=1430&height=1199"
                alteredImageSrc="https://media.discordapp.net/attachments/818641031250968596/1181432142891323402/1.png?ex=6581096c&is=656e946c&hm=63269effedef606b7d4a24353bbc13a644d9e55868d12e3532f8212ad46e5fcb&=&format=webp&quality=lossless&width=1430&height=1199"
            />
            <figcaption className="mt-4 flex gap-x-2 text-xl leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                Figure 1: Portrait of Norberto Dominguez Aguirre, age 31. Figure 2: Norberto laguing at a family reunion, age 71.
            </figcaption>
        </div>
        
        {/** Childhood and Early Life */}

        <h2 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-yellow-600'>Childhood</span> and Early Life</h2>

        <div className="mt-10 text-xl leading-8 text-justify text-black">
          <ImageCard imageAlt="profile" imageCaption="Figure 3: Taken by Gerardo Martin Fernandez Vallejo. Picture of Guanajuato, Mexico" imageSrc="https://images.unsplash.com/photo-1585975983978-457f5cbc7dab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <p className="mt-8 text-xl leading-8 text-justify text-black">
            Faced with economic difficulties, my grandfather sought various means to assist his family financially. He gathered his middle school friends to form a group to create short stories and drawings, which they submitted to the local newspaper, earning money for each accepted piece. He also participated in local radio contests, which offered cash prizes to the winners. However, his most successful venture was a small-furniture business he established with his friends. Since they could not work while being students, they crafted all the furniture during the summer in a friend's woodshop. Afterward, my grandfather’s mother would sell them in Guanajuato's Central Garden. These ventures and ideas are an early example of how my grandfather faced challenges with grace and creativity.
          </p>
          
          {/** Becoming an Adult */}

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-yellow-600'>Adulthood</span></h2>
          
          <figure className="mt-10 border-l border-yellow-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
              "I decided to study a career that would allow me to build capital to self-finance and study my favorite science, Physics.” 
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">(Dominguez, 2009, p. 27)</strong>
              </div>
            </figcaption>
          </figure>

          <p className="mt-8 text-xl leading-8 text-justify text-black">
          His interest in puzzles and logic as a child developed into a passion for physics and mathematics as a young adult. He pursued three degrees, achieving summa cum laude in two: Petroleum Engineering, Physics, and Civil Engineering. He initially favored Physics, but financial constraints made him choose Petroleum Engineering. A close family member who worked in the oil industry heavily influenced his decision to choose such a major.
          </p>

          <figure className="mt-10 border-l border-yellow-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
              “The apparent wealth that Uncle Miguel displayed heavily influenced my choice of career. His physical appearance, his elegant attire, and his extraordinary and fertile imagination convinced anyone who listened that working in the oil industry meant getting rich overnight."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">(Dominguez, 2009, p. 27)</strong>
              </div>
            </figcaption>
          </figure>

          <p className="mt-8 text-xl leading-8 text-justify text-black">
            Consequently, my grandfather relocated to Mexico City to study Petroleum Engineering alongside his brother and best friend, securing a scholarship from PEMEX, the Mexican state-owned petroleum company. His academic journey, however, faced a setback when he was diagnosed with Malta fever, requiring months of recuperation at home. His brother had to teach him all the material from the classes he missed due to his illness, helping him catch up with missed coursework. Despite these challenges, my grandfather persevered, completing his semester and getting his first college degree.
          </p>
        </div>

        {/* Marriage and Family */}

        <div className="mt-10 text-xl leading-8 text-justify text-black">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-yellow-600'>Marriage</span> and Family</h2>
          
          <ImageCard imageAlt="profile" imageCaption="Norberto and Emilia Garcia-Diego at the altar on their wedding day." imageSrc='https://media.discordapp.net/attachments/873425447772356608/1181057144972386355/Boda_yaya_y_el_abuelo_2.jpg?ex=6588e6ae&is=657671ae&hm=5d38a6994caccf3cefc451a65eb411e9bee734c783d4e53674cc833cbdddfa91&=&format=webp&width=1005&height=1342'/>
        
          <p className="mt-8 text-xl leading-8 text-justify text-black">
          My grandfather fell in love with my grandmother through one of her portraits. As a college student, he used to give personal classes to other students at their homes. In one of those classes, he saw a portrait of my grandmother, Emilia, and asked about her. He learned that she lived in Spain and managed to get her contact information to write her a letter. They wrote to each other for a year, after which he decided to go to Spain and meet her for the first time. He spent Christmas Eve with Emilia and her family, after which he returned to Mexico. Despite the distance, they continued their relationship through letters for another year. The next time they saw each other was on their wedding day, September 19, 1964.
          </p>
          <ImageCard imageAlt="profile" imageCaption="Emilia and Norberto with their grandchildren at a family party." imageSrc="https://media.discordapp.net/attachments/873425447772356608/1181415733356417104/abueloConNietos.jpg?ex=6580fa24&is=656e8524&hm=16000eec603876cffcea82cf7caf9ea8a54068fa7bf214268a8482c1d6d5fb2e&=&format=webp&width=1430&height=1073"/>

          <p className="mt-8 text-xl leading-8 text-justify text-black">
            After the wedding, they returned to Mexico City, where they started a family. They had four children, three sons, and a daughter, each of whom has a family of their own. Eventually, Emilia and Norberto became grandparents of seven grandchildren.
          </p>
        </div>
      
      {/* His Legacy */}

        <div className="mt-10 text-xl leading-8 text-justify text-black">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-yellow-600'>His </span> Legacy</h2>
          
          <figure className="mt-10 border-l border-yellow-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
              "Life is a relay race, in which the advantage held by the runner at the moment of passing the baton is of essence."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">(Dominguez, 2009, p. 27)</strong>
              </div>
            </figcaption>
          </figure>
          
          <ImageCard imageAlt="profile" imageCaption="Emilia and her grandchildren planting a tree at her garden." imageSrc="https://cdn.discordapp.com/attachments/818641031250968596/1181621709086937199/WhatsApp_Image_2023-12-05_at_09.39.03.jpeg?ex=6581b9f8&is=656f44f8&hm=ac2884efedef5dc92d8a7712e1eae975da15e2278ac42358a5d6d72bea35bf5b&"/>
          
          <p className="mt-8 text-xl leading-8 text-justify text-black">
          Those who love us never truly leave us when they pass away. My life, along with those of my cousins, will always be intertwined with Norberto’s and Emilia’s: they were the runners before us, giving us a home, family, education, and other privileges as their baton. Our accomplishments are built upon the crises they endured and the race they covered, together and on their own. I see them in the college I have the privilege to attend, in the opportunities I have been offered, and in the challenges we are forced to face in our quest for a better quality of life. As my grandfather’s story came to an end, me and my cousins continued his legacy, hoping we pass a baton of equal worth: full of love, family, and possibilities.
          </p>
        </div>
      </div>
    </div>
  )
}



{/**

<ImageCard imageAlt="profile" imageCaption="Wedding day at the altar." imageSrc="https://media.discordapp.net/attachments/873425447772356608/1181057144972386355/Boda_yaya_y_el_abuelo_2.jpg?ex=657fac2e&is=656d372e&hm=465824cca5927881e622ed3c191477b6dcff08b9358436cd7668a5b0d6ce3572&=&format=webp&width=1005&height=1339"/>

*/}