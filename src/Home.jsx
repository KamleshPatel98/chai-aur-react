const slider1 = "slider 1";
const sliders = [
   {'id': 1, 'img': 'https://drabhimanyu.com/assets/web/images/logo10.webp'},
   {'id': 2, 'img': 'https://drabhimanyu.com/assets/web/images/logo10.webp'},
   {'id': 3, 'img': 'https://drabhimanyu.com/assets/web/images/logo10.webp'},
   {'id': 4, 'img': 'https://drabhimanyu.com/assets/web/images/logo10.webp'},
];

const sliders2 = [
   {'id': 1, 'img': '/src/assets/img.webp'},
   {'id': 2, 'img': '/src/assets/img.webp'},
   {'id': 3, 'img': '/src/assets/img.webp'},
   {'id': 4, 'img': '/src/assets/img.webp'},
];

function Home() {
    return (
        <>
            {sliders2.map((slider) => (
                <div key={slider.id}>
                    <h2>Home Slider {slider.id}</h2>
                    <img src={slider.img} alt={`Slider ${slider.id}`} width='100' height='100' />
                </div>
            ))}
        </>
    )
}

export default Home