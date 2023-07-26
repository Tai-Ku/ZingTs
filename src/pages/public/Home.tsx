import { Link } from "react-router-dom";
import React from "react";
import SlickSlider from "react-slick";
import { useStore } from "../../untils/useStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Section } from "../../Components";
import { IFriday } from "./InterFaceData";
import { title } from "process";
import NewRealease from "../../Components/NewRealease";

interface SectionProps {
  items: IFriday[];
  title: string;
  sectionId: string;
}

function Home() {
  const {
    rootStore: { homeStore },
  } = useStore();

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f283a",
          height: "30px",
          width: "30px",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f283a",
          height: "30px",
          width: "30px",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  };
  interface SectionProps {
    items: IFriday[];
    title: string;
    sectionId: string;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const friday = toJS(homeStore.getFriday);
  const newEveryDay = toJS(homeStore.getnewEveryDay);
  const top100 = toJS(homeStore.getTop100);
  const album = toJS(homeStore.getAlbum);
  return (
    <>
      <div className="overflow-y-auto h-full">
        <Section
          title={friday?.title}
          sectionId={friday?.sectionId}
          items={friday?.items}
        />
        <Section
          title={newEveryDay?.title}
          sectionId={newEveryDay?.sectionId}
          items={newEveryDay?.items}
        />
        <NewRealease />

        <Section
          title={top100?.title}
          sectionId={top100?.sectionId}
          items={top100?.items}
        />
        <Section
          title={album?.title}
          sectionId={album?.sectionId}
          items={album?.items}
        />

        <div className="h-[100px]"></div>
      </div>
    </>
  );
}

export default observer(Home);
