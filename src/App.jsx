
import './App.css'
import PictureSlideshow from './PictureSlideshow'

function App() {

  const pictures = [
    {
      imageUrl: 'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F0110%2Fnfl_g_chancellor4_mb_1296x729.jpg',
      description: 'Bam Bam Kam'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png',
      description: "Bulbasaur"
    },{
      imageUrl: 'https://archives.bulbagarden.net/media/upload/thumb/3/39/0212Scizor.png/250px-0212Scizor.png',
      description: "Scizor"
    }
  ]

  return (
    <>
      <PictureSlideshow pictures={pictures} />
    </>
  )
}

export default App
