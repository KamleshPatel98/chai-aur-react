import React, { useState, useEffect } from 'react'

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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://sld.itmingo.com/api/categories')
        .then(res => res.json())
        .then(json => {
            setData(json.data)
            setLoading(false);
        });
    }, []);

    return (
        <>
            {/* {sliders2.map((slider) => (
                <div key={slider.id}>
                    <h2>Home Slider {slider.id}</h2>
                    <img src={slider.img} alt={`Slider ${slider.id}`} width='100' height='100' />
                </div>
            ))} */}

            {/* {data.map((category) => (
                <div key={category.id}>
                    <h2>Home category {category.name}</h2>
                    <img src={category.icon} alt={`category ${category.name}`} width='100' height='100' />
                </div>
            ))} */}
        </>
    )
}

export default Home