import React, { Component } from 'react';

import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import BadgesGroup from '../components/base_components/Badges/BadgesMobile/BadgesGroup';
import CarouselMobile from '../components/base_components/Carousel/CarouselMobile/CarouselMobile';
import TitleReadMore from '../components/base_components/TitlePage/TitleMobile/TitlePageSecondary';
import PrimaryFacility from '../components/base_components/Facility/MobileFacility/PrimaryFacility';
import OtherFacility from '../components/base_components/Accordion/Mobile/AccordionComponents';
import Ekstrakulikuler from '../components/base_components/Facility/MobileFacility/PrimaryFacility';
import OtherEkstrakulikuler from '../components/base_components/Accordion/Mobile/AccordionComponents';
import BiayaSekolah from '../components/base_components/Footer/Mobile/BiayaSekolah';
import InformasiSekolah from '../components/base_components/Footer/Mobile/InformasiSekolah';
import KontakSekolah from '../components/base_components/Footer/Mobile/KontakSekolah';
import SingleBadges from '../components/base_components/Badges/BadgesMobile/SingleBadges'
import MapsComponents from '../components/base_components/MapsComponents/Mobile/MapsComopnets';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
import MobileDescription from '../components/base_components/Description/Mobile/MobileDescription';
import PriceListMobile from '../components/base_components/PriceList/Mobile/PriceListMobile';
import CarouselMobileSecondary from '../components/base_components/Carousel/CarouselMobile/CarouselMobileSecondary';

//Import Image
import slideImage1 from '../components/asset/images/CarouselSlider/slider1.png'
import slideImage2 from '../components/asset/images/CarouselSlider/slider2.png'


const store = [
    {image : slideImage1},
    {image : slideImage2},
    {image : slideImage1},
    {image : slideImage2}
];

const text = `SMA Negeri 14 Jakarta yang pada awalnya sekolah binaan khusus, kemudian berubah status menjadi salah
erisque enim ligula 
venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. 
Donec vitae dui eget tellus gravida venenatis. 
Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.                 
`;

const store3 = [
    {iconname:"snowflake-o", name: "Air Conditioner", fontFamily : "FontAwesome"}, 
    {iconname:"desktop", name: "Lab. Komputer", fontFamily : "FontAwesome"},
    {iconname:"wifi", name: "Akses Internet", fontFamily : "AntDesign"}, 
]

const store4 =[
    {name:"Lapangan Olahraga"},
    {name:"Tempat Ibadah"},
    {name:"Kantin"}
];

const store5 = {
    center: {
        lat: -6.2260798,
        lng: 106.8536369
    },
    zoom: 15,
    title:"Alamat Sekolah",
    addr : "jl. sma barat no 4, clilitan, Kramat jati, jakarta timur"
};

const store6 = [
    {iconname:"camera", name: "Fotografi", fontFamily : "FontAwesome"}, 
    {iconname:"soccer-ball-o", name: "Futsal", fontFamily : "FontAwesome"},
    {iconname:"dribbble", name: "BasketBall", fontFamily : "FontAwesome"}, 
]

const store7 =[
    {name:"Orchestra"},
    {name:"Paskibra"},
    {name:"Tari Saman"}
];

const store8 = {
    title       :"Biaya Sekolah",
    firstTitle  :"Uang Pangkal",
    secondTitle :"SPP Bulanan",
    thirdTitle  :"Uang Tahunan",
    firstCost   :"Rp. 15,000,000",
    secondCost  :"Rp. 1,000,000",
    thirdCost   :"Rp. 1,000,000",
}

const store9 = [
    {   title:"Alamat", 
        description : "Jl.Rawa Belong No.2 , Kebon Jeruk, Jakarta Barat"
    },
    {   title:"Kurikulum Sekolah", 
        description : "International"
    },
    {   title:"Telepon", 
        description : "021-26678321"
    },
    {   title:"Web", 
        description : "www.smainternational.ac.id"
    },
    {   title:"Email", 
        description : "smainternational@mail.ac.id"
    },
    {   title:"Web", 
        description : "sdwidurijaya@blogspot.com"
    },
    {   title:"Jam Sekolah", 
        description : "06:30 - 12:00"
    },
    {   title:"Kepala Sekolah", 
        description : "Anita"
    },
    {   title:"Jumlah Siswa", 
        description : "2000 Siswa"
    }
];

const store10 = [
    {   title:"Uang Pangkal", 
        description : "Rp. 3,000,000"
    },
    {   title:"SPP Bulanan", 
        description : "Rp. 550,000"
    },
    {   title:"Uang Kegiatan", 
        description : "Rp. 1,550,000"
    },
]

class Detail extends Component {
    render() {
        return (
            <>
                <div style={{overflow:"hidden"}}>
                    <section>
                        <div style={{marginTop: "18px"}} />
                        <CarouselMobileSecondary store={store} />
                    </section>
                    <section>
                        <div style={{marginTop: "18px"}} />
                        <PriceListMobile store={store10} title="Biaya Pendidikan" />
                    </section>
                    <section>
                        <div style={{marginTop: "18px"}} />
                        <MobileDescription store={store9} />
                    </section>
                    <section>
                        <div style={{marginTop: "18px"}} />
                        <CarouselMobile store={store} />
                    </section>
                    <section>
                        <SingleBadges name="Nasional" />
                    </section>
                    <section>
                        <div style={{marginTop: "-10px"}} />
                        <TitleReadMore title="SMAN 14 JAKARTA" text={text} />
                    </section>
                    <section>
                        <LineComponents marginTop="7px" marginBottom="32px" />
                        <MapsComponents store={store5} />
                    </section>
                    <section>
                        <LineComponents marginTop="7px" marginBottom="32px" />
                        <PrimaryFacility store={store3} title="Fasilitas" />
                        <OtherFacility store={store4} title="Fasilitas lainnya"/>
                    </section>
                    <section>
                        <LineComponents marginTop="7px" marginBottom="32px" />
                        <Ekstrakulikuler store={store6} title="Ekstrakulikuler" />
                        <OtherEkstrakulikuler store={store7} title="Ekstrakulikuler lainnya"/>
                    </section>    
                    <section>
                        <LineComponents marginTop="7px" marginBottom="32px" />
                        <BiayaSekolah store={store8} />
                    </section>
                    <section>
                        <LineComponents marginTop="7px" marginBottom="32px" />
                        <InformasiSekolah time="07:00-15:00" reg="10 April 2020 - 10 Juni 2020" headmaster="Fauzi Bow, SPsi" />
                    </section>
                    <section>
                        <LineComponents marginTop="-14px" marginBottom="32px" />
                        <KontakSekolah 
                            phone="021 - 525 8721"
                            mail="sman14jkt@mail.com"
                            web="sman14jkt.sch.id"
                        />
                    </section>
                </div>
            </>
        );
    }
}

export default Detail;