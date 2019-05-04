import React, { Component } from '../../../node_modules/react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from '../../../node_modules/reactstrap/lib';

const items = [
  {
    src: 'https://lh3.googleusercontent.com/f1G2dGfiZJTojFcYbNLLsS5ekFDrI37XUJfCJcFyGokJX5jR47j69tdR7t4Oo_8W2Y9-uklFYMpw-DntvE7WgFokQ5UgwcAM4sohD_22YCXfPyWwgUYYFhmBk7ST0pu5xy0cupVXLBANnmicm8K548w-JhplCBEgsF4CtK1KAxn7nP8N08bVIjmuN2I1nDxLAC8aerPfUjRq1WdmwZl_Pw0fCXipU7OIVyJYqAh3aZpM7DuUJoNS52hV9ZyMKtnLxdBRFsuaIOFHEwk03CtuiUM1kHx4I8b61ipk1AHMd6ldKHlXcHuF7kTL9wjhzKf2EbHP3q5h7tpbRJsjDV8yPVYuTgB6niV9WqnJiUIZLsRkhTXsDtCIQcL_iWwsKghLGIBm_d7zXBvrEPTEp_yjnwPRFhliBWnjfQnr9T_LGjPqDBKoWKvX6_w45xl_hxjUgOmBu4P9_iY5QSY4h00GrjptuMnlidG-tpizM6lYzkFmDnh7M8kp1nlCamTICSOQlC5u75kGeKFVqPNTh3E5oiyJjDy1OuikugUv1ytXfjdsBl4mFTTc-PXgUitS42ti3R-4bmMIWrZfhgqFErQGwnb0ywMlnA1EWsGPaz3NknN8TM92sixrUe0lOLVCluBgBkVJCm7_i4H5L_8bMsD5KHiS7LIo5Mz6njubLnh-HcIPuClluJ-vqSfxNWy0SrBYCGP-KNx5kWyxj6FDn0Vy3YYH=w1366-h513-no',
    altText: '',
    caption: ''
  },
  {
    src: 'https://lh3.googleusercontent.com/Yr3Ys8ye6ZAXWEK1s6nu_qjCLKQvZX8JRuDz1QuD8wRzE6QDlK2btrvVvsNcSuBgAKj6rvAYRVgd2Wa3p2aOb1uwqTSgykAomd_2bWVRRM1KZ3bmBSO97XbCgvf_vyWU2ERGzha1mWXL1bvYqEqpGnGWeAk6zQnqB0FIROvsDOFLBv7ZGg87sXAmRVoqexmI56DDhgpxPbNkhiL-hdro9Dy1R7PEJddiHdSA6sTduZGebDUXQiRCa7b0L8ipuM_5X4XG6RC8ymw5KreJPVNQZ50ZCIw6nxvFH2KcsBR6jS-q4YzGhFQ1IHSCF7LS6YB16jvopkR3VjzJ58hLTSoVI6m1myYGTidwxKRXQpMebDGjQc6Gliz0jO3qQdhKhpGhmPhLoOW_bSgFMWvPjnlHfRPXLyIXJKOjQrEVW7mvSMt-9XNRCLn3UfR8_RbYu3YZYgr2YkLW5PYHeoO6nbHPlKg6O1IA-ZaxLDTDLJPqks_eGS3a2G6Tump19pqALzaZhLJCz69vacPUuEQZnYq0-IBPHGFyuzWvCGh7Y2nW0lcCT75lKPjhp2u5gRtBa50a1s1Fk1NQigTFFSpYj_mjVvlFI16QjVMwdHaO56SKl0rox6tZjfZMQB0HLEVFcB9_8z0PFYoMDZ9TppOvx6hkgC8Ly-KFhfffA8exrxuSZSQDVzIeBS4z--hXVH35KKX_qEppKV321OFmac_V72M5l_hj=w1366-h513-no',
    altText: '',
    caption: ''
  },
  {
    src: 'https://lh3.googleusercontent.com/etwcL8ZkSEXdFSpHgsVOkrhr3N7dJAdREiq9JmpMQu3PSYiEACiOCfTdlPvYQkXldGkszdoh5qLiay4xFXzcBrnd4b1Ip5p_h-_cipEoiXnKEOjAq6GbnOtV3e9ALBUb80va7FWsix2aPBStZssFF9vgDdvGLBGziBV3bFmH6mp94TbY9h4e_nojsdG9KisQiehWGEtTNtm_0LHEci9VqPrC2IkL-nAwTDsi2yxkKAno5zlyRT_Eq9BQeh1pK0D96g29BRe5xSb0RT18oEUFRXnlJszEnk8_T9EQcDnWV47td3aSo_HXO4WO33V5N-M8--YUmPiTwXgITU4N9oXIHd4nhuqLOvyKlIsVY7r5H3ypv5moNUVaaG6j7oG6cr-p0xAztRIygYapeGOz64h2Svi-8AZPaB6w6YcBsccpapIggA4ziwHo8EODwvx2pLZpvPVN7B59nXGlHgftxsoio2J0scUhp1PpO5vVlwjacmFVAazXRbOqGdG2I6iscIaNR8omVgKD7az2dCU0Efp8Y39pZlBw8EcMm9oj7_FVicEmvXq4yy25US12KW9wzWd-ciXt2il7aMW_GrZOFrLb3iCwC3lJ9kT7Oc5HCdvOCUlFBbK4C0gVC_OAGRepp0ovdUnv2jTzM1jMewoy-aPcZP7UzMDwcWs=w1366-h513-no',
    altText: '',
    caption: ''
  }
];

class Caro extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Caro;